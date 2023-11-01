import useSWR from "swr";
import {getApi} from "../../apis";

const ALL_POSTS_ENDPOINT = "/posts"
export const GetAllPostService = () : any => {
    const { data: resp, error, isLoading } = useSWR(ALL_POSTS_ENDPOINT, getApi)

    return {
        posts: resp?.data,
        isLoading,
        isError: error
    }
}