import {HttpClientApi} from "./core";

const BASE_URI : any = process.env.REACT_APP_BASE_URL;
export const deleteApi = async (url : string) : Promise<any> => {
    const { remove } = new HttpClientApi();
    return await remove(`${BASE_URI}${url}`, {})
}