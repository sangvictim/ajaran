import { getGlobal, setGlobal } from 'reactn';
import axios from 'axios';

type typeMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

const apiCall = async (method: typeMethod, url: string, data?: Partial<object> | null, param?: Partial<object> | null): Promise<any> => {
    return await axios({
        baseURL: 'http://172.16.10.133:8000/',
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
    }).then(res => {
        return res
    }).catch(err => {
        if (err.response != undefined) err = err.response.data
        if (err.errors) {
            setGlobal({
                errors: err.errors
            })
        }
        throw err;

    })
}

export default apiCall;