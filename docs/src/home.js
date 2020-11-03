import './index.css';
import NavBar from './NavBar';
import Footer from './Footer';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Me from './images/me.JPG'
function Home() {
  return (
    <div id='main'>
    <NavBar/>
    <div class='page'>
      <h1>My Personal Portfolio</h1>
      <div class="row">
      <div className= "column">
        <img className="sphonx_images" alt="Greek Sing 2020" src={Me}></img>
      </div>
      <div className="column">
      <p className="text"><b>About Me</b>
      <br/>
      <br/>
      <b>MAJOR: </b> Computer Science
      <br/>      
      <b>MINOR: </b> Applied Statistics
      <br/>
      <b>SCHOOL YEAR: </b> Undergraduate Junior 
      <br/>    
      <b>PROFFESIONAL INTERESTS: </b> Machine Learning, Data Science, Software Engineering, Full-Stack Development, Back-End Development
      <br/>
      <b>FAVORITE MUSICIANS (no order): </b> XXXTentacion, Dua Lipa, Denzel Curry, A$AP Rocky
      <br/>      
      <b>FAVORITE MOVIES (in order): </b> IT (2017), Jaws, Once Upon a Time in Hollywood
      <br/>            
      <br/>

      <b>Completely Subjective, Unrelated Stats About Me:</b>

      <br/>

      <span className="progress-label">Problem Solving</span>
      <ProgressBar variant="success" now={80} />
      
      <br/>


      <span className="progress-label">Dancing Skills</span>
      <ProgressBar variant="success" now={90} />
     

      <br/>


      <span className="progress-label">Humble</span>
      <ProgressBar variant="warning" now={50} />
      <br/>


      <span className="progress-label">Hand-Eye Coordination</span>
      <ProgressBar variant="danger" now={10} />

      <br/>


      <span className="progress-label">Fantasy Football Skills</span>
      <ProgressBar variant="success" now={85} />

      <br/>

      <span className="progress-label">Tetris Playing Abilities</span>
      <ProgressBar variant="success" now={100} />

      <br/>

      <span className="progress-label">Ability to Dunk a Basketball</span>
      <ProgressBar variant="danger" now={1} />

      </p> 
      </div>
      </div>
    </div>
    <Footer/>
    </div>
    
  );
}

export default Home;
