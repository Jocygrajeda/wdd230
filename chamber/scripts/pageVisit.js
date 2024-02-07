if (typeof(Storage) !== "undefined") {
    //get current visit from localstorage
    var pageVisitCount = localStorage.getItem("pageVisitCount");

    //1st time = 1
    if (!pageVisitCount) {
        pageVisitCount = 1;
    } else {
        //add the times it has visited
        pageVisitCount = parseInt(pageVisitCount) + 1;
    }

    //update the visit count in html
    document.getElementById("pageVisitCounter").textContent = pageVisitCount;

    //save the update in ls
    localStorage.setItem("pageVisitCount", pageVisitCount.toString());
}