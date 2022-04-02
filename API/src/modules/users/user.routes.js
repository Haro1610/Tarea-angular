const router = require('express').Router();
const controller = require('./users.controllers');
//const router = express.Router();

/**
 * @swagger
 *   /api/users:
 *     get:
 *       tags:
 *       - Users
 *       description: Get all users
 *       responses:
 *         200:
 *           description: Array with a list of users
 */
router.get('/', controller.getAll);

/**
 * @swagger
 *   /api/users/{id}:
 *     get:
 *       tags:
 *         - Users
 *       description: Get a user by id
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The id of the user
 *       responses:
 *         200:
 *           description: User
 */
router.get('/:id', controller.getById);

/**
 * @swagger
 *   /api/users{email, password}:
 *     put:
 *       tags:
 *         - Users
 *       description: Login
 *     parameters:
 *       - in: body
 *         name: email
 *         description: email of the user
 *         type: string
 *       - in: body
 *         name: password
 *         description: user password
 *         type: string
 */
 router.put("/login", controller.login);


/**
 * @swagger
 *   /api/users{email, password, name}:
 *     post:
 *       tags:
 *         - Users
 *       description: Create a new user
 *     parameters:
 *       - in: body
 *         name: name
 *         description: user name
 *         type: string
 *       - in: body
 *         name: email
 *         description: email of the user
 *         type: string
 *       - in: body
 *         name: password
 *         description: user password
 *         type: string
 *       - in: body
 *         name: role
 *         description: user role
 *         type: string
 *          
 */
 router.post("/singin", controller.createUser);

router.delete('/:id',controller.delete);
router.patch('/:id',controller.patch);


module.exports = router;




/*const UsersController = require('./users.controllers')

module.exports = function(app){
    app.get('/users',UsersController.getAll);
}

*/