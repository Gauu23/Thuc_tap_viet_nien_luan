import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 100000,
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
});

axiosInstance.interceptors.request.use(
    (config) => {
        console.log("chayyy vao interceptors---------");
        
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = 'Bearer ' + token;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        //do logic truoc khi run code 
        if (error.response?.status === 500) {
            console.log("co loi xay ra o api");
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;