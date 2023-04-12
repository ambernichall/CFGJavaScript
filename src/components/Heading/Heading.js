import react, {Component} from 'react';
import './Heading.css';
// import image from './src/PackagesW';


class Heading extends Component{
    render(){
        return(
            <div className="HeadingContainer">
                {/* <img src={image} ></img> */}
            <ul className="heading-menu">
                 <li className="heading-menu-list"><a className="heading-menu-a" href="https://codefirstgirls.com/">Home</a></li>
             {/* insert arrow icon instea */}
            <li className="heading-menu-list"> >></li>
            <li className="heading-menu-list">Packages</li>
            </ul>
            </div>
        )
    }    
}
export default Heading;