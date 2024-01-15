const {CategoryModel} = require('../models/models');
const ApiError = require('../exceptions/api-error');

class CategoryService {
    async create(name) {
        const checkCategory = await CategoryModel.findOne({ where: { name } });
        if (checkCategory) {
            throw ApiError.BadRequest('Такая категория уже существует');
        };
        const category = await CategoryModel.create({name});
        return category;
    };

    async getAll() {
        const allCategories = await CategoryModel.findAll();
        return allCategories;
    }

    async delete(id) {
        await CategoryModel.destroy({where: {id}});
        return 'Категория удалена';
    }
};

module.exports = new CategoryService();