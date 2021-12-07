import ReactDOM from "react-dom";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { client } from "./apolloClient";
import store from "./redux";
import "./index.css";

const rootElement = document.getElementById("root");

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <Provider store={store}>
                <App />
            </Provider>
        </ApolloProvider>
    </BrowserRouter>,
    rootElement
);
