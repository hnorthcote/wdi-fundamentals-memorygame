/*let cardOne = "queen";
let cardTwo = "queen";
let cardThree = "king";
let cardFour = "king";
console.log("You got: "+cardOne);
console.log("You got: "+cardFour);
*/


let cards = ['queen', 'queen', 'king', 'king']; 
let cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry try again.");
	}
}

function flipCard(CardId) {


checkForMatch();
if (cardsInPlay.length === 2) {
	if (cardOne === cardTwo) {
		alert('You found a match!');
	} else {
		alert('Sorry try again');
	}
}
console.log("User flipped "+cards[CardId])
cardsInPlay.push(cards[CardId]);

}

flipCard(0);
flipCard(2);
/*

let cardThree = cards[1];
let cardFour = cards[3];
*/