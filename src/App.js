import logo from './logo.svg';
import './App.css';

function App() {
  return (

  <div className="App">

      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

            <h1 className="title red" style={{color:"red"}}>Bahloul Hossem Eddine</h1>

              <br/ >

            <img src="/imageInSrc.png" alt='' />

              <br/ >

            <img src="/imageInPublic.png" alt=''/>

      </div>

            <video width="320" height="240" controls/>

            <source src="myVideo.mp4" type="video/mp4"/>

           
  </div>
  );
}

export default App;
