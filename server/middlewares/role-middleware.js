const ApiError = require('../exceptions/api-error');
const tokenService = require('../service/token-service');
const jwt = require('jsonwebtoken');

module.exports = function (role) {
    return function (req, res, next) {
        try {
            if (req.user.role !== role) {
                return next(ApiError.UnauthorizedError())
            };
            next();
        } catch (error) {
            return next(ApiError.UnauthorizedError())
        };
    };
};