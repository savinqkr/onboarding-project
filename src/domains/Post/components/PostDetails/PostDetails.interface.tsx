export namespace IPostDetails {
    export interface IProps {}
    export interface IVProps extends IProps {
        postId: string;
        postData:
            | {
                  author: {
                      nickname: string;
                  };
                  id: string;
                  title: string;
                  content: string;
                  createdAt: string;
                  updatedAt: string;
              }
            | undefined;
    }
}
