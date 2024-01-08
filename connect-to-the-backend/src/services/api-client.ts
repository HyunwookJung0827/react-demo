// We gonna create a new axios client with a custom configuration
import axios, {CanceledError} from 'axios';

export default axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    // headers: {
    //     'api-key': '...'
    // } 
    // This header will be sent with every HTTP request.
    // Some backends require us to send an API key with every request.
})

export {CanceledError};