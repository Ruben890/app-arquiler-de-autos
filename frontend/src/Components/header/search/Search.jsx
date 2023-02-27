import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import "../search/search.css"
import { useState, useEffect } from 'react';
import axios from 'axios';

const Guys_cars = () => {
    const [dataGuys, SetDataGuys] = useState([])

    useEffect(() => {
        const api = async () => {
            const url = 'http://127.0.0.1:8000/Cars/Guy_cars/'
            const response = await axios.get(url)
            SetDataGuys(response.data)

        }
        api()
    }, [])

    return {
        dataGuys,
    }
}

const YearCar = () => {
    const [dataYear, SetDataYear] = useState([])

    useEffect(() => {
        const api = async () => {
            const url = 'http://127.0.0.1:8000/Cars/year_cars/'
            const response = await axios.get(url)
            SetDataYear(response.data)

        }
        api()
    }, [])

    return {
        dataYear,
    }
}


const BranchCar = () => {
    const [dataBrach, SetDataBrach] = useState([])

    useEffect(() => {
        const api = async () => {
            const url = 'http://127.0.0.1:8000/Cars/branch_cars/'
            const response = await axios.get(url)
            SetDataBrach(response.data)

        }
        api()
    }, [])

    return {
        dataBrach,
    }
}
export const Search = () => {
    const { dataGuys } = Guys_cars()
    const { dataYear } = YearCar()
    const { dataBrach } = BranchCar()
    return (
        <div className='container-fluid search'>
            <form className='justify-content-sm-center p-3' method='get'>
                <input type="search" placeholder="Search" />
                <div className='options'>
                    <select className='btn_option'>
                        <option value="brand" style={{textAlign:"center"}}>Brand</option>
                        {dataBrach.map((data, index) => {
                            return (
                                <option key={index} value={data.brand} style={{textAlign:"center"}}>{data.brand}</option>
                            )
                        })}
                    </select>
                    <select className='btn_option'>
                        <option value="year" style={{textAlign:"center"}}>
                            Year
                        </option>
                        {dataYear.map((data, index) => {
                            return (
                                <option key={index} value={data.year} style={{textAlign:"center"}}>{data.year}</option>
                            )
                        })}
                    </select>
                    <select className='btn_option'>
                        <option value="Guys" style={{textAlign:"center"}}>Guys</option>
                        {dataGuys.map((data, index) => {
                            return (
                                <option key={index} value={data.guys} style={{textAlign:"center"}}>{data.guys}</option>
                            )
                        })}
                    </select>
                </div>
            </form>
        </div>
    )

}