   
//resets response and user input state, then checks for out of bounds
//after which it subtracts from index value or resets to index arra
export function handleLeftClick(
    setResponse, 
    setUserString, 
    setCurrentCard, 
    currentCard,
    arrayLength
){
    setResponse(null);
    setUserString(null);
    let nextCard;
    currentCard - 1 < 0
    ? nextCard = arrayLength - 1
    : nextCard = currentCard - 1
    setCurrentCard(nextCard);
}

//resets response and user input state, then checks for out of bounds
//after which it adds to index value or resets to index 0
export function handleRightClick(
    setResponse, 
    setUserString, 
    setCurrentCard, 
    currentCard,
    arrayLength
){
    setResponse(null);
    setUserString(null);
    let nextCard;
    currentCard + 1 > arrayLength - 1
    ? nextCard = 0
    : nextCard = currentCard + 1
    setCurrentCard(nextCard);
    
}