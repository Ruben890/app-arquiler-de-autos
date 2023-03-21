import axios from "axios";

export const year_cars = async () => {
    const url = 'http://127.0.0.1:8000/Cars/year_cars/'
    const res = await axios.get(url)
    return res.data

}