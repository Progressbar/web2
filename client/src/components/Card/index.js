import React from 'react';
import style from './index.sass';

export default function (props) {
	return (
		<div className={ style.card }>
			{ props.children }
		</div>
	);
}
