function generatePerson() {
	var personSexRandom = Math.floor(Math.random() * (personSex.length));
	var personAdverbRandom = Math.floor(Math.random() * (personAdverb.length));
	var personRaceNumber = Math.floor(Math.random() * 4);
	var personNameMaleHumanRandom = Math.floor(Math.random() * (personNameMaleHuman.length));
	var personNameFemaleHumanRandom = Math.floor(Math.random() * (personNameFemaleHuman.length));
	var personNameMaleDwarfRandom = Math.floor(Math.random() * (personNameMaleDwarf.length));
	var personNameFemaleDwarfRandom = Math.floor(Math.random() * (personNameFemaleDwarf.length));
	var personNameMaleElfRandom = Math.floor(Math.random() * (personNameMaleElf.length));
	var personNameFemaleElfRandom = Math.floor(Math.random() * (personNameFemaleElf.length));
	var personNameMaleHalflingRandom = Math.floor(Math.random() * (personNameMaleHalfling.length));
	var personNameFemaleHalflingRandom = Math.floor(Math.random() * (personNameFemaleHalfling.length));
	if (personSexRandom == 1) { 
		var personSexEnding1 = 'ком';
		var personSexEnding2 = 'ий';
		var personSexEnding3 = 'к';
		var personSexEnding4 = 'в';
		var personSexEnding5 = 'він';
		var personSexEnding6 = 'нього';
		var personSexEnding7 = 'його';
		var personRace = personRaceMale[personRaceNumber];
	} 
	else {	
		var personSexEnding1 = 'цею';
		var personSexEnding2 = 'а';
		var personSexEnding3 = 'ця';
		var personSexEnding4 = 'ла';
		var personSexEnding5 = 'вона';
		var personSexEnding6 = 'неї';
		var personSexEnding7 = 'її';
		var personRace = personRaceFemale[personRaceNumber];
	}
	switch (personRaceNumber) {
	  case 0://human
		var personName = personNameMaleHuman[personNameMaleHumanRandom];
		if (personSexRandom == 0) { var personName = personNameFemaleHuman[personNameFemaleHumanRandom];} 
	  case 1://elf
		var personName = personNameMaleElf[personNameMaleElfRandom];
		if (personSexRandom == 0) { var personName = personNameFemaleElf[personNameFemaleElfRandom];}
	  case 2://dwarf
		var personName = personNameMaleDwarf[personNameMaleDwarfRandom];
		if (personSexRandom == 0) { var personName = personNameFemaleDwarf[personNameFemaleDwarfRandom];}
	  case 3://halfling
		var personName = personNameMaleHalfling[personNameMaleHalflingRandom];
		if (personSexRandom == 0) { var personName = personNameFemaleHalfling[personNameFemaleHalflingRandom];}
	}
	if (personAdverb[personAdverbRandom] == '') { var personSexEnding2 = '';}
	var person0 = personName;
	var person1 = personSexEnding1;
	var person2 = personSexEnding2;
	var person3 = personSexEnding3;
	var person4 = personSexEnding4;
	var person5 = personSexEnding5;
	var person6 = personSexEnding6;
	var person7 = personSexEnding7;
	var person8 = personAdverb[personAdverbRandom];
	var person9 = personRace;
	var returnedArray = [];
	returnedArray.push(person0);
	returnedArray.push(person1);
	returnedArray.push(person2);
	returnedArray.push(person3);
	returnedArray.push(person4);
	returnedArray.push(person5);
	returnedArray.push(person6);
	returnedArray.push(person7);
	returnedArray.push(person8);
	returnedArray.push(person9);
	return returnedArray;
}
