import { gql } from "@apollo/client";

export const LOG_IN_USER_MUTATION = gql`
    mutation logIn($User: LoginInput!) {
        logIn(input: $User) {
            access_token
        }
    }
`;
