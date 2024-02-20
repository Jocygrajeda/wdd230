document.addEventListener("DOMContentLoaded", function () {
    fetchMembers();
 
    function toggleView(viewType) {
       const membersSection = document.getElementById("members");
       membersSection.className = viewType === "grid" ? "grid-view" : "list-view";
    }
 
    function fetchMembers() {
       fetch("data/members.json")
          .then((response) => response.json())
          .then((data) => {
             // Process data and display members
             displayMembers(data.members);
          })
          .catch((error) => console.error("Error fetching members:", error));
    }
 
    function displayMembers(members) {
       const membersSection = document.getElementById("members");
 
       //clear previous content
       membersSection.innerHTML = "";
 
       //loop through members and create html elements
       members.forEach((member) => {
          const memberCard = document.createElement("div");
          memberCard.className = "member-card";
 
          //add info to the card
          memberCard.innerHTML = `
             <img src="./data/images/${member.image}" alt="${member.name}">
             <h4>${member.name}</h4>
             <p>${member.address}</p>
             <p>Phone: ${member.phone}</p>
             <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
             <p>Membership Level: ${member.membershipLevel}</p>
             <p>Other Info: ${member.otherInfo}</p>
          `;
 
          //append the member card to the members section
          membersSection.appendChild(memberCard);
       });
    }
 });
 