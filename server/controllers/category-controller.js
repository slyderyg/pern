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
        try {
            const allCategories = await categoryService.getAll();
            return res.json(allCategories);
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const { name } = req.body;
            await categoryService.delete(name);
            return res.json('Категория удалена')
        } catch (error) {
            next(error);
        }

    }
};

module.exports = new CategoryController();