

import { useAuthStore } from '@/app/stores';
import axios from 'axios';


const endpointApi = axios.create({
    baseURL: 'http://localhost:3000/endpoints',
})


export {
    endpointApi
}