import { getGlobal } from 'reactn';
import axios from 'axios';

type typeMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

const apiCall = async (method: typeMethod, url: string, data?: Partial<object> | null, param?: Partial<object> | null): Promise<any> => {
    return await axios({
        baseURL: 'http://pos.webofficial.my.id/api/',
        headers: {
            "Content-type": "application/json",
            "Authorization": 'Bearer ' + getGlobal().userToken
        },
        timeout: 5000,
        method: method,
        url: url,
        data: data,
        params: param,
        onUploadProgress: function (progressEvent) {
            var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            console.log(percentCompleted)
        }
    });
}

export default apiCall;