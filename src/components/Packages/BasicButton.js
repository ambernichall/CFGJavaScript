import react from 'react';
import './BasicButton.css'

const BasicButton =()=>{
    return(
        <div>
        <button className='basic-button'>
            {/* <a href> tag is used to link the button to a new web page when clicked */}
            <a  className='basic-link'href="" target="_self">
            More Info & Available packages
            </a>
           </button>
        </div>
    );
    }

    export default BasicButton;