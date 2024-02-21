document.addEventListener('DOMContentLoaded', () => {
    const members = [
        {
            "name": "BOYS & GIRLS CLUBS OF DEEP EAST TEXAS",
            "address": "941 Tower Rd, Nacogdoches, TX 75961",
            "phone": "(936) 560-6844",
            "website": "https://www.bgcdet.org/",
            "image": "bgc.jpg",
            "membershipLevel": "Bronze",
            "otherInfo": "Providing valuable programs and services to youth in Deep East Texas."
          },
          {
            "name": "Pilgrims",
            "address": " 928 Martin Luther King Jr Blvd, Nacogdoches, TX 75961",
            "phone": "(936) 564-6145",
            "website": "https://www.pilgrims.com/",
            "image": "pilgrims.jpg",
            "membershipLevel": "Silver",
            "otherInfo": "Specializing in high-quality manufacturing. Pilgrim’s is a leading global provider of high-quality food products, including well-recognized brands and value-added premium products, serving customers in more than 100 countries1."
          },
          {
            "name": "Stephen F. Austin State University",
            "address": " 1936 North St, Nacogdoches, TX 75965",
            "phone": "(936) 468-3401",
            "website": "https://www.sfasu.edu/",
            "image": "sfa.jpg",
            "membershipLevel": "Bronze",
            "otherInfo": "Texas State University"
          },
          {
            "name": "Coco Loco",
            "address": " 930 South St, Nacogdoches, TX 75964",
            "phone": "(936) 205-4410",
            "website": "https://www.facebook.com/micocoloko",
            "image": "cocoloco.jpg",
            "membershipLevel": "Gold",
            "otherInfo": "El Coco Loko is a restaurant located in Nacogdoches, Texas1. It is known for its authentic Mexican snacks and has received positive reviews for its fresh food and service"
          },
          {
            "name": "A. L. Mangham Jr. Regional Airport (OCH)",
            "address": "556 Terry Crawford Dr, Nacogdoches, TX 75964",
            "phone": " (936) 560-9567",
            "website": "https://www.nactx.us/1503/Nacogdoches-Texas",
            "image": "Untitled.png",
            "membershipLevel": "Silver",
            "otherInfo": "The A.L. Mangham Jr. Regional Airport is located in Nacogdoches, Texas1. It provides a wide range of services for the local and transient flying public2. The airport is serviced by runway 18-36, which has an asphalt surface that is 5001 feet in length by 75 feet wide2."
          },
          {
            "name": "Zip Nac",
            "address":  "199 Brother John Road Nacogdoches, TX 75961 ",
            "phone": "(936) 645-5094",
            "website": "https://texastimetravel.com/directory/zip-nac/",
            "image": "zip.jpg",
            "membershipLevel": "Silver",
            "otherInfo": "Zip Nac is a ziplining facility located on a beautiful 75-acre stretch of East Texas pines and hardwoods in Nacogdoches, Texas"
          },
          {
            "name": "Salon Haven",
            "address": "118 N Church St, Nacogdoches, TX 75961",
            "phone": "(936) 559-8722",
            "website": "https://www.vagaro.com/salonhavennac",
            "image": "sh.jpg",
            "membershipLevel": "Gold",
            "otherInfo": "Salon Haven is a beauty salon located on the beautiful brick streets of Nacogdoches, Texas1. They strive to bring the ultimate salon experience in a truly relaxing environment1. Whether you visit for a new haircut, color, style, or add extensions, their staff will help you feel beautiful, peaceful, and pampered long after you leave"
          }
    ];

    const filterSilverGoldMembers = () => {
        return members.filter(member => member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold');
    };

    const getRandomMembers = (array, n) => {
        const shuffled = array.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n);
    };

    const displaySpotlights = () => {
        const spotlightsContainer = document.getElementById('spotlights-container');
        const silverGoldMembers = filterSilverGoldMembers();
        const selectedMembers = getRandomMembers(silverGoldMembers, 3); // Change 3 to the desired number of spotlights

        selectedMembers.forEach(member => {
            const spotlightDiv = document.createElement('div');
            spotlightDiv.classList.add('spotlight');

            const image = document.createElement('img');
            image.src = member.image;
            image.alt = member.name + 'Logo';

            const heading = document.createElement('h3');
            heading.textContent = member.name;

            const paragraph = document.createElement('p');
            paragraph.textContent = member.otherInfo;

 
            spotlightDiv.appendChild(heading);
            spotlightDiv.appendChild(paragraph);

            spotlightsContainer.appendChild(spotlightDiv);
        });
    };

    displaySpotlights();
});
