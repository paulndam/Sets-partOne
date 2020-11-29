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
	this.show = show;
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

var teams = new Set();
teams.add("barca");
teams.add("psg");
teams.add("benfica");
teams.add("lyon");

if (teams.add("lyon")) {
	console.log(`lyon added`);
} else {
	console.log(`can't add lyon, it already exist`);
}

console.log(teams.show());

var remove = "lyon";
if (teams.remove(remove)) {
	console.log(`${remove} removed`);
} else {
	console.log(`${remove} not removed`);
}

teams.add("marseille");
console.log(teams.show());

remove = "cotonSport";
if (teams.remove(remove)) {
	console.log(`${remove} removed`);
} else {
	console.log(`${remove} not removed, probably because it's not on the list`);
}
