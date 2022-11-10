import express from 'express';
import * as propertyController from '../controllers/propertyController.js';
import { createPropertyValidator } from '../middlewares/createPropertyValidator.js'


const router = express.Router();

router
  .route('/')
  //.get(userController.read)
  .post(createPropertyValidator, propertyController.create);
/*router
  .route('/:id')
  .get(userController.readById)
  .put(userController.update)
  .delete(userController.remove);*/

export default router;