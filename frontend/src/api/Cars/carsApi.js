import axios from "axios";

const CarsAPI = axios.create({
    baseURL: 'http://127.0.0.1:8000/Cars/'
})

export const GetCarsPagination = async (page = 1) => {

    const res = await CarsAPI.get(`car/?page=${page}`)
    return res.data
}

export const GetSearchCars = async (query) => {
    const res = await CarsAPI.get(`car/?search=${query}`)
    console.log(res.data)
    return res.data
}