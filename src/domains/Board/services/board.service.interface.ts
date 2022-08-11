import { GetBoardQuery } from "./graphql";

export namespace IGetBoard {
    export interface IInput extends GetBoardQuery.IVariable {}
}
export interface IBoardService {
    getBoard(limit: IGetBoard.IInput): any;
}
