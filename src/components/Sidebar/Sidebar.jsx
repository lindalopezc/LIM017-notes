import React, { useState} from 'react';
import Item from './Item/Item';
import { Links } from './sidebar-data';


const Sidebar = () => {
    
    const [open, setOpen] = useState(false);
    return (
        <div className = {open ? "sidebarOpen" : "sidebar"}>
            <svg className = "hamburger" onClick={() => setOpen (!open)} width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="#8F8F8F"/>
            </svg>
            <div className="linksContainer">
              {Links && Links.map(({text, to, svg}) => {
                return <Item text = {text} to = {to} svg = {svg} open = {open}/>
              })}
            </div>
        </div>
    );
}

export default Sidebar;
