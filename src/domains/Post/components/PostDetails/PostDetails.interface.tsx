export namespace IPostDetails {
    export interface IProps {
        // postId: string | string[] | undefined;
        postId: string;
    }
    export interface IVProps extends IProps {
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
