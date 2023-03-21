import "../log_in/Sing_up.css"
import { useState, useEffect } from "react"
import axios from "axios"
import { useShowPassword } from "../../hooks/usesSetShowPassword"
import { Link } from "react-router-dom"

const CountryApi = () => {
    const [CountryData, SetCountry] = useState([])

    useEffect(() => {
        const ApiCountry = async () => {
            const url = `https://restcountries.com/v2/all`
            const response = await axios.get(url)
            SetCountry(response.data)
        }
        ApiCountry()
    }, [])


    return {
        CountryData,
    }
}

export const SignUp = () => {
    const { CountryData } = CountryApi()
    const { showPassword, password_hidden } = useShowPassword()
    return (
        <div className="container d-flex justify-content-center">
            <form method="post" className="form-group border border-0">
                <h2 className="d-flex  w-100 justify-content-center pt-5 ">Sign up</h2>
                <div className="form-group_register p-5 ">
                    <div className="info-01 w-50 m-2 me-5">
                        <label className="form-label">Name</label>
                        <input type="text" placeholder="Name" name="Name" className="form-control" required />
                        <label className="form-label">LastName</label>
                        <input type="text" placeholder="LastName" name="LastName" className="form-control" required />
                        <label >Country</label>
                        <select name="Country" className="d-block p-2 rounded" required>
                            <option>Country</option>
                            {CountryData.map((country) => {
                                return (
                                    <option key={country.alpha2Code}>{country.name}</option>
                                )

                            })}
                        </select>
                        <label className="form-label">address</label>
                        <input type="text" name="provinces" placeholder="address" required className="form-control" />
                        <label className="form-label">Street</label>
                        <input type="text" name="provinces" placeholder="Street" required className="form-control" />
                    </div>
                    <div className="info-02 w-50 m-2 ms-5">
                        <label className="form-label">Email</label>
                        <input type="text" name="Email" placeholder="Email" required className="form-control" />
                        <label className="form-label"> Password</label>
                        <input type={showPassword ? "text" : "password"} name="Password" placeholder="Password" required className="form-control" />
                        <label className="form-label"> Password</label>
                        <input type={showPassword ? "text" : "password"} name="Password" placeholder="Password" required className="form-control" />
                        <div className="password-hidden d-flex mt-1">
                            <input type="checkbox" checked={showPassword} onChange={password_hidden} />
                            <p>show password</p>
                        </div>
                        <div >
                            <button type="submit" className="btn btn-primary w-50">Register</button>
                            <p className="p-2">
                                <Link to="/login" >I already have an account</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </form>

        </div>


    )
}
