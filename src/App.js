import './App.css';

import Navbar from "./components/Navbar/Navbar"
import Heading from "./components/Heading/Heading"

import Intro from "./components/IntroPackages/Intro"

import HeadingP from './components/HeadingP/HeadingP';
import Packages from "./components/Packages/Packages"

import SignUp from './components/SignUp/SignUp';
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
<Navbar/>
<Heading/>
<Intro/>
{/* use HeadingP when viewing Packages & Heading when viewing Intro */}
{/* <HeadingP/>
<Packages/> */}
<SignUp/>
<Footer/> 
</div> 
  );
}
 
export default App;
 