import express from 'express';
import controller from '../Controllers/cartController.js'


const router = express.Router()

router.route('/')
    .get(controller.allCartItems)
    .get(controller.itemsInCart)


router.route('/:id')
    .post(controller.addToCartTable)
    .delete(controller.deleteFromCart)


export default router;