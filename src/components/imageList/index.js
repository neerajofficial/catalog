import React from 'react'
import ImageCircle from './../ui/imageCircle'

const ImageList = ({ list, clicked }) => {

	return (
		<div>
		{
			list && list.map(item => (
				<ImageCircle
					item={item}
					key={item.id}
					onClick={() => clicked(item.id)}
				/>
			))
		}
		</div>
	)
}

export default ImageList