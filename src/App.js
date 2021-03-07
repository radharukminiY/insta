import './App.css';
import LoginPage from './Components/Login/Login';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      {
          (localStorage.getItem("users")==undefined ||  localStorage.getItem("users")== null)?
          <Login/> : <Home/>
      }
    </div>
  );
}

export default App;
