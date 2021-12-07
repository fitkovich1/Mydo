import { useEffect, useState } from "react";
import { Nav } from "./styles";
import { navbarItems } from "./helper";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/actions";
import Icon from "../Icon";

const Navbar = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const authToken = useSelector((state) => state.authToken);
    const [activeNavLink, setActiveNavLink] = useState("shop");

    useEffect(() => {
        setActiveNavLink(location.pathname.replaceAll("/", ""));
    }, [location.pathname]);

    const onHandleLinkClick = (linkName) => {
        if (authToken && linkName === "login") {
            dispatch(logOut());
            localStorage.removeItem('token');
        }
    };

    return (
        <Nav.NavbarContainer>
            {navbarItems.map((item) => {
                const isActive = item.name === activeNavLink ? activeNavLink : "";
                const isAbsolute = item.name !== "scanner" ? "" : "absolute";
                const iconSrc = isActive ? item.iconActive : item.icon;
                const linkName =
                    authToken && item.name === "login"
                        ? "logout"
                        : item.name.replaceAll("_", " ");

                return (
                    <Nav.NavbarItemLink
                        to={item.path}
                        key={item.name}
                        absolute={isAbsolute}
                        active={isActive}
                        onClick={() => onHandleLinkClick(item.name)}
                    >
                        <Nav.NavbarItem>
                            <Icon src={iconSrc} alt={item.alt} />
                            {item.name !== "scanner" && (
                                <Nav.NavbarItemName>{linkName}</Nav.NavbarItemName>
                            )}
                        </Nav.NavbarItem>
                    </Nav.NavbarItemLink>
                );
            })}
        </Nav.NavbarContainer>
    );
};

export default Navbar;
