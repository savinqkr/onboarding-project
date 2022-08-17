import type { NextPage } from "next";
import { useRouter } from "next/router";
import { PostForm } from "@Post/components";

const UpdatePost: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;
    return <PostForm postId={id} />;
};

export default UpdatePost;
