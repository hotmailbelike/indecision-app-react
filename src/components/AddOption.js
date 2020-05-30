import React from 'react';

export default class AddOption extends React.Component {
	state = {
		error: undefined
	};

	// //constructor not needed anymore
	// constructor(props) {
	// 	super(props);
	// 	this.addOption = this.addOption.bind(this);

	// 	//defined above
	// 	/*
	// 	this.state = {
	// 		error: undefined
	// 	};
	// 	 */

	// }

	addOption = (e) => {
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
	};
	render() {
		return (
			<div>
				{this.state.error && <p className='add-option-error'>{this.state.error}</p>}
				<form className='add-option' onSubmit={this.addOption}>
					<input className='add-option__input' type='text' name='option' id='option' />
					<button className='button'>Add Option</button>
				</form>
			</div>
		);
	}
}
