import { gql } from "graphql-request";

export namespace LoginUserQuery {
    export interface IVariable {
        accountName: string;
        signature: string;
    }
    export interface IResponse {
        loginUser: {
            accessToken: string;
            refreshToken: string;
        };
    }
    export const Document = gql`
        query LoginUserQuery($accountName: String!, $signature: String!) {
            loginUser(
                args: { accountName: $accountName, signature: $signature }
            ) {
                accessToken
                refreshToken
            }
        }
    `;
}
