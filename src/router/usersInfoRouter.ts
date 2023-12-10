import express from "express";

import { addUser, login, updateUser, getInfoByUserController, archiverDossier, searchInfo } from "../controllers/usersController"



const usersInfoRouter = express.Router();


/**
 * @swagger
 * tags:
 *   name: dossier
 *   description: The books managing API
 * definitions:
 *   AnyValue:
 *   description: 'Can be anything: string, number, array, object, etc. (except `null`)'
 */
/**
 * @swagger
 * /addUser:
 *   post:
 *     summary: Add dossier
 *     tags: [dossier]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               role:
 *                 type: string
 *               nom:
 *                 type: string
 *               prenom:
 *                 type: string
 *               email:
 *                 type: string
 *               numtel:
 *                 type: number
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       500:
 *         description: error
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *
 *
 */
usersInfoRouter.route("/addUser").post(addUser);




/**
 * @swagger
 * /getListByRole/admin:
 *   get:
 *     summary: Get users with the role 'admin'
 *     tags: [dossier]
 *     parameters:
 *       - in: path
 *         name: role
 *         required: true
 *         schema:
 *           type: string
 *         description: The role of user (admin)
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       404:
 *         description: Not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       500:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object

 * @swagger
 * /getListByRole/enseignant:
 *   get:
 *     summary: Get users with the role 'enseignant'
 *     tags: [dossier]
 *     parameters:
 *       - in: path
 *         name: role
 *         required: true
 *         schema:
 *           type: string
 *         description: The role of user (enseignant)
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       404:
 *         description: Not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       500:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object

 * @swagger
 * /getListByRole/etudiant:
 *   get:
 *     summary: Get users with the role 'etudiant'
 *     tags: [dossier]
 *     parameters:
 *       - in: path
 *         name: role
 *         required: true
 *         schema:
 *           type: string
 *         description: The role of user (etudiant)
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       404:
 *         description: Not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       500:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
usersInfoRouter.route("/getListByRole/:role").get(getInfoByUserController);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: login
 *     tags: [Login]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       404:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       500:
 *         description: error
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *
 */
usersInfoRouter.route("/login").post(login);


/**
 * @swagger
 * paths:
 *  /updateDossier/{id}:
 *   put:
 *     summary: Update dossier
 *     tags: [dossier]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the user to update
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               role:
 *                 type: string
 *                 description: The new role for the user
 *               nom:
 *                 type: string
 *                 description: The new lastname for the user
 *               prenom:
 *                 type: string
 *                 description: The new firstname for the user
 *               numtel:
 *                 type: number
 *                 description: The new number for the user
 *               email:
 *                 type: string
 *                 description: The new email for the user
 *     responses:
 *       200:
 *         description: dossier updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: dossier modified with success!
 *       500:
 *         description: Error while updating dossier
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Error while modifying dossier
 *
 */
usersInfoRouter.route("/updateDossier/:id").put(updateUser);


/**
 * @swagger
 * /archiverDossier/{id}:
 *   delete:
 *     summary: archiver Dossier
 *     tags: [dossier]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         description: id .
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       404:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       500:
 *         description: error
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *
 */
usersInfoRouter.route("/archiverDossier/:id").delete(archiverDossier);




/**
 * @swagger
 * /search/{key}:
 *  get:
 *     summary: search info
 *     tags: [dossier]
 *     parameters:
 *       - in: path
 *         name: key
 *         required: true
 *         schema:
 *           oneOf:
 *              - type: string
 *              - type: integer
 *              - type: number
 *         description: The key word or number to search for
 *     responses:
 *       404:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       500:
 *         description: error
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *
 */
usersInfoRouter.route("/search/:key").get(searchInfo);

export default usersInfoRouter;
