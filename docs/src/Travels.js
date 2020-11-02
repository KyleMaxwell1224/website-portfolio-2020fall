import './index.css';
import NavBar from './NavBar';
import Footer from './Footer';
import czech1 from './images/Travels/czech1.jpg'
import AwesomeSlider from 'react-awesome-slider';
import sphonx_laptop from './images/sphonx_laptop.png';
import 'react-awesome-slider/dist/styles.css';


function Travels() {

  return (
    <div id='main'>
    <NavBar/>
    <div class='page'>
      <h1>Travels</h1>
      <h2 class="subheading">Eastern Europe - 2016</h2>
       <p>I visited many Eastern European countries in 2016 because I participated
        in my school's foreign exchange club. Among the many cities we visted, my favorite city
        by far was Prague, Czech Republic. Here are some pictures from my trip there.</p>
        <AwesomeSlider style={{height: "auto"}} className="img-carousel">
    <div style={{height: "100%"}} className="imgs-in-carousel" data-src={czech1} />
    <div style={{height: "40%"}} className="imgs-in-carousel" data-src={czech1}/>
    <div className="imgs-in-carousel" data-src={czech1} />
  </AwesomeSlider>
        </div>
    <Footer/>
    </div>
  );
}

function nflApiCall(){

}
export default Travels;