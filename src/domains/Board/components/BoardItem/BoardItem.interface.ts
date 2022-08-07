export namespace IBoardItem {
    export interface IProps {
        no: number;
        // title: string;
        // author: string;
        // createdAt: string;
        // updatedAt: string;
        title: number;
        author: number;
        createdAt: number;
        updatedAt: number;
    }
    export interface IVProps extends IProps {}
}
