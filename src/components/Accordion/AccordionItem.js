import React, { useEffect, useState } from "react";

const AccordionItem = (props) => {
	const [isActive, setIsActive] = useState(props.isActive);

	const changeStateAndImage = (activeState) => {
		props.setActiveImage(props.imageURL, props.index);
		setIsActive(activeState);
	};
	useEffect(() => {
		if (props.activeIndex !== props.index) {
			setIsActive(false);
		}
	}, [props.activeIndex]);
	return (
		<li
			key={props.index}
			className={
				isActive ? "accordion__tab--link active" : "accordion__tab--link"
			}
		>
			<h4 onClick={() => changeStateAndImage(!isActive)}>{props.title}</h4>
			{isActive && (
				<>
					<p>{props.content}</p>
					<a href={props.link} target="_blank">
						Read their story
					</a>
				</>
			)}
		</li>
	);
};

export default AccordionItem;
