const orderService = require('../service/order-service');
const basketService = require('../service/basket-service');
const productService = require('../service/product-service');
const ApiError = require('../exceptions/api-error');

class OrderController {
    async create(req, res, next) {
        try {
            const userId = req.user.id;
            const basket = await basketService.getAll(userId);
            let totalPrice = 0;
            basket.map(el => totalPrice += el.price*el.quantity);
            const newOrder = await orderService.create(userId, totalPrice);
            await basketService.clearBasket(userId);
            return res.json(newOrder);

        } catch (error) {
            next(error);
        }
    }
}

module.exports = new OrderController();