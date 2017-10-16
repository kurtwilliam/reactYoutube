import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

//Create a newcomponent, whichwillproduce somehtml

const API_KEY = 'AIzaSyDV1aaSFonkv8aL4ak-OxM5GM2B_qMF9B0';

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// take this components generated html and put on page (in dom)
ReactDOM.render(<App />, document.querySelector('.container'));