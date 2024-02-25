import logo from './assets/me.jpg';
import './App.css';

function App() {
  return (
    <section>
      <div className='topContainer'>
        <div className='image'>
          <img src={logo} className="App-logo" alt=''/>
        </div>
        <div className='rightText'>
          <h1>Demetre Tinikashvili</h1>
          <p>Web Developer</p>
        </div>
      </div>
      <div className='middleContainer'> 
          <h1>Skills</h1>
        <div className='skillContainer'>
          <span>HTML</span>
          <span>CSS</span>
          <span>JAVASCRIPT</span>
          <span>REACT</span>
          <span>BOOSTRAP</span>
          <span>WORDPRESS</span>
        </div>
      </div>
      <div className='bottomContainer'>
          <h1>Description</h1>
          <div className='bottomText'>
            Welcome to my digital space! I'm
            Demetre, a passionate and creative
            web developer dedicated to crafting user-friendly
            and aesthetically pleasing websites. With a strong
            foundation in front-end and back-end technologies,
            I thrive on turning ideas into functional and
            visually appealing digital experiences.
          </div>
      </div>
    </section>
  );
}

export default App;
