import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { IPostDetails } from "./PostDetails.interface";
import postService from "../../services/post.service";
import VPostDetails from "./PostDetails.view";
import { useEffect } from "react";

const PostDetails: React.FC<IPostDetails.IProps> = () => {
    const router = useRouter();
    // postId
    const postId = (router.query.id as string) ?? "";

    // getPost -- useQuery
    const { data: postData, isLoading } = useQuery(
        ["getPost"],
        () => postService.getPost({ id: postId }),
        {
            enabled: postId !== "",
        }
    );

    // deletePost -- useMutation
    const { mutate: deletePostMutate } = useMutation(["deletePost"], () =>
        postService.deletePost({
            id: postId,
        })
    );

    // onClickDeletePost
    const onClickDeletePost = () => {
        const answer = confirm("삭제하시겠습니까?");
        if (answer) {
            deletePostMutate();
            router.push("/");
        }
    };

    if (isLoading) return <p>Loading...</p>;

    return (
        <VPostDetails
            postId={postId}
            postData={postData}
            onClickDeletePost={onClickDeletePost}
        />
    );
};

export default PostDetails;
