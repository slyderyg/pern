const {OrderModel} =  require('../models/models');
const ApiError = require('../exceptions/api-error');

class OrderService {
    async create(userId, totalPrice) {
        const newOrder = await OrderModel.create({UserId: userId, totalPrice});
        return newOrder;
    }
};

module.exports = new OrderService();