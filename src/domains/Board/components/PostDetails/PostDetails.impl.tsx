import { useForm } from "react-hook-form";
import { IPostDetails } from "./PostDetails.interface";
import VPostDetails from "./PostDetails.view";

const PostDetails: React.FC<IPostDetails.IProps> = props => {
    const { register, handleSubmit, getValues } = useForm<IPostDetails.IForm>();

    const onSubmit = () => {
        console.log("--- 게시글 업로드 ---");
        console.log(getValues("postTitle"));
        console.log(getValues("postContent"));
    };

    return (
        <VPostDetails
            {...props}
            register={register}
            onSubmit={handleSubmit(onSubmit)}
        />
    );
};

export default PostDetails;
