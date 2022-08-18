import { gql } from "graphql-request";

export namespace CreatePostMutation {
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
        mutation CreatePostMutation($title: String, $content: String) {
            newPost: insert_board_one(
                object: { content: $content, title: $title }
            ) {
                id
            }
        }
    `;
}
