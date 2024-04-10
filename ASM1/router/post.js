import express from "express";
import { posts } from "../models/posts.js"
import { CheckValidate } from "../middleware/post.js";
// import PostObject from '../middleware/post.js'

const router = express.Router();
router.get("/posts",async (req,res) =>{
    const response = await posts.find();
    res.send(response)
});
router.post("/posts",async (req,res) => {
    const post = await new posts(req.body).save();
    res.send({status:true,data:post});
});
router.get('/posts/:id', async (req,res) => {
    const id = req.params.id;
    const response = await posts.find({_id:id});
    res.send(response);
});
router.put("/posts/:id", async (req,res) =>{
    const id = req.params.id;
    const body = req.body;
    
    const response = await posts.findOneAndUpdate({_id:id}, body, {
        new: true,
    });
    res.send(response);
});    
router.delete("/posts/:id", async (req,res) =>{
    const id = req.params.id;
    const response= await posts.findOneAndDelete({_id:id});
    res.send(response);
});
export default router;    



