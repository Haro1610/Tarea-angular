const { ObjectId } = require('mongodb');
const Model = require('../../core/model');
class User extends Model {
    constructor() {
        super('Users');
    }
    login(name,password){
        return this.collection.findOne({
            user_name: ObjectId(name),
            password: ObjectId(password)
        });
    }
}
module.exports = User;