import { gql } from "graphql-request";

export namespace CreatePostQuery {
    export interface IVariable {
        title: string;
        content: string;
    }

    export interface IResponse {
        newPost: {
            id: string;
        };
    }

    export const Document = gql`
        mutation CreatePostQuery($title: String, $content: String) {
            newPost: insert_board_one(
                object: { content: $content, title: $title }
            ) {
                id
            }
        }
    `;
}
