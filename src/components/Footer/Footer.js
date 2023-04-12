import react, {Component} from 'react';
import { LegalItems } from "./LegalItems";
import { SocialItems } from "./SocialItems";
import { LinkItems } from "./LinkItems";
import './Footer.css';


class Footer extends Component{
    render(){
        return(
            <nav className="FooterContainer">
                <ul className="legal">
                <h3 className="legal-header">LEGAL DOCS & FAQS</h3>
                        <ul className='legal-menu'>
                        {/* <li className="legal-text">LEGAL DOCS & FAQS</li> */}
                    {/* map through the items of the array to create your nav bar lists */}
                        {LegalItems.map((item,index)=>{
                            return(
                                <li className='legal-link' key={index}>
                                    <a className={item.cName}href={item.url}>
                                    {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>     
                </ul>
                <div className="socials">
                    <h2 classname="social-header">GET SOCIAL WITH US</h2>
                        <ul className='social-menu'>
                        {/* map through the items of the array to create your nav bar lists */}
                            {SocialItems.map((item,index)=>{
                                return(
                                    <li className='social-link' key={index}>
                                        <a className={item.cName}href={item.url}>
                                        {item.title}
                                        {/* place icon above instead of title once library downloaded */}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>       
                 </div>
                <div className="links">
                    <h3 className="link-header">QUICK LINKS</h3>
                        <ul className='link-menu'>
                    {/* map through the items of the array to create your nav bar lists */}
                        {LinkItems.map((item,index)=>{
                            return(
                                <li className='link-link'key={index}>
                                    <a className={item.cName}href={item.url}>
                                    {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>  
                </div>
                <footer><p className="footer-text">© Code First Girls Ltd 2023</p></footer>
            </nav>
        )
    }
}

export default Footer;