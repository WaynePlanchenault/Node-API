const express = require('express');
const app = express();
//initialisation du micro frameworks express
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.set('useFindAndModify' , false)


/* MIDDLEWARE */ 
app.use(bodyParser.json());
app.use('/posts', postsRoutes)
// quand le chemin est / tu nous envoies à postsRoutes
//un middleware est une fonction qui va écouter les request et les responses 




app.listen(5500, () => console.log('Server started: 5500'))
//permet de choisir un port pour le serveur 

