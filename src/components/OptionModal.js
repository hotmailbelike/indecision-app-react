import React from 'react';
import Modal from 'react-modal';

/* 
const OptionModal = (props) => {
	return <div>Some text</div>;
};
 */

//above function is the same as:

const OptionModal = (props) => (
	<Modal className='modal' isOpen={!!props.selectedOption} contentLabel='You Should:' onRequestClose={props.clearSelectedOption} closeTimeoutMS={200}>
		<h3 className='modal__title'>You Should:</h3>
		{props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
		<button className='button' onClick={props.clearSelectedOption}>
			Let's do it then!
		</button>
	</Modal>
);

export default OptionModal;
