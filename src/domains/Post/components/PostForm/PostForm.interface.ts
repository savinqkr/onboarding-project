import { UseFormRegister } from "react-hook-form";

export namespace IPostForm {
    export interface IProps {
        postId?: string | string[] | undefined;
    }
    export interface IVProps extends IProps {
        register: UseFormRegister<IForm>;
        onClickCreatePost: () => void;
    }
    export interface IForm {
        postTitle: string;
        postContent: string;
    }
}
