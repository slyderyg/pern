const { ProductModel } = require('../models/models');
const ApiError = require('../exceptions/api-error');
const uuid = require('uuid');
const path = require('path');

class ProductService {
    async create(CategoryId, model, brand, price, description, img) {
        let photos = [];
        img.forEach(el => {
            let fileName = uuid.v4() + '.png';
            photos.push(fileName);
            el.mv(path.resolve(__dirname, '..', 'static', fileName))
        });
        const checkProduct = await ProductModel.findOne({where:{model}});
        if (checkProduct) {
            throw ApiError.BadRequest('Такая модель уже существует');
        };
        const product = await ProductModel.create({CategoryId, model, brand, price, description, img: photos});
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