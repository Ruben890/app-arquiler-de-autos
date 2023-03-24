import axios from "axios";

const CarsAPI = axios.create({
    baseURL: 'http://127.0.0.1:8000/Cars/'
})

export const getCars = async () => {
    const res = await CarsAPI.get('car/')
    return res.data
}