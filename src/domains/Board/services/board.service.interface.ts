import { GetBoardQuery, GetAllBoardQuery } from "./graphql";

export namespace IGetBoard {
    export interface IInput extends GetBoardQuery.IVariable {}
}
export namespace IGetAllBoard {
    export interface IInput extends GetAllBoardQuery.IVariable {}
}
export interface IBoardService {
    getBoard(args: IGetBoard.IInput): Promise<
        {
            id: string;
            title: string;
            content: string;
            author: {
                nickname: string;
            };
            createdAt: string;
            updatedAt: string;
        }[]
    >;
    getAllBoard(): Promise<
        {
            id: string;
        }[]
    >;
}
