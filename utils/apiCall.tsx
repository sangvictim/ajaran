import axios from 'axios';
import { useAuth } from '../src/contexts/Auth';

let auth = useAuth();

let apiCall = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 5000,
    headers: {
        "Content-type": "application/json",
        "Authorization": 'Bearer' + auth.authData?.token
    }
});

export default apiCall;