import ProductModel from "../models/products.js"
class ProductController {
 
    static createProduct= async (req, res) => {
      const {id, category,image,price,title,description,discount, discountedPrice,date,rating} = req.body;
    
      try {
        const newUser = ProductModel({
        id,
        category,
        image: image.myFile, 
        price,
        title,
        description,
        discount,
        discountedPrice,
        date,
        rating

        });
    
        const savedUser = await newUser.save();
    
        res.status(201).json(savedUser);
      } catch (error) {
        console.error("Error creating user:", error);
        res.status(400).json({ message: "Failed to create user" });
      }
    };

    static getAllProducts = async (req, res) => {
      try {
        const allProduct = await ProductModel.find({});
        res.status(200).json(allProduct);
      } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ message: "Failed to fetch orders" });
      }
    };


  
};





export default ProductController;