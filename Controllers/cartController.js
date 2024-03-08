import { getCart, addToCart, insert, removeFromCart } from "../Model/db.js";

export default {
    allCartItems : async (req, res) => {
        res.send(await getCart())
    },
    addToCartTable : async (req, res) => {
        console.log(req.query);
        console.log(+req.params.id);
        let { quantity } = req.body
        let { user_id } = req.query
        await insert(+req.params.id, user_id, quantity)
        res.send(await getCart())
    },
    deleteFromCart : async (req, res) => {
        await removeFromCart(+req.params.id)
        res.send(await getCart())
    }
} 