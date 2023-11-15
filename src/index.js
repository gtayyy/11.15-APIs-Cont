//Business Logic

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './css/styles.css';

function getDrinks(searchInput) {
	let search = new XMLHttpRequest();
	const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita&appid=1'
	
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