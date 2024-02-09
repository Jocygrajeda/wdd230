document.addEventListener('DOMContentLoaded', function () {
    if (typeof(Storage) !== 'undefined') {
        var currentDate = new Date();
        
        if (!localStorage.getItem('lastVisit')) {
            //first visit
            document.getElementById('sidebar-message').innerText = 'Welcome! Let us know if you have any questions.';
        } else {
            //get the last visit date from local storage
            var lastVisitDate = new Date(localStorage.getItem('lastVisit'));
            
            //calculate the difference in days
            var timeDifference = currentDate - lastVisitDate;
            var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

            //display message based on the time difference
            if (daysDifference < 1) {
                document.getElementById('sidebar-message').innerText = 'Back so soon! Awesome!';
            } else {
                var plural = (daysDifference === 1) ? 'day' : 'days';
                document.getElementById('sidebar-message').innerText = 'You last visited ' + daysDifference + ' ' + plural + ' ago.';
            }
        }

        //update local storage with the current visit date
        localStorage.setItem('lastVisit', currentDate);
    }
});
