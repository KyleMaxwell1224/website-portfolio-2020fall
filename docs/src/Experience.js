import './index.css';
import NavBar from './NavBar';
import Footer from './Footer';

function Experience() {
    return (
        <div id='main'>
            <NavBar/>
            <div className='page'>
               <h2 className="subheading">Non-CS Work Experience</h2>
                <p className="text">Since my entering in the world in 1999, I've held some pretty cool jobs. In the Summer of 2020, I was 
                fortunate enough to spend my time as a Software Engineering Intern at a start-up company in Pittsburgh. On my resume, that job sits at the top
                of my list. However, there is also a lot of really cool jobs that I previously spent time on, and this page essentially acts as the origin
                story for my professional resume.
                </p>
                <div className='experience-box'>
                    <h2 className="subheading">Green Beans Coffee</h2>
                    <p><b>Apr. 2019 - Dec. 2019</b></p>
                    <b>Position: </b> Barista
                    <p><b>Summary: </b>Green Beans Coffee is the most recent non-programming job I've had. I consider myself a very creative person when it comes to making 
                        drinks. Initially, I wanted to work as a bartender in the summer, but I wasn't able to get a position doing that. Instead, I got 
                        hired to make coffee at a place called Green Beans Coffee. The unique part of this job was the location. Green Beans was located 
                        in the Pittsburgh airport, so I had to go through airport security every shift. I also worked alone, which was depressing at first. 
                        But as time went on, I started to appreciate the responsibility of working without supervision. Unfortunately, on December 31st, 2019,
                        Green Beans Coffee closed down at the airport. I was sad to see that happen, but I also had the honor of being the last employee working.

                        <br/>
                    <b>Best part of the job: </b> Being able to rely on just myself. <br/>
                    <b>Notable Moments: </b>Being the last employee at the Pittsburgh branch working.
                    </p>
                </div>

                <div className='experience-box'>
                    <h2 className="subheading">Main Event Entertainment</h2>
                    <p><b>Feb. 2018 - Aug. 2018</b></p>
                    <b>Position: </b> Bowl Desk Lead
                    <p><b>Summary: </b>Main Event, for those that haven't heard of it, is a Dave-and-Busters-type setting. There's multiple divisions at Main Event, such as 
                        the bowling area, the arcade, dining, etc. After two months of working at Main Event as a regular Bowl Desk employee, I was 
                        promoted to be the lead of the bowl desk, which just meant that I would oversee the workers in that area.<br/>
                    <b>Best part of the job: </b>The fun atmosphere. <br/>
                    <b>Awards: </b>April 2018 Employee of the Month
                    </p>
                </div>

                <div className='experience-box'>
                    <h2 className="subheading">Cinemark</h2>
                    <p><b>Dec. 2016 - Dec. 2017</b></p>
                    <b>Position: </b> Box Office Attendant
                    <p><b>Summary: </b>Cinemark was the first job I've held, and it really helped develop my work ethic. I got to work with kids my age and 
                        meet new people. I also learned the art of making small-talk because awkward silence with customers kills me. 
                    I mostly spent my time working in the box-office (the luxury position at Cinemark), but I also got to work in the concession stand 
                    and as the guy that would clean theaters after the movie. Cleaning the theaters was also a really good position because 
                    you could <i>sometimes</i> slack off and watch movies. I'm also a massive cinephile, so this job was perfect for me.<br/>
                    <b>Best part of the job: </b>Free popcorn and movies. <br/>
                    <b>Awards: </b>May 2017 Employee of the Month
                    </p>
                </div>    
            </div>
         <Footer/>
    </div>
    );
}

export default Experience;