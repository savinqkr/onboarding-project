import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { IPostForm } from "./PostForm.interface";
import VPostForm from "./PostForm.view";
import postService from "../../services/post.service";

const PostDetails: React.FC<IPostForm.IProps> = () => {
    const { register, handleSubmit, getValues } = useForm<IPostForm.IForm>();
    const router = useRouter();

    // postId
    const postId = (router.query.id as string) ?? "";

    // createPost -- useMutation
    const { mutate: createPostMutate } = useMutation(["createPost"], () =>
        postService.createPost({
            title: getValues("postTitle"),
            content: getValues("postContent"),
        })
    );

    // getPost -- useQuery
    const { data: postData, isLoading } = useQuery(
        ["getPost"],
        () => postService.getPost({ id: postId }),
        {
            enabled: postId !== "",
        }
    );

    // updatePost -- useMutation
    const { data: updatePostData, mutate: updatePostMutate } = useMutation(
        ["updatePost"],
        () =>
            postService.updatePost({
                id: postId,
                title: getValues("postTitle"),
                content: getValues("postContent"),
            })
    );

    // onClickCreatePost
    const onClickCreatePost = () => {
        createPostMutate();
        router.push("/");
    };

    // onClickUpdatePost
    const onClickUpdatePost = () => {
        const answer = confirm("저장하시겠습니까?");
        if (answer) updatePostMutate();
        router.push(`/post/details/${postId}`);
    };

    if (!postData || isLoading) return <p>Loading...</p>;

    return (
        <VPostForm
            postId={postId}
            register={register}
            onClickCreatePost={handleSubmit(onClickCreatePost)}
            onClickUpdatePost={handleSubmit(onClickUpdatePost)}
            title={postData.title}
            content={postData.content}
        />
    );
};

export default PostDetails;
