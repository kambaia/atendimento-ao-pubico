import Question from "../models/Question";

class QuestionController {
    async create(req, res) {
        let question = new Question({
            question: req.body.question,
            option: req.body.option,
            win: req.body.win,
            answer: req.body.answer,
            category: req.body.category
        });
        const result = await question.save(question);
        return res.json(result);
    }
    async read(req, res) {
        const result = await Question.find({}).populate('category', '-_id');
        return res.json(result);
    }
}

export default new QuestionController();