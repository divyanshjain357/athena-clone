import React, { useEffect, useState } from "react";
import "./verticalSlider.scss";
import { verticalSliderData } from "./verticalSliderData";

function VerticalSlider(props) {
	const [sliderContainer, setSliderContainer] = useState(null);
	const [slideRight, setSlideRight] = useState(null);
	const [slideLeft, setSlideLeft] = useState(null);
	const [slidesLength, setSlidesLength] = useState(3);

	const [activeSlideIndex, setActiveSlideIndex] = useState(0);

	let sliderLinks = [
		{
			index: 0,
			text: "Technology making healthcare more human",
			isActive: false,
		},
		{ index: 1, text: "Documentation that write itself", isActive: false },
		{
			index: 2,
			text: "Introducing Connections by athenahealth",
			isActive: false,
		},
	];
	const handleWheel = (event, direction) => {
		event && event.preventDefault();
		const sliderHeight = sliderContainer.clientHeight;
		let new_index = 0;
		//  scroll up
		if ((event && event.wheelDeltaY > 0) || direction === "up") {
			new_index = activeSlideIndex - 1;
			if (new_index < 0) {
				new_index = slidesLength - 1;
			}
		} else if ((event && event.wheelDeltaY < 0) || direction === "down") {
			// scroll down
			new_index = activeSlideIndex + 1;
			if (new_index > slidesLength - 1) {
				new_index = 0;
			}
		}

		slideLeft.style.transform = `translateY(${new_index * sliderHeight}px)`;
		slideRight.style.transform = `translateY(-${
			new_index * (sliderHeight - 99)
		}px)`;
		setActiveSlideIndex(new_index);
	};

	const setActiveSlide = (index) => {
		if (index < activeSlideIndex) {
			handleWheel(null, "down");
		} else if (index > activeSlideIndex) {
			handleWheel(null, "up");
		}
	};
	useEffect(() => {
		let s_sliderContainer = document.querySelector(".slider");
		let s_slideLeft = document.querySelector(".SliderLeft");
		let s_slideRight = document.querySelector(".SliderRightImageContainer");
		let s_slidesLength = s_slideRight.querySelectorAll("div").length;

		setSliderContainer(s_sliderContainer);
		setSlideRight(s_slideRight);
		setSlideLeft(s_slideLeft);
		setSlidesLength(s_slidesLength);
		slideLeft && (slideLeft.style.top = `-${(slidesLength - 1) * 86}vh`);
		document.getElementById("slider").addEventListener("wheel", handleWheel);
		// cleanup this component
		return () => {
			document
				.getElementById("slider")
				.removeEventListener("wheel", handleWheel);
		};
	}, [sliderContainer, slideLeft, slideRight, activeSlideIndex, slidesLength]);

	return (
		<>
			<div id="slider" className="slider">
				<div className="SliderLeft">
					{verticalSliderData.map((slide) => {
						return (
							<section
								key={slide.index}
								className={`SliderLeft__slideContainer  ${slide.className}`}
							>
								<h3>{slide.title}</h3>
								<div className="SliderLeft__slide--desc">
									<p>{slide.content}</p>
								</div>
								<div className="SliderLeft__slide--action-container">
									{" "}
									<a className="SliderLeft__slideContainer--action" href="">
										{slide.buttonText}{" "}
									</a>
								</div>
							</section>
						);
					})}
				</div>

				<div className="SliderRight">
					<div className="SliderRightImageContainer">
						<div className="SliderRight-image SliderRight-image--1"></div>
						<div className="SliderRight-image SliderRight-image--2"></div>
						<div className="SliderRight-image SliderRight-image--3"></div>
					</div>

					<div className="linkContainer">
						{sliderLinks.map((link) => {
							return (
								<span
									key={link.index}
									className={
										activeSlideIndex === link.index
											? "slider--link linkContainer--active"
											: "slider--link"
									}
									onClick={() => {
										setActiveSlide(link.index);
									}}
								>
									{" "}
									{link.text}
								</span>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default VerticalSlider;
