function newTavern() {
	//Tavern Wellness
	var tavernWellness = document.getElementById("tavernWellness");
	var tavernWellnessType = tavernWellness.options[tavernWellness.selectedIndex].value;
 	//Tavern Name
	var tavernTypesRandom = Math.floor(Math.random() * (tavernTypes.length));
	var tavernNameBeginningRandom = Math.floor(Math.random() * (tavernNameBeginning.length));
	var tavernNameEndiningRandom = Math.floor(Math.random() * (tavernNameEndining.length));
	tavernNamesEnding = tavernNameEndining[tavernNameEndiningRandom].substr(tavernNameEndining[tavernNameEndiningRandom].length - 1);	
	if (tavernNamesEnding == 'а') { var tavernNamesEnding = 'а';} 
	else {var tavernNamesEnding = 'ий';}
	document.getElementById('tavernName').innerHTML = tavernTypes[tavernTypesRandom]+' "'+tavernNameBeginning[tavernNameBeginningRandom]+tavernNamesEnding+' '+tavernNameEndining[tavernNameEndiningRandom]+'"';
	//Tavern Logo
	var tavernLogo = tavernNameBeginning[tavernNameBeginningRandom].charAt(0)+tavernNameEndining[tavernNameEndiningRandom].charAt(0);
	var tavernLogoColorR = Math.floor(Math.random() * (tavernLogoColor.length));
	document.getElementById("tavernLogo").innerHTML = tavernLogoColorBefore+tavernLogoColorEnglish[tavernLogoColorR]+'">'+tavernLogo+'</div></div>';
	//Tavern Location
	var tavernLocationRoadRandom = Math.floor(Math.random() * (tavernLocationRoad.length));
	var tavernLocationDirectionRandom = Math.floor(Math.random() * (tavernLocationDirection.length));
	var tavernLocationPoIRandom = Math.floor(Math.random() * (tavernLocationPoI.length));
	var tavernLocationBigPoIRandom = Math.floor(Math.random() * (tavernLocationBigPoI.length));
	var tavernLocationQuantityRandom = Math.floor(Math.random() * (tavernLocationQuantity.length));
	var tavernLocationRacesRandom = Math.floor(Math.random() * (tavernLocationRaces.length));
	var tavernLocationAttitudeRandom = Math.floor(Math.random() * (tavernLocationAttitude.length));
	var tavernLocationNotableRandom = Math.floor(Math.random() * (tavernLocationNotable.length));
	tavernTypesEndingEnding = tavernTypes[tavernTypesRandom].substr(tavernTypes[tavernTypesRandom].length - 1);	
	if (tavernTypesEndingEnding == 'а') { 
		var tavernTypesEndingEnding = 'а';
		var tavernLocationDirectionEnding = 'ою';
	} 
	else {
		var tavernTypesEndingEnding = 'ий';
		var tavernLocationDirectionEnding = 'им';
	}
	document.getElementById('tavernLocation').innerHTML = tavernTypes[tavernTypesRandom]+' знаходиться на '+tavernLocationRoad[tavernLocationRoadRandom]+', на '+tavernLocationDirection[tavernLocationDirectionRandom]+' від '+tavernLocationPoI[tavernLocationPoIRandom]+'. '+tavernTypes[tavernTypesRandom]+' є '+tavernLocationNotable[tavernLocationNotableRandom]+' відом'+tavernLocationDirectionEnding+' мандрівникам, що подорожують до '+tavernLocationBigPoI[tavernLocationBigPoIRandom]+'. Поряд із "'+tavernNameBeginning[tavernNameBeginningRandom]+tavernNamesEnding+' '+tavernNameEndining[tavernNameEndiningRandom]+'" живе '+tavernLocationQuantity[tavernLocationQuantityRandom]+' '+tavernLocationRaces[tavernLocationRacesRandom]+'. Вони '+tavernLocationAttitude[tavernLocationAttitudeRandom]+' привітні до прийдешніх.';
	//Tavern Description
	var tavernDescriptionStoresRandom = Math.floor(Math.random() * (tavernDescriptionStores.length));
	var tavernDescriptionMadeOfRandom = Math.floor(Math.random() * (tavernDescriptionMadeOf.length));
	var tavernDescriptionYardTypeRandom = Math.floor(Math.random() * (tavernDescriptionYardType.length));
	var tavernDescriptionYardStyleRandom = Math.floor(Math.random() * (tavernDescriptionYardStyle.length));
	var tavernDescriptionFenceStyleRandom = Math.floor(Math.random() * (tavernDescriptionFenceStyle.length));
	var tavernDescriptionYardTablesStyleRandom = Math.floor(Math.random() * (tavernDescriptionYardTablesStyle.length));
	var tavernDescriptionYardStoolsRandom = Math.floor(Math.random() * (tavernDescriptionYardStools.length));
	var tavernDescriptionRoomCountRandom = Math.floor(Math.random() * (tavernDescriptionRoomCount.length));
	var tavernDescriptionRoomSizeRandom = Math.floor(Math.random() * (tavernDescriptionRoomSize.length));
	var tavernDescriptionBedsRandom = Math.floor(Math.random() * (tavernDescriptionBeds.length));
	var tavernDescriptionComfortRandom = Math.floor(Math.random() * (tavernDescriptionComfort.length));
 	document.getElementById('tavernDescription').innerHTML = tavernTypes[tavernTypesRandom]+' є '+tavernDescriptionStores[tavernDescriptionStoresRandom]+'поверховою '+tavernDescriptionMadeOf[tavernDescriptionMadeOfRandom]+'будівлею із '+tavernDescriptionYardType[tavernDescriptionYardTypeRandom]+tavernDescriptionYardStyle[tavernDescriptionYardStyleRandom]+' двориком, оточеним'+tavernDescriptionFenceStyle[tavernDescriptionFenceStyleRandom]+' парканом. Над входом висить гарна '+tavernLogoColor[tavernLogoColorR]+' вивіска з літерами '+tavernLogo+'. У дворику є '+tavernDescriptionYardTablesStyle[tavernDescriptionYardTablesStyleRandom]+' столи'+tavernDescriptionYardStools[tavernDescriptionYardStoolsRandom]+'. Тут можна зупинитись в одній з '+tavernDescriptionRoomCount[tavernDescriptionRoomCountRandom]+tavernDescriptionRoomSize[tavernDescriptionRoomSizeRandom]+' кімнат, що мають '+tavernDescriptionBeds[tavernDescriptionBedsRandom]+' ліжка'+tavernDescriptionComfort[tavernDescriptionComfortRandom]+'.';
	//Tavern Keeper	
	var personArray = generatePerson();
	document.getElementById('tavernInnkeeper').innerHTML = 'Власни'+personArray[1]+' '+tavernName[tavernTypesRandom]+' є '+personArray[8]+personArray[2]+' '+personArray[9]+" на ім'я "+personArray[0]+'.';
	//Tavern Menu New
	var tavernMenuArray = [];
	var tavernWellnessCount = Number(tavernWellnessType);
	var tavernMenuFull ='';
	for (var i = 4; i >= tavernWellnessCount; i--) {
		var tavernMenuFirstR = Math.floor(Math.random() * (tavernMenuFirst.length));
		var tavernMenuSecondR = Math.floor(Math.random() * (tavernMenuSecond.length));
		var tavernMenuThirdR = Math.floor(Math.random() * (tavernMenuThird.length));
		var tavernMenuDrinkR = Math.floor(Math.random() * (tavernMenuDrink.length));
		//names
		var tavernMenuFirstSelectedName = tavernMenuFirst[tavernMenuFirstR].slice(0, -3);
		var tavernMenuSecondSelectedName = tavernMenuSecond[tavernMenuSecondR].slice(0, -3);
		var tavernMenuThirdSelectedName = tavernMenuThird[tavernMenuThirdR].slice(0, -3);
		var tavernMenuDrinkSelectedName = tavernMenuDrink[tavernMenuDrinkR].slice(0, -3);
		//cost in copper
		var tavernMenuFirstSelectedCost = Number(tavernMenuFirst[tavernMenuFirstR].slice(-3));
		var tavernMenuSecondSelectedCost = Number(tavernMenuSecond[tavernMenuSecondR].slice(-3));
		var tavernMenuThirdSelectedCost = Number(tavernMenuThird[tavernMenuThirdR].slice(-3));
		var tavernMenuDrinkSelectedCost = Number(tavernMenuDrink[tavernMenuDrinkR].slice(-3));
		var tavernMenuCostTotal = tavernMenuFirstSelectedCost+tavernMenuSecondSelectedCost+tavernMenuThirdSelectedCost+tavernMenuDrinkSelectedCost;
		if (tavernMenuCostTotal < 10) {
		//cost in copper coins
			var tavernMenuCostTotalCoins = tavernMenuCostTotal+' мідних';
		} else { 
			if (tavernMenuCostTotal < 100) {
		//cost in silver coins
				var tavernMenuCostTotalCoins = tavernMenuCostTotal.toString().slice(0, -1)+' срібних';
				var coinsCopper = tavernMenuCostTotal.toString().slice(-1);
				if (coinsCopper != 0) {
					var tavernMenuCostTotalCoins = tavernMenuCostTotalCoins+' та '+tavernMenuCostTotal.toString().slice(-1)+' мідних';
				}
			} else {
		//cost in gold coins
				var tavernMenuCostTotalCoins = tavernMenuCostTotal.toString().slice(0, -2)+' золотих, '+tavernMenuCostTotal.toString().slice(0, -1)+' см';
				var coinsCopper = tavernMenuCostTotal.toString().slice(-1);
				if (coinsCopper != 0) {
					var tavernMenuCostTotalCoins = tavernMenuCostTotalCoins+' та '+tavernMenuCostTotal.toString().slice(-1)+' мідних';
				}
			}
		}
	this["tavernMenuArray"+i] = '<li>'+tavernMenuFirstSelectedName+''+tavernMenuSecondSelectedName+''+tavernMenuThirdSelectedName+''+tavernMenuDrinkSelectedName+' - '+tavernMenuCostTotalCoins+' монет</li>';
	var tavernMenuFull = tavernMenuFull+this["tavernMenuArray"+i]
	}
	document.getElementById('tavernMenuNew').innerHTML = '<ul>'+tavernMenuFull+'</ul>';
	//Tavern Rumors
	var tavernRumorsRandom1 = Math.floor(Math.random() * (tavernRumors1.length));
	var tavernRumorsRandom2 = Math.floor(Math.random() * (tavernRumors2.length));
	var tavernRumorsRandom3 = Math.floor(Math.random() * (tavernRumors3.length));
	document.getElementById('tavernRumors').innerHTML = '"'+tavernRumors1[tavernRumorsRandom1]+'"<br />"'+tavernRumors2[tavernRumorsRandom2]+'"<br />"'+tavernRumors3[tavernRumorsRandom3]+'"';
}
function pageVersion() {
	var generatorName = 'Генератор Таверни';
	var generatorVersion = '0.2';
	document.title = generatorName+' '+generatorVersion;
	}
