import { gql } from "graphql-request";

export namespace UpdatePostMutation {
    export interface IVariable {
        id: string;
        title: string;
        content: string;
    }
    export interface IResponse {
        updatedPost: {
            id: string;
            title: string;
            content: string;
            author: {
                nickname: string;
            };
        };
    }
    export const Document = gql`
        mutation UpdatePostMutation(
            $id: uuid!
            $title: String!
            $content: String!
        ) {
            updatedPost: update_board_by_pk(
                pk_columns: { id: $id }
                _set: { title: $title, content: $content }
            ) {
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
