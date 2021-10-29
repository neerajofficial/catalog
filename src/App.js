import React, { useState, useEffect, useCallback } from 'react'
import Catalog from './components/catalog'
import ImageList from './components/imageList'
import Button from './components/ui/button'
import Checkbox from './components/ui/checkbox'
import { Images } from './assets/imageData'

const App = props => {
	const [imageList, setImageList] = useState();
	const [currentImg, setCurrentImg] = useState();
	const [slide, setSlide] = useState(false);

	const currentImageHandler = useCallback((id) => {
		const list = [...imageList];
		list.filter(i => i.id === id ? i.active = true : i.active = false);
		const img = list.find(i => i.id === id);
		setCurrentImg(img);
	}, [imageList]);

	useEffect(() => {
		setImageList(Images);
	}, []);

	useEffect(() => {
		if (imageList) {
			currentImageHandler(1);
		}
	}, [imageList, currentImageHandler]);

	const clickedHandler = (id) => {
		currentImageHandler(id);
	}
	
	const prevHandler = () => {
		const currentId = currentImg.id;
		if (currentId === 1) {
			currentImageHandler(5);
		} else {
			currentImageHandler(currentId - 1);
		}
	}

	const nextHandler = useCallback(() => {
		const currentId = currentImg.id;
		if (currentId === 5) {
			currentImageHandler(1);
		} else {
			currentImageHandler(currentId + 1);
		}
	}, [currentImg, currentImageHandler]);
	
	const slideHandler = () => {
		setSlide(!slide);
	}

	useEffect(() => {
		if (!slide) {
			return; 
		}
		
		const interval = setInterval(() => {
		    nextHandler();
		}, 3000);
		return () => clearInterval(interval);

	}, [slide, nextHandler])

	return (
		<div >
			<div className="grid">
				<Catalog
					item={currentImg}
				/>
				<ImageList
					list={imageList}
					clicked={clickedHandler} 
				/>	
				<Checkbox
					slide={slide}
					changed={slideHandler}
				/>
			</div>
			<div className="flex__space">
				<Button
					title="Previous"
					onClick={prevHandler}
				/>
				<Button
					title="Next"
					onClick={nextHandler}
				/>
			</div>
		</div>
	)
}

export default App