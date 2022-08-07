import { gql } from "graphql-request";

export namespace GetSignatureQuery {
    export interface IVariable {
        accountName: string;
        privateKey: string;
    }
    export interface IResponse {
        getSignature: {
            signature: string;
        };
    }
    export const Document = gql`
        query GetSignatureQuery($accountName: String!, $privateKey: String!) {
            getSignature(
                args: { accountName: $accountName, privateKey: $privateKey }
            ) {
                signature
            }
        }
    `;
}
