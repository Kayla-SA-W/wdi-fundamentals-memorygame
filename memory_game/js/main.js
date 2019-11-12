
//array holding all cards
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	}, {
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	}, {
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	}, {
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
//array for cards the user flipped
var cardsInPlay = [];
//function that compares the length of the array to see if two cards have been played
function checkForMatch(){
	//if else to alert if a match has been found
	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
		}else{
			alert("Sorry, try again.");
		}
	}
}
function flipCard(){
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

}
//memory game board
function createBoard(){
	for(var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		document.getElementById('game-board').appendChild(cardElement);
		cardElement.addEventListener('click', flipCard);
	}
}
createBoard();