import useSWR from "swr";
import {getApi} from "../../apis";

const USER_ALBUM_ENDPOINT = '/users/';
export const GetAlbumByUserIdService = (id : any): any => {
    const { data: resp, error, isLoading } = useSWR(`${USER_ALBUM_ENDPOINT}${id}/albums`, getApi)

    return {
        albums: resp?.data,
        isLoading,
        isError: error
    }
}