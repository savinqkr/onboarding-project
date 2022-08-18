import { gql } from "graphql-request";

export namespace GetBoardQuery {
    export interface IVariable {}
    export interface IResponse {
        board: Array<{
            id: string;
            title: string;
            content: string;
            author: {
                nickname: string;
            };
            createdAt: string;
            updatedAt: string;
        }>;
    }
    export const Document = gql`
        query GetBoardQuery($limit: Int!) {
            board(limit: $limit, order_by: { updatedAt: desc }) {
                id
                title
                content
                author {
                    nickname
                }
                createdAt
                updatedAt
            }
        }
    `;
}
