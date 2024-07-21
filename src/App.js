import './App.css';
import Logo from './assets/Mentoons logo.png';
import inventor from './assets/Camera/Camera.png';
import Camera from './assets/Camera/Camera 2.png'

function App() {
  return (
    <div>
      <div className="header text-center p-2 shadow-lg">
        <img src={Logo} width="200px" alt="logo"/>
      </div>
      <div className="quiz-section m-4 d-flex justify-content-center align-items-center">
        <div className="row g-0 quiz-row rounded">
          <div className="col d-flex align-items-center justify-content-center">
            <img src={inventor} alt="Inventor Image" height="350px" />
          </div>
          <div className="col p-2 text-center">
            <form>
            <h3 className="text-center">Who Invented Camera?</h3>
            <img src={Camera} alt="camera" width="100px"/>
            <div className="select-inventor rounded mt-4 p-2">
              <input type="radio" name="inventor" value="Dennis" />
              <label className="form-label ms-3">Nicéphore</label>
            </div>
            <div className="select-inventor rounded mt-4 p-2">
              <input type="radio" name="inventor" value="Mark" />
              <label className="form-label ms-3">Mark</label>
            </div>
            <div className="select-inventor rounded mt-4 p-2">
              <input type="radio" name="inventor" value="Steve" />
              <label className="form-label ms-3">Steve</label>
            </div>
            <div className="select-inventor rounded mt-4 p-2">
              <input type="radio" name="inventor" value="John" />
              <label className="form-label ms-3">John</label>
            </div>
            <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-success" type="submit">Submit</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
