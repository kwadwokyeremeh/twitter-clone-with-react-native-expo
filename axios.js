import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://marginally-sunny-mongrel.ngrok-free.app/',
    //baseURL: 'https://kwadwo-kyeremeh.eu-1.sharedwithexpose.com',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axios