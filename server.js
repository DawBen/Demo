// import express from 'express';
// import router from './router/product.js';
// import connectdb from './database/connect.js';
// import Authrouter from './router/auth.js';
// // import mongoose from 'mongoose';
// // import { LocalStorage } from "node-localstorage";
// // global.localStorage = new LocalStorage('./scratch');
// const app = express();
// const port = 3000;
// app.use(express.json());
// app.use('/api',router);
// app.use('/api',Authrouter)
// app.listen(port,async ()=>{
//     await connectdb();
//     console.log(`Endpoint http://localhost:${port}/api/products`);
// })
// // const connectdb = async() => {
// //     try {
// //         const connectdb = await mongoose.connect('mongodb://localhost:27017/banhang');
// //         console.log('Connect to DB succesfully');
// //     } catch (error) {
// //         console.log('Can not access MongoDB');
// //     }
// // }
// // // const ProductsList = () => {

// // //     let products = [];
// // //     const items = localStorage.getItem('products');
// // //     if(items!==null){
// // //         products = JSON.parse(items);
// // //     }
// // //     return products;    
// // // }
// // // const addProduct =(data) =>{
// // //     const products = ProductsList();
// // //     products.push(data);
// // //     localStorage.setItem('products',JSON.stringify(products));
// // //     return {"satus": true ,"message":"Add successfully"}
// // // }
// // // const ProductById = (id) =>{
// // //     const products = ProductsList();
// // //     const product = products.filter(product =>{
// // //         return product.id==id;
// // //     });
// // //     return product;
// // // }
// // // const ProductUpdate = (id,data) =>{
// // //     const products = ProductsList();
// // //     let keyvalue = -1;
// // //     for (let i = 0; i < products.length; i++) {
// // //         if(products[i].id ==id){
// // //         keyvalue = i;
// // //         break;
// // //         }
// // //     }
// // //     if (keyvalue >-1) {
// // //         products[keyvalue].title= data.title;
// // //         products[keyvalue].price= data.price;
// // //         localStorage.setItem('products',JSON.stringify(products));
// // //         return {status: true,data:products[keyvalue],mess:"Update successful"}
// // //     }
// // //     else{
// // //         return {satus: false, mess:"Product not found"}
// // //     }
// // // }
// // // const DeleteProduct = (id) =>{
// // //     const products = ProductsList();
// // //     let keyvalue = -1;
// // //     for (let i = 0; i < products.length; i++) {
// // //         if(products[i].id ==id){
// // //         keyvalue = i;
// // //         break;
// // //         }
// // //     }
// // //     if (keyvalue >-1) {
// // //         products.splice(keyvalue,1);
// // //         localStorage.setItem('products',JSON.stringify(products));
// // //         return {status: true,data:products[keyvalue],mess:"Update successful"}
// // //     }
// // //     else{
// // //         return{status:false, mess:"Product not found"}
// // //     }
// // // }
// // // // const products = [
// // // //     {
// // // //         id:1,
// // // //         name:"Sản Phẩm 1",
// // // //         price:1000
// // // //     },
// // // //     {
// // // //         id:2,
// // // //         name:"Sản Phẩm 2",
// // // //         price:2000
// // // //     },
// // // //     {
// // // //         id:3,
// // // //         name:"Sản Phẩm 3",
// // // //         price:3000
// // // //     }
// // // // ]

// // // // app.get('/posts',(req,res) => {
// // // //     Nhận thông tin từ người dùng
// // // //     const keywords = req.query.keywords;
// // // //     const cate_id = req.query.category;
// // // //     console.log(keywords);
// // // //     res.send({keywords,cate_id});
// // // // });

// // // // app.get('/:slug1/:slug2',(req,res) => {
// // // //     const slug1 =req.params.slug1;
// // // //     const slug2 =req.params.slug2;
// // // //     res.send({slug1,slug2});
// // // // });
// // // // app.post('/posts',(req,res) => {
// // // //     const body =req.body;
// // // //     console.log(body);
// // // //     res.send(body);
// // // // });

// // // //Tạo API giống json server
// // // app.get('/products',(req,res) => {
// // //     res.send(ProductsList());
// // // });
// // // app.get('/products/:id',(req,res) => {
// // //     const id = req.params.id;
// // //     const product = ProductById(id);
// // //     res.send(product);
// // // });
// // // // app.post('/products',(req,res) => {
// // // //     const body = req.body;
// // // //     const mess = addProduct(body);
// // // //     res.send(mess);

// // // // });
// // // app.post('/products',(req,res,next) => {
// // //     const body = req.body;
// // //     if (body.pass=='123456'){
// // //         next();
// // //     }
// // //     else{
// // //         res.send({satus:false,message:"You can not access this"});
// // //     }
// // // },(req,res)=>{
// // //     res.send({satus:false,message:"You can not access this"});
// // // });
// // // app.put('/products/:id',(req,res) => {
// // //     const id = req.params.id;
// // //     const data=req.body;
// // //     const status = ProductUpdate(id,data);
// // //     res.send(status);
// // // });
// // // app.delete('/products/:id',(req,res) => {
// // //     const id = req.params.id;
// // //     const status = DeleteProduct(id);
// // //     res.send(status);
// // // });
// // // app.post('/products',async (req,res) => {
// // //     const body = req.body;
// // //     const pschema = new Schema({
// // //         name:String,
// // //         image:String,
// // //         price:Number
// // //     });
// // //     const model = mongoose.model('products',pschema);
// // //     const product = new model(body);
// // //     const response = await product.save();
// // //     res.send(response);
// // // })
// // app.listen(port, () => {
// //     console.log(`Endpoint http://localhost:${port}`);
// // })
import express from 'express';
import router from './router/product.js';  
import connectdb from './database/connect.js';
import Authrouter from './router/auth.js';
import uploadRouter from './router/upload.js';
import cors from 'cors'
// import mongoose from 'mongoose';
// import { LocalStorage } from "node-localstorage";
// global.localStorage = new LocalStorage('./scratch');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use('/api',router);
app.use('/api',Authrouter);
app.use('/file',uploadRouter);
app.listen(port,async ()=>{
    await connectdb();
    console.log(`Endpoint http://localhost:${port}/api/products`);
})