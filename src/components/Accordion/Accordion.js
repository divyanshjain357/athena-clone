import React, { useEffect, useState } from "react";
import "./accordion.scss";
import { accordionData } from "./accordionData";
import AccordionItem from "./AccordionItem";
// //console.log(accordionData);
function Accordion(props) {
	const [activeImageURL, setActiveImage] = useState(accordionData[0].image);
	const [activeItemIndex, setActiveItemIndex] = useState(1);
	const [animateElement, setAnimateElement] = useState(false);
	var interval = null;
	let index = 1;

	const setImage = (url, idx) => {
		for (let index = 0; index < accordionData.length; index++) {
			if (idx !== index) {
				accordionData[index].isActive = false;
			}
		}
		setActiveImage(url);
		setActiveItemIndex(idx);
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
			// if(index < accordionData.length && accordionData[index].isActive){
			//     accordionData[index].isActive = false;

			// }

			if (index < accordionData.length) {
				setActiveItemIndex(index);
				accordionData[index].isActive = true;
				setActiveImage(accordionData[index].image);
			}
			//setting previous item visibility to false
			if (index > 0 && index < accordionData.length) {
				accordionData[index - 1].isActive = false;
			}
			//console.log(accordionData[index -1])
			index++;

			if (index > accordionData.length) {
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
				if (index > accordionData.length) {
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
	const callThisfn = () => {
		for (let index = 0; index < accordionData.length; index++) {}
	};
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
	}, [activeItemIndex, animateElement]);

	return (
		<div className="accordion__container">
			<div className="accordion__children">
				<h5>Helping organizations like yours thrive </h5>
				<p>
					Practices and organizations of all sizes and complexities trust us to
					help them drive better results today while preparing them for
					continued success tomorrow. Here are a few stories that highlight what
					our customers have achieved with the support of our intuitive
					technology and proven expertise.
				</p>

				<div className="accordion">
					<div className="accordion__image__container">
						<div className="AccordionStyle__accordion-left-section--sLFxX">
							<div className="AccordionStyle__accordion-img--3KjrX ">
								<img src={activeImageURL} alt="" />
							</div>
						</div>
						<div></div>
					</div>
					<div className="accordion__tabs">
						<nav>
							<AccordionItem />
							{/* <ul>
								{accordionData.map((obj, index) => (
									<AccordionItem
										index={obj.index}
										title={obj.title}
										content={obj.content}
										isActive={obj.isActive}
										setActiveImage={setImage}
										imageURL={obj.image}
										activeIndex={activeItemIndex}
										link={obj.link}
									/>
								))}
							</ul> */}
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Accordion;
