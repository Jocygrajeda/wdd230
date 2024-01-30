// Get the current year
var currentYear = new Date().getFullYear();

// Update the copyright year in the footer's first paragraph
document.getElementById("year").innerText = currentYear;

// Get the last modified date of the document
var lastModifiedDate = document.lastModified;

// Update the last modified date in the footer's second paragraph
document.getElementById("lastModified").innerText = lastModifiedDate;
