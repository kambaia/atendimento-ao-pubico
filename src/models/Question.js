import mongoose, { Mongoose, Schema } from 'mongoose';

const QuestionSchema = new Schema({
    question: String,
    answer: String,
    win: Number,
    option: [{}],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
});
export default mongoose.model("Questions", QuestionSchema);