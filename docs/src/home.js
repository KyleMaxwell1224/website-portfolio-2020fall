import logo from './logo.svg';
import './index.css';
import NavBar from './NavBar';
import Footer from './Footer';
  
function Home() {
  return (
    <div class='main'>
    <NavBar/>
    <div class='page'>
      <h1>My Personal Portfolio</h1>
      <p></p>
    </div>
    <Footer/>
    </div>
    
  );
}

export default Home;
