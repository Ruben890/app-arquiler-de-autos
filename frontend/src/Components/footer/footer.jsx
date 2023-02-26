import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <footer className="bg-dark p-5 container-fluid">
            <div>
                <ul className="text-light list-inline">
                    <li className="list-inline-item">
                        <Link to="/" title="privacy policies">privacy policies</Link>
                    </li>
                    <li>  <Link to="/about" title="About" >About
                    </Link></li>
                </ul>
            </div>
        </footer>
    )
}