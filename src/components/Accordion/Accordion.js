import React, { useState } from "react";
import "./accordion.scss";
import { accordionData } from "./accordionData";
import AccordionItem from "./AccordionItem";
function Accordion(props) {
	const [activeImageURL, setActiveImage] = useState(accordionData[0].image);

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
							<AccordionItem setActiveImage={setActiveImage} />
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Accordion;
