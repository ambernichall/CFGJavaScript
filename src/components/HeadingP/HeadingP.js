import react, {Component} from 'react';
import './HeadingP.css';
// import image from './src/PackagesW';


class HeadingP extends Component{
    render(){
        return(
            <div className="HeadingPContainer">
                {/* <img src={image} ></img> */}
            <ul className="headingP-menu">
                 <li className="headingP-menu-list"><a className="heading-menu-a" href="https://codefirstgirls.com/">Home</a></li>
             {/* insert arrow icon instea */}
            <li className="headingP-menu-list"> >></li>
            <li className="headingP-menu-list">Packages</li>
            <li className="headingP-menu-list"> >></li>
            <li className="headingP-menu-list">Package Breakdown</li>
            </ul>
            </div>
        )
    }    
}
export default HeadingP;