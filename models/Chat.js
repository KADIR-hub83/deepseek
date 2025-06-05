import mongoose, { Types } from "mongoose";
import { Content } from "next/font/google";



const chatSchema = new mongoose.Schema({

    
    _name: {type: String ,required: true},
    _messages:[
     {
        role: {type: String ,required: true},
        content: {type: String ,required: true},
        timestamps: {type: Number ,required: true},
     }
    ],
    UserId:{type: String ,required: true},
},
{
  timestamps: true,
});

const Chat = mongoose.models.Chat || mongoose.model("Chat", chatSchema);
export default Chat;
