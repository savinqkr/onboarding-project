import { gql } from "graphql-request";

export namespace GetBoardQuery {
    export interface IVariable {}
    export interface IResponse {
        getBoard: {
            board: Promise<string[]>;
        };
    }
    export const Document = gql`
        // query GetBoardQuery($limit: Number!) {
            // board(limit: $limit) {
            //     updatedAt
            //     title
            //     id
            //     createdAt
            //     author {
            //         nickname
            //     }
            //     author_id
            // }
            query GetBoardQuery {
                board {
                  id
                  title
                  createdAt
                  updatedAt
                  author {
                    nickname
                  }
                }
              }
              
        }
    `;
}
