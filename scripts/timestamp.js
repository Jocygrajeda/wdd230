document.addEventListener('DOMContentLoaded', function () {
    //get the current date and time
    var currentDate = new Date();
    var timestampField = document.getElementById('timestamp');

    //gormat the date as a string
    var formattedDate = currentDate.toISOString();

    //set the value of the timestamp input field
    timestampField.value = formattedDate;
});

