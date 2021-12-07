import shopIcon from "../../assets/images/icons/ic_shop.png";
import shopActiveIcon from "../../assets/images/icons/ic_shop_active.png";
import forYouIcon from "../../assets/images/icons/ic_for_you.png";
import forYouActiveIcon from "../../assets/images/icons/ic_for_you_active.png";
import scannerIcon from "../../assets/images/icons/ic_scanner.png";
import scannerActiveIcon from "../../assets/images/icons/ic_scanner_active.png";
import activitiesIcon from "../../assets/images/icons/ic_activities.png";
import activitiesActiveIcon from "../../assets/images/icons/ic_activities_active.png";
import loginIcon from "../../assets/images/icons/ic_login.png";
import loginActiveIcon from "../../assets/images/icons/ic_login_active.png";
import { MAIN_ROUTES } from "../helper";

export const navbarItems = [
    {
        icon: shopIcon,
        iconActive: shopActiveIcon,
        alt: "shop icon",
        name: "shop",
        path: MAIN_ROUTES.SHOP,
    },
    {
        icon: forYouIcon,
        iconActive: forYouActiveIcon,
        alt: "for you icon",
        name: "for_you",
        path: MAIN_ROUTES.FOR_YOU,
    },
    {
        icon: scannerIcon,
        iconActive: scannerActiveIcon,
        alt: "scanner icon",
        name: "scanner",
        path: MAIN_ROUTES.SCANNER,
    },
    {
        icon: activitiesIcon,
        iconActive: activitiesActiveIcon,
        alt: "activities icon",
        name: "activities",
        path: MAIN_ROUTES.ACTIVITIES,
    },
    {
        icon: loginIcon,
        iconActive: loginActiveIcon,
        alt: "login icon",
        name: "login",
        path: MAIN_ROUTES.LOGIN,
    },
];
