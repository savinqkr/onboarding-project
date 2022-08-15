import type { NextPage } from "next";
import { useRouter } from "next/router";
import { PostDetails } from "@/domains/Board/components";

const DetailsPost: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <PostDetails postId={id} />
        </>
    );
};

export default DetailsPost;
