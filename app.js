const express = require('express');
const app = express();
const port = 3000;

// Route principale
app.get('/', (req, res) => {
    res.send('Hello World! Your Node.js app is running successfully on Windows.');
});

// Démarrage du serveur
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
