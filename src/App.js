import React, { Component } from 'react';

import './styles/common.style.scss';

export default class App extends Component {
	render() {
		return (
			<div className='bg'>
				<div className='hero-text'>
					<h1 style={{ fontSize: 50 }}>Weekend!!! :))</h1>
					<p>I'm a Developer</p>
					<button>Hire me</button>
				</div>
			</div>
		);
	}
}
