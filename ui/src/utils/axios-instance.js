import axios from 'axios';
import {API_ROOT} from './api-config';

const axiosInstance = axios.create({
	baseURL: `${API_ROOT}`,
	timeout: 5 * 60 * 1000,
	headers: {
		'Content-Type': 'application/json'
	}
});

export default axiosInstance;