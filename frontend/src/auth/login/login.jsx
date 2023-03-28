import "../login/login.css";
import Google_ico from "../../asset/IMG/google.png"
import Facebook_ico from "../../asset/IMG/facebook.png"
import { Link } from "react-router-dom";
import { useShowPassword } from "../../hooks/usesSetShowPassword";
const Login = () => {
    const { showPassword, password_hidden } = useShowPassword()

    return (
        <>
            <div className="container-fluid d-flex justify-content-center p-4">
                <form className=" form-group p-5" method="">
                    <div className="d-flex justify-content-center mb-5"><h2> Login</h2></div>
                    <input type="text" className="form-control mb-3" placeholder="Username or Email" name="email" />
                    <input type={showPassword ? "text" : "password"} className="form-control mt-3" placeholder="password" name="Password" />
                    <div className="password-hidden d-flex mt-1">
                        <input type="checkbox" checked={showPassword} onChange={password_hidden} />
                        <p>show password</p>
                        <Link to="/Sign_up" className="register">Register</Link>
                    </div>
                    <div className="">
                        <div className="login_googles">
                            <a href="/" title="google" className="d-flex">
                                <img src={Google_ico} title="google" alt=".." />
                                <p>start section with google</p>
                            </a>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <button type="submit" className="btn btn-primary w-50">Login</button>
                    </div>


                </form>
            </div>
        </>
    )

}
export default Login