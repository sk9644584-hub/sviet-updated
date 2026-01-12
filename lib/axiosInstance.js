// src/api/axiosInstance.js
import axios from "axios";
const baseURL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;
 
if (!baseURL) {
    throw new Error("Please Provide API URL (API_URL or NEXT_PUBLIC_API_URL) in your .env file");
}
const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});


export default axiosInstance;
