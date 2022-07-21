import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Project from './Project/Project';
import NavBar from '../NavBar/NavBar';


const Projects = () => {
    return (
        <div className='d-flex'>
            <Sidebar></Sidebar>
						<div className='w-100 d-flex flex-column'>
							<NavBar></NavBar>
							<div className='container-projects'>
								<Project></Project>
								<Project></Project>
								<Project></Project>
								<Project></Project>
							</div>
						</div>
        </div>
    );
}

export default Projects;
