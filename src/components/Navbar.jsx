import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            <li><Link to="/">Issues</Link></li>
            <li><Link to="/pull">Pull Request</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/wiki">Wiki</Link></li>
            <li><Link to="/security">Security</Link></li>
            <li><Link to="/insight">Insight</Link></li>
            <li><Link to="/setting">Setting</Link></li>
        </div>
    )
}

export default Navbar