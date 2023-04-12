import react from 'react';
import './PlatinumButton.css'

const PlatinumButton =()=>{
    return(
        <div>
        <button className='platinum-button'>
            {/* <a href> tag is used to link the button to a new web page when clicked */}
            <a className='platinum-link' href="" target="_self">
            More Info & Available packages
            </a>
           </button>
        </div>
    );
    }

    export default PlatinumButton;