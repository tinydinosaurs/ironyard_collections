//console.log(items[0].price);

/////////////////////////////////////////////////////
// calculate the average price of items in the store
/////////////////////////////////////////////////////

var total = 0;

// add price for current array to total.
function getTotal(currentValue) {
	total += currentValue.price;
};

// clunky forEach method to get a sum of the prices of all items.
items.forEach(getTotal);

// divide by length of array to get average, then log a fun sentence.
console.log('The average price is $' + (total/items.length).toFixed(2));


/////////////////////////////////////////////////////
// find items between $14 and $18, exclusive
/////////////////////////////////////////////////////


// does the object list a price between $14 and $18? If so, return it.
function priceBetween(currentValue) {
	return currentValue.price >  14 && currentValue.price < 18;
}

// log only the objects that include prices between $14 and $18
console.log(items.filter(priceBetween));

/////////////////////////////////////////////////////
// find the item with a price in GBP
/////////////////////////////////////////////////////

// does the object contain a currency code in GBP? Return it.
function isGBP(currentValue) {
	return currentValue.currency_code === 'GBP'
}

// assign the array containing the GBP item to a new variable.
var costInGBP = (items.filter(isGBP));

// tell us about the GBP item.
console.log(costInGBP[0].title+ ' costs £' + costInGBP[0].price);

///////////////////////////////////////////////////
// find the items made of wood
/////////////////////////////////////////////////////

// look for objects with a materials key that contain the string 'wood'
function findWood(currentValue) {
	if(currentValue.materials.includes('wood')) {
		console.log(currentValue.title);
	}
}

items.forEach(findWood);


///////////////////////////////////////////////////
// find the items made of more than 8 materials
/////////////////////////////////////////////////////

function moreThanEight(currentValue) {
	if(currentValue.materials.length >= 8) {
		console.log(currentValue.title + ' has ' + currentValue.materials.length + ' materials:');
		console.log(currentValue.materials.join('\n'));

	}
}

items.forEach(moreThanEight);

///////////////////////////////////////////////////
// find the items made by their sellers
/////////////////////////////////////////////////////

// look for objects for which value of who_made is i_did
function madeBy(currentValue) {
	return currentValue.who_made === 'i_did';
}

// filter items for those made by i_did and log the length of the new array, along with some words.
console.log(items.filter(madeBy).length + ' were made by their sellers');


