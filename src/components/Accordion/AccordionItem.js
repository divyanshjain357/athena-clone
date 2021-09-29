import React, { useEffect, useState } from "react";
import { accordionData } from "./accordionData";

const AccordionItem = (props) => {
	var interval = null;
	var index = 0;
	const [animateElement, setAnimateElement] = useState(false);
	const [activeItemIndex, setActiveItemIndex] = useState(0);

	const changeStateAndImage = (obj) => {
		interval && clearInterval(interval);
		interval = null;
		index = null;
		setAnimateElement(true);
		for (let new_index = 0; new_index < accordionData.length; new_index++) {
			if (obj.index === new_index) {
				accordionData[new_index].isActive = !obj.isActive;
				setActiveItemIndex(new_index);
				props.setActiveImage(accordionData[new_index].image);
			} else {
				accordionData[new_index].isActive = false;
			}
		}
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
		console.log("interval called");
		interval = setInterval(() => {
			if (index === null) {
				clearInterval(interval);
				return;
			}

			if (index < accordionData.length) {
				setActiveItemIndex(index);
				props.setActiveImage(accordionData[index].image);
			}
			index++;
			if (index > accordionData.length) {
				clearInterval(interval);
			}
		}, 5000);
	}

	function handleScroll() {
		let accordion = document.querySelector(".accordion__container");
		let accordionVisible = isInViewport(accordion);

		if (accordionVisible) {
			if (!animateElement) {
				setAnimateElement(true);
				if (index > accordionData.length) {
					clearInterval(interval);
					interval = null;
				} else {
					!interval && setupInterval();
				}
			}
		}
	}

	useEffect(() => {
		let accordion = document.querySelector(".accordion__container");
		document.addEventListener("scroll", handleScroll);
		// cleanup this component
		return () => {
			accordion.removeEventListener("scroll", handleScroll);
		};
	}, [activeItemIndex, animateElement]);

	return (
		<>
			<ul>
				{accordionData.map((item, index) => (
					<li
						key={item.index}
						className={
							item.index === activeItemIndex
								? "accordion__tab--link active"
								: "accordion__tab--link"
						}
					>
						{" "}
						<h4 onClick={() => changeStateAndImage(item)}>{item.title}</h4>
						<>
							{item.index === activeItemIndex && (
								<>
									<p>{item.content}</p>
									<a href={item.link}>Read their story</a>
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
