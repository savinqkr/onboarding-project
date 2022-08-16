import { GetBoardQuery, CreateBoardQuery } from "./graphql";

export namespace IGetBoard {
    export interface IInput extends GetBoardQuery.IVariable {}
}
export namespace ICreateBoard {
    export interface IInput extends CreateBoardQuery.IVariable {}
}
export interface IBoardService {
    getBoard(
        limit: IGetBoard.IInput
    ): Promise<
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
    createBoard(
        object: ICreateBoard.IInput
    ): Promise<{
        id: string;
        title: string;
        content: string;
        createdAt: string;
        author: {
            nickname: string;
        };
        updatedAt: string;
    }>;
}
