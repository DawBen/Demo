import { products } from '../models/products.js'
import { ValidateProduct } from '../validate/product.js';
export const addProduct = async (req,res,)=>{
    const error = ValidateProduct(req.body)
    if (error) {
        res.send({status:true,message:error.message});
    } else{
        const product = await new products(req.body).save();
        res.send({status:true,data:product});
    }
}
export const getProduct = async (req, res) => {
    try{
        const page = req.query.page;
        const limit = req.query.limit;
    // if (page){
        const response = await products.find().skip((page-1)*limit).limit(limit);
        res.status(200).send(response)
    // } else{
    //     const response = await products.find({price:{$gte:5000}}).sort({'price':-1});
    //     res.status(200).send(response)
    // }    
    // const response = await products.find({price:{$gte:5000}}).sort({'price':-1});
    // res.status(200).send(response)
    }catch (error){
        res.status(503).send({status:true,message:"can not access DB"+ error});
}
}
export const putProduct = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const response = await products.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    res.send(response);
}
export const delProduct = async (req, res) => {
    const id = req.params.id;
    const response = await products.findOneAndDelete({ _id: id });
    res.send(response);
}