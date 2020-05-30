import React from 'react';

/* 
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
*/

//class converted to stateless function as below
/* 
const Action = (props) => {
	return (
		<div>
			<button disabled={!props.hasOptions} onClick={props.pickOption}>
				What should I do?
			</button>
		</div>
	);
};
 */

//stateless function converted to stateless function with no return statement

const Action = (props) => (
	<div>
		<button className='big-button' disabled={!props.hasOptions} onClick={props.pickOption}>
			What should I do?
		</button>
	</div>
);

export default Action;
