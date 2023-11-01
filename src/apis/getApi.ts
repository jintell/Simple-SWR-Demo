import {HttpClientApi} from "./core";

const BASE_URI : any = process.env.REACT_APP_BASE_URL;
export const getApi = async (url : string) : Promise<any> => {
    const { get } = new HttpClientApi();
    return await get(`${BASE_URI}${url}`, {})
}