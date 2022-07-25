import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser, FaListUl, FaTrashAlt, FaReplyAll} from "react-icons/fa";

const Sidebar = () => {
    return (
      <div className='sidebar d-flex flex-column p-4'>
        <p className='text-logo'>Go Task!</p>
				<Link to="/profile"> <FaRegUser/> My profile</Link>
				<Link to="/projects"><FaListUl/> My projects</Link>
				<Link to="/recycle-bin"><FaTrashAlt/> Recycle Bin</Link>
				<a href='/'><FaReplyAll/> Sign out</a>
      </div>
    );
}

export default Sidebar;
