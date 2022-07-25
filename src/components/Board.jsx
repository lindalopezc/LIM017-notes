import React from 'react';
import NavBar from './NavBar';
import Sidebar from './Sidebar';
import Card from './Card';

const Board = () => {
    return (
        <div className='d-flex'>
					<Sidebar></Sidebar>
					<div className='w-75 d-flex flex-column'>
						<NavBar></NavBar>
						<div className='d-flex'>
							<div className='w-25 container d-flex flex-column'>
								<p>To do</p>
								<Card></Card>
								<Card></Card>
							</div>
							<div className='w-25 container d-flex flex-column'>
								<p>In progress</p>
								<Card></Card>
								<Card></Card>
							</div>
							<div className='w-25 container d-flex flex-column'>
								<p>In Review</p>
								<Card></Card>
								<Card></Card>
							</div>
							<div className='w-25 container d-flex flex-column'>
								<p>Done</p>
								<Card></Card>
								<Card></Card>
							</div>
						</div>
					</div>
        </div>
    );
}

export default Board;
