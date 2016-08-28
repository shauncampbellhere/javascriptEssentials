//Card Counting Function
//Shaun Campbell 
//08/28/2016

var count = 0;
 
function cc(card) {
  // Only change code below this line
 
  if(card >= 2 && card <= 6){
    count++;
     if(count<=0){ return (count+" Hold"); } else{ return (count+" Bet"); } } else if(card >= 7 && card <= 9) {
 
     if(count<=0){
    return (count+" Hold");
     }
 
    else{
      return (count+" Bet");
    }
  }
 
   else if(card===10 || card==="J" ||  card==="Q" || card==="K" || card==="A"){
    count--;
    if(count<=0){
 
    return (count+" Hold");
     }
 
    else{
      return (count+" Bet");
    }
  }
}