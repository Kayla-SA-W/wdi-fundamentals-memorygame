
//array holding all cards
var cards = ['queen', 'queen', 'king', 'king'];
//array for cards the user flipped
var cardsInPlay = [];

function checkForMatch(){
	//if else to alert if a match has been found
	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]){
			console.log("You found a match!");
		}else{
			console.log("Sorry, try again.");
		}
	}
}
function flipCard(cardId){
	console.log("User flipped " + cards[cardId] );
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}
flipCard(0);
flipCard(2);