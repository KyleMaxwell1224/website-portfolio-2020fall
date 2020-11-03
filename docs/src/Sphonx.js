import sphonx_pic from './images/sphonx_laptop.png';
import sphonx_pic2 from './images/the_sphonx.png';
import sphonx_pic3 from './images/sphonx_window.png';
import './index.css';
import NavBar from './NavBar';
import Footer from './Footer';
  
function Sphonx() {
  return (
    <div id='main'>
    <NavBar/>
    <div class='page'>
    <h1>The Great Sphonx</h1>
       <div className="row">
         <div className="column">
         <h2 className="subheading">How we got the Great Sphonx</h2>
          <p className="text">Sphonx is my kitten. We adopted her when she was about seven-weeks-old, and she
            is a pretty awesome cat. In her free time, she likes to attack me and eat food. Even though 
            owning her has led to many scratches, she is still very cool. Enjoy some pictures of her!
          </p>
         </div>
       <div className="column">
         <img className="sphonx_images" src={sphonx_pic} alt="Sphonx on a laptop"  />
       </div>
    </div>
    <div className="row">
         <div className="column">
           <img className="sphonx_images" src={sphonx_pic2} alt="Sphonx on the ground"  />
         </div>
       <div className="column">
         <img className="sphonx_images" src={sphonx_pic3} alt="Sphonx on the window sill"  />
       </div>
     </div>
    </div>
    <Footer/>
    </div>
  );
}
export default Sphonx;