const categoryService = require('../service/category-service');
const ApiError = require('../exceptions/api-error');

class CategoryController {
    async create(req, res, next) {
        try {
            const { name } = req.body;
            const category = await categoryService.create(name);
            return res.json(category);
        } catch (error) {
            next(error);
        }
    };

    async getAll(req, res, next) {
        const allCategories = await categoryService.getAll();
        return res.json(allCategories);
    }
};

module.exports = new CategoryController();