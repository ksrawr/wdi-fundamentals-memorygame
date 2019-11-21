// console.log("Up and runninng");

let cards = ["queen", "queen", "king", "king"];

let cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if(cardsInPlay.length === 2) checkForMatch();
}

flipCard(0);
flipCard(2);

// let cardOne = cards[0];

// console.log("User flipped " + cardOne );


// cardsInPlay.push(cardOne);

// let cardTwo = cards[2];

// console.log("User flipped " + cardTwo );

// cardsInPlay.push(cardTwo);

// if(cardsInPlay.length === 2) {
