
import {Component} from 'react';

import { Link } from 'react-router-dom';
class   Navbar extends Component{
    render(){
        return(
            <nav>
                <h2>Blog Post</h2>
                <div className='link'>
                    <Link to=" /">Home</Link>
                    <Link to="/Create">Create</Link>
                    <Link to="/Contact">Contact</Link>
                </div>
            </nav>
            
        );
    }
}
export default Navbar ; 