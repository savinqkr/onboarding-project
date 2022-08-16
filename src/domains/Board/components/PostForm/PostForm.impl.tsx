import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useEffect } from "react";
import { IPostForm } from "./PostForm.interface";
import VPostForm from "./PostForm.view";
import boardService from "@Board/services/board.service";

const PostDetails: React.FC<IPostForm.IProps> = props => {
    const { register, handleSubmit, getValues } = useForm<IPostForm.IForm>();

    // Create Board
    const { data: createdBoardData, mutate: createBoardRefetch } = useMutation(
        ["createBoard"],
        () =>
            boardService.createBoard({
                title: getValues("postTitle"),
                content: getValues("postContent"),
                // author_id: getValues("")
                author_id: "08ee09c5-4a69-4e61-9d25-fc80a254cf3b",
            })
    );

    const onCreate = () => {
        console.log("--- 게시글 업로드 ---");
        console.log(getValues("postTitle"));
        console.log(getValues("postContent"));
        createBoardRefetch();
    };

    useEffect(() => {
        console.log(createdBoardData);
    }, [createdBoardData]);

    return (
        <VPostForm
            {...props}
            register={register}
            onSubmit={handleSubmit(onCreate)}
        />
    );
};

export default PostDetails;
