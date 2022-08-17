import type { NextPage } from "next";
import { useRouter } from "next/router";
import { PostBox } from "@Post/components";

const DetailsPost: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return <PostBox postId={String(id)} />;
};

export default DetailsPost;
