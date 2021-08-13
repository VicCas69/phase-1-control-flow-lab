function scuberGreetingForFeet(distanceTravel){
  let result

  if (distanceTravel <= 400){
   result = "This one is on me!" ;// rite your code here!
}
else if (distanceTravel > 2000 && distanceTravel < 2501){
  result = "I will gladly take your thirty bucks.";
}
else if (distanceTravel >= 2501){
  result = "No can do.";
}
  
  return result;
  
}

function ternaryCheckCity(city){ 
  let location;
  city === "NYC" ? location = "Ok, sounds good." : location = "No go."; 
  return location;
//if (city === "NYC"){ location = "Ok, sounds good."}
//else{ location = "No go.";}
//return location;
}


function switchOnCharmFromTip(tip){
  let money;
  switch(tip){
    case 'generous' : 
      money = 'Thank you so much.';
      break;
    case 'not as generous' : 
      money = 'Thank you.'; 
      break;
    default :
      money = 'Bye.';
      break;
  }
  return money;
}