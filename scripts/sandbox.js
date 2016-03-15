
// does the object list a price between $14 and $18? If so, return it.
function priceBetween(currentValue) {
	return currentValue.price >  14 && currentValue.price < 18;
}

console.log(items.filter(priceBetween));

// log only the objects that include prices between $14 and $18

// var items14to18 = items.filter(priceBetween);

// function detailsList(currentValue) {
// 	console.log( + ' : ' + )
// }

// console.log("Items that cost between $14.00 USD and $18.00 USD:")
// items14to18.forEach(detailsList);