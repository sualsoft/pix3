<?php
namespace App\Http\Controllers;
use App\Models\SiteSetting; // Import your model
use Illuminate\Support\Facades\Mail; // Import Mail
use App\Mail\ContactFormMail; // Import the Mail we created
use Illuminate\Http\Request;

class ContactController extends Controller
{
  public function sendEmail(Request $request)
{
    // 1. Validate (Check if data is correct)
    $validated = $request->validate([
        'name' => 'required',
        'email' => 'required|email',
        'subject' => 'required',
        'message' => 'required'
    ]);

    // 2. FETCH YOUR EMAIL FROM DATABASE
    // We look for the setting with key 'general'
    $setting = SiteSetting::where('key', 'general')->first();

    // We extract the email from the content. 
    // If it fails, we use a fallback email just in case.
    $adminEmail = $setting->content['email'] ?? 'agence.pix3i@gmail.com';

    // 3. Send the email
    // We send TO the admin (you), containing the data from the user
    Mail::to($adminEmail)->send(new ContactFormMail($validated));

    return response()->json(['message' => 'Email envoyé avec succès!']);
}
}
