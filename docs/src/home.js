import logo from './logo.svg';
import './index.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { Container } from 'react-bootstrap';
  
function Home() {
  return (
    <div class='main'>
    <NavBar/>
    <div class='page'>
      <h1>My Personal Portfolio</h1>
      <Container>
      <h2 class="subheading">About Me</h2>
      <p>bsuh</p>
      </Container>
    </div>
    <Footer/>
    </div>
    
  );
}

export default Home;
