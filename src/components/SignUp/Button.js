import react from 'react';
import './Button.css'

const Button =()=>{
    return(
        <div>
        <button>
            {/* <a href> tag is used to link the button to a new web page when clicked */}
            <a  href="https://react.school" target="_self">
            click here to learn more
            </a>
           </button>
        </div>
    );
    }

    export default Button;