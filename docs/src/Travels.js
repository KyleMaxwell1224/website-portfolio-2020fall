import './index.css';
import NavBar from './NavBar';
import Footer from './Footer';
import czech1 from './images/Travels/czech1.jpg'
import czech2 from './images/Travels/czech2.jpg'
import czech3 from './images/Travels/czech3.jpg'
import czech4 from './images/Travels/czech4.jpg'
import czech5 from './images/Travels/czech5.jpg'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


function Travels() {

  return (
    <div id='main'>
    <NavBar/>
    <div class='page'>
      <h1>Travels</h1>
      <h2 class="subheading">Eastern Europe - 2016</h2>
       <p className="text">I visited many Eastern European countries in 2016 because I participated
        in my school's foreign exchange club. Among the many cities we visted, my favorite city
        by far was Prague, Czech Republic. Here are some pictures from my trip there.</p>
        <div className="slider">
        <AwesomeSlider style={{marginBottom: "2rem"}} className="img-carousel">
         <div style={{marginLeft: "25%", marginRight: "50%", width:"50%"}} className="imgs-in-carousel" data-src={czech1} />
        <div style={{marginLeft: "25%", marginRight: "50%", width:"50%"}}   className="imgs-in-carousel" data-src={czech2}/>
        <div style={{marginLeft: "25%", marginRight: "50%", width:"50%"}}  className="imgs-in-carousel" data-src={czech3} />
        <div style={{marginLeft: "25%", marginRight: "50%", width:"50%"}}  className="imgs-in-carousel" data-src={czech4} />
        <div style={{marginLeft: "25%", marginRight: "50%", width:"50%"}}  className="imgs-in-carousel" data-src={czech5} />
        </AwesomeSlider>
       </div>

    </div>
    <Footer/>
    </div>
  );
}

export default Travels;