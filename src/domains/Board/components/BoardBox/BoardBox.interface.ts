export namespace IBoardBox {
    export interface IProps {}
    export interface IVProps {
        boardDatas:
            | {
                  id: string;
                  title: string;
                  content: string;
                  author: { nickname: string };
                  createdAt: string;
                  updatedAt: string;
              }[]
            | undefined;
    }
}
