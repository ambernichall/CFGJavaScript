import react, {Component} from 'react';
import './Intro.css';

class Intro extends Component{
    render(){
        return(
            <div className="IntroContainer">
                <div className="Introside">
                    <ul className="textbox">
                        <h1 className='kick'>BECOME A KICK ASS DEVELOPER</h1>
                        {/* <img src="/media/Become a kick ass.png"> */}
                    <p className="stats">The time is now. With <span class="bolded"> women representing only ~17% of the tech industry</span>, we are dedicated to moving this stat in the right direction! </p>
                    <p className="stats">Our role is to help more women gain the skills, confidence and tools they need to kick-start, revamp, or reignite their career in tech through our courses and job opporunities. </p> 
                    </ul>
                </div>
                <div className="Intromain">
                    <ul className="imagebox">
                      {/* <img src="/media/Package1.png"></img> */}
                     <p>image goes here</p>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Intro;