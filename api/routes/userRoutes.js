import express from 'express';
import * as userController from '../controllers/userController.js';
import { createUserValidator } from '../middlewares/createUserValidator.js';

const router = express.Router();

router
  .route('/')
  .get(userController.read)
  .post(createUserValidator, userController.create);
router
  .route('/:id')
  .get(userController.readById)
  .put(userController.update)
  .delete(userController.remove);

export default router;