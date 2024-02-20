const baseURL = "https://jocygrajeda.github.io/wdd230";
const linksURL = "https://jocygrajeda.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

function displayLinks(weeks) {
    const list = document.querySelector(".links");

    weeks.forEach(week => {
        const listElement = document.createElement('li');
        listElement.textContent = `${week.week}`;

        week.links.forEach(link => {
            let aElement = document.createElement('a');
            aElement.setAttribute("href", baseURL + "/" + link.url);
            aElement.textContent = `${link.title}`;
            
            listElement.appendChild(aElement);
        });

        list.appendChild(listElement);
    });
}

getLinks();
