import React from 'react'
import classes from './styles.module.css'

const Checkbox = ({slide, changed}) => {

	return (
		<div className={classes.slide}>
			<label className={classes.container}>
			<input 
				className={classes.input}
				type="checkbox" 
				id="slide" 
				name="slide" 
				value={slide}
				checked={slide} 
				onChange={changed}
			/>
				Slide
			</label>
		</div>
	)
}

export default Checkbox