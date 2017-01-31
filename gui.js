function beginSearch(people){
	var search = prompt("Do you know the person's full name?");
	switch (search.toLowerCase().trim()){
		case "yes":
		var person = getName(people);
		if(person){
			alertPersonFound(person, people);
			displayInformation(person, people);
			displayMenu(person, people);
		} else {
			alert("Sorry that person is not on the wanted list.");
			askToSearchAgain();
		}
		break;
		case "no":
		var person = getInformation(people);
		if(person){
			alertPersonFound(person, people);
			displayInformation(person, people);
			displayMenu(person, people);
		}
		break;
		default:
		alert("Please enter: [yes] or [no] ");
		beginSearch(people);
	}
}
function getNextOfKin(person,people){
    var nextOfKinList = [];
    nextOfKinList.push(getSpouse(person, people)[0]);
    if(nextOfKinList.length == 0) {
        nextOfKinList.push(getChildren(person, people)[0]);
    }
    if(nextOfKinList.length == 0) {
        nextOfKinList.push(getParents(person, people)[0]);
    }
    if(nextOfKinList.length == 0) {
        nextOfKinList.push(getSiblings(person, people)[0]);
    }
    return nextOfKinList;
}
function getDescendant(person, people,counter=-1, descList=[]){
    if(person != undefined) {
        var descendant = people.filter(function (descendants) {
            return descendants.parents.includes(person.id);
        });
        descList.push(...descendant);
        counter++;
        getDescendant(descList[counter],people,counter,descList);
    }
    return descList;
}
function displayMenu(person, people){
	var userInput = prompt("[1]  Display Descendants" +
		"\n[2]  Display Family" +
		"\n[3]  Get Next Of Kin" +
		"\n[4]  Restart Search" +
		"\n[5]  Quit");
	switch(userInput){
		case "1":
		var descendant = getDescendant(person, people);
		displayResult(descendant);
		displayMenu(person, people);
		break;
		case "2":
		var family = getImmediateFamily(person, people);
		displayResult(family);	
		displayMenu(person, people);
		break;
		case "3":
        var nextOfKin = getNextOfKin(person, people);
        if(nextOfKin.length > 0) {
            displayInformation(nextOfKin[0]);
        }
        else{
            alert("Unknown");
        }
        displayMenu(person, people);		
		break;
		case "4":
		beginSearch(people);		
		break;
		case "5":		
		break;
		default:
		displayMenu(person, people);
	}
}
function displayResult(people){
	var result = [];
	for(var i = 0; i < people.length; i++){
		var fullName = people[i].firstName + " " + people[i].lastName;
		result.push(fullName);
	}
	var name = result.join("\n");
    alert(name);
}
function displayInformation(person){
	alert("First Name:     " + person.firstName + 
		"\nLast Name:     " + person.lastName + 
		"\nGender:          " + person.gender + 
		"\nDOB:               " + person.dob + 
		"\nHeight:           " + person.height + 
		"\nWeight:          " + person.weight + 
		"\nEye Color:       " + person.eyeColor + 
		"\nOccupation:    " + person.occupation);
}
function convertHeight(height){
    var convertedHeight = ((height/12).toString().split(/[.]/)[0]) + "'" + (height % 12) + "''";
    return convertedHeight;
}
function calculateAge(dateString){
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
    {
        age--;
    }
    return age;
}
function getImmediateFamily(person, people){
    var parents = getParents(person, people);
    var siblings = getSiblings(person, people);
    var spouse = getSpouse(person, people);
    var children = getChildren(person, people);
    var allImmediateFamily = [];
    allImmediateFamily.push(...parents);
    allImmediateFamily.push(...siblings);
    allImmediateFamily.push(...spouse);
    allImmediateFamily.push(...children);
    return allImmediateFamily;
}
function getParents(person, people){
    var parents = people.filter(function (parent) {
        return person.parents.includes(parent.id);
    });
    parents.sort(function (firstParent, secondParent){
        return secondParent.value - firstParent.value;
    });
    return parents;
}
function getSpouse(person, people){
    var spouse = people.filter(function (significantOther) {
        return significantOther.currentSpouse == person.id;
    });
    return spouse;
}
function getChildren(person, people){
    var children = people.filter(function (child) {
        return child.parents.includes(person.id);
    });
    children.sort(function (child, kid){
        return kid.value - child.value;
    });
    return children;
}
function getSiblings(person, people){
    var siblings = people.filter(function (sibling) {
        return sibling.parents.includes(person.parents);
    });
    siblings.sort(function (siblingA, siblingB){
        return siblingB.value - siblingA.value;
    });
    return siblings;
}
function matchInformationWithData(gender, age, height, weight, eyeColor, occupation, people){
	var person = people.filter(function(personInfo){
		if(gender == person.gender){
			return true;
		}if((age + 5 || age - 5) == calculateAge(person.dob)){
			return true;
		}if((height + 5 || height - 5) == person.height){
			return true;
		}if((weight + 5 || weight - 5) == person.weight){
			return true;
		}if(eyeColor == person.eyeColor){
			return true;
		}if(occupation == person.occupation){
			return true;
		}
	return person;
	});
}
function getInformation(people){
	var gender = askGender();
	var age = parseInt(askAge());
	var height = parseInt(askHeight());
	var weight = parseInt(askWeight());
	var eyeColor = askEyeColor();
	var occupation = askOccupation();
	var information = matchInformationWithData(gender, age, height, weight, eyeColor, occupation, people);
	return information;
}
function getPerson(firstName, lastName, people){
	var person = people.filter(function(person){
		return (person.firstName.toLowerCase().trim() == firstName.toLowerCase().trim()) && 
		(person.lastName.toLowerCase().trim() == lastName.toLowerCase().trim());
	})
	return person[0];
}
function alertPersonFound(person, people){
	var person = alert("Found: " + person.firstName + " " + person.lastName);
}
function askToSearchAgain(){
	var userInput = prompt("Would you like to start a new search?");
	if (userInput.toLowerCase().trim() == "yes"){
		beginSearch(people);
	} else if (userInput.toLowerCase().trim() == "no"){
		alert("Good luck! Have a nice day!");
	} else {
		askToSearchAgain();
	}
}
function getName(people){
	var person = getPerson(prompt("Enter person's first name:"), prompt("Enter person's last name:"), people);
	return person;
}
function askGender(){
	var gender = prompt("What gender is the person? 'male' or 'female'");
	if(gender.toLowerCase() == "male" || gender.toLowerCase() == "female"){
		return gender;
	} else {
		alert("Please enter [male] or [female].")
		askGender();
	}
}
function askAge(){
	var age = prompt("What age is the person?");
	if(age >= 20 && age <= 90){
		return age;
	} else {
		alert("Please re-enter an age. Our age group is from [20-90].");
		askAge();
	}
}
function askHeight(){
	var height = prompt("How tall do you think this person is in inches?");
	if(height >=50 && height <= 80){
		return height;
	} else {
		alert("Please re-enter a height ranging from [50-80].");
		askHeight();
	}
}
function askWeight(){
	var weight = prompt("How much do you think this person weighs?");
	if(weight >=100 && weight <= 260){
		return weight;
	} else {
		alert("Please re-enter a weight ranging from [100-260].");
		askWeight();
	}
}
function askEyeColor(){
	var eyeColor = prompt("What eye color does this person have?");
	if(eyeColor.toLowerCase() == "black" || eyeColor.toLowerCase() == "blue" ||
		eyeColor.toLowerCase() == "brown" || eyeColor.toLowerCase() == "hazel" || 
		eyeColor.toLowerCase() == "green" ){
		return eyeColor;
	} else {
		alert("Please choose from: [black] [blue] [brown] [hazel] [green]");
		askEyeColor();
	}
}
function askOccupation(){
	var occupation = prompt("What was this person's occupation?\n\n[doctor]" +
		"\n[nurse]" +
		"\n[assistant]" +
		"\n[politician]" +
		"\n[architect]" +
		"\n[landscaper]" +
		"\n[programmer]" +
		"\n[student]");
	if(occupation.toLowerCase() == "doctor"|| occupation.toLowerCase() == "nurse"|| occupation.toLowerCase() == "assistant"||
		occupation.toLowerCase() == "politician"|| occupation.toLowerCase() == "architect"|| occupation.toLowerCase() == "landscaper"||
		occupation.toLowerCase() == "programmer"||occupation.toLowerCase() == "student"){
		return occupation;
	} else {
		alert("Please enter one:\n\n [doctor]" +
			"\n[nurse]" +
			"\n[assistant]" +
			"\n[politician]" +
			"\n[architect]" +
			"\n[landscaper]" +
			"\n[programmer]" +
			"\n[student]");
		askOccupation();
	}
}
// function getByOccupation(person, people){
// 	var occupation = people.filter(function(person){
// 		if(occupation == people.occupation)
// 	});
// }
// function getByEyeColor(){
// 	;
// }
// function getByWeight(){
// 	;
// }
// function getByHeight(){
// 	;
// }
// function getByAge(){
// 	;
// }
// function getByGender(){
// 	;
// }
// function displaySearchMenu(){
// 	var userInput = prompt("How do you want to search for this person?" +
// 		"\n[1] Gender" +
// 		"\n[2] Age" +
// 		"\n[3] Height" +
// 		"\n[4] Weight" +
// 		"\n[5] Eye Color" +
// 		"\n[6] Occupation");
// 	switch(userInput.toString()){
// 		case "1":
// 		case "2":
// 		case "3":
// 		case "4":
// 		case "5":
// 		default:
// 		break;
// 	}	 
// }