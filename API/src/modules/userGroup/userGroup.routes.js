const router = require('express').Router();
const controller = require('./userGroups.controller');

/**
 * @swagger
 *   /api/userGroups:
 *     get:
 *       tags:
 *       - userGroups
 *       description: Get all user groups
 *       responses:
 *         200:
 *           description: Array with a list of user groups
 */
 router.get('/', controller.getAll);

 /**
  * @swagger
  *   /api/userGroups/{id}:
  *     get:
  *       tags:
  *         - userGroups
  *       description: Get a user groups by id
  *       parameters:
  *         - in: path
  *           name: id
  *           required: true
  *           description: The id of the user groups
  *       responses:
  *         200:
  *           description: userGroups
  */
 
router.get('/:id', controller.getById);

/**
 * @swagger
 *   /api/userGroups{name,roles,users,messages}:
 *     post:
 *       tags:
 *         - userGroups
 *       description: Create a new user group
 *     parameters:
 *       - in: body
 *         name: name
 *         description: user name
 *         type: string
 *       - in: body
 *         name: roles
 *         description: Roles of the user
 *         type: array
 *       - in: body
 *         name: users
 *         description: user users
 *         type: array
 *       - in: body
 *         name: messages
 *         description: user messages
 *         type: array
 *          
 */
router.post('/',controller.createUserGroup);

router.put('/:id',controller.update);
router.delete('/:id',controller.delete);
router.patch('/:id',controller.patch);

module.exports = router;

