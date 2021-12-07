import ReactDOM from 'react-dom';
import App from './components/App/App';
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Provider } from "react-redux";
import store from "./redux";
import './index.css';


const httpLink = createHttpLink({
    uri: 'https://zd0dv59fq9.execute-api.eu-west-1.amazonaws.com/staging/',
});

const authLink = setContext((_, { headers }) => {

    const token = localStorage.getItem('token');

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "Bearer Guest",
            "Content-type": 'application/json'
        }
    }
});

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

const rootElement = document.getElementById('root');

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