import useSWR from "swr";
import {getApi} from "../../apis";

const ALL_POSTS_ENDPOINT = "/posts/"
export const GetPostService = (id : any) : any => {
    const { data: resp, error, isLoading } = useSWR(`${ALL_POSTS_ENDPOINT}${id}`, getApi)

    return {
        post: resp?.data,
        isLoading,
        isError: error
    }
}