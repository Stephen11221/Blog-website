import Navbar from './component/navbar';
import './App.css';
import CreateBlog from './component/Create';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link}  from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import Home from './component/home.js';
import Contact from './component/Contact.js';
import Create from './component/Create.js';
function App() {
  return (
    <Router>
    <div className="app">
      <Navbar/>
        <div className='content'>
          <Switch>
            <Route   path="home">
              <Home/>
            </Route>
            <Route path="/Create"> 
              <Create/>
            </Route>
            <Route path="/Contact">
              <Contact/>
            </Route>
          </Switch>
        </div>
      
    </div>
    </Router>
  );
}

export default App;