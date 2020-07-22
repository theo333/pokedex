import React from 'react';

const Card = ({ id, name, weight, height }) => {
	return (
		<div className='card'>
			<p>#{id}</p>
			<p>Name: {name}</p>
			<p>Weight: {weight / 100} g</p>
			<p>Height: {height / 10} m</p>
		</div>
	);
};

export default Card;