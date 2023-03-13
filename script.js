// By David Ayo
console.clear();

const { gsap, imagesLoaded } = window;

const buttons = {
	prev: document.querySelector(".btn--left"),
	next: document.querySelector(".btn--right"),
};
const cardsContainerEl = document.querySelector(".cards__wrapper");
const appBgContainerEl = document.querySelector(".app__bg");

const myMusic = document.getElementById("music");

const cardInfosContainerEl = document.querySelector(".info__wrapper");

const musicButton = document.querySelector(".music_icon");

const headerButton = document.querySelector(".header_icon");

const imageList = [...appBgContainerEl.querySelectorAll(".app__bg__image")];

const cardList = [...cardsContainerEl.querySelectorAll(".card")];

let infoList = [...cardInfosContainerEl.querySelectorAll(".info")];


let currentImageIndex = 1;
let previousImageIndex = 0;
let nextImageIndex = 2;

buttons.next.addEventListener("click", () => swapCards("right"));

buttons.prev.addEventListener("click", () => swapCards("left"));

musicButton.addEventListener("click", () => play());

headerButton.addEventListener("click", () => location.reload());

let musicStatus = false

function play() {
	musicStatus ? myMusic.play() : myMusic.pause();
	musicButton.style.opacity = !musicStatus ? 0.25 : 1;
	musicStatus = !musicStatus;
}



function swapCards(direction) {

	console.log(
		"previousImageIndex" + previousImageIndex,
		"currentImageIndex" + currentImageIndex,
		"nextImageIndex" + nextImageIndex,)
	const currentCardEl = cardList[currentImageIndex]   //cardsContainerEl.querySelector(".current--card");
	const previousCardEl = cardList[previousImageIndex]   //cardsContainerEl.querySelector(".previous--card");
	const nextCardEl = cardList[nextImageIndex]   //cardsContainerEl.querySelector(".next--card");


	const currentBgImageEl = imageList[currentImageIndex]; //appBgContainerEl.querySelector(".current--image");
	const previousBgImageEl = imageList[previousImageIndex]; //appBgContainerEl.querySelector(".previous--image");
	const nextBgImageEl = imageList[nextImageIndex]; //appBgContainerEl.querySelector(".next--image");


	changeInfo(direction);

	swapCardsClass();

	removeCardEvents(currentCardEl);

	function swapCardsClass() {

		// Start remove card classes *******
		// previousCardEl.classList.remove("previous--card");

		cardList.forEach((each) => {
			each?.classList.contains("current--card") ?
				each.classList.remove("current--card") :
				each?.classList.contains("next--card") ?
					each.classList.remove("next--card") :
					each?.classList.contains("previous--card") &&
					each.classList.remove("previous--card");
		})
		imageList.forEach((each) => {
			each?.classList.contains("current--image") ?
				each.classList.remove("current--image") :
				each?.classList.contains("next--image") ?
					each.classList.remove("next--image") :
					each?.classList.contains("previous--image") &&
					each.classList.remove("previous--image");
		})

		currentCardEl?.classList.contains("current--card") ?
			currentCardEl.classList.remove("current--card") :
			currentCardEl?.classList.contains("next--card") ?
				currentCardEl.classList.remove("next--card") :
				currentCardEl?.classList.contains("previous--card") &&
				currentCardEl.classList.remove("previous--card");


		previousCardEl?.classList.contains("previous--card") ?
			previousCardEl.classList.remove("previous--card") :
			previousCardEl?.classList.contains("next--card") ?
				previousCardEl.classList.remove("next--card") :
				previousCardEl?.classList.contains("current--card") &&
				previousCardEl.classList.remove("current--card");

		// nextCardEl.classList.remove("next--card");

		nextCardEl?.classList.contains("next--card") ?
			nextCardEl.classList.remove("next--card") :
			nextCardEl?.classList.contains("previous--card") ?
				nextCardEl.classList.remove("previous--card") :
				nextCardEl?.classList.contains("current--card") &&
				nextCardEl.classList.remove("current--card");

		// Stop remove card classes ********

		// Start remove card classes *******

		currentBgImageEl?.classList.contains("current--image") ?
			currentBgImageEl.classList.remove("current--image") :
			currentBgImageEl?.classList.contains("next--image") ?
				currentBgImageEl.classList.remove("next--image") :
				currentBgImageEl?.classList.contains("previous--image") &&
				currentBgImageEl.classList.remove("previous--image");

		// previousCardEl.classList.remove("previous--card");

		previousBgImageEl?.classList.contains("previous--image") ?
			previousBgImageEl.classList.remove("previous--image") :
			previousBgImageEl?.classList.contains("next--image") ?
				previousBgImageEl.classList.remove("next--image") :
				previousBgImageEl?.classList.contains("current--image") &&
				previousBgImageEl.classList.remove("current--image");

		// nextCardEl.classList.remove("next--card");

		nextBgImageEl?.classList.contains("next--image") ?
			nextBgImageEl.classList.remove("next--image") :
			nextBgImageEl?.classList.contains("previous--image") ?
				nextBgImageEl.classList.remove("previous--image") :
				nextBgImageEl?.classList.contains("current--image") &&
				nextBgImageEl.classList.remove("current--image");
		// Stop remove card classes ********


		// currentBgImageEl.classList.remove("current--image");
		// previousBgImageEl.classList.remove("previous--image");
		// nextBgImageEl.classList.remove("next--image");

		currentCardEl.style.zIndex = "50";
		currentBgImageEl.style.zIndex = "-2";

		if (direction === "right") {


			previousCardEl.style.zIndex = "20";
			nextCardEl.style.zIndex = "30";

			nextBgImageEl.style.zIndex = "-1";

			currentCardEl.classList.add("previous--card");
			previousCardEl.classList.add("next--card");
			nextCardEl.classList.add("current--card");

			currentBgImageEl.classList.add("previous--image");
			previousBgImageEl.classList.add("next--image");
			nextBgImageEl.classList.add("current--image");

			currentImageIndex = currentImageIndex >= imageList.length - 1 ? 0 : currentImageIndex + 1;
			previousImageIndex = previousImageIndex >= imageList.length - 1 ? 0 : previousImageIndex + 1;
			nextImageIndex = nextImageIndex >= imageList.length - 1 ? 0 : nextImageIndex + 1;

			// CurrentFirstImage = CurrentFirstImage >= imageList.length - 1 ? 1 : CurrentFirstImage + 1;

		} else if (direction === "left") {


			previousCardEl.style.zIndex = "30";
			nextCardEl.style.zIndex = "20";

			previousBgImageEl.style.zIndex = "-1";

			currentCardEl.classList.add("next--card");
			previousCardEl.classList.add("current--card");
			nextCardEl.classList.add("previous--card");

			currentBgImageEl.classList.add("next--image");
			previousBgImageEl.classList.add("current--image");
			nextBgImageEl.classList.add("previous--image");

			currentImageIndex = currentImageIndex <= 0 ? imageList.length - 1 : currentImageIndex - 1;
			previousImageIndex = previousImageIndex <= 0 ? imageList.length - 1 : previousImageIndex - 1;
			nextImageIndex = nextImageIndex <= 0 ? imageList.length - 1 : nextImageIndex - 1;

			// CurrentFirstImage = CurrentFirstImage == 0 ? imageList.length - 1 : CurrentFirstImage - 1;

		}

		cardList.forEach((each) => each.style.display = "none")

		currentCardEl.style.display = "block";
		previousCardEl.style.display = "block";
		nextCardEl.style.display = "block";
		imageList[previousImageIndex ? previousImageIndex - 1 : imageList.length - 1].style.display = "block";
		imageList[nextImageIndex >= imageList.length - 1 ? 0 : nextImageIndex + 1].style.display = "block";
	}
}

function changeInfo(direction) {

	// infoList.forEach((each) => each.style.display = "none")

	let currentInfoEl = infoList[currentImageIndex]  //cardInfosContainerEl.querySelector(".current--info");
	let previousInfoEl = infoList[previousImageIndex] //cardInfosContainerEl.querySelector(".previous--info");
	let nextInfoEl = infoList[nextImageIndex] //cardInfosContainerEl.querySelector(".next--info");

	// currentInfoEl.style.display = "block";
	// previousInfoEl.style.display = "block";
	// nextInfoEl.style.display = "block";

	//infoList

	gsap.timeline()
		.to([buttons.prev, buttons.next], {
			duration: 0.2,
			opacity: 0.5,
			pointerEvents: "none",
		})
		.to(
			currentInfoEl.querySelectorAll(".text"),
			{
				duration: 0.4,
				stagger: 0.1,
				translateY: "-120px",
				opacity: 0,
			},
			"-="
		)
		.call(() => {
			swapInfosClass(direction);
		})
		.call(() => initCardEvents())
		.fromTo(
			direction === "right"
				? nextInfoEl.querySelectorAll(".text")
				: previousInfoEl.querySelectorAll(".text"),
			{
				opacity: 0,
				translateY: "40px",
			},
			{
				duration: 0.4,
				stagger: 0.1,
				translateY: "0px",
				opacity: 1,
			}
		)
		.to([buttons.prev, buttons.next], {
			duration: 0.2,
			opacity: 1,
			pointerEvents: "all",
		});


	function swapInfosClass() {

		// infoList.forEach((each) => {
		// 	each?.classList.contains("current--info") ?
		// 		each.classList.remove("current--info") :
		// 		each?.classList.contains("next--info") ?
		// 			each.classList.remove("next--info") :
		// 			each?.classList.contains("previous--info") &&
		// 			each.classList.remove("previous--info");
		// });

	// infoList.forEach((each) => each.style.display = "none" );

		currentInfoEl?.classList.contains("current--info") ?
			currentInfoEl.classList.remove("current--info") :
			currentInfoEl?.classList.contains("next--info") ?
				currentInfoEl.classList.remove("next--info") :
				currentInfoEl?.classList.contains("previous--info") &&
				currentInfoEl.classList.remove("previous--info");


		previousInfoEl?.classList.contains("previous--info") ?
			previousInfoEl.classList.remove("previous--info") :
			previousInfoEl?.classList.contains("next--info") ?
				previousInfoEl.classList.remove("next--info") :
				previousInfoEl?.classList.contains("current--info") &&
				previousInfoEl.classList.remove("current--info");


		nextInfoEl?.classList.contains("next--info") ?
			nextInfoEl.classList.remove("next--info") :
			nextInfoEl?.classList.contains("previous--info") ?
				nextInfoEl.classList.remove("previous--info") :
				nextInfoEl?.classList.contains("current--info") &&
				nextInfoEl.classList.remove("current--info");

		// currentInfoEl.classList.remove("current--info");
		// previousInfoEl.classList.remove("previous--info");
		// nextInfoEl.classList.remove("next--info");

		if (direction === "right") {
			currentInfoEl.classList.add("previous--info");
			nextInfoEl.classList.add("current--info");
			previousInfoEl.classList.add("next--info");
		} else if (direction === "left") {
			currentInfoEl.classList.add("next--info");
			nextInfoEl.classList.add("previous--info");
			previousInfoEl.classList.add("current--info");
		}
	}
}

function updateCard(e) {
	const card = e.currentTarget;
	const box = card.getBoundingClientRect();
	const centerPosition = {
		x: box.left + box.width / 2,
		y: box.top + box.height / 2,
	};
	let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
	gsap.set(card, {
		"--current-card-rotation-offset": `${angle}deg`,
	});
	const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	gsap.set(currentInfoEl, {
		rotateY: `${angle}deg`,
	});
}

function resetCardTransforms(e) {
	const card = e.currentTarget;
	const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	gsap.set(card, {
		"--current-card-rotation-offset": 0,
	});
	gsap.set(currentInfoEl, {
		rotateY: 0,
	});
}

function initCardEvents() {
	const currentCardEl = cardsContainerEl.querySelector(".current--card");
	currentCardEl.addEventListener("pointermove", updateCard);
	currentCardEl.addEventListener("pointerout", (e) => {
		resetCardTransforms(e);
	});
}

initCardEvents();

function removeCardEvents(card) {
	card.removeEventListener("pointermove", updateCard);
}

function init() {

	let tl = gsap.timeline();

	tl.to(cardsContainerEl.children, {
		delay: 0.15,
		duration: 0.5,
		stagger: {
			ease: "power4.inOut",
			from: "right",
			amount: 0.1,
		},
		"--card-translateY-offset": "0%",
	})
		.to(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
			delay: 0.5,
			duration: 0.4,
			stagger: 0.1,
			opacity: 1,
			translateY: 0,
		})
		.to(
			[buttons.prev, buttons.next],
			{
				duration: 0.4,
				opacity: 1,
				pointerEvents: "all",
			},
			"-=0.4"
		);
}

const waitForImages = () => {
	const images = [...document.querySelectorAll("img")];
	const totalImages = images.length;
	let loadedImages = 0;
	const loaderEl = document.querySelector(".loader span");

	gsap.set(cardsContainerEl.children, {
		"--card-translateY-offset": "100vh",
	});
	gsap.set(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
		translateY: "40px",
		opacity: 0,
	});
	gsap.set([buttons.prev, buttons.next], {
		pointerEvents: "none",
		opacity: "0",
	});

	images.forEach((image) => {
		imagesLoaded(image, (instance) => {
			if (instance.isComplete) {
				loadedImages++;
				let loadProgress = loadedImages / totalImages;

				gsap.to(loaderEl, {
					duration: 1,
					scaleX: loadProgress,
					backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
				});

				if (totalImages == loadedImages) {
					gsap.timeline()
						.to(".loading__wrapper", {
							duration: 0.8,
							opacity: 0,
							pointerEvents: "none",
						})
						.call(() => init());
				}
			}
		});
	});

	myMusic.autoplay = true;
	myMusic.load();
};

waitForImages();
