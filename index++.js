// Math.abs() returns an absolute value
function distanceFromHqInBlocks(blocks){
    return Math.abs(42 - blocks);
}
console.log(distanceFromHqInBlocks(50));
/* Alternate code:
function distanceFromHqInBlocks (blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}
*/


/* (blocks) allows us to reuse the return value from the function above 
in our code down below */ 
function distanceFromHqInFeet(blocks){
    return (distanceFromHqInBlocks(blocks) * 264);
}
console.log(distanceFromHqInFeet(41));


//
function distanceTravelledInFeet(start, end){
    return Math.abs((start - end) * 264);
}
console.log(distanceTravelledInFeet(50, 40));
/* Alternate code:
function distanceTravelledInFeet (start, destination) {
  if (start < destination) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}
*/


// 
function calculatesFarePrice(start, end){
    const distance = distanceTravelledInFeet(start, end);
    
        if (distance <= 400) {
            return 0;
        } else if (distance > 400 && distance <= 2000) {
            return .02 * (distance - 400); 
        } else if (distance > 2000 && distance <= 2500) {
            return 25;
        } else {
            return "cannot travel that far";
        };
    };
console.log(distanceTravelledInFeet(40, 50))
console.log(calculatesFarePrice(40, 50));