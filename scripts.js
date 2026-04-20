/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const games = [
  {
    id: 1,
    title: "Stardew Valley",
    genre: "Simulation",
    mood: "Cozy",
    rating: 9.2,
    platform: ["PC", "Switch", "PlayStation", "Xbox", "Mobile"],
    image: "https://placehold.co/600x800?text=Stardew+Valley",
    description:
      "A relaxing farming simulation where you build a life, grow crops, and make friends.",
  },
  {
    id: 2,
    title: "Genshin Impact",
    genre: "RPG",
    mood: "Adventurous",
    rating: 8.7,
    platform: ["PC", "PlayStation", "Mobile"],
    image: "https://placehold.co/600x800?text=Genshin+Impact",
    description:
      "An open-world action RPG with elemental combat, exploration, and an open fantasy world.",
  },
  {
    id: 3,
    title: "Final Fantasy VII",
    genre: "RPG",
    mood: "Story Rich",
    rating: 9.5,
    platform: ["PlayStation", "PC"],
    image: "https://placehold.co/600x800?text=Final+Fantasy+VII",
    description:
      "A legendary RPG known for its unforgettable characters, emotional story, and cinematic battles.",
  },
  {
    id: 4,
    title: "Animal Crossing: New Horizons",
    genre: "Simulation",
    mood: "Cozy",
    rating: 9.0,
    platform: ["Switch"],
    image: "https://placehold.co/600x800?text=Animal+Crossing",
    description:
      "A peaceful island-life game where you decorate, make friends with islanders, and create your dream island home.",
  },
  {
    id: 5,
    title: "The Legend of Zelda: Breath of the Wild",
    genre: "Adventure",
    mood: "Adventurous",
    rating: 9.8,
    platform: ["Switch"],
    image: "https://placehold.co/600x800?text=Zelda+BOTW",
    description:
      "A beautiful open-world adventure full of discovery, puzzles, and freedom.",
  },
  {
    id: 6,
    title: "The Sims 4",
    genre: "Simulation",
    mood: "Creative",
    rating: 8.5,
    platform: ["PC", "PlayStation", "Xbox"],
    image: "https://placehold.co/600x800?text=The+Sims+4",
    description:
      "A life simulation game where you create characters, build homes, and tell your own stories.",
  },
  {
    id: 7,
    title: "Fortnite",
    genre: "Battle Royale",
    mood: "Competitive",
    rating: 8.6,
    platform: ["PC", "PlayStation", "Xbox", "Switch", "Mobile"],
    image: "https://placehold.co/600x800?text=Fortnite",
    description:
      "A fast paced battle royale with building, live events, and constant new content.",
  },
  {
    id: 8,
    title: "Valorant",
    genre: "Shooter",
    mood: "Competitive",
    rating: 8.8,
    platform: ["PC"],
    image: "https://placehold.co/600x800?text=Valorant",
    description:
      "A tactical team-based shooter that rewards precision, strategy, and communication.",
  },
  {
    id: 9,
    title: "League of Legends",
    genre: "MOBA",
    mood: "Competitive",
    rating: 8.4,
    platform: ["PC"],
    image: "https://placehold.co/600x800?text=League+of+Legends",
    description:
      "A strategy-heavy multiplayer game with unique champions and intense team battles.",
  },
  {
    id: 10,
    title: "Minecraft",
    genre: "Sandbox",
    mood: "Creative",
    rating: 9.7,
    platform: ["PC", "PlayStation", "Xbox", "Switch", "Mobile"],
    image: "https://placehold.co/600x800?text=Minecraft",
    description:
      "A sandbox world where you can build, explore, survive, and build anything you imagine.",
  },
  {
    id: 11,
    title: "Where Winds Meet",
    genre: "RPG",
    mood: "Adventurous",
    rating: 8.3,
    platform: ["PC", "PlayStation"],
    image: "https://placehold.co/600x800?text=Where+Winds+Meet",
    description:
      "A visually rich martial arts adventure with open-world exploration, combat, and historical fantasy.",
  },
  {
    id: 12,
    title: "Overwatch 2",
    genre: "Shooter",
    mood: "Competitive",
    rating: 8.1,
    platform: ["PC", "PlayStation", "Xbox", "Switch"],
    image: "https://placehold.co/600x800?text=Overwatch+2",
    description:
      "A team hero shooter built around abilities, teamwork, and quick matches.",
  },
  {
    id: 13,
    title: "Mario Kart 8 Deluxe",
    genre: "Racing",
    mood: "Casual",
    rating: 9.3,
    platform: ["Switch"],
    image: "https://placehold.co/600x800?text=Mario+Kart+8",
    description:
      "A colorful racing game full of chaos, speed boosts, and iconic Nintendo tracks.",
  },
  {
    id: 14,
    title: "Roblox",
    genre: "Sandbox",
    mood: "Social",
    rating: 8.0,
    platform: ["PC", "PlayStation", "Xbox", "Mobile"],
    image: "https://placehold.co/600x800?text=Roblox",
    description:
      "A massive platform of user-created games where players can explore many different experiences.",
  },
  {
    id: 15,
    title: "World of Warcraft",
    genre: "MMORPG",
    mood: "Social",
    rating: 9.1,
    platform: ["PC"],
    image: "https://placehold.co/600x800?text=World+of+Warcraft",
    description:
      "A long-running online fantasy world with quests, raids, and deep multiplayer experiences.",
  },
];

let filteredGames = [...games];

// This function adds cards the page to display the data in the array
function showCards(gameList) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.getElementById("card-template");

  for (let i = 0; i < gameList.length; i++) {
    const game = gameList[i];
    const nextCard = templateCard.cloneNode(true); // Copy the template card

    nextCard.style.display = "block";
    nextCard.removeAttribute("id");

    editCardContent(nextCard, game); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, game) {
  const cardImage = card.querySelector(".card-image");
  const title = card.querySelector(".game-title");
  const description = card.querySelector(".game-description");
  const genreBadge = card.querySelector(".genre-badge");
  const moodBadge = card.querySelector(".mood-badge");
  const ratingBadge = card.querySelector(".rating-badge");
  const platformText = card.querySelector(".platform-text");

  cardImage.src = game.image;
  cardImage.alt = `${game.title} cover`;

  title.textContent = game.title;
  description.textContent = game.description;
  genreBadge.textContent = game.genre;
  moodBadge.textContent = game.mood;
  ratingBadge.textContent = `${game.rating}`;
  platformText.textContent = `Platforms: ${game.platform.join(", ")}`;

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

function populateGenreFilter() {

}

function applyFilters() {
  
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);
