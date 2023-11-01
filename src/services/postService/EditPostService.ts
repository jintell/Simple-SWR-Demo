import useSWRMutation from "swr/mutation";
import {putApi} from "../../apis";

const POSTS_ENDPOINT = "/posts/";
export const EditPostService = (id : any) : any => {

    const {
        trigger,
        error,
        data: resp } = useSWRMutation(`${POSTS_ENDPOINT}${id}`, putApi)

    return {
        modifyPost: trigger,
        posts: resp?.data,
        error,
        isError: error
    }
}