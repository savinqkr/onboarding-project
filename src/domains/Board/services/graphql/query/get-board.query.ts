import { gql } from "graphql-request";

export namespace GetBoardQuery {
    export interface IVariable {}
    export interface IResponse {
        getBoard: {
            // board: Promise<string[]>;
            board: any;
        };
    }
    export const Document = gql`
        query GetBoardQuery($limit: Int!) {
            board(limit: $limit) {
                id
                title
                content
                author {
                    nickname
                }
            }
        }
    `;
}
