import React from 'react'
import classes from './styles.module.css'

const ImageCircle = ({ item, ...rest }) => {
	const { name, url } = item;
	
	const activeStyle = [classes.circle, classes.active].join(' ');

	return (
		<div 
			className={
				item.active ? 
				activeStyle :
				classes.circle
			}
			{...rest}
		>
			<img 
				src={url} 
				alt={name}
				className={classes.image}
			/>
		</div>
	)
}

export default ImageCircle