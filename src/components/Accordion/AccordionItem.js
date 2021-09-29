import React, { useEffect, useState } from "react";
import { accordionData } from "./accordionData";

const AccordionItem = (props) => {
	var interval = null;
	var index = 1;
	const [autoAnimate, setAutoAnimate] = useState(null);
	const [activeItemIndex, setActiveItemIndex] = useState(0);
	const [manual, setManualStatus] = useState(false);

	const changeStateAndImage = (obj) => {
		index = null;
		// setAutoAnimate(true);
		setManualStatus(true);
		setActiveItemIndex(obj.index);
		props.setActiveImage(obj.image);
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

	useEffect(() => {
		if (!autoAnimate) return;
		const intervaal = setInterval(() => {
			if (manual) {
				clearInterval(intervaal);
				return;
			}
			if (index === null) {
				clearInterval(intervaal);
				return;
			}
			if (index < accordionData.length) {
				setActiveItemIndex(index);
				props.setActiveImage(accordionData[index].image);
			}
			index++;
			if (index > accordionData.length) {
				clearInterval(intervaal);
			}
		}, 3000);
		return () => clearInterval(intervaal);
	}, [manual, autoAnimate]);

	function handleScroll() {
		let accordion = document.querySelector(".accordion__container");
		let accordionVisible = isInViewport(accordion);

		if (accordionVisible) {
			if (!autoAnimate) {
				setAutoAnimate(true);
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
	}, [activeItemIndex, manual, autoAnimate]);

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
