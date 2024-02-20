const baseURL = "https://jocygrajeda.github.io/wdd230/";
const linksURL = "https://jocygrajeda.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

function displayLinks(weeks) {
  weeks.forEach((week) => {
    const weekLink = document.createElement('a');
    weekLink.href = week.links.url;
    weekLink.textContent = week.links.title;

    document.body.appendChild(weekLink);
  });
}

getLinks();
