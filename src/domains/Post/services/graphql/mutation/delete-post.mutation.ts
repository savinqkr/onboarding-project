import { gql } from "graphql-request";

export namespace DeletePostQuery {
    export interface IVariable {
        id: string;
    }
    export interface IResponse {
        deletedPost: {
            id: string;
        };
    }
    export const Document = gql`
        mutation DeletePostQuery($id: uuid!) {
            deletedPost: delete_board_by_pk(id: $id) {
                id
            }
        }
    `;
}
