import {HttpClientApi} from "./core";
const BASE_URI : any = process.env.REACT_APP_BASE_URL;
const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
}
export const putApi = async (url : string, payload : any) : Promise<any> => {
    const { put } = new HttpClientApi();
    return await put(`${BASE_URI}${url}`, payload, headers)
}