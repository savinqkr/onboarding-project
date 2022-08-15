import { gql } from "graphql-request";

export namespace RefreshJwtQuery {
    export interface IVariable {
        accountName: string;
        refreshToken: string;
    }
    export interface IResponse {
        refreshJwt: {
            accessToken: string;
            refreshToken: string;
        };
    }
    export const Document = gql`
        query RefreshJwtQuery($accountName: String!, $refreshToken: String!) {
            refreshJwt(
                args: { accountName: $accountName, refreshToken: $refreshToken }
            ) {
                accessToken
                refreshToken
            }
        }
    `;
}
