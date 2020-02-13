function generateVillageName() {
	switch (villageSize.value) {
	  case '0': //village
	  var villageNameBeginning = villageNameA;
	  var villageNameEnding = villageNameB;
	  break;
	  case '1': //town
	  case '2': //city
	  var villageNameBeginning = villageNameC;
	  var villageNameEnding = villageNameD;
	  break;
	}
	var villageNameBeginningSelected = Math.floor(Math.random() * (villageNameBeginning.length));
	var villageNameEndingSelected = Math.floor(Math.random() * (villageNameEnding.length));
	var villageNameBeginningEnd = '';
	if (villageSize.value == 0 && villageNameBeginning[villageNameBeginningSelected] !== '') {	
	  villageNameBeginningEndCharacter = villageNameEnding[villageNameEndingSelected].substr(villageNameEnding[villageNameEndingSelected].length - 1);
	  switch (villageNameBeginningEndCharacter) {
	    case 'а':
	    case 'я':
	    villageNameBeginningEndCharacter = 'а';
	    break;
	    case 'і':
	    case 'и':
    	    villageNameBeginningEndCharacter = 'і';
	    break;
	    default:
	    villageNameBeginningEndCharacter = 'ий';
	    break;
	  }
	  villageNameBeginningEnd = villageNameBeginningEndCharacter+' ';
	}
	var villageNameFull = villageNameBeginning[villageNameBeginningSelected]+villageNameBeginningEnd+villageNameEnding[villageNameEndingSelected];

	var returnedArray = [];
	returnedArray.push(villageNameFull);
	return returnedArray;
}
