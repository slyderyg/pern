const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const UserSchema = sequelize.define('User', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    isActivates: {type: DataTypes.BOOLEAN, defaultValue: false},
    activationLink: {type: DataTypes.STRING}
});

const TokenSchema = sequelize.define('Token', {
    user: {type: DataTypes.INTEGER},
    refreshToken: {type: DataTypes.STRING}
});

UserSchema.hasOne(TokenSchema);
TokenSchema.belongsTo(UserSchema);

module.exports = {
    UserSchema,
    TokenSchema
}