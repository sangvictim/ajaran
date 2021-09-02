import axios from 'axios';
import { Alert } from 'react-native';

type typeMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

const apiCall = async (method: typeMethod, url: string, data?: Partial<object> | null, param?: Partial<object> | null): Promise<any> => {
    try {
        const result = await axios({
            baseURL: 'https://jsonplaceholder.typicode.com/',
            headers: {
                "Content-type": "application/json",
                "Authorization": 'Bearer' + '123456'
            },
            timeout: 5000,
            method: method,
            url: url,
            data: data,
            params: param
        });

        return result
    } catch (error) {
        Alert.alert(error)
    }
}

export default apiCall;