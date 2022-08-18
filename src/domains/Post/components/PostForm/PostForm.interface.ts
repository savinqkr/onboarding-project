import { UseFormRegister } from "react-hook-form";

export namespace IPostForm {
    export interface IProps {}
    export interface IVProps extends IProps {
        postId: string;
        register: UseFormRegister<IForm>;
        onClickCreatePost: () => void;
    }
    export interface IForm {
        postTitle: string;
        postContent: string;
    }
}
