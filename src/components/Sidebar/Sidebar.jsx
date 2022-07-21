import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
      <div className='d-flex flex-column'>
						<Link to="/profile"> My profile</Link>
						<Link to="/projects">My projects</Link>
						<Link to="/recycle-bin">Recycle Bin</Link>
						<a href='/'>Sign out</a>
      </div>
    );
}

export default Sidebar;
