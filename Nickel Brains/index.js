function declareWinner(fighter1, fighter2, firstAttacker) {
	//damage inflicted
	var fight1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
	var fight2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
	//after each attack health is sorted who won
	if(fight1 < fight2) { 
	return fighter2.name; } 
	else if(fight2 < fight1) { return fighter1.name; } 
	//if everyone survived returned to first attacker
	else { return firstAttacker; }
  }

module.exports = {declareWinner};