const router = require('express').Router();
const controller = require('./roles.controller');

/**
 * @swagger
 *   /api/Roles:
 *     get:
 *       tags:
 *       - Roles
 *       description: Get all roles
 *       responses:
 *         200:
 *           description: Array with a list of roles
 */
 router.get('/', controller.getAll);

 /**
  * @swagger
  *   /api/Roles/{id}:
  *     get:
  *       tags:
  *         - Roles
  *       description: Get a roles by id
  *       parameters:
  *         - in: path
  *           name: id
  *           required: true
  *           description: The id of the roles
  *       responses:
  *         200:
  *           description: Roles
  */
 
router.get('/:id', controller.getById);

/**
 * @swagger
 *   /api/Roles{role}:
 *     post:
 *       tags:
 *         - Roles
 *       description: Create a new role
 *     parameters:
 *       - in: body
 *         name: role
 *         description: user role
 *         type: string
 *          
 */
router.post('/',controller.createRole);
router.put('/:id',controller.update);
router.delete('/:id',controller.delete);
router.patch('/:id',controller.patch);

module.exports = router;

