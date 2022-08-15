import type { NextPage } from "next";
import { useRouter } from "next/router";
import { PostForm } from "@/domains/Board/components";

const UpdatePost: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <PostForm />
        </>
    );
};

export default UpdatePost;
