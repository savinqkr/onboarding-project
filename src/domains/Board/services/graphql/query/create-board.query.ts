import { gql } from "graphql-request";

export namespace CreateBoardQuery {
    export interface IVariable {
        author_id: string;
        title: string;
        content: string;
    }
    export interface IResponse {
        insert_board_one: {
            id: string;
            title: string;
            content: string;
            createdAt: string;
            author: {
                nickname: string;
            };
            updatedAt: string;
        };
    }
    export const Document = gql`
        mutation CreateBoardQuery(
            $title: String
            $content: String
            $author_id: String
        ) {
            insert_board_one(
                object: {
                    title: $title
                    content: $content
                    author_id: $author_id
                }
            ) {
                id
                title
                content
                createdAt
                author {
                    nickname
                }
                updatedAt
            }
        }
    `;
}
