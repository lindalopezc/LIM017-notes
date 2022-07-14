import React from 'react';

const Card = ({img}) => {
    return (
        <div>
            <h1>Mi primer componente</h1>
            <img src={img} alt='task'/>
        </div>
    );
}

export default Card;
