import React from 'react';

/* 
class Option extends React.Component {
	render() {
		return <div>{this.props.optionText}</div>;
	}
}
*/

//class converted to stateless function as below
/* 
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
 */

//stateless function converted to stateless function with no return statement

const Option = (props) => (
	<div className='option'>
		<p className='option__text'>
			{props.count}. {props.optionText}
		</p>
		<button
			className='button button--link'
			onClick={(e) => {
				props.deleteSingleOption(props.optionText);
			}}>
			Remove
		</button>
	</div>
);

export default Option;
