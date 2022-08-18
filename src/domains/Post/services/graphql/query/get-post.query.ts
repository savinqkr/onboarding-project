import { gql } from "graphql-request";

export namespace GetPostQuery {
    export interface IVariable {
        id: string;
    }
    export interface IResponse {
        postDetails: {
            author: {
                nickname: string;
                // id: string;
            };
            id: string;
            title: string;
            content: string;
            author_id: string;
            createdAt: string;
            updatedAt: string;
            // view_count: number;
        };
    }
    export const Document = gql`
        query GetPostQuery($id: uuid!) {
            postDetails: board_by_pk(id: $id) {
                author {
                    nickname
                    #id
                }
                id
                title
                content
                author_id
                createdAt
                updatedAt
                #view_count
            }
        }
    `;
}
