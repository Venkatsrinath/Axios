import { Link } from "react-router-dom";
import "./header.css";
const Header =()=>{
    return (
        
             <header  className="header_s">REACTs
             <ul>
                <li>
                    <Link className="anchor_cust" to="/general">General</Link>
                </li>
                <li>
                    <Link className="anchor_cust" to="/business">Business</Link>
                </li>
                <li>
                    <Link className="anchor_cust" to="/entertainment">Entertainment</Link>
                </li>
                <li>
                    <Link className="anchor_cust" to="/health">Health</Link>
                </li>
                <li>
                    <Link className="anchor_cust" to="/science">Science</Link>
                </li>
                <li>
                    <Link className="anchor_cust" to="/sports">Sports</Link>
                </li>
                <li>
                    <Link className="anchor_cust" to="/technology">Technology</Link>
                </li>

                <li>
                    <Link className="anchor_cust" to="/contact"  >CONTACT</Link>
                </li>
             </ul>
             </header>
        
    )
}
export default Header;