import {
    ApolloClient,
    ApolloLink,
    concat,
    HttpLink,
    InMemoryCache,
} from "@apollo/client";

const httpLink = new HttpLink({ uri: process.env.REACT_APP_API_URL });

const authMiddleware = new ApolloLink((operation, forward) => {
    console.log("ApolloClient", operation);
    // add the authorization to the headers
    operation.setContext(({ headers = {} }) => ({
        headers: {
            ...headers,
        },
    }));

    return forward(operation);
});

export const client = new ApolloClient({
    // uri: "https://api.xattorney.app/graphql",
    cache: new InMemoryCache(),
    link: concat(authMiddleware, httpLink),
});
