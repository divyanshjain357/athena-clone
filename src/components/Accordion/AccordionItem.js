import React, { forwardRef, useEffect, useState } from "react";
import { accordionData } from "./accordionData";

const AccordionItem = (props) => {
	var interval = null;
	let index = 1; //console.log("ref", ref);

	const [accordionDataa, setAccData] = useState(accordionData);
	const [isActive, setIsActive] = useState(props.isActive);
	const [animateElement, setAnimateElement] = useState(false);
	const [activeItemIndex, setActiveItemIndex] = useState(0);
	const [activeImageURL, setActiveImage] = useState(accordionData[0].image);

	// useEffect(()=>{
	//     setIsActive(props.isActive);
	//     //console.log(isActive);
	// },[props.isActive, props, isActive]);
	const changeStateAndImage = (obj, activeState) => {
		// props.setActiveImage(props.imageURL, props.index);
		// obj.isActive = activeState;
		for (let index = 0; index < accordionDataa.length; index++) {
			let new_index = index;
			if (obj.index === new_index) {
				accordionDataa[new_index].isActive = !obj.isActive;
				setActiveItemIndex(index);
			} else {
				accordionDataa[new_index].isActive = false;
			}
		}
		console.log("this is accordion data", accordionData);
		// setIsActive(activeState);
	};

	function isInViewport(el) {
		const rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <=
				(window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}

	function setupInterval() {
		interval = setInterval(() => {
			// if(index < accordionDataa.length && accordionDataa[index].isActive){
			//     accordionDataa[index].isActive = false;

			// }

			if (index < accordionDataa.length) {
				setActiveItemIndex(index);
				accordionDataa[index].isActive = true;
				setActiveImage(accordionDataa[index].image);
			}
			//setting previous item visibility to false
			if (index > 0 && index < accordionDataa.length) {
				accordionDataa[index - 1].isActive = false;
			}
			//console.log(accordionDataa[index -1])
			index++;

			if (index > accordionDataa.length) {
				clearInterval(interval);
			}
			// setActiveItemIndex(index);
		}, 1000);
	}
	function handleScroll() {
		let accordion = document.querySelector(".accordion__container");
		let accordionVisible = isInViewport(accordion);
		//console.log(accordionVisible);
		// message.textContent = messageText;

		if (accordionVisible) {
			if (!animateElement) {
				setAnimateElement(true);
				// callThisfn();
				if (index > accordionDataa.length) {
					clearInterval(interval);
					interval = null;
					//console.log("interval cleared");
				} else {
					!interval && setupInterval();
				}

				//console.log("callThisfn called", animateElement);
			}
			// else{
			//     //console.log("callThisfn not called", animateElement);
			//     clearInterval(interval);
			//     //console.log("cleared");
			// }
		}
	}
	// const callThisfn = () => {
	// 	for (let index = 0; index < accordionDataa.length; index++) {}
	// };

	useEffect(() => {
		let accordion = document.querySelector(".accordion__container");
		document.addEventListener("scroll", handleScroll, { passive: true });
		// if(animateElement){

		// }
		//console.log("activeItemIndex", activeItemIndex)
		// cleanup this component
		return () => {
			accordion.removeEventListener("scroll", handleScroll);
		};
	}, [props.activeItemIndex, animateElement]);

	// <AccordionItem
	// 	index={obj.index}
	// 	title={obj.title}
	// 	content={obj.content}
	// 	isActive={obj.isActive}
	// 	setActiveImage={setImage}
	// 	imageURL={obj.image}
	// 	activeIndex={activeItemIndex}
	// 	link={obj.link}
	// />
	return (
		<>
			<ul>
				{accordionDataa.map((obj, index) => (
					<li
						key={obj.index}
						className={
							obj.index === activeItemIndex
								? "accordion__tab--link active"
								: "accordion__tab--link"
						}
					>
						<h4 onClick={() => changeStateAndImage(obj)}>
							{obj.title} - {obj.isActive}
						</h4>
						<>
							{obj.isActive && (
								<>
									<p>{obj.content}</p>
									<a href={obj.link} target="_blank">
										Read their story
									</a>
								</>
							)}
						</>
					</li>
				))}
			</ul>
		</>
	);
};

export default AccordionItem;
