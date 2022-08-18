import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { IPostForm } from "./PostForm.interface";
import VPostForm from "./PostForm.view";
import postService from "../../services/post.service";

const PostDetails: React.FC<IPostForm.IProps> = () => {
    const { register, handleSubmit, getValues } = useForm<IPostForm.IForm>();
    const router = useRouter();

    // postId
    const postId = (router.query.id as string) ?? "";

    if (typeof window !== "undefined")
        console.log(window.localStorage.getItem("userId"));

    // createPost -- useMutation
    const { data: createdPostData, mutate: createPostMutate } = useMutation(
        ["createPost"],
        () =>
            postService.createPost({
                title: getValues("postTitle"),
                content: getValues("postContent"),
            })
    );

    // onClickCreatePost
    const onClickCreatePost = () => {
        createPostMutate();
        router.push("/");
    };

    return (
        <VPostForm
            postId={postId}
            register={register}
            onClickCreatePost={handleSubmit(onClickCreatePost)}
        />
    );
};

export default PostDetails;
