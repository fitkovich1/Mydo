import styled from "styled-components";
import Navbar from "../Navbar";
import {Switch, Route} from "react-router-dom";
import Shop from "../Shop";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1 1 auto;
`;


const App = () => {

    return (
        <AppContainer>
            <Switch>
                <Route path={'/shop'} component={<Shop/>}/>
            </Switch>
            <Navbar/>

        </AppContainer>
    )
        ;
}

export default App;