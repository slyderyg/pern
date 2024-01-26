const {OrderModel} =  require('../models/models');
const ApiError = require('../exceptions/api-error');
const {YooCheckout} = require('@a2seven/yoo-checkout');
const uuid = require('uuid');

class OrderService {
    async create(userId, totalPrice) {
        const checkout = new YooCheckout({shopId: process.env.SHOP_ID, secretKey: process.env.SECRET_KEY});
        const idempotenceKey = uuid.v4();

        const createPayload = {
            amount: {
                value: `${totalPrice}`,
                currency: 'RUB'
            },
            payment_method_data: {
                type: 'bank_card'
            },
            confirmation: {
                type: 'redirect',
                return_url: 'test'
            }
        };
        const payment = await checkout.createPayment(createPayload, idempotenceKey);
        const newOrder = await OrderModel.create({
            id: payment.id, 
            UserId: userId, 
            totalPrice, 
            confirmationUrl: payment.confirmation.confirmation_url, 
            status: payment.status
        });
       
        return newOrder;
    }
};

module.exports = new OrderService();