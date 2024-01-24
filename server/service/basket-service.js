const {BasketModel} = require('../models/models');
const ApiError = require('../exceptions/api-error');

class BasketService {
    async addToBasket(userId, productId, quantity, price) {
        const checkProductInBasket = await BasketModel.findOne({where:{UserId: userId, productId}});
        if (!checkProductInBasket) {
            const productInBasket = await BasketModel.create({UserId: userId, productId, quantity, price});
            return 'Товар добавлен в корзину';
        } else {
            // BasketModel.update({quantity: checkProductInBasket.quantity + quantity}, {where: {UserId: userId, productId}});
            // return 'Товар добавлен в корзину';
            throw ApiError.BadRequest('Товар уже в корзине');
        }
    };

    async removeFromBasket(userId, productId) {
        await BasketModel.destroy({where: {UserId: userId, productId}});
        return 'Товар удален из корзины'
    };

    async getAll(userId) {
        const productsInBasket = await BasketModel.findAll({where: {UserId: userId}});
        return productsInBasket;
    };

    async setQuantity(userId, productId, quantity) {
        BasketModel.update({quantity}, {where: {UserId: userId, productId}})
        return 'Количество товара изменено'
    }

    async clearBasket(userId) {
        await BasketModel.destroy({where: {UserId: userId}});
        return 'Корзина очищена'
    }
}

module.exports = new BasketService();
