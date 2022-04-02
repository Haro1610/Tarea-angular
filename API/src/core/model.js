const Database = require('./Database/database');
const { ObjectId } = require('mongodb');


class Model {

    collection;

    constructor(collectionName) {
        // Set collection
        this.collection = Database.collection(collectionName);
    }

    getAll() {
        return new Promise((accept, reject) => {
            this.collection.find().toArray((err, results) => {
             if (err) {
                 reject(err);
             } else {
                accept(results);
             }
            });
        });
    }

    getById(id) {
        return this.collection.findOne({
            _id: ObjectId(id)
        });
    }

    


    
}

module.exports = Model;