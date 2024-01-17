const Router = require('express');
const userController = require('../controllers/user-controller');
const categoryController = require('../controllers/category-controller');
const productController = require('../controllers/product-controller');
const router = new Router();
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');
const roleMiddleware = require('../middlewares/role-middleware');

router.post('/registration', body('email').isEmail(), body('password').isLength({min: 6, max: 16}), userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
//router.get('/users', authMiddleware, roleMiddleware('ADMIN'), userController.getUsers);

router.post('/addcategory', authMiddleware, roleMiddleware('ADMIN'), categoryController.create);
router.get('/getallcategories', categoryController.getAll);
router.delete('/deletecategory', authMiddleware, roleMiddleware('ADMIN'), categoryController.delete);

router.post('/addproduct', authMiddleware, roleMiddleware('ADMIN'), productController.create);
router.get('/getallproducts', productController.getAll);
router.delete('/deleteproduct', authMiddleware, roleMiddleware('ADMIN'), productController.delete);


module.exports = router;