import mongoose, { Mongoose, Schema } from 'mongoose';

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    typeUser: Number
})
export default mongoose.model("Users", UserSchema);