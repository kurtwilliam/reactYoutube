import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyDV1aaSFonkv8aL4ak-OxM5GM2B_qMF9B0';

class App extends Component {
	constructor(props){
		super(props);

		this.state = { videos: [] };

		YTSearch({key:API_KEY, term:'surfboards'}, (videos) => {
			this.setState({ videos })
		})
	}
	render() {		
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

// take this components generated html and put on page (in dom)
ReactDOM.render(<App />, document.querySelector('.container'));