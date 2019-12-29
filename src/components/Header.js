import React from 'react';

/* 
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

*/

//class converted to stateless function as below
/* 
const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h1>{props.subtitle}</h1>}
		</div>
	);
};
 */

//stateless function converted to stateless function with no return statement

const Header = (props) => (
	<div className='header'>
		<div className='container'>
			<h1 className='header__title'>{props.title}</h1>
			{props.subtitle && <h2 className='header__subtitle'>{props.subtitle}</h2>}
		</div>
	</div>
);

Header.defaultProps = {
	title: 'Indecision'
};

export default Header;
