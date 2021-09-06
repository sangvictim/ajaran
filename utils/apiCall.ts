import { getGlobal } from 'reactn';
import axios from 'axios';

type typeMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

const apiCall = async (method: typeMethod, url: string, data?: Partial<object> | null, param?: Partial<object> | null): Promise<any> => {
    try {
        const result = await axios({
            baseURL: 'http://pos.webofficial.my.id/api/',
            headers: {
                "Content-type": "application/json",
                "Authorization": 'Bearer ' + getGlobal().userToken
            },
            timeout: 5000,
            method: method,
            url: url,
            data: data,
            params: param
        });

        return result
    } catch (error) {
        console.log('error apicall: ' + JSON.stringify(error));
    }
}

export default apiCall;