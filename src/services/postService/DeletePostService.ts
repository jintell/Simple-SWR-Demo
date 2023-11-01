import useSWRMutation from "swr/mutation";
import {deleteApi} from "../../apis";

const POSTS_ENDPOINT = "/posts/";
export const DeletePostService = (id : any) : any => {
    const {
        trigger,
        error,
        data: resp } = useSWRMutation(`${POSTS_ENDPOINT}${id}`, deleteApi)

    return {
        deletePost: trigger,
        posts: resp?.data,
        error,
        isError: error
    }
}