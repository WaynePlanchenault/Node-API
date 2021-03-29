const mongoose = require("mongoose");

const PostsModel = mongoose.model(
    "Node-API", //db
    {
        author: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now 
            // La date ne sera pas indiquée mais par défault elle prendra l'heure et la date de création
        }

    },
    "posts" //table
);

//Modèle de BDD nomée Node-API , contenant la table posts composée des éléments author et message (requis) + la date de création 

module.exports = { PostsModel};