function newVillage() {
	//Village Size
	//var villagePopulation = 10;
	var villageSizeSelected = document.getElementById('villageSize');
	var villageType = villageSizeSelected.options[villageSizeSelected.selectedIndex].text;
	var villageSize = villageSizeSelected.options[villageSizeSelected.selectedIndex].value;
	switch (villageSize) {
	  case '0':
		villagePopulation = Math.floor(Math.floor(Math.random() * 1000 + 60)/ 10) * 10;
		villageRulerPresence = 0;
		villageRulerTitleSelected = villageRulerTitle[0];
		break;
	  case '1':
		villagePopulation = Math.ceil(Math.floor(Math.random() * 6000 + 1060)/ 10) * 10;
		villageRulerPresence = 1;
		villageRulerTitleSelected = villageRulerTitle[1];
		break;
	  case '2':
		villagePopulation = Math.ceil(Math.floor(Math.random() * 25000 + 6060)/ 10) * 10;
		villageRulerPresence = 1;
		villageRulerTitleSelected = villageRulerTitle[2];
		break;
	}
	var villageRacesSelected = Math.floor(Math.random() * (villageRaces.length));
	var villageRacesTensionsRoll = Math.floor(Math.random() * 20 + 1);
	switch (villageRacesTensionsRoll) {
	  case 1:
	  case 2:
	  case 3:
	  case 4:
	  case 5:
	  case 6:
	  case 7:
	  case 8:
	  case 9:
	  case 10:
		villageRacesTensionsSelected = villageRacesTensions[0];
		break;
	  case 11:
	  case 12:
	  case 13:
	  case 14:
		villageRacesTensionsSelected = villageRacesTensions[1];
		break;
	  case 15:
	  case 16:
		villageRacesTensionsSelected = villageRacesTensions[2];
		break;
	  case 17:
		villageRacesTensionsSelected = villageRacesTensions[3];
		break;
	  case 18:
		villageRacesTensionsSelected = villageRacesTensions[4];
		break;
	  case 19:
		villageRacesTensionsSelected = villageRacesTensions[5];
		break;
	  case 20:
		villageRacesTensionsSelected = villageRacesTensions[6];
		break;
	}
	document.getElementById('villageRace').innerHTML = villageRaces[villageRacesSelected];
	document.getElementById('villageRace2').innerHTML = villageRaces[villageRacesSelected];
	document.getElementById('villageTensions').innerHTML = villageRacesTensionsSelected;
	document.getElementById('villageType').innerHTML = villageType;
	document.getElementById('villagePopulation').innerHTML = villagePopulation;
 	//Village Ruler
	var villageRulerPresenceText = '';
	var personArray = generatePerson();
	var personRepArray = generatePerson();
	var villageRulerLiveHere = Math.floor(Math.random() * 3);
	if (villageRulerPresence == 0 && villageRulerLiveHere == 0) { var villageRulerPresenceText = ', але '+personArray[5]+' не живе в ньому, замість '+personArray[6]+' тут є '+personArray[7]+' підрядник - '+personRepArray[9]+' '+personRepArray[0];}
	document.getElementById('villageRuler').innerHTML = villageRulerTitleSelected+' '+personArray[0]+', '+personArray[8]+personArray[2]+' '+personArray[9]+villageRulerPresenceText;
	//var villageName = generateVillageName();
	var villageNameFull = generateVillageName();
	villageNameEndCharacterSel = villageNameFull.toString().slice(-1);
	  switch (villageNameEndCharacterSel) {
	    case 'а':
	    case 'я':
	    villageNameEndCharacter = 'а';
	    break;
	    case 'і':
	    case 'и':
    	    villageNameEndCharacter = 'і';
	    break;
	    default:
	    villageNameEndCharacter = 'ий';
	    break;
	  }
	var villageRulerStatusRoll = Math.floor(Math.random() * 20 + 1);
	switch (villageRulerStatusRoll) {
	  case 1:
	  case 2:
	  case 3:
	  case 4:
	  case 5:
		villageRulerStatusSelected = villageRulerStatus[0];
		break;
	  case 6:
	  case 7:
	  case 8:
		villageRulerStatusSelected = villageRulerStatus[1];
		break;
	  case 9:
		villageRulerStatusSelected = villageRulerStatus[2];
		break;
	  case 10:
		villageRulerStatusSelected = villageRulerStatus[3];
		break;
	  case 11:
		villageRulerStatusSelected = villageRulerStatus[4];
		break;
	  case 12:
		villageRulerStatusSelected = villageRulerStatus[5];
		break;
	  case 13:
		villageRulerStatusSelected = villageRulerStatus[6];
		break;
	  case 14:
		villageRulerStatusSelected = villageRulerStatus[7];
		break;
	  case 15:
		villageRulerStatusSelected = villageRulerStatus[8];
		break;
	  case 16:
		villageRulerStatusSelected = villageRulerStatus[9];
		break;
	  case 17:
	  case 18:
		villageRulerStatusSelected = villageRulerStatus[10];
		break;
	  case 19:
	  case 20:
		villageRulerStatusSelected = villageRulerStatus[11];
		break;
	}
	var villageFeatureRoll = Math.floor(Math.random() * 20);
	document.getElementById('villageName').innerHTML =  villageNameFull;
	document.getElementById('villageName2').innerHTML =  villageNameFull;
	document.getElementById('villageFeature').innerHTML =  villageFeature[villageFeatureRoll];
	document.getElementById('villageNameEnding').innerHTML = villageNameEndCharacter;
	document.getElementById('villageRuler2').innerHTML =  personArray[0]+' '+villageRulerStatusSelected;
	document.getElementById('villageType2').innerHTML = villageType;
	var villageKnownForRoll = Math.floor(Math.random() * 20);
	document.getElementById('villageKnownFor').innerHTML =  villageKnownFor[villageKnownForRoll];
}

function pageVersion() {
	var generatorName = 'Генератор Поселення';
	var generatorVersion = '0.1';
	document.title = generatorName+' '+generatorVersion;
	}
