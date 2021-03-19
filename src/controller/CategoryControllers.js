import Category from "../models/Category";

class CategoryController {
    async create(req, res) {
        let category = new Category({
            category: req.body.category,
            descriction: req.body.descriction,
        });
        const result = await category.save(category);
        return res.json(result);
    }
    async read(req, res) {
        const result = await Category.find({});
        return res.json(result);
    }
}

export default new CategoryController();