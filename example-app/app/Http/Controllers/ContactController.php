<?php
namespace App\Http\Controllers;
use App\Models\SiteSetting; // Import your model
use Illuminate\Support\Facades\Mail; // Import Mail
use App\Mail\ContactFormMail; // Import the Mail we created
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log; // Import Log for debugging

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

    try {
        // 2. FETCH YOUR EMAIL FROM DATABASE
        // We look for the setting with key 'general'
        $setting = SiteSetting::where('key', 'general')->first();

        // We extract the email from the content. 
        // If it fails, we use a fallback email just in case.
        $adminEmail = 'agence.pix3i@pix3i.com'; // Default fallback
        
        if ($setting) {
            // Since content is already cast to array in the model, we don't need to decode it
            $content = $setting->content;
            if (isset($content['email']) && !empty($content['email'])) {
                $adminEmail = $content['email'];
            }
        }

        // Log for debugging
        Log::info('Sending contact email to: ' . $adminEmail);
        Log::info('Contact form data: ' . json_encode($validated));

        // 3. Send the email
        // We send TO the admin (you), containing the data from the user
        Mail::to($adminEmail)->send(new ContactFormMail($validated));

        return response()->json(['message' => 'Email envoyé avec succès!']);
    } catch (\Exception $e) {
        // Log the error for debugging
        Log::error('Contact form error: ' . $e->getMessage());
        Log::error('Contact form error trace: ' . $e->getTraceAsString());
        
        // Return a more informative error response
        return response()->json(['message' => 'Une erreur est survenue lors de l\'envoi de l\'email. Veuillez réessayer plus tard.'], 500);
    }
}
}