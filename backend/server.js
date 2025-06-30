import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import {router} from './routes/product.route.js'

dotenv.config();
const PORT = process.env.PORT || 5000
const app = express();

app.use(express.json())

app.get('/',(req,res) => {
    return res.send('Welcomt to Home page !!!')
})

app.use('/api/products',router);

connectDB();    
app.listen(PORT, ()=> {
    console.log(`server successfully running on ${PORT}`);
})                                                   