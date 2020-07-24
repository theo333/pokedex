import React from 'react';

// displays Pokemon info
const Card = ({ id, name, weight, height }) => {
	return (
		<div className='card-info'>
			<p>#<span>{id}</span></p>
			<p>Name: <span>{name}</span></p>
			<p>Weight: <span>{weight / 100} g</span></p>
			<p>Height: <span>{height / 10} m</span></p>
		</div>
	);
};

export default Card;