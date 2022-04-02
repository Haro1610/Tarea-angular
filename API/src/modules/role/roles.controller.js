const Role = require("./role.model");
const Database = require('../../core/Database/database.js');



const RolesController = {
    getAll: (req, res) => {
        const role = new Role();
        role.getAll().then(results => {
            res.send(results);
        });
    },
    getById: (req, res) => {
        const role = new Role();
        role.getById(req.params.id).then(result => {
            if (result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    createRole: (req, res) => {
        //console.log(req.body);

        const new_role ={
            name: req.body.name,

        };
        Database.collection("Role").insertOne(new_role, function(err, res) {
            if(err) console.log("err");
            else console.log("Post success")
        });
        res.send("Post success");
      },
    update: (req, res) => {
        let id = req.params.id;
        if(id != undefined) res.status(200).send(`Role with ${id} was updated`);
        else res.status(400).send(`Role with ${id} was not found`);

    },
    delete: (req,res) =>{
        let id = req.params.id;
        if(id != undefined) res.status(200).send(`Role with ${id} was deleted`);
        else res.status(400).send(`Role with ${id} was not found`);

    },
    patch: (req,res) =>{
        let id = req.params.id;
        res.send(`Role with ${id} was patched`)

    }
}

module.exports = RolesController;