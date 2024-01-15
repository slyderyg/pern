const productService = require('../service/product-service');
const ApiError = require('../exceptions/api-error');

class ProductController {
    async create(req, res, next) {
        try {
            const { CategoryId, model, brand, price, description, img } = req.body;
            const product = await productService.create(CategoryId, model, brand, price, description, img);
            return res.json(product);
        } catch (error) {
            next(error);
        }
    };

    async getAll(req, res, next) {
        try {
            let { CategoryId, limit, page } = req.query;
            const products = await productService.getAll(CategoryId, limit, page)
            return res.json(products);
        } catch (error) {
            next(error);
        }
    }
};

module.exports = new ProductController();