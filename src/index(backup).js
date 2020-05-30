import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.deleteOptions = this.deleteOptions.bind(this);
		this.pickOption = this.pickOption.bind(this);
		this.addOption = this.addOption.bind(this);
		this.deleteSingleOption = this.deleteSingleOption.bind(this);
		this.state = {
			options: []
		};
	}

	componentDidMount() {
		try {
			const options = JSON.parse(localStorage.getItem('options'));

			if (options) {
				this.setState((state) => ({ options: options }));
			}

			console.log('loading IndecisionApp component');
		} catch (error) {
			//Do nothing
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
			console.log('updating data');
		}
	}
	componentWillUnmount() {}

	pickOption() {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		alert(option);
	}

	deleteOptions() {
		/*
		//simplified version is below:
		this.setState((state) => {
			return {
				options: []
			};
		});
		 */
		this.setState(() => ({ options: [] }));
	}

	deleteSingleOption(option) {
		this.setState((state) => ({
			options: state.options.filter((i) => option !== i)
		}));
	}

	addOption(option) {
		if (!option) {
			return 'Enter valid value';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists';
		}
		/*
		//simplified version is below
		this.setState((state) => {
			return {
				options: state.options.concat([option])
			};
		});
		 */
		this.setState((state) => ({ options: state.options.concat([option]) }));
	}

	render() {
		// const title = 'Indecision'; //No need to use this title as it has already been declared as default down below
		const subtitle = 'Put your life in the hand of a Computer';

		return (
			<div>
				<Header subtitle={subtitle} /> {/* //No need to set title prop since it has already been declared as default down below */}
				<Action hasOptions={this.state.options.length > 0} pickOption={this.pickOption} />
				<Options options={this.state.options} deleteOptions={this.deleteOptions} deleteSingleOption={this.deleteSingleOption} />
				<AddOption addOption={this.addOption} />
			</div>
		);
	}
}

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h1>{props.subtitle}</h1>}
		</div>
	);
};

Header.defaultProps = {
	title: 'Indecision'
};

const Action = (props) => {
	return (
		<div>
			<button disabled={!props.hasOptions} onClick={props.pickOption}>
				What should I do?
			</button>
		</div>
	);
};

const Options = (props) => {
	return (
		<div>
			{props.options.length === 0 && <p>Please add an option to get started!</p>}
			<button onClick={props.deleteOptions}>Remove All</button>
			{props.options.map((option) => (
				<Option key={option} optionText={option} deleteSingleOption={props.deleteSingleOption}></Option>
			))}
		</div>
	);
};

const Option = (props) => {
	return (
		<div>
			{props.optionText}
			<button
				onClick={(e) => {
					props.deleteSingleOption(props.optionText);
				}}>
				Remove
			</button>
		</div>
	);
};

/*
//the Action, Header, Options and Option classes below will be converted to stateless function as above

class Action extends React.Component {
	render() {
		return (
			<div>
				<button disabled={!this.props.hasOptions} onClick={this.props.pickOption}>
					What should I do?
				</button>
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h1>{this.props.subtitle}</h1>
			</div>
		);
	}
}

class Options extends React.Component {
	constructor(props) {
		super(props);
		// this.removeAll = this.removeAll.bind(this);
	}
	// removeAll() {
	// 	alert('asd');
	// }
	render() {
		return (
			<div>
				<button onClick={this.props.deleteOptions}>Remove All</button>
				{this.props.options.map((i) => (
					<Option key={i} optionText={i}></Option>
				))}
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		return <div>{this.props.optionText}</div>;
	}
}

 */

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.addOption = this.addOption.bind(this);
		this.state = {
			error: undefined
		};
	}
	addOption(e) {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		const error = this.props.addOption(option);

		/*
		//simplified version is below
		this.setState((state) => {
			return {
				error: error
			};
		});
		 */
		this.setState((state) => ({ error: error }));
		if (!error) {
			e.target.elements.option.value = '';
		}
	}
	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.addOption}>
					<input type='text' name='option' id='option' />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

/*
//Stateless function example

const User = (props) => {
	return (
		<div>
			<p>Name: {props.name} </p>
			<p>Age: {props.age} </p>
		</div>
	);
};
 */

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
