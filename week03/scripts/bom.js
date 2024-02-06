//// new stuff

//declared a new array
const chaptersArray = getChapterList() || [];



//selec elements using their ids
const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("#addChapter");
const listElement = document.querySelector("#list");

// part 4
chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

//click event listener
buttonElement.addEventListener("click", () => {

    //checking if the input is not blank
    if (inputElement.value !== "") {
        //create a new list item 
        const li = document.createElement("li");
        //create delete button for the list
        const deleteButton = document.createElement("button");

        //setting text content for the delete button and list item to input the value
        li.textContent = inputElement.value;
        deleteButton.textContent = "❌";

        //adding/appending the deletebutton
        li.append(deleteButton);
        //'' the list item to the list
        listElement.append(li);

        //adding a click event to the x button
        deleteButton.addEventListener("click", () => {
            listElement.removeChild(li);
            inputElement.focus();
        });
    }
    //clearing input value
    inputElement.value = "";
    //retutning to the input element
    inputElement.focus();
});