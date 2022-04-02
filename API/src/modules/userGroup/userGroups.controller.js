const userGroup = require("./userGroup.model");
const Database = require('../../core/Database/database.js');
//const User = require('../user.model');


const UsersGroupsController = {
    getAll: (req, res) => {
        const group = new userGroup();
        group.getAll().then(results => {
            res.send(results);
        });
    },
    getById: (req, res) => {
        const group = new userGroup();
        group.getById(req.params.id).then(result => {
            if (result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    createUserGroup: (req, res) => {
        //console.log(req.body);

        const new_user_group ={
            name: req.body.name,
            roles: req.body.roles,
            users: req.body.users,
            messages: req.body.messages,

        };
        Database.collection("userGroup").insertOne(new_user_group, function(err, res) {
            if(err) console.log("err");
            else console.log("Post success")
        });
        res.send("Post success");
      },

    update: (req, res) => {
        let id = req.params.id;
        if(id != undefined) res.status(200).send(`User Group with ${id} was updated`);
        else res.status(400).send(`User Group with ${id} was not found`);

    },
    delete: (req,res) =>{
        let id = req.params.id;
        if(id != undefined) res.status(200).send(`User Group with ${id} was deleted`);
        else res.status(400).send(`User Group with ${id} was not found`);

    },
    patch: (req,res) =>{
        let id = req.params.id;
        res.send(`User Group with ${id} was patched`)

    }
}

module.exports = UsersGroupsController;