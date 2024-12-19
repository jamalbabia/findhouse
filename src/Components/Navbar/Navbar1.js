import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./Navbar1.css"
import { useAuth0} from "@auth0/auth0-react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";
import { CgLogIn ,CgLogOut } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function Navbar1() {
  const { loginWithRedirect ,logout,user, isAuthenticated } = useAuth0();
  return (
    <div>
    <header>
        <div class="menu_toggle">
            <span></span>
        </div>
        <div class="logo">
            <p><span>FY</span>H</p>
        </div>
        <ul class="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/houses">Houses</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="auth">
        {   isAuthenticated?
                            <div className='account'>
                            <span>Heloo, {user.name}</span>
                            <img src={user.picture}/>
                        </div>    
                :
                <button class="login_btn" onClick={() => loginWithRedirect()}>LOGIN</button>}
        </div>
    </header>

    </div>
  );
}
