const Database = require('../../core/Database/database.js');
const User = require("./user.model");


const UsersController ={
    getAll: (req, res) => {
        const user = new User();
        user.getAll().then(results => {
            res.send(results);
        });
    },
    getById: (req, res) => {
        const user = new User();
        user.getById(req.params.id).then(result => {
            if (result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    login: (req, res) => {
        const user = new User();
    
        user.findEmail(req.body.email).then((result) => {
          if (result) {
            if(req.body.password == result.password) {
              result.connection = true;
              res.send(result);
              
            } else res.send(404);
          } else {
            res.sendStatus(404);
          }
        });
      },

    // login: (req, res) => {
    //     const user = new User();

    //     user.getOne(req.params.id).then(result =>{
    //         if(result){
    //             res.send(result);
    //         }else{
    //             res.sendStatus(404);
    //         }
    //     })
    //   },
    
      createUser: (req, res) => {
        //console.log(req.body);

        const new_user ={
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            connection: false,
            role: req.body.role

        };
        Database.collection("Users").insertOne(new_user, function(err, res) {
            if(err) console.log("error");
            else console.log("Post success")
        });
        res.send(new_user);
      },

      
      update: (req, res) => {
        let id = req.params.id;
        if (id != undefined) res.status(200).send(`User  with ${id} was updated`);
        else res.status(400).send(`User  with ${id} was not found`);

    },
    delete: (req,res) =>{
        let id = req.params.id;
        if(id != undefined) res.status(200).send(`User  with ${id} was deleted`);
        else res.status(400).send(`User  with ${id} was not found`);

    },
    patch: (req,res) =>{
        let id = req.params.id;
        res.send(`User Group with ${id} was patched`)

    }
    
}
module.exports = UsersController;
/*
module.exports = UsersController;
const UsersController ={
    getAll: (req,res) =>{
        res.send('will get users');
    },
    create:(req,res) =>{
        res.send({});
    },
    update: (req,res)=>{

    }
}

*/