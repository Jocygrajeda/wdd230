if (typeof(Storage) !== "undefined") {
    //get current visit from localstorage
    var pageVisit = localStorage.getItem("pageVisit");

    //1st time = 1
    if (!pageVisit) {
        pageVisit = 1;
    } else {
        //add the times it has visited
        pageVisit = parseInt(pageVisit) + 1;
    }

    //update the visit count in html
    document.getElementById("pageVisit").textContent = pageVisit;

    //save the update in ls
    localStorage.setItem("pageVisit", pageVisit.toString());
}