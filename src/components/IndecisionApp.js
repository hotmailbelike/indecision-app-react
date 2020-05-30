import React from 'react';

//Get Components
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
	state = {
		options: [],
		selectedOption: undefined
	};

	pickOption = () => {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		this.setState((state) => ({ selectedOption: option }));
	};

	deleteOptions = () => {
		/*
		//simplified version is below:
		this.setState((state) => {
			return {
				options: []
			};
		});
		 */
		this.setState(() => ({ options: [] }));
	};

	deleteSingleOption = (option) => {
		this.setState((state) => ({
			options: state.options.filter((i) => option !== i)
		}));
	};

	addOption = (option) => {
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
	};

	clearSelectedOption = () => this.setState((state) => ({ selectedOption: undefined }));

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

	render() {
		// const title = 'Indecision'; //No need to use this title as it has already been declared as default down below
		const subtitle = 'Put your life in the hands of a Computer';

		return (
			<div>
				<Header subtitle={subtitle} /> {/* //No need to set title prop since it has already been declared as default down below  */}
				<div className='container'>
					<Action hasOptions={this.state.options.length > 0} pickOption={this.pickOption} />
					<div className='widget'>
						<Options options={this.state.options} deleteOptions={this.deleteOptions} deleteSingleOption={this.deleteSingleOption} />
						<AddOption addOption={this.addOption} />
					</div>
				</div>
				<OptionModal clearSelectedOption={this.clearSelectedOption} selectedOption={this.state.selectedOption} />
			</div>
		);
	}
}
