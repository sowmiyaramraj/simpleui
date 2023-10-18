import './App.css';
import Shop from "./pages/shop";
import Navbar from "./pages/navbar";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
function App() {
  
  return (
    <div className="App">
      
      <Router>
        <Navbar/>
        <Shop/>
      </Router>   
     
    </div>
  );
}

export default App;
