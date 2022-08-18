export namespace IPostDetails {
    export interface IProps {}
    export interface IVProps extends IProps {
        onClickDeletePost: () => void;
        postId: string;
        postData:
            | {
                  author: {
                      nickname: string;
                  };
                  id: string;
                  title: string;
                  content: string;
                  authorId: string;
                  createdAt: string;
                  updatedAt: string;
              }
            | undefined;
    }
}
