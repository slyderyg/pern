const basketService = require('../service/basket-service');
const productService = require('../service/product-service');
const ApiError = require('../exceptions/api-error');

class BasketController {
    async create(req, res, next) {
        try {
            const {productId, quantity} = req.body;
            const userId = req.user.id;
            const price = await productService.findPrice(productId);
            const productInBasket = await basketService.addToBasket(userId, productId, quantity, price);
            return res.json(productInBasket);
        } catch (error) {
            next(error);
        }
    };

    async delete(req, res, next) {
        try {
            const {productId} = req.body;
            const userId = req.user.id;
            const removeFromBasket = await basketService.removeFromBasket(userId, productId);
            return res.json(removeFromBasket);
        } catch (error) {
            next(error);
        }
    };

    async getAll(req, res, next) {
        try {
            const userId = req.user.id;
            const productsInBasket = await basketService.getAll(userId);
            return res.json(productsInBasket);
        } catch (error) {
            next(error);
        }
    };

    async setQuantity(req, res, next) {
        try {
            const userId = req.user.id;
            const {productId, quantity} = req.body;
            const newQuantity = await basketService.setQuantity(userId, productId, quantity);
            return res.json(newQuantity);
        } catch (error) {
            next(error);
        }
    }
};

module.exports = new BasketController();