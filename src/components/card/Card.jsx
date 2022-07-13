import React from 'react';

const Card = (task) => {
    return (
        <div>
            <h1>Mi primer componente</h1>
            <img src = {task.img} alt = 'task' />
        </div>
    );
}

export default Card;
