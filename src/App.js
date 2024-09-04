import Navbar from './component/navbar';
import './App.css';
import CreateBlog from './component/Create';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link}  from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import Home from './component/home.js';
import Create from './component/Create.js';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
        <div className='content'>
          <Switch>
            <Route  path="/Home">
              <Home/>
            </Route>
            <Route path="/Create"> 
              <Create/>
            </Route>
          
          </Switch>
        </div>
      
    </div>
    </Router>
  );
}

export default App;