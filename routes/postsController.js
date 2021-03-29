const express = require('express');
const router = express.Router();

const { PostsModel } = require('../models/postsModel');

router.get('/' , (req, res) => {
    //PostsModel.find() va chercher dans la bdd du fichier postsModel.js
    PostsModel.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log("Error to get data : " + err);
    })
});

router.post('/' , (req, res) => {
    const newRecord = new PostsModel({
        author: req.body.author,
        message: req.body.message
    });

    newRecord.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error creating new data : ' + err)
    })
})

module.exports = router;