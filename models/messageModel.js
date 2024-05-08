import mongoose, { Schema } from 'mongoose';
import { User } from './userModel.js';
const messageModel=new Schema({
senderId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
},
receiverId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
},
message:{
    type:String,
    required:true
}
},{timestamps:true})
export const Message=mongoose.model("Message",messageModel);