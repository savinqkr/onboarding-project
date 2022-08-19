import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { IPostForm } from "./PostForm.interface";
import VPostForm from "./PostForm.view";
import postService from "../../services/post.service";

const PostDetails: React.FC<IPostForm.IProps> = () => {
    const { register, handleSubmit, getValues } = useForm<IPostForm.IForm>();
    const router = useRouter();

    const haveNoToken: boolean =
        typeof window !== "undefined" && !localStorage.getItem("accessToken");

    if (haveNoToken) router.push("/");

    // postId
    const postId = (router.query.id as string) ?? "";
    console.log(router.pathname);

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
            enabled: !router.pathname.includes("new"),
        }
    );

    // updatePost -- useMutation
    const { mutate: updatePostMutate } = useMutation(["updatePost"], () =>
        postService.updatePost({
            id: postId,
            title: getValues("postTitle"),
            content: getValues("postContent"),
        })
    );

    // onSubmitCreatePost
    const onSubmitCreatePost = () => {
        createPostMutate();
        router.push("/");
    };

    // onSubmitUpdatePost
    const onSubmitUpdatePost = () => {
        const answer = confirm("저장하시겠습니까?");
        if (answer) updatePostMutate();
        router.push(`/post/details/${postId}`);
    };

    if (postId !== "" && (!postData || isLoading)) return <p>Loading...</p>;

    return (
        <VPostForm
            postId={postId}
            register={register}
            onSubmitCreatePost={handleSubmit(onSubmitCreatePost)}
            onSubmitUpdatePost={handleSubmit(onSubmitUpdatePost)}
            title={
                router.pathname.includes("new")
                    ? ""
                    : (postData?.title as string)
            }
            content={
                router.pathname.includes("new")
                    ? ""
                    : (postData?.content as string)
            }
        />
    );
};

export default PostDetails;
