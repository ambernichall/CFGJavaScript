import react, {Component} from 'react';
import './SignUp.css';
import Button from './Button'

class SignUp extends Component{
    render(){
        return(
            <div className="SignUpContainer">
                <div className="SignUpLeft">
                <p className='discover'>Disover our coding packages</p>
                </div>
            <div className="SignUpRight">
                <Button/>
            </div>
            </div>
        )
    }
}

export default SignUp;