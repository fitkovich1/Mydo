import ShopPage from "./ShopPage";
import ForYouPage from "./ForYouPage";
import ScannerPage from "./ScannerPage";
import ActivitiesPage from "./ActivitiesPage";
import LoginPage from "./LoginPage";

export const MAIN_ROUTES = {
    BASE: '/',
    SHOP: '/shop',
    FOR_YOU: '/for_you',
    SCANNER: '/scanner',
    ACTIVITIES: '/activities',
    LOGIN: '/login'
};

export const routes = [
    {
        path: MAIN_ROUTES.SHOP,
        component: ShopPage
    },
    {
        path: MAIN_ROUTES.FOR_YOU,
        component: ForYouPage
    },
    {
        path: MAIN_ROUTES.SCANNER,
        component: ScannerPage
    },
    {
        path: MAIN_ROUTES.ACTIVITIES,
        component: ActivitiesPage
    },
    {
        path: MAIN_ROUTES.LOGIN,
        component: LoginPage
    }
];