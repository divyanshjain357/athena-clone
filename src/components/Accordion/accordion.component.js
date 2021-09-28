import React,{useEffect, useState} from "react";
import "./accordion.scss";
import {accordionData} from "./accordionData";
import Accordion from "./acc";
// console.log(accordionData);
function Accordionn(props) {
    const [activeImageURL, setActiveImage] = useState(accordionData[0].image);
    const [activeItemIndex, setActiveItemIndex] = useState(1);

    const setImage = (url, idx) =>{
        for (let index = 0; index < accordionData.length; index++) {
            if(idx !== index){
                accordionData.isActive = false;
            }
            
        }
        setActiveImage(url);
        setActiveItemIndex(idx);
    }
   
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
                            <img src={activeImageURL} alt=""/>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className="accordion__tabs">
                    <nav>
                        <ul>

                            {/* <li key={obj.key} className="accordion__tab--link" onClick={() => setIsActive(obj.key, !obj.active)} > */}
                        { accordionData.map((obj, index) => ( 
                                <Accordion index={obj.index} title={obj.title} content={obj.content} isActive={obj.isActive} setActiveImage={setImage} imageURL ={obj.image} activeIndex={activeItemIndex} link={obj.link}/> 
                                ) ) } 
                                {/* </li> */}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
      
    )
}

export default Accordionn;
