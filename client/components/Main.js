import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
	render() {
		return (
			<div>
				<h1>
					<Link to="/">Galeri Foto</Link>
				</h1>
				<p>Hello Main</p>
			</div>
		)
	}
});

export default Main;