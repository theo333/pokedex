import React, { useState, createContext } from 'react';

// create Context Object
export const PokedexContext = createContext();

// create Context Provider for components to consume & listen for changes
export const PokedexContextProvider = props => {
	const [idPokemon, setIdPokemon] = useState(1);
	const [nameSearch, setNameSearch] = useState('');

	return (
		<PokedexContext.Provider value={[idPokemon, setIdPokemon, nameSearch, setNameSearch]}>
			{props.children}
		</PokedexContext.Provider>
	);
};