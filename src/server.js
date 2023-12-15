// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 5173; // Choisissez le port que vous préférez

// Middleware pour analyser le corps des requêtes
app.use(bodyParser.json());

// Endpoint pour gérer l'envoi d'e-mails
app.post('/send-email', (req, res) => {
  const { name, company, email, subject, message } = req.body;

  // Configurer le transporteur (utilisez vos propres informations SMTP)
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'votre@gmail.com', // Remplacez par votre adresse e-mail Gmail
      pass: 'votreMotDePasse', // Remplacez par votre mot de passe Gmail
    },
  });

  // Options du courriel
  const mailOptions = {
    from: {email},
    to: 'narbonne.mp@gmail.com', // Remplacez par l'adresse e-mail du destinataire
    subject: subject,
    text: `Nom: ${name}\nCompagnie: ${company}\nCourriel: ${email}\n\nMessage:\n${message}`,
  };

  // Envoyer l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erreur lors de l\'envoi du courriel', error);
      return res.status(500).send('Erreur lors de l\'envoi du courriel');
    }

    console.log('E-mail envoyé :', info.response);
    res.status(200).send('E-mail envoyé avec succès');
  });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
