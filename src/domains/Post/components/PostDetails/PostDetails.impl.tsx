import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { IPostDetails } from "./PostDetails.interface";
import postService from "../../services/post.service";
import VPostDetails from "./PostDetails.view";

const PostDetails: React.FC<IPostDetails.IProps> = () => {
    // postId
    const { query } = useRouter();
    const postId = (query.id as string) ?? "";

    // getPost -- useQuery
    const { data: postData, isLoading } = useQuery(
        ["getPost"],
        () => postService.getPost({ id: postId }),
        {
            enabled: postId !== "",
        }
    );

    if (isLoading) return <p>Loading...</p>;

    return <VPostDetails postId={postId} postData={postData} />;
};

export default PostDetails;
