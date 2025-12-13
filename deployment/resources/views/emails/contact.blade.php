<!DOCTYPE html>
<html>
<head>
    <title>Nouveau Message</title>
</head>
<body style="font-family: Arial, sans-serif;">
    <h2>Vous avez reçu un nouveau message de votre site web !</h2>
    
    <p><strong>Nom:</strong> {{ $data['name'] }}</p>
    <p><strong>Email du client:</strong> {{ $data['email'] }}</p>
    <p><strong>Sujet:</strong> {{ $data['subject'] }}</p>
    
    <hr>
    
    <p><strong>Message:</strong></p>
    <p>{{ $data['message'] }}</p>
</body>
</html>