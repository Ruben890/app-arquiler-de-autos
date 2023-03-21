import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../page/home/hom';
import Login from '../auth/login/login';
import { SignUp } from '../auth/log_in/Sign_up';
import About from '../page/about/about';
import { Contact } from '../page/Contact/Contact';
const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Sign_up" element={<SignUp />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;