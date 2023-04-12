import react, {Component} from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css'
import logo from '../../logo.png'; 

class Navbar extends Component {
render(){
    return(
<nav className="NavbarItems">
            <ul className='nav-menu'>
            {/* map through the items of the array to create your nav bar lists */}
                {MenuItems.map((item,index)=>{
                    return(
                        <li key={index}>
                            <a className={item.cName}href={item.url}>
                            {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <img src={logo} className="app-logo" alt="logo" />
            </nav>
                )
            }
       } 

export default Navbar; 