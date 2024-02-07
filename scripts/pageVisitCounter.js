// get the counter
const pageVisitCounterElement = document.getElementById('pageVisitCounter');

//retrieve the current count from local storage
let pageVisitCount = localStorage.getItem('pageVisitCount');

//if the count doesn't exist in local storage... initialize it to 0
if (pageVisitCount === null) {
    pageVisitCount = 0;
}

//increment the counter
pageVisitCount++;

//update the local storage with the new count
localStorage.setItem('pageVisitCount', pageVisitCount);

//update the html element with the new count
pageVisitCounterElement.textContent = pageVisitCount;
