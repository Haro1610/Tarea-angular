const router = require('express').Router();
const controller = require('./channels.controllers');
//const router = express.Router();

/**
 * @swagger
 *   /api/Channel:
 *     get:
 *       tags:
 *       - Channel
 *       description: Get all channels
 *       responses:
 *         200:
 *           description: Array with a list of channels
 */
 router.get('/', controller.getAll);

 /**
  * @swagger
  *   /api/Channel/{id}:
  *     get:
  *       tags:
  *         - Channel
  *       description: Get a channel by id
  *       parameters:
  *         - in: path
  *           name: id
  *           required: true
  *           description: The id of the channel
  *       responses:
  *         200:
  *           description: Channel
  */
 
router.get('/:id', controller.getById);

/**
 * @swagger
 *   /api/Channel{sender,text,date}:
 *     post:
 *       tags:
 *         - Channel
 *       description: Create a new Channel
 *     parameters:
 *       - in: body
 *         name: name
 *         description: channel name
 *         type: string
 *       - in: body
 *         name: groups
 *         description: channel groups
 *         type: array
 *       - in: body
 *         name: messages
 *         description:  channel messages
 *         type: array
 *       - in: body
 *         name: roles
 *         description:  channel roles
 *         type: array
 *       - in: body
 *         name: users
 *         description:  channel users
 *         type: array
 *          
 */
router.post('/',controller.createChannel);

 /**
  * @swagger
  *   /api/Channel/{id=link}:
  *     get:
  *       tags:
  *         - Channel
  *       description: Get link to channel by id
  *       parameters:
  *         - in: path
  *           name: id
  *           required: true
  *           description: The link of the channel
  *       responses:
  *         200:
  *           description: Channel
  */
router.get('/:',controller.getLink);


router.delete('/:id',controller.delete);
router.patch('/:id',controller.patch);


module.exports = router;

/*const ChannelsController = require('./channels.controllers')

module.exports = function(app){
    app.get('/channels',ChannelsController.getAll);
}
*/