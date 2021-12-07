import Navbar from "../Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppContainer } from "./styles";
import { MAIN_ROUTES, routes } from "../helper";
import InfoMessage from "../InfoMessage";
import { useSelector } from "react-redux";

const App = () => {
    const isShowMessage = useSelector((state) => state.isShowMessage);

    return (
        <AppContainer>
            <Routes>
                {Object.entries(routes).map(([route, Component]) => {
                    return <Route key={route} path={route} element={Component} />;
                })}
                <Route
                    path={MAIN_ROUTES.BASE}
                    element={<Navigate replace to={MAIN_ROUTES.SHOP} />}
                />
            </Routes>
            <Navbar />
            {isShowMessage && <InfoMessage />}
        </AppContainer>
    );
};

export default App;
