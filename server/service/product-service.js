const { ProductModel } = require('../models/models');
const ApiError = require('../exceptions/api-error');
const uuid = require('uuid');
const path = require('path');
const fs = require('fs');

class ProductService {
    async create(CategoryId, model, brand, price, description, img) {
        let photos = [];
        if (img.length > 1) {img.forEach(el => {
            let fileName = uuid.v4() + '.png';
            photos.push(fileName);
            el.mv(path.resolve(__dirname, '..', 'static', fileName))
        })} else {
            let fileName = uuid.v4() + '.png';
            photos.push(fileName);
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
        }
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
        const product = await ProductModel.findOne({where: {id}});
        await ProductModel.destroy({where: {id}});
        if (product.img.length>1) {
            product.img.forEach(el => {
                fs.unlink(`./static/${el}`, err => {
                    if(err) throw err; // не удалось удалить файл
                    console.log('Файл успешно удалён');
                 });
            })
        } else {
            fs.unlink(`./static/${product.img[0]}`, err => {
                if(err) throw err; // не удалось удалить файл
                console.log('Файл успешно удалён');
             });
        }
        return 'Товар удален'
    };

    async findPrice(id) {
       const product = await ProductModel.findOne({where: {id}});
       return product.price;
    }
};

module.exports = new ProductService();