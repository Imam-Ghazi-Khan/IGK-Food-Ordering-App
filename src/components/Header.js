import LOGO from '../../images/igk_logo.png'
import { Link } from 'react-router-dom';


const Header = () => (
    <div className="header">
        <Link className='link' to={"/"}>
            <div className="logo-container">
                <img className="logo" src={LOGO} alt="Food Logo"/>
            </div>
        </Link>
        <div className="nav-items">
            <ul>
                <li>
                    <Link className='link' to={"/"}>Home</Link>
                </li>
                <li>
                    <Link className='link' to={"/about"}>About</Link>
                </li>
                <li>
                    <Link className='link' to={"/contact"}>Contact Us</Link>
                </li>
                <li>
                    <Link className='link' to={"/cart"}>Cart</Link>
                </li>
            </ul>
        </div>
    </div>
)

export default Header;