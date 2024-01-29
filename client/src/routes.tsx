import Account from "./pages/Account";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Basket from './pages/Basket';
import Favorites from "./pages/Favorites";
import ProductPage from "./pages/ProductPage";
import Shop from './pages/Shop'
import { ACCOUNT_ROUTE, BASKET_ROUTE, SHOP_ROUTE, AUTH_ROUTE, PRODUCT_ROUTE, FAVORITES_ROUTE, ADMIN_ROUTE } from "./utils/consts";


export const authRoutes = [
    {
        path: ACCOUNT_ROUTE,
        Component: Account
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: FAVORITES_ROUTE,
        Component: Favorites
    },
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

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]
