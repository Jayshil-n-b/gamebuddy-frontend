import axios from "axios";

const apiEndpoint = axios.create({
    baseURL: 'http://127.0.0.1:5000/',
    header: {
        Accept: 'application/json',
    },
})

export default apiEndpoint