const router = require('express').Router();
const controller = require('./messages.controller');

/**
 * @swagger
 *   /api/Messages:
 *     get:
 *       tags:
 *       - Messages
 *       description: Get all messagess
 *       responses:
 *         200:
 *           description: Array with a list of messages
 */
 router.get('/', controller.getAll);

 /**
  * @swagger
  *   /api/Messages/{id}:
  *     get:
  *       tags:
  *         - Messages
  *       description: Get a message by id
  *       parameters:
  *         - in: path
  *           name: id
  *           required: true
  *           description: The id of the message
  *       responses:
  *         200:
  *           description: Messages
  */
 
router.get('/:id', controller.getById);

/**
 * @swagger
 *   /api/Messages{sender,text,date}:
 *     post:
 *       tags:
 *         - Messages
 *       description: Create a new Messages
 *     parameters:
 *       - in: body
 *         name: sender
 *         description: user Message sender
 *         type: string
 *       - in: body
 *         name: text
 *         description: text Message
 *         type: string
 *       - in: body
 *         name: date
 *         description:  Messages date
 *         type: string
 *          
 */
router.post('/',controller.createMessage);
router.put('/:id',controller.update);
router.delete('/:id',controller.delete);
router.patch('/:id',controller.patch);

module.exports = router;

