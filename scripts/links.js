const baseURL = "https://jocygrajeda.github.io/wdd230";
const linksURL = "https://jocygrajeda.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

function displayLinks(weeks) {
    const list = document.querySelector(".links");
  
    weeks.forEach((week) => {
      const listElement = document.createElement("li");
      listElement.innerHTML = `<strong>${week.week}</strong>`;
  
      const linkList = document.createElement("ul");
  
      week.links.forEach((link) => {
        const listItem = document.createElement("li");
        const linkElement = document.createElement("a");
        linkElement.setAttribute("href", baseURL + link.url);
        linkElement.textContent = link.title;
  
        listItem.appendChild(linkElement);
        linkList.appendChild(listItem);
      });
  
      listElement.appendChild(linkList);
      list.appendChild(listElement);
    });
  }
