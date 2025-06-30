import mongoose from "mongoose";
import Product from '../models/product.model.js';

export const getProduct = async(req,res) => {
    try {
        const products = await Product.find();
        return res.status(200).json({psuccess:true,data: products});
    } catch (error) {
        console.error('Error:',error.message);
        return res.status(404).json({success:false,message:"product not found"})
    }
};

export const createProduct = async(req,res) => {
        const product = req.body; 
        if (!product.name || !product.price || !product.image){
            return res.status(400).json({success:false,message:"please provide all the fields"});
        }
        const newProduct = new Product(product);
        try {
            await newProduct.save();
            return res.status(201).json({success:true,data:newProduct})
        } catch (err) {
            console.error(`error in message : ${err.message}`);
            return res.status(500).json({success:false,message:"Server Error"});

            
        }
}

export const updateProduct = async(req,res) => {
    const {id} = req.params;
    const product = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({success:false,message:"invalid product id"})
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id,product, {new:true, runValidators: true});
        return res.status(200).json({success:true,data:updatedProduct});
    } catch (error) {
        console.error('Error:',error.message);
        return res.status(500).json({success:false,message:"server error"})
    }
}


export const deleteProduct = async(req,res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({success:false,message:"invalid product id"})
    }
    try {
        await Product.findByIdAndDelete(id);
        return res.status(200).json({success:true,message:"successfully deleted"});
    } catch (error) {
        console.error('Error:',error.message);
        return res.status(404).json({success:false,message:"product not found"})
    }
}