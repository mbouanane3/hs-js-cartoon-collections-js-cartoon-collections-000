function dwarfRollCall(dwarves) { 
var string = '';
  dwarves.map(function(name, index ) {
    string += (index+1+'.'+' '+name+' ');
    });
    return string;
}

function summonCaptainPlanet(planeteerCalls){
  return planeteerCalls.map(function(element){
    return element.toUpperCase()+ '!';
  });
}

function longPlaneteerCalls(calls) {
	for(var i = 0; i < calls.length; i++) {
		if(calls[i].length > 4) {
			return true;
		}else{
	}
	return false;}}

 function findTheCheese (foods) {
 	var cheese = ["camembert", "cheddar", "gouda","swiss"];
	for(var i = 0; i < foods.length; i++) {
 		for(var j = 0; j < cheese.length; j++){
			if(foods[i] === cheese[j]) {
 				return cheese[j];
 			}
 		} 	}
 	return "no cheese!";
 }