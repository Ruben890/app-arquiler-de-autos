import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import "../nav/nav.css";
import { Link } from 'react-router-dom';
import menu_mobil from "../../../asset/IMG/menu.png"
import { useState } from 'react';


export const NavHeader = () => {
    const [inputSearch, setInputSearch] = useState("");
    return (
        <nav className="navbar navbar-expand-lg  w-100" >
            <div className='container-fluid'>
                <Link className="navbar-brand" to="/"><img src='' alt='logo' title='logo' /></Link>
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
                            <form className="nav-link form_search d-flex">
                                <input type="text" placeholder='search'
                                    value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} />
                            </form>

                            {inputSearch === "" ? "" : <div className='results_search'>
                                {inputSearch}
                            </div>}


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