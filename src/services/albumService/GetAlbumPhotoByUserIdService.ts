import useSWR from "swr";
import {getApi} from "../../apis";

const ALBUM_ENDPOINT = '/album/';
export const GetAlbumPhotoByUserIdService = (albumId : any) : any => {
    const { data: resp, error, isLoading } = useSWR(`${ALBUM_ENDPOINT}${albumId}/photos`, getApi)

    return {
        albums: resp?.data,
        isLoading,
        isError: error
    }
}