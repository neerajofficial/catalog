import React from 'react'
import classes from './styles.module.css'

const Catalog = ({ item }) => {
	const { name, url } = item || 'NA';

	return (
		<div className={classes.container}>
			<img 
				src={url} 
				alt={name}
				className={classes.image}
			/>
		</div>
	)
}

export default Catalog