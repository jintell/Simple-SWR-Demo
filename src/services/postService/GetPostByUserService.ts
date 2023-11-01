import useSWR from "swr";
import {getApi} from "../../apis";

const USER_POSTS_ENDPOINT = "/users/"
export const GetPostByUserService= (userId : any) : any => {
    const { data: resp, error, isLoading } = useSWR(`${USER_POSTS_ENDPOINT}${userId}/posts`, getApi)

    return {
        posts: resp?.data,
        isLoading,
        isError: error
    }
}