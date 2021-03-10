import axios from 'axios';
import {API_ROOT} from './api-config';

const axiosInstance = axios.create({
	paramsSerializer(params) {
		const searchParams = new URLSearchParams();
		for (const key of Object.keys(params)) {
			const param = params[key];
			if (Array.isArray(param)) {
				for (const p of param) {
					searchParams.append(key, p);
				}
			} else {
				searchParams.append(key, param);
			}
		}
		return searchParams.toString();
	},
	baseURL: `${API_ROOT}`,
	timeout: 5 * 60 * 1000,
	headers: {
		'Content-Type': 'application/json'
	}
});

export default axiosInstance;