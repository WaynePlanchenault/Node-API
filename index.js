const express = require('express');
const app = express();
//initialisation du micro frameworks express
require('./models/dbConfig');

app.listen(5500, () => console.log('Server started: 5500'))
//permet de choisir un port pour le serveur 