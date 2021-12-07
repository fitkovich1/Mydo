import LoginPage from "./LoginPage";
import CommonPage from "./CommonPage";

export const MAIN_ROUTES = {
    BASE: "/",
    SHOP: "/shop",
    FOR_YOU: "/for_you",
    SCANNER: "/scanner",
    ACTIVITIES: "/activities",
    LOGIN: "/login",
};

export const routes = {
    [MAIN_ROUTES.SHOP]: <CommonPage contentText={MAIN_ROUTES.SHOP} />,
    [MAIN_ROUTES.FOR_YOU]: <CommonPage contentText={MAIN_ROUTES.FOR_YOU} />,
    [MAIN_ROUTES.SCANNER]: <CommonPage contentText={MAIN_ROUTES.SCANNER} />,
    [MAIN_ROUTES.ACTIVITIES]: <CommonPage contentText={MAIN_ROUTES.ACTIVITIES} />,
    [MAIN_ROUTES.LOGIN]: <LoginPage />,
};
