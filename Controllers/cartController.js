import { getCart, addToCart, insert, removeFromCart, getProductByID, addedInCart } from "../Model/db.js";

export default {
    allCartItems : async (req, res) => {
        res.send(await getCart())
    },
    itemsInCart: async (req, res) => {
        let data = await addedInCart(+req.params.id)
        res.send({
            products : data
        })
    },
    addToCartTable : async (req, res) => {
        let { quantity } = req.body
        const [product] = await getProductByID(+req.params.id);
        let { user_id } = req.query
        await insert(+req.params.id, user_id, quantity)
        res.send(await addedInCart(+req.params.id));
    },
    deleteFromCart : async (req, res) => {
        await removeFromCart(+req.params.id)
        res.send(await getCart())
    } 
} 