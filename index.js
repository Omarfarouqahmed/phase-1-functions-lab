// Code your solution in this file!
 function distanceFromHqInBlocks(block){
  const hqBlock = 42;
    return Math.abs(42 - block);
 }
 function distanceFromHqInFeet(block){
  const hqBlock = 42;
   return Math.abs(block - hqBlock)*264;
 }
 function distanceTravelledInFeet(block, hqBlock){
  const feetPerBlock = 264;
  

  return Math.abs (block - hqBlock)*264
 }
 function calculatesFarePrice (block, hqBlock){
  const distance = distanceTravelledInFeet(block, hqBlock)
  if (distance <= 400 ) {
    return 0;
  }
  else if (distance > 400 && distance <=2000){
    return (distance - 400)*0.02
  }
  else if (distance >2000 && distance<=2500){
    return 25;
  }
  else if (distance >2500){
    return 'cannot travel that far'
  }
 }
  

  