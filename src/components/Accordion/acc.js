import React, { useEffect, useState } from "react";
import { accordionData } from "./accordionData";

const Accordion = (props) => {
	const [isActive, setIsActive] = useState(props.isActive);
    // useEffect(()=>{
    //     setIsActive(props.isActive);
    //     console.log(isActive);
    // },[props.isActive, props, isActive]);
    const changeStateAndImage = (activeState)=>{
        props.setActiveImage(props.imageURL, props.index);
        setIsActive(activeState);
    }
    useEffect(() =>{
        if(props.activeIndex !== props.index){
            setIsActive(false);
        }
    }, [props.activeIndex]);
	return (
		<li
        key={props.index}
        className={isActive ? "accordion__tab--link active": "accordion__tab--link"}
       
		>

            {/* <> */}
            <h4 onClick={() => changeStateAndImage(!isActive)}>{props.title}</h4>
            {isActive && (
                //  <div className="accordion-content">{content}</div>
                <>
                    <p>{props.content}</p>
                    <a href={props.link} target="_blank">Read their story</a>
                </>
            )}
            {/* </> */}

		 </li>

		//   <div className="accordion-item">
		//     <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
		//       <div>{title}</div>
		//       <div>{isActive ? '-' : '+'}</div>
		//     </div>
		//     {isActive && <div className="accordion-content">{content}</div>}
		//   </div>

		// <div class="accordion__container">
		// 	<div className="accordion__children">
		// 		<h5>Helping organizations like yours thrive </h5>
		// 		<p>
		// 			Practices and organizations of all sizes and complexities trust us to
		// 			help them drive better results today while preparing them for
		// 			continued success tomorrow. Here are a few stories that highlight what
		// 			our customers have achieved with the support of our intuitive
		// 			technology and proven expertise.
		// 		</p>

		// 		<div className="accordion">
		// 			<div className="accordion__image__container">
		// 				<div class="AccordionStyle__accordion-left-section--sLFxX">
		// 					<div class="AccordionStyle__accordion-img--3KjrX ">
		// 						<img src="https://caas.athenahealth.com/sites/default/files/HeartFailureSurvivalCenter.png" />
		// 					</div>
		// 					<div class="AccordionStyle__accordion-img--3KjrX ">
		// 						<img src="https://caas.athenahealth.com/sites/default/files/GeraldChampion_0.png" />
		// 					</div>
		// 					<div class="AccordionStyle__accordion-img--3KjrX ">
		// 						<img src="https://caas.athenahealth.com/sites/default/files/Baystate_0.png" />
		// 					</div>
		// 					<div class="AccordionStyle__accordion-img--3KjrX AccordionStyle__current-img--2wmCE">
		// 						<img src="https://caas.athenahealth.com/sites/default/files/StewardMedicalGroup_0.png" />
		// 					</div>
		// 				</div>
		// 				<div></div>
		// 			</div>
		// 			<div className="accordion__tabs">
		// 				<nav>
		// 					<ul>
		// 						<li class="accordion__tab--link" onClick={() => setIsActive(!isActive)}>
		//                             <h4>
		// 							{title}

		//                             </h4>
		//                             {isActive &&
		//                             //  <div className="accordion-content">{content}</div>
		//                             <>
		//                             <p>{content}</p>
		//                             <a href="">Read their story</a>
		//                             </>
		//                              }
		// 						</li>
		// 					</ul>
		// 				</nav>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default Accordion;
