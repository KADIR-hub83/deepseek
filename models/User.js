import mongoose, { Types } from "mongoose";



const userSchema = new mongoose.Schema({

    _id: {type: String ,required: true},
    _name: {type: String ,required: true},
    _email: {type: String ,required: true},
    _image: {type: String ,required: false},
},
{
  timestamps: true,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;

    