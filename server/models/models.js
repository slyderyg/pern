const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const UserModel = sequelize.define('User', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    isActivated: {type: DataTypes.BOOLEAN, defaultValue: false},
    activationLink: {type: DataTypes.STRING}
});

const TokenModel = sequelize.define('Token', {
    userId: {type: DataTypes.INTEGER},
    refreshToken: {type: DataTypes.STRING}
});

const BasketModel = sequelize.define('Basket', {
    productId: {type: DataTypes.INTEGER},
    quantity: {type: DataTypes.INTEGER},
    price: {type: DataTypes.INTEGER}
});

const ProductModel = sequelize.define('Product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    model: {type: DataTypes.STRING},
    brand: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER},
    description: {type: DataTypes.TEXT},
    img: {type: DataTypes.ARRAY(DataTypes.STRING)}
});

const CategoryModel = sequelize.define('Category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING}
});

const OrderModel = sequelize.define('Order', {
    id: {type: DataTypes.STRING, primaryKey: true},
    totalPrice: {type: DataTypes.INTEGER},
    status: {type: DataTypes.STRING},
    confirmationUrl: {type: DataTypes.STRING}
});

UserModel.hasOne(BasketModel);
BasketModel.belongsTo(UserModel);
CategoryModel.hasMany(ProductModel);
ProductModel.belongsTo(CategoryModel);
UserModel.hasMany(OrderModel);
OrderModel.belongsTo(UserModel);

module.exports = {
    UserModel,
    TokenModel,
    BasketModel,
    ProductModel,
    CategoryModel,
    OrderModel
};