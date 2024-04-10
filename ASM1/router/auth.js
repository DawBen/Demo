import express from "express";
import User from "../models/auth.js";
import bcrypt from "bcryptjs";
// import jwt from 'jsonwebtoken'

const Authrouter = express.Router();
Authrouter.post("/register", async (req, res) => {
  try {
    const body = req.body;
    body.password = await bcrypt.hash(body.password, 10);
    const auth = new User(body);
    const response = await auth.save();
    res.send(response);
  } catch (error) {
    res.send({ error: error });
  }
});
// Authrouter.post("/login", async(req,res) => {
//     const body = req.body;
//     const user = await User.findOne({emaill: body.email})
//     if(user==null){
//         res.send({status:false,message:"Người dùng không tồn tại"})
//     }
//     else{
//         const password = user.password
//         const verify = await bcrypt.compare(body.password,password)
//         if(verify){
//             const token = jwt.sign({uid:user._id},'123456')
//             res.send({status:true,message:"Đăng Nhâp thành công",user:user,token:token})
//         }
//         else{
//             res.send({status:false,message:"Sai mật khẩu"})
//         }
//     }
// })
export default Authrouter;
