import { UseFormRegister } from "react-hook-form";

export namespace IPostForm {
    export interface IProps {}
    export interface IVProps extends IProps {
        postId: string;
        register: UseFormRegister<IForm>;
        onSubmitCreatePost: () => void;
        onSubmitUpdatePost: () => void;
        title: string;
        content: string;
    }
    export interface IForm {
        postTitle: string;
        postContent: string;
    }
}
