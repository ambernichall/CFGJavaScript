import react, {Component} from 'react';
import './Packages.css';

import BasicButton from './BasicButton';
import PremiumButton from './PremiumButton';
import PlatinumButton from './PlatinumButton';


class Packages extends Component{
    render(){
        return(
            <div className="PackagesContainer">
                <div className="basic">
                    {/* <img src="/media/BasicW.png"> */}
                    <h2 className='package-header'>4 beginner friendly classes</h2>
                    <p className='package-description'> The CFG BASICs come in.......</p>

                    {/* insert info icon here */}
                    {/* <img src= "/media/InfoIcon.png"> */}
                    {/* <i class="bi bi-info-circle-fill"></i><h5> More Info & Available packages</h5></i> */}
                   <BasicButton/>
                </div>
                <div className="premium">
                    {/* <img src="/media/PremiumW.png"> */}
                    <h2 className='package-header'>Specify in twenty five</h2>
                    <h3 className='package-subheader'>25 weeks that is</h3>
                    <p className='package-description' > A 25 week intermediate course, teaching you all there is to know about.....</p>
               
                    {/* insert info icon/ button here */}
                    <PremiumButton/>            
                 </div>
                <div className="platinum">
                        {/* <img src="/media/PlatinumW.png"> */}
                        <h2 className='package-header'>Upskill your career your way</h2>
                        <p className='package-description'>Whether you're revisiting tech or a couple years experience, this package is the one for you. In just 10 weeks you'll get acquianted with some new skills and a job placement!</p>

                     {/* <insert info icon here */}
                    <PlatinumButton/>
                </div>
            </div>
        )
    }
}

export default Packages;