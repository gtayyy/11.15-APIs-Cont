//Business Logic
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './css/styles.css';

function getDrinks(searchInput) {
	let search = new XMLHttpRequest();
	const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
	
	request.addEventListener("loadend", function () {
		const response = JSON.parse(this.responseText);
		if (this.status === 200) {
			printElemtents(response, searchInput);
		} else {
			printError(this, responsem, searchInput);
		}
	});
	
	request.open("GET", url, true);
	request.send();
}


// UI Logic
function printError(request, apiResponse, searchInput) {
	document.querySelector('#returnDrink').innerText = 'There was an error finding drinks using the word ${searchInput}: ${request.status} ${request.status.text}: ${apiResponse.message}';
}

function printElemtents(apiResponse) {
	const drinkDiv = document.querySelector('#returnDrink');
	const drink = document.createElement('img');

drinkDiv.innerText = "";

try {
	drink.src = apiResponse.data[1].images.original.url;
	drink.alt = "a drink recipe";
	drinkDiv.append(drink);
} catch (error) {
	console.error("Error accessing cocktail URL:", error);
	drink.alt = "error loading drink";
	drinkDiv.append(drink);
	}
}

function handleFormSubmission(event) {
	event.preventDefault();
	const searchInput = document.querySelector('#drink').value; 
	document.querySelector('#drink').value = null;
	getDrinks(searchInput);
}

window.addEventListener("load", function () {
	this.document.querySelector('form').addEventListener("submit", handleFormSubmission);
});
