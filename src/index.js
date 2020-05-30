import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Get Components
import IndecisionApp from './components/IndecisionApp';

//Get Normalizer
import 'normalize.css/normalize.css';

//Get Styles
import './styles/style.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

/* 
//class syntax changes

class OldSyntax {
	constructor() {
		this.name = 'Fish';
	}
	getGreeting() {
		return `Hi. My name is ${this.name}`;
	}
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax.getGreeting());

//------------------------------------------

class NewSyntax {
	name = 'Laverr';
	getGreeting = () => {
		return `Hi my name is ${this.name}`;
	};
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());
 */

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
/* 
//Accessing Children

const Layout = (props) => {
	return (
		<div>
			<p>Header</p>
			{props.content}
			<p>Footer</p>
		</div>
	);
};

const template = (
	<div>
		<h1>Page Title</h1>
		<p>This is my Page</p>
	</div>
);

ReactDOM.render(<Layout content={template} />, document.getElementById('app'));

//------------------------------------------

const Layout = (props) => {
	return (
		<div>
			<p>Header</p>
			{props.children}
			<p>Footer</p>
		</div>
	);
};

const template = (
	<div>
		<h1>Page Title</h1>
		<p>This is my Page</p>
	</div>
);

// ReactDOM.render(
// 	<Layout>
// 		<h1>This is header inline</h1>
// 		<p>This is paragraph inline</p>
// 	</Layout>,
// 	document.getElementById('app')
// );

ReactDOM.render(<Layout>{template}</Layout>, document.getElementById('app'));
 */

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
