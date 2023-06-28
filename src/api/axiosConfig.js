import axios from "axios";

export default axios.create({
    baseURL:'http://localhost:8085/api/v1/',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Allow requests from any origin
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS', // Allowed HTTP methods
      },
})