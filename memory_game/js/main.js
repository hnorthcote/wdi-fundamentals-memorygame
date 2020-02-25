/*let cardOne = "queen";
let cardTwo = "queen";
let cardThree = "king";
let cardFour = "king";
console.log("You got: "+cardOne);
console.log("You got: "+cardFour);
*/


let cards = ['queen', 'queen', 'king', 'king']; 
let cardsInPlay = [];

let cardOne = cards[0];
cardsInPlay.push(cardOne);

console.log('User flipped '+cardOne);


let cardTwo = cards[1];
cardsInPlay.push(cardTwo);

console.log('User flipped '+cardTwo);


if (cardsInPlay.length === 2) {
	if (cardOne === cardTwo) {
		alert('You found a match!');
	} else {
		alert('Sorry try again');
	}
}

/*

let cardThree = cards[1];
let cardFour = cards[3];
*/