import Admin from "./pages/Account";
import Auth from "./pages/Auth";
import Basket from './pages/Basket';
import ProductPage from "./pages/ProductPage";
import Shop from './pages/Shop'
import { ACCOUNT_ROUTE, BASKET_ROUTE, SHOP_ROUTE, AUTH_ROUTE, PRODUCT_ROUTE } from "./utils/consts";


export const authRoutes = [
    {
        path: ACCOUNT_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
];

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
    {
        path: PRODUCT_ROUTE,
        Component: ProductPage
    }
];
