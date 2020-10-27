import './index.css';
import NavBar from './NavBar';
import Footer from './Footer';
  
function Movies() {
  return (
    <div id='main'>
    <NavBar/>
    <div class='page'>
      <h1>Top Movies</h1>
      <p></p>
    </div>
    <Footer/>
    </div>
  );
}
export default Movies;