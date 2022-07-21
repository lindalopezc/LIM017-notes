import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Project from './Project/Project';


const Projects = () => {
    return (
        <div className='d-flex'>
         <Sidebar></Sidebar>
            <div>
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
            </div>
        </div>
    );
}

export default Projects;
