import { gql } from "graphql-request";

export namespace GetPostQuery {
    export interface IVariable {
        id: string;
    }
    export interface IResponse {
        board_by_pk: {
            author: {
                nickname: string;
                // id: string;
            };
            id: string;
            title: string;
            content: string;
            createdAt: string;
            updatedAt: string;
            // view_count: number;
        };
    }
    export const Document = gql`
        query GetPostQuery($id: uuid!) {
            board_by_pk(id: $id) {
                author {
                    nickname
                    #id
                }
                id
                title
                content
                createdAt
                updatedAt
                #view_count
            }
        }
    `;
}
