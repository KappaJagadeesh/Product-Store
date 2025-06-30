import express from 'express';

import { createProduct, deleteProduct, getProduct, updateProduct } from '../controllers/product.controllers.js';


export const router = express.Router();

// to get products
router.get('/', getProduct );


// to create a product 
router.post('/', createProduct);


// to edit product

router.put('/:id', updateProduct);

// to delete product

router.delete('/:id', deleteProduct);

//export default router;