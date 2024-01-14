const ApiError = require('../exceptions/api-error');
const tokenService = require('../service/token-service');
const jwt = require('jsonwebtoken');

module.exports = function (role) {
    return function (req, res, next) {
        try {
            const accessToken = req.headers.authorization.split(' ')[1];
            if (!accessToken) {
                return next(ApiError.UnauthorizedError())
            };
            const userData = tokenService.validateAccessToken(accessToken);
            if (userData.role !== role) {
                return next(ApiError.UnauthorizedError())
            };
            req.user = userData;
            next();
        } catch (error) {
            return next(ApiError.UnauthorizedError())
        };
    };
};