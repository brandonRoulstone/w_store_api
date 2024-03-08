import { getProducts, getProductByID, editProduct, deleteProduct, addProduct, addToCart } from "../Model/db.js";

export default {
    allProducts : async (req, res) => {
        res.send( await getProducts(req.body.product_name))
    },
    prodByID : async (req, res) => {
        res.send(await getProductByID(+req.params.id))
    },
    addProductToDB : async (req, res) => {
        const {product_name, product_desc, product_price, prooduct_img, product_category} = req.body
        await addProduct(product_name, product_desc, product_price, prooduct_img, product_category)
        res.send(await getProducts())
    },
    editProductByID : async (req, res) => {
        let {product_name, product_desc, product_price, product_img, product_category} = req.body;

        const [product] = await getProductByID(+req.params.id);

        product_name ? product_name : {product_name} = product

        product_desc ? product_desc : {product_desc} = product

        product_price ? product_price : {product_price} = product

        product_img ? product_img : {product_img} = product

        product_category ? product_category : {product_category} = product

        await editProduct(product_name, product_desc, product_price, product_img, product_category, +req.params.id)

        res.send(await getProducts())
    },
    delProductByID : async (req, res) => {
        await deleteProduct(+req.params.id)
        res.send(await getProducts())
    }
}