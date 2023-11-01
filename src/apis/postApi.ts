import {HttpClientApi} from "./core";
const BASE_URI : any = process.env.REACT_APP_BASE_URL;
const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
}
export const postApi = async (url : string, payload : any) : Promise<any> => {
    const { post } = new HttpClientApi();
    return await post(`${BASE_URI}${url}`, payload, headers)
}