import React from 'react';

//Get Component
import Option from './Option';

/* 
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
*/

//class converted to stateless function as below

/* 
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
 */

//stateless function converted to stateless function with no return statement

const Options = (props) => (
	<div>
		<div className='widget-header'>
			<h3 className='widget-header__title'>Your Options</h3>
			<button className='button button--link' onClick={props.deleteOptions}>
				Remove All
			</button>
		</div>
		{props.options.length === 0 && <p className='widget__message'>Please add an option to get started!</p>}
		{props.options.map((option, index) => (
			<Option count={index + 1} key={option} optionText={option} deleteSingleOption={props.deleteSingleOption}></Option>
		))}
	</div>
);

export default Options;
