import useSWR from "swr";
import {getApi} from "../../apis";

const USERS_ENDPOINT = "/users/";
export const GetUserAlbumService = (userId : any) : any => {
    const { data: resp, error, isLoading } = useSWR(`${USERS_ENDPOINT}${userId}/albums`, getApi)

    return {
        albums: resp?.data,
        isLoading,
        isError: error
    }
}