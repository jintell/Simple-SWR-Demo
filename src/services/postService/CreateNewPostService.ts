import useSWRMutation from "swr/mutation";
import {postApi} from "../../apis";

const POSTS_ENDPOINT = "/posts"
export const CreateNewPostService = () : any => {
    const {
        trigger,
        error,
        data: resp } = useSWRMutation(POSTS_ENDPOINT, postApi)

    return {
        addNewPost: trigger,
        posts: resp?.data,
        error,
        isError: error
    }
}