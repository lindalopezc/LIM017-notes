import React from 'react';
import Card from './Card/Card';

const Board = () => {
    return (
        <div>
            <div>
                <h1>To do</h1>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            <div>
                <h1>In progress</h1>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            <div>
                <h1>In Review</h1>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            <div>
                <h1>Done</h1>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    );
}

export default Board;
