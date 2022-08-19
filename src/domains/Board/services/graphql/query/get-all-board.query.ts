import { gql } from "graphql-request";

export namespace GetAllBoardQuery {
    export interface IVariable {}
    export interface IResponse {
        board: Array<{
            id: string;
            updatedAt: string;
        }>;
    }
    export const Document = gql`
        query GetAllBoardQuery {
            board {
                id
            }
        }
    `;
}
