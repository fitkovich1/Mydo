import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_CLIENT_URL,
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("token");

    return {
        headers: {
            ...headers,
            authorization: `Bearer ${token || "Guest"}`,
            "Content-type": "application/json",
        },
    };
});

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});
