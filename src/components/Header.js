import LOGO from '../../images/igk_logo.png'
import { Link } from 'react-router-dom';


const Header = () => (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO} alt="Food Logo"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact Us</Link>
                </li>
                <li>
                    <Link to={"/cart"}>Cart</Link>
                </li>
            </ul>
        </div>
    </div>
)

export default Header;