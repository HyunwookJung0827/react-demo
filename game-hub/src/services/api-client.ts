import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '381615e70f964a27954402d88647b8c7'
    }
})