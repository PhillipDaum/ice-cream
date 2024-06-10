const form = document.getElementById("form");
let userArray = [];
let dateAndTime;

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
	const data = new FormData(event.target);
	const dataObject = Object.fromEntries(data.entries());
    dayDateAndTime();
    // trying to push date
	dataObject.date = dateAndTime;
	userArray.push(dataObject);
	console.log(userArray);
	form.reset();
}

/// adds date to dataObject
function dayDateAndTime() {
    const date = new Date();
    const today = date.getDay()
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]
    dateAndTime = `${dayNames[today]} ${date.toLocaleString()}`;
    console.log(dateAndTime);
}