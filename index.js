function dwarfRollCall(dwarves) { 
var string = '';
  dwarves.forEach(function(name, index ) {
    string += (index+1+'.'+' '+name+' ');
    });
    return string;
}

function summonCaptainPlanet(planeteerCalls){
  return planeteerCalls.map(function(element){
    return element.toUpperCase()+ '!';
  });
}

function longPlaneteerCalls(words) {
	for(var i = 0; i < words.length; i++) {
		if(words[i].length > 4) {
			return true;
		}else{
	}
	return false;}}

 function findTheCheese (foods) {
 	var cheese = ["camembert", "cheddar", "gouda"];
	for(var i = 0; i < foods.length; i++) {
 		for(var j = i; j < cheese.length; j++){
			if(foods[i] === cheese[j]) {
 				return cheese[j];
 			}
 		} 	}
 	return "no cheese!";
 }