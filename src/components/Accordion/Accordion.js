import React,{ useState} from "react";
import "./accordion.scss";
import {accordionData} from "./accordionData";
import AccordionItem from "./AccordionItem";
function Accordion(props) {
    const [activeImageURL, setActiveImage] = useState(accordionData[0].image);
    const [activeItemIndex, setActiveItemIndex] = useState(1);
    const [animateElement, setAnimateElement] = useState(false);
    var interval = null;
    let index = 1;

    const setImage = (url, idx) =>{
        for (let index = 0; index < accordionData.length; index++) {
            if(idx !== index){
                accordionData[index].isActive = false;
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

                        { accordionData.map((obj, index) => ( 
                                <AccordionItem  index={obj.index} title={obj.title} content={obj.content} isActive={obj.isActive} setActiveImage={setImage} imageURL ={obj.image} activeIndex={activeItemIndex} link={obj.link}/> 
                                ) ) } 
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
      
    )
}

export default Accordion;
