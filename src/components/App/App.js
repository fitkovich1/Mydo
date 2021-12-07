import Navbar from "../Navbar";
import { Redirect, Route, Switch } from "react-router-dom";
import { AppContainer } from "./styles";
import { MAIN_ROUTES, routes } from "../helper";
import InfoMessage from "../InfoMessage";
import { useSelector } from "react-redux";


const App = () => {

    const isShowMessage = useSelector(state => state.isShowMessage);

    return (
        <AppContainer>
            <Switch>
                {routes.map((route) => {
                    return <Route key={route.path}
                                  path={route.path}
                                  component={route.component}
                    />
                })}
                <Route path={MAIN_ROUTES.BASE}
                       render={() => <Redirect to={MAIN_ROUTES.SHOP}/>}
                />
            </Switch>
            <Navbar/>
            {isShowMessage && <InfoMessage />}
        </AppContainer>
    );
}

export default App;