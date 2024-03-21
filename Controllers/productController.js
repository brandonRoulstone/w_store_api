import { getProducts, getProductByID, editProduct, deleteProduct, addProduct, addToCart } from "../Model/db.js";

export default {
    allProducts : async (req, res) => {
        try {
            res.send( await getProducts(req.body.product_name))
        } catch (error) {
            res.status(404).json({
                msg: "Route does not exist or server is down!"
            })
        }
    },
    prodByID : async (req, res) => {
        try {
            res.send(await getProductByID(+req.params.id))
        } catch(error){
            res.status(404).json({
                msg: "Cannot find the product you're looking for"
            })
        }
    },
    addProductToDB : async (req, res) => {
        try {
            const {product_name, product_desc, product_price, product_img, product_category} = req.body;
            await addProduct(product_name, product_desc, product_price, product_img, product_category);
            res.send(await getProducts());
        } catch (error) {
            res.status(404).json({
                msg: "Unable to add a new product check if all inputs a filled out"
            })
        }
    },
    editProductByID : async (req, res) => {
        try {

            let {product_name, product_desc, product_price, product_img, product_category} = req.body;

            const [product] = await getProductByID(+req.params.id);
    
            product_name ? product_name : {product_name} = product
    
            product_desc ? product_desc : {product_desc} = product 
    
            product_price ? product_price : {product_price} = product
    
            product_img ? product_img : {product_img} = product
    
            product_category ? product_category : {product_category} = product
    
            await editProduct(product_name, product_desc, product_price, product_img, product_category, +req.params.id)
    
            res.send(await getProducts())

        } catch (error) {
            res.status(404).json({
                msg: "Unable to upadate a product that does not exist"
            })
        }
    },
    delProductByID : async (req, res) => {
        try {
            await deleteProduct(+req.params.id)
            res.send(await getProducts())
        } catch (error) {
            res.status(404).json({
                msg: "Cannot delete item it probably doesn't exist"
            })
        }
    }
}