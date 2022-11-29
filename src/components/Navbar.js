import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return(
        <nav className='ui raised very padded segment'>
            <a className='ui teal inverted segment'>Vamsikrishna</a>
            <div className='ui right floated header'>
                <button className='ui button'>
                    <Link to="/home">Home</Link>
                </button>
                <button className='ui button'>
                    <Link to="/course">Course</Link>
                </button>
                <button className='ui button'>
                    <Link to="/settings">Settings</Link>
                </button>
                <button className="ui button">
                    <Link to="/Fetechuserdata">Fetch</Link>
                </button>
                <button className="ui button">
                    <Link to="/Login">Login</Link>
                </button>
            </div>
        </nav>
    )
}
export default Navbar