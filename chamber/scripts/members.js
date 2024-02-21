const baseURL = "https://jocygrajeda.github.io/wdd230/";
const linksURL = "https://jocygrajeda.github.io/wdd230/chamber/data/members.json";

async function getLinks(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Response: ", JSON.stringify(data));
        displayMembers(data.members);
        toggleSectionClass("grid"); // Set the default view
    } catch (error) {
        console.log(':( Error fetching data:', error);
    }
}

// Add this function to toggle the class on the #members section
function toggleSectionClass(view) {
    const membersSection = document.getElementById("members");

    // Remove existing classes
    membersSection.classList.remove("list-view", "grid-view");

    // Add the selected class
    membersSection.classList.add(`${view}-view`);
}

const displayMembers = (members) => {
    let container = document.querySelector("#members");

    members.forEach((member) => {
        let div = document.createElement("div");
        div.classList.add("card");

        let name = document.createElement("h2");
        name.textContent = member.name;
        div.appendChild(name);

        let image = document.createElement("img");
        image.setAttribute("src", `images/${member.image}`); // Fix the image attribute
        image.setAttribute("class", "companyLogos");
        div.appendChild(image);

        let membershipLevel = document.createElement("h4");
        membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;
        div.appendChild(membershipLevel);

        let address = document.createElement("h4");
        address.textContent = `Address: ${member.address}`;
        div.appendChild(address);

        let phone = document.createElement("h4");
        phone.textContent = `Phone: ${member.phone}`;
        div.appendChild(phone);

        let website = document.createElement("a");
        website.textContent = `${member.name} Website`;
        website.setAttribute("href", member.website);
        div.appendChild(website);

        let otherInfo = document.createElement("p");
        otherInfo.textContent = member.otherInfo;
        div.appendChild(otherInfo);

        container.appendChild(div);
    });
}

getLinks(linksURL);
