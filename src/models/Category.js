import mongoose, { Mongoose, Schema } from 'mongoose';

const CategorySchema = new Schema({
    category: String,
    descriction: String
})
export default mongoose.model("Category", CategorySchema);