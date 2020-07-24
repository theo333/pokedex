import React, { useState, createContext } from 'react';

// create Context Object
export const PokedexContext = createContext();

// create Context Provider for components to consume & listen for changes
export const PokedexContextProvider = props => {
	const [idOrName, setIdOrName] = useState(1);
	const [nameSearch, setNameSearch] = useState('');
	const [displayCard, setDisplayCard] = useState(false);
	const [error, setError] = useState('');

	const value = [
		idOrName,
		setIdOrName,
		nameSearch,
		setNameSearch,
		displayCard,
		setDisplayCard,
		error,
		setError,
	];
	return (
		<PokedexContext.Provider value={value} >
			{props.children}
		</PokedexContext.Provider>
	);
};