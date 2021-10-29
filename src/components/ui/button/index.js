import React from 'react'
import classes from './styles.module.css'

const Button = ({ title, ...rest }) => {
	return (
		<button 
			className={classes.button}
			{...rest}
		>
			{title}
		</button>
	)
}

export default Button