const Message = require("./message.model");
const Database = require('../../core/Database/database.js');


const MessagesController = {
    getAll: (req, res) => {
        const message = new Message();
        message.getAll().then(results => {
            res.send(results);
        });
    },
    getById: (req, res) => {
        const message = new Message();
        message.getById(req.params.id).then(result => {
            if (result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    createMessage: (req, res) => {
        //console.log(req.body);
        const new_message ={
            sender: req.body.sender,
            text: req.body.text,
            date: req.body.date
        };
        Database.collection("Message").insertOne(new_message, function(err, res) {
            if(err) console.log("err");
            else console.log("Post success")
        });
        res.send("Post success");
      },
    update: (req, res) => {
        let id = req.params.id;
        if(id != undefined) res.status(200).send(`Message with ${id} was updated`);
        else res.status(400).send(`Message with ${id} was not found`);

    },
    delete: (req,res) =>{
        let id = req.params.id;
        if(id != undefined) res.status(200).send(`Message with ${id} was deleted`);
        else res.status(400).send(`Message with ${id} was not found`);

    },
    patch: (req,res) =>{
        let id = req.params.id;
        res.send(`Message with ${id} was patched`)

    }
}

module.exports = MessagesController;