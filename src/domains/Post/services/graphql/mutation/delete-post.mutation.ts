import { gql } from "graphql-request";

export namespace DeletePostMutation {
    export interface IVariable {
        id: string;
    }
    export interface IResponse {
        deletedPost: {
            id: string;
        };
    }
    export const Document = gql`
        mutation DeletePostMutation($id: uuid!) {
            deletedPost: delete_board_by_pk(id: $id) {
                id
            }
        }
    `;
}
