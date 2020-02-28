const express = require('express');
const router = express.Router();
const controller = require('../controller/clientController')
const middleware = require('../middleware/jwtMiddleware')

/**
 * @swagger
 * /client:
 *  get:
 *    tags:
 *    - "Clients"
 *    summary: "Find all client"
 *    description: Use to request all client
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/',middleware.verifyJWT, controller.findAll);

/**
 * @swagger
 *  definitions:
 *  ClientCreate:
 *       type: "object"
 *       properties:
 *          cpf:
 *              type: "string"
 *          datanasc:
 *              type: "string"
 *          name:
 *              type: "string"
 *
 * /client:
 *   post:
 *     tags:
 *     - "Clients"
 *     summary: "Create client"
 *     description: "This can only be done by the logged in client."
 *     operationId: "createClient"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "Created client object"
 *       required: true
 *       schema:
 *         $ref: "#/definitions/ClientCreate"
 *     responses:
 *       default:
 *         description: "successful operation"
 */
router.post('/',middleware.verifyJWT, controller.createClient);

/**
 * @swagger
 *
 * /client/{id}:
 *   get:
 *     tags:
 *     - "Clients"
 *     summary: "Get client by id"
 *     description: ""
 *     operationId: "getClientById"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - name: "id"
 *       in: "path"
 *       description: "The name that needs to be fetched. Use client for testing. "
 *       required: true
 *       type: "integer"
 *     responses:
 *       200:
 *         description: "successful operation"
 *       400:
 *         description: "Invalid id supplied"
 *       404:
 *         description: "User not found"
 */
router.get('/:id',middleware.verifyJWT, controller.findbyid);
router.put('/:id',middleware.verifyJWT, controller.updata);
router.delete('/:id',middleware.verifyJWT, controller.delete);
router.get('/findName/:name',middleware.verifyJWT, controller.findbyname);
router.delete('/all',middleware.verifyJWT, controller.deleteAll);

module.exports = router;