import useSWR from "swr";
import {getApi} from "../../apis";

const USERS_ENDPOINT = "/users/"
export const  GetUserByIdService = (id : any) : any => {
    const { data: resp, error, isLoading } = useSWR(`${USERS_ENDPOINT}${id}`, getApi)

    return {
        user: resp?.data,
        isLoading,
        isError: error
    }
}