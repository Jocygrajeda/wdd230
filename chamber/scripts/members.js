document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('content');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle View';
    content.insertBefore(toggleButton, content.firstChild);

    const membersContainer = document.createElement('div');
    membersContainer.id = 'members-container';
    content.appendChild(membersContainer);

    let gridView = true;

    // Function to toggle between grid and list view
    toggleButton.addEventListener('click', function () {
      gridView = !gridView;
      renderMembers();
    });

    // Fetch member data from JSON
    fetch('data/members.json')
      .then(response => response.json())
      .then(data => {
        renderMembers(data.members);
      })
      .catch(error => console.error('Error fetching member data:', error));

    // Function to render member information based on view type
    function renderMembers(members) {
      membersContainer.innerHTML = '';

      if (gridView) {
        // Display members in grid view
        members.forEach(member => {
          const card = createMemberCard(member);
          membersContainer.appendChild(card);
        });
      } else {
        // Display members in list view
        const list = document.createElement('ul');
        members.forEach(member => {
          const listItem = createMemberListItem(member);
          list.appendChild(listItem);
        });
        membersContainer.appendChild(list);
      }
    }

    // Function to create a member card
    function createMemberCard(member) {
      const card = document.createElement('div');
      card.className = 'member-card';

      const image = document.createElement('img');
      image.src = member.image || 'placeholder-image.jpg';
      image.alt = member.name;
      card.appendChild(image);

      const details = document.createElement('div');
      details.className = 'member-details';

      const name = document.createElement('h3');
      name.textContent = member.name;
      details.appendChild(name);

      const level = document.createElement('p');
      level.textContent = `Membership Level: ${member.membershipLevel}`;
      details.appendChild(level);

      const info = document.createElement('p');
      info.textContent = member.otherInfo;
      details.appendChild(info);

      card.appendChild(details);

      return card;
    }

    // Function to create a member list item
    function createMemberListItem(member) {
      const listItem = document.createElement('li');
      listItem.className = 'member-list-item';

      const name = document.createElement('h3');
      name.textContent = member.name;
      listItem.appendChild(name);

      const level = document.createElement('p');
      level.textContent = `Membership Level: ${member.membershipLevel}`;
      listItem.appendChild(level);

      const info = document.createElement('p');
      info.textContent = member.otherInfo;
      listItem.appendChild(info);

      return listItem;
    }
  });