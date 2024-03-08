import express from 'express';
import controller from '../Controllers/productController.js';
import isRoleEquiqToAdmin from '../Middleware/roleStatus.js';

const router = express.Router();


router.route('/')
    .get(controller.allProducts)
    .post(isRoleEquiqToAdmin,controller.addProductToDB)


router.route('/:id')
    .get(controller.prodByID)
    .delete(isRoleEquiqToAdmin,controller.delProductByID)
    .patch(isRoleEquiqToAdmin,controller.editProductByID)


export default router 