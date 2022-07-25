import React from 'react';

const Card = () => {
	const d = new Date();
	const dateString = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
    d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);

    return (
        <div className='card task w-100 d-flex flex-column align-items-center'>
            <div className='d-flex'>
              <p className='date'>Last. modif: {dateString}</p>
							<button>...</button>
            </div>
            <div>
              <img src = 'https://i.pinimg.com/736x/a5/05/8f/a5058f438966a828f8f282d14ad65da8.jpg' alt = 'task' />
              <p>Título de tarea</p>
              <p>Texto de tarea</p>
            </div>
        </div>
    );
}

export default Card;
