import React, { useEffect, useState } from "react";
import "./verticalSlider.scss";

function VerticalSlider(props) {
	const [sliderContainer, setSliderContainer] = useState(null);
	const [slideRight, setSlideRight] = useState(null);
	const [slideLeft, setSlideLeft] = useState(null);
	const [slidesLength, setSlidesLength] = useState(3);

	const [activeSlideIndex, setActiveSlideIndex] = useState(0);
	// upButton.addEventListener("click", () => changeSlide("up"));
	// downButton.addEventListener("click", () => changeSlide("down"));
	const handleWheel = (event) => {
		// slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;
		// if(event.target.className.indexOf("VerticalSlider__slide-image") < 0){
		// 	return;
		// }
		// const changeSlide = (direction) => {
		const sliderHeight = sliderContainer.clientHeight;
		// if (direction === "up") {
		if (event.wheelDeltaY < 0) {
			let new_index = activeSlideIndex + 1;
			// setActiveSlideIndex(new_index);
			if (new_index > slidesLength - 1) {
				new_index = 0;
			}
			setActiveSlideIndex(new_index);
			console.log("active index up", activeSlideIndex);

			// } else if (direction === "down") {
		} else if (event.wheelDeltaY > 0) {
			let new_index = activeSlideIndex - 1;
			if (new_index < 0) {
				new_index = slidesLength - 1;
			}
			setActiveSlideIndex(new_index);
			console.log("active index down", activeSlideIndex);
		}

		slideLeft.style.transform = `translateY(${
			activeSlideIndex * sliderHeight
		}px)`;
		slideRight.style.transform = `translateY(-${
			activeSlideIndex * (sliderHeight - 99)
		}px)`;
		// };
	};

	// const upClick = () => {
	// 	slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

	// 	// const changeSlide = (direction) => {
	// 	const sliderHeight = sliderContainer.clientHeight;
	// 	let new_index = activeSlideIndex - 1;
	// 		// setActiveSlideIndex(new_index);

	// 		if (new_index < 0) {
	// 		new_index = slidesLength - 1;
	// 	}
	// 	setActiveSlideIndex(new_index);

	// 	console.log("active index", activeSlideIndex);
	// 	slideRight.style.transform = `translateY(-${ activeSlideIndex * sliderHeight }px)`;
	// 	slideLeft.style.transform = `translateY(${ activeSlideIndex * sliderHeight }px)`;
	// }
	// const downClick = () => {
	// 	slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

	// 	// const changeSlide = (direction) => {
	// 	const sliderHeight = sliderContainer.clientHeight;
	// 	// if (direction === "up") {

	// 		let new_index = activeSlideIndex + 1;

	// 		if (new_index >= slidesLength) {
	// 			new_index = 0;
	// 		}
	// 		setActiveSlideIndex(new_index);
	// 	// } else if (direction === "down") {

	// 	console.log("active index", activeSlideIndex);
	// 	slideRight.style.transform = `translateY(-${ activeSlideIndex  * sliderHeight }px)`;
	// 	slideLeft.style.transform = `translateY(${ activeSlideIndex  * sliderHeight }px)`;
	// }

	useEffect(() => {
		let s_sliderContainer = document.querySelector(".slider");
		let s_slideLeft = document.querySelector(".image__container__1");
		// let s_slideRight = document.querySelector(".swiper-slide-right");
		let s_slideRight = document.querySelector(".swiper-slide-right");
		let s_slidesLength = s_slideRight.querySelectorAll("div").length;

		setSliderContainer(s_sliderContainer);
		setSlideRight(s_slideRight);
		setSlideLeft(s_slideLeft);
		setSlidesLength(s_slidesLength);
		slideLeft && (slideLeft.style.top = `-${(slidesLength - 1) * 650}px`);

		// window.addEventListener('click',handleWheel);
		window.addEventListener("wheel", handleWheel);

		// cleanup this component
		return () => {
			window.removeEventListener("wheel", handleWheel);
		};
	}, [sliderContainer, slideLeft, slideRight, activeSlideIndex, slidesLength]);

	return (
		<>
			<div className="slider">
				{/* <div class="action-buttons">
				<button class="down-button" onClick={upClick}>
					button
				</button>
				<button class="down-button" onClick={downClick}>
					button
				</button>
  			</div> */}

				<div className="image__container__1">
					{/* <div
						className="swiper-slide swiper-slide-active"
						data-swiper-slide-index="0"
					> */}

				
					<section className="VerticalSlider__slide-container--2JQ_o VerticalSlider__slide-container--dark_pink">
						<h3>Introducing Connections by athenahealth </h3>
						<div className="VerticalSlider__slide-desc--EPyLK">
							<p>
								We’re discovering what is and isn’t working in healthcare using
								unique data from the largest, connected network in the industry.
								See what insights we’ve unlocked at Connections by athenahealth.
							</p>
						</div>
						<div className="VerticalSlider__slide-cta-wrap--uSnQA">
							{" "}
							<a
								id="g_cta"
								className="GlobalCTA__clear_btn--qtkFb "
								href="javascript:void(0)"
							>
								Check out Dictation{" "}
							</a>
						</div>
					</section>







					<section className="VerticalSlider__slide-container--2JQ_o VerticalSlider__slide-container--pink">
						<h3>Documentation that writes itself </h3>
						<div className=" VerticalSlider__slide-desc--EPyLK">
							<p>
								Accurately document patient encounters in real time with our
								fully integrated, speech-to-text dictation product powered by
								Nuance®.
							</p>
						</div>
						<div className="VerticalSlider__slide-cta-wrap--uSnQA">
							{" "}
							<a
								id="g_cta"
								className="GlobalCTA__clear_btn--qtkFb "
								href="javascript:void(0)"
							>
								Check out documentation{" "}
							</a>
						</div>
					</section>








					<section className="VerticalSlider__slide-container--2JQ_o VerticalSlider__slide-container--indigo">
						<h3>
							Technology making <br />
							healthcare more human.
							<br /> Imagine that.
						</h3>
						<div className="VerticalSlider__slide-desc--EPyLK">
							<p>
								Join 140K providers on the network that seamlessly connects
								players from across the healthcare ecosystem. We unlock insights
								that help improve clinician experiences, patient outcomes, and
								your bottom line.&nbsp;
							</p>
						</div>
						<div className="VerticalSlider__slide-cta-wrap--uSnQA">
							{" "}
							<a
								id="g_cta"
								className="GlobalCTA__clear_btn--qtkFb "
								href="javascript:void(0)"
							>
								Join us{" "}
							</a>
						</div>
					</section>

					{/* </div> */}
				</div>

				<div className="image__container__2">
					{/* <div> */}
					<div className="swiper-slide swiper-slide-right">
						<div className="VerticalSlider__slide-image VerticalSlider__slide-image--1"></div>
						<div className="VerticalSlider__slide-image VerticalSlider__slide-image--2"></div>
						<div className="VerticalSlider__slide-image VerticalSlider__slide-image--3"></div>
					</div>
					{/* </div> */}

					<div className="link__container">
						<span className={activeSlideIndex === 0 ? "active__link" : ""}>
							{" "}
							Technology making healthcare more human {activeSlideIndex}
						</span>
						<span className={activeSlideIndex === 1 ? "active__link" : ""}>
							{" "}
							Documentation that write itself{" "}
						</span>
						<span className={activeSlideIndex === 2 ? "active__link" : ""}>
							{" "}
							Introducing Connections by athenahealth{" "}
						</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default VerticalSlider;
