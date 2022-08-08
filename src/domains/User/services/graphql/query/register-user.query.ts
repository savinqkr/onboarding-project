import { gql } from "graphql-request";

export namespace RegisterUserQuery {
    export interface IVariable {
        accountName: string;
        nickname: string;
        signature: string;
    }
    export interface IResponse {
        registerUser: {
            accessToken: string;
            refreshToken: string;
        };
    }
    export const Document = gql`
        mutation RegisterUser(
            $accountName: String!
            $nickname: String!
            $signature: String!
        ) {
            registerUser(
                args: {
                    accountName: $accountName
                    nickname: $nickname
                    signature: $signature
                }
            ) {
                accessToken
                refreshToken
            }
        }
    `;
}
