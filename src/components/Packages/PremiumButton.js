import react from 'react';
import './PremiumButton.css'

const PremiumButton =()=>{
    return(
        <div>
        <button className='premium-button'>
            {/* <a href> tag is used to link the button to a new web page when clicked */}
            <a className='premium-link' href="" target="_self">
            More Info & Available packages
            </a>
           </button>
        </div>
    );
    }

    export default PremiumButton;