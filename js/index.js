const form = document.getElementById("form");
let userArray = [];

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
	const data = new FormData(event.target);
	const dataObject = Object.fromEntries(data.entries());

	//above is boiler plate code
	userArray.push(dataObject);
	console.log(userArray);
	form.reset();
}

/// adds date to dataObject
/// day: 
/// date:
/// time: 12: AM PM whatever and time zone
// const date = new Date();
// const today = date.getDay()
// const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]
// // Day
// console.log(dayNames[today]);
// // time
// console.log(date)
// // if its less than 12