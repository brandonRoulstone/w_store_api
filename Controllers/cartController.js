import { getCart, addToCart, insert, removeFromCart, getProductByID } from "../Model/db.js";

export default {
    allCartItems : async (req, res) => {
        res.send(await getCart())
    },
    addToCartTable : async (req, res) => {
        let { quantity } = req.body
        const [product] = await getProductByID(+req.params.id);
        const [cart] = await getCart();
        let { user_id } = req.query
        await insert(+req.params.id, user_id, quantity)
        res.send({
            product : product,
            cart : cart
        });
    },
    deleteFromCart : async (req, res) => {
        await removeFromCart(+req.params.id)
        res.send(await getCart())
    }
} 