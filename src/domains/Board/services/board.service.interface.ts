import { GetBoardQuery } from "./graphql";

export namespace IGetBoard {
    export interface IInput extends GetBoardQuery.IVariable {}
}
export interface IBoardService {
    getBoard(limit: IGetBoard.IInput): Promise<
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
}
