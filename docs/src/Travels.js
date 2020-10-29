import './index.css';
import NavBar from './NavBar';
import Footer from './Footer';
  
function Travels() {
  return (
    <div id='main'>
    <NavBar/>
    <div class='page'>
      <h1>Travels</h1>
      <h2 class="subheading">Eastern Europe - 2016</h2>
      <p>I visited many Eastern European countries in 2016 because I participated
        in my school's foreign exchange club. Among the many cities we visted, my favorite city
        by far was Prague, Czech Republic. Here are some pictures from my trip there.
        
      </p>
    </div>
    <Footer/>
    </div>
  );
}
export default Travels;