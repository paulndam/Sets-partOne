/** @format */

// set

function Set() {
	this.dataStore = [];
	this.add = add;
	this.remove = remove;
	// this.size = size;
	// this.union = union;
	// this.intersect = intersect;
	// this.subset = subset;
	// this.difference = difference;
	this.contain = contain;
	this.show = show;
	this.union = union;
}
// return the position of a value in an array or return a negative 1 if the array doesn't have the element
function add(data) {
	if (this.dataStore.indexOf(data) < 0) {
		this.dataStore.push(data);
		return true;
	} else {
		return false;
	}
}
// check to see if the data we wanna remove is in the array, if it's the we remove it by splicing it
function remove(data) {
	var position = this.dataStore.indexOf(data);
	if (position > -1) {
		this.dataStore.splice(position, 1);
		return true;
	} else {
		return false;
	}
}

function show() {
	return this.dataStore;
}

// check to see if a specified member is already part of a set

function contain(data) {
	if (this.dataStore.indexOf(data) > -1) {
		return true;
	} else {
		return false;
	}
}

// The union() function combines two sets using the union set operation to form a new set. The function first builds a new set by adding all the members of the first set. Then the function checks each member of the second set to see whether the member is already a member of the first set. If it is, the member is skipped over, and if not, the member is added to the new set.

function union(set) {
	var tempSet = new Set();
	for (var i = 0; i < this.dataStore.length; i++) {
		tempSet.add(this.dataStore[i]);
	}
	for (var i = 0; i < set.dataStore.length; i++) {
		if (!tempSet.contain(set.dataStore[i])) {
			tempSet.dataStore.push(set.dataStore[i]);
		}
	}
	return tempSet;
}

var teams = new Set();
teams.add("barca");
teams.add("psg");
teams.add("benfica");
teams.add("lyon");

var players = new Set();
players.add("fati");
players.add("neymar");
players.add("sanchez");
players.add("depay");

var unify = new Set();
unify = teams.union(players);

console.log(`${unify.show()}`);
