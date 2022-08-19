import { gql } from "graphql-request";

export namespace GetBoardQuery {
    export interface IVariable {
        limit: number;
        offset: number;
    }
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
        query GetBoardQuery($limit: Int!, $offset: Int!) {
            board(
                limit: $limit
                order_by: { updatedAt: desc }
                offset: $offset
            ) {
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
