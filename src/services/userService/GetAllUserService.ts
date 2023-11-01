import useSWR from "swr";
import {getApi} from "../../apis";

const ALL_USERS_ENDPOINT = "/users"
export const GetAllUserService = () : any => {
    const { data: resp, error, isLoading } = useSWR(ALL_USERS_ENDPOINT, getApi)

    return {
        users: resp?.data,
        isLoading,
        isError: error
    }
}