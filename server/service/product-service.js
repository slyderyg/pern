const { ProductModel } = require('../models/models');
const ApiError = require('../exceptions/api-error');

class ProductService {
    async create(CategoryId, model, brand, price, description, img) {
        const checkProduct = await ProductModel.findOne({where:{model}});
        if (checkProduct) {
            throw ApiError.BadRequest('Такая модель уже существует');
        };
        const product = await ProductModel.create({CategoryId, model, brand, price, description, img});
        return product;
    };

    async getAll(CategoryId, limit, page) {
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let products;
        
        if (!CategoryId) {
            products = await ProductModel.findAndCountAll({limit, offset});
        } else {
            products = await ProductModel.findAndCountAll({where:{CategoryId}, limit, offset});
        };

        return products;
    };

    async delete(id) {
        await ProductModel.destroy({where: {id}});
        return 'Товар удален'
    };

    async findPrice(id) {
       const product = await ProductModel.findOne({where: {id}});
       return product.price;
    }
};

module.exports = new ProductService();