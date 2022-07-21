import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const RecycleBin = () => {
    return (
      <div className='d-flex'>
          <Sidebar></Sidebar>
          <div>
            <h1>Papelera de reciclaje</h1>
          </div>
      </div>
    );
}

export default RecycleBin;
