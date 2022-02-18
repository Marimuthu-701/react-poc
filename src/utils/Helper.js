import axios from "axios";

const Axios = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
            "Accept":"application/json",
            "x-qvie-api-key":process.env.REACT_APP_QVIE_API_KEY,
            "Language":"es"
        }
  });

export const httpPostRequest = async (url, data = null) => {
    if (data) {
        data = JSON.stringify({...data})
    }
    try {
        const response = await Axios.post(url, data);
        return response.data;
    } catch(error) {
        throw error;
    }
};

export const httpGetRequest = async (url, data = null) => {
    if (data) {
        data = JSON.stringify({...data})
    }
    try {
        const response = await Axios.get(url, data);
        return response.data;
    } catch(error) {
        throw error;
    }
}