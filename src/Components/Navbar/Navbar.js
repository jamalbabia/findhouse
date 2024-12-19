import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./Navbar.css"
import { useAuth0} from "@auth0/auth0-react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";
import { CgLogIn ,CgLogOut } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { loginWithRedirect ,logout,user, isAuthenticated } = useAuth0();
  return (
    <div>
        <header>
            <div className='container'>
                <div className='logo' >
                    {/* <img src="images/logo.png" alt="logo" /> */}
                    <h1>FYH</h1>
                </div>
                <div className='nav'>
                <ul>
                    <li>
                        <a href='/' className='link'>Home</a>
                    </li>
                    <li>
                        <Link to='Houses' className='link'>Houses   </Link>
                    </li>
                    <li>
                        <Link to='/value' className='link'>About</Link>
                    </li>
                    <li>
                        <Link to='/value' className='link'>Contact</Link>
                    </li>
                </ul>
                </div>
                <div className='icon'>
                <div className='second_icon'>
                        <a href='/' className='link'><AiOutlineHeart/></a>
                        <a href='cart' className='link'><IoBagCheckOutline/></a>
                    </div>

                    {
                        isAuthenticated &&(
                            <div className='account'>
                            <span>Heloo, {user.name}</span>
                            <img src={user.picture}/>
                        </div>    
                        )
                    }
                    <div className='auth'>
                    {
                        isAuthenticated?
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CgLogOut /></button>                    
                        :
                        <button onClick={() => loginWithRedirect()}><CgLogIn /></button>
                    }
                </div>

                </div>
            </div>
    </header>
    </div>
  );
}
