import mongoose,{Schema, Schema} from "mongoose";
const Schema = new Schema({
    fulname: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    phone:String
},
{
    timestamps:true
}
);
export const User = mongoose.model('users',UserSchema);