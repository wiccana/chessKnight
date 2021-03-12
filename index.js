const challengeFunction = function(cell){
    /* YOUR CODE HERE */
    let letter = cell.split("")[0];
    let number = cell.split("")[1];
    let movs = 8;
    

    if (letter == "A" || letter == "H"){
       movs*= 0.5;
    }else if(letter == "B" || letter == "G"){
        movs*=0.75;
    }
    if (number == 1 || number == 8){
        movs*=0.5;
     }else if(number == 2 || number == 7){
         movs*=0.75;
     }
     console.log(Math.floor(movs))
    return Math.floor(movs)
}

module.exports = challengeFunction
