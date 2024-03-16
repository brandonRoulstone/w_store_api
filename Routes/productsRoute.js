import express from 'express';
import controller from '../Controllers/productController.js';

const router = express.Router();


router.route('/')
    .get(controller.allProducts)
    .post(controller.addProductToDB)


router.route('/:id')
    .get(controller.prodByID)
    .delete(controller.delProductByID)
    .patch(controller.editProductByID)


export default router 