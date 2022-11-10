import express from "express";
import { register, login } from '../controllers/authController.js'
import { createUserValidator } from '../middlewares/createUserValidator.js'

const router = express.Router()

router.route('/register').post( createUserValidator, register)
router.route('/login').post(login)

export default router