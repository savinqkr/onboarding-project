import { gql } from "graphql-request";

export namespace GetPostQuery {
    export interface IVariable {
        id: string;
    }
    export interface IResponse {
        postDetail: {
            author: {
                nickname: string;
                // id: string;
            };
            id: string;
            title: string;
            content: string;
            authorId: string;
            createdAt: string;
            updatedAt: string;
            // view_count: number;
        };
    }
    export const Document = gql`
        query GetPostQuery($id: uuid!) {
            postDetail: board_by_pk(id: $id) {
                author {
                    nickname
                    #id
                }
                id
                title
                content
                authorId: author_id
                createdAt
                updatedAt
                #view_count
            }
        }
    `;
}
