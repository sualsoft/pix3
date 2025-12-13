<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactFormMail extends Mailable
{
    use Queueable, SerializesModels;

    public $data; // This variable will hold the user's name, email, and message

    // We accept the data when we create the email
    public function __construct($data)
    {
        $this->data = $data;
    }

    public function build()
    {
        // We set the subject and say which "View" (design) to use
        return $this->subject('Nouveau message de: ' . $this->data['name'])
                    ->view('emails.contact'); 
    }
}