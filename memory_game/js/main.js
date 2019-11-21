// console.log("Up and runninng");

let cards = ["queen", "queen", "king", "king"];

let cardsInPlay = [];

let cardOne = cards[0];

console.log("User flipped " + cardOne );


cardsInPlay.push(cardOne);

let cardTwo = cards[2];

console.log("User flipped " + cardTwo );

cardsInPlay.push(cardTwo);

if(cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}