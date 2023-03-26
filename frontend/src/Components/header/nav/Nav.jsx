import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import "../nav/nav.css";
import { Link } from 'react-router-dom';
import menu_mobil from "../../../asset/IMG/menu.png"
import { useState } from 'react';
import { GetSearchCars } from '../../../api/Cars/carsApi';
import { useQuery } from '@tanstack/react-query'


export const NavHeader = () => {
    const [inputSearch, setInputSearch] = useState("");
    const { data: query, error } = useQuery(['search', inputSearch], () => GetSearchCars(inputSearch), { keepPreviousData: true })

    if (error) return <div> <p>error:{error.message}</p></div>
    return (
        <nav className="navbar navbar-expand-lg  w-100" >
            <div className='container-fluid'>
                <Link className="navbar-brand" to="/"><img src='' alt='logo' title='logo' /></Link>

                <div className="nav-link search_movil  search d-flex">
                    <input type="search" placeholder='search'
                        value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} />

                    {inputSearch === "" ? "" : <div className='results_search w-100'>
                        {query.results.map(query => {
                            return <div key={query.id} className='card_search d-flex rounded'>
                                <img src={query.image_car} alt={query.brand.brand} className="rounded-start me-3 img_search" />
                                <div className='w-100'>
                                    <h5>{query.brand.brand}:{query.model}-{query.year.year}</h5>
                                    <p> <b>{query.guys.guys} </b></p>
                                    <hr />
                                    <p className='fs-5'>{query.price}/USD</p>
                                </div>
                            </div>
                        })}
                    </div>}
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span> <img src={menu_mobil} alt="menu" title="menu" className='menu_mobil' width="1.5rem" /></span>
                </button>
                <div className="collapse navbar-collapse w-100 p-1 justify-content-between" id="navbarNavDropdown">
                    <ul className="d-flex option navbar-nav">
                        <li className="me-5">
                            <Link to="/Vehicles" title='vehicles' className='nav-link navbar-link'>Vehicles</Link>
                        </li>

                        <li className="me-5">
                            <Link to="/contact" title="Contact" className="nav-link navbar-link">Contact</Link>
                        </li>

                        <li className='me-5'>
                            <div className="nav-link search_desktop  search d-flex">
                                <input type="search" placeholder='search'
                                    value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} />

                                {inputSearch === "" ? "" : <div className='results_search w-50'>
                                    {query.results.map(query => {
                                        return <div key={query.id} className='card_search d-flex rounded'>
                                            <img src={query.image_car} alt={query.brand.brand} className="rounded-start me-3 img_search" />
                                            <div className='w-100'>
                                                <h5 className='title_search'>{query.brand.brand}:{query.model}-{query.year.year}</h5>
                                                <p> <b>{query.guys.guys} </b></p>
                                                <hr />
                                                <p className='fs-5'>{query.price}/USD</p>
                                            </div>
                                        </div>
                                    })}
                                </div>}
                            </div>


                        </li>
                    </ul>
                    <ul className="d-flex me-5 login_log_in navbar-nav">
                        <li className="me-5  login">
                            <Link to="/login" className='nav-link'>login</Link>

                        </li>
                        <li className="ml-3 log_in">
                            <Link to="/Sign_up" className='nav-link'>Sign up</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}