// Select elements using their ids
const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("#addChapter");
const listElement = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

// part 4
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

buttonElement.addEventListener('click', () => {
    if (inputElement.value !== '') {      //checking if the input is not blank
        displayList(inputElement.value); //call the function that outputs the submitted chapter
        chaptersArray.push(inputElement.value);  //add the chapter to the array
        setChapterList(); //update the local storage with the new array
        inputElement.value = ''; //clearing input value
        inputElement.focus();//returning to the input element
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item;

    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    listElement.append(li);
    deletebutton.addEventListener('click', function () {
        listElement.removeChild(li);
        deleteChapter(li.textContent);
        inputElement.focus();
    });
}

function setChapterList() {
    localStorage.setItem('favChap', JSON.stringify(chaptersArray));
}

function getChapterList() {
    const storedData = localStorage.getItem('favChap');
    return storedData ? JSON.parse(storedData) : null;
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}
