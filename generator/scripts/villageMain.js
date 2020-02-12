function newVillage() {
	//Village Size
	var villagePopulation = 10;
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
	document.getElementById('villageType').innerHTML = villageType;
	document.getElementById('villagePopulation').innerHTML = villagePopulation;
 	//Village Ruler
	var villageRulerPresenceText = '';
	var personArray = generatePerson();
	var personRepArray = generatePerson();
	var villageRulerLiveHere = Math.floor(Math.random() * 3);
	if (villageRulerPresence == 0 && villageRulerLiveHere == 0) { var villageRulerPresenceText = ', але '+personArray[5]+' не живе в ньому, замість '+personArray[7]+' тут є '+personArray[6]+' підрядник - '+personRepArray[9]+' '+personRepArray[0];}
	document.getElementById('villageRuler').innerHTML = villageRulerTitleSelected+' '+personArray[0]+', '+personArray[8]+personArray[2]+' '+personArray[9]+villageRulerPresenceText;

}

function pageVersion() {
	var generatorName = 'Генератор Поселення';
	var generatorVersion = '0.1';
	document.title = generatorName+' '+generatorVersion;
	}
