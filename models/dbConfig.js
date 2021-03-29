const mongoose = require('mongoose');


// permet de se connecter à la DB
mongoose.connect(
    "mongodb://localhost:27017/Node-API",
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if (!err) console.log('Mongodb connected');
        else console.log("Connection error : " + err);
    }
)