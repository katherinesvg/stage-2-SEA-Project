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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/coa93h.webp",
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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/coa9dy.webp",
    description:
      "An open-world action RPG with elemental combat, exploration, and an open fantasy world.",
  },
  {
    id: 3,
    title: "Final Fantasy VII Remake Intergrade",
    genre: "RPG",
    mood: "Story Rich",
    rating: 9.5,
    platform: ["PlayStation", "PC"],
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/cob9hh.webp",
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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3wls.webp",
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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p2d.webp",
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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3h3l.webp",
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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/cobssb.webp",
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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/cobqao.webp",
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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/cobpn7.webp",
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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co8fu7.webp",
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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/coauhs.webp",
    description:
      "A visually rich martial arts adventure with open-world exploration, combat, and historical fantasy.",
  },
  {
    id: 12,
    title: "Overwatch",
    genre: "Shooter",
    mood: "Competitive",
    rating: 8.1,
    platform: ["PC", "PlayStation", "Xbox", "Switch"],
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/cobium.webp",
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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co213p.webp",
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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/coabhb.webp",
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
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2l7z.webp",
    description:
      "A long-running online fantasy world with quests, raids, and deep multiplayer experiences.",
  },
];

let filteredGames = [...games];
let favoriteGames = [];
let showFavorites = false;

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
  const favoriteBtn = card.querySelector(".favorite-btn");

  cardImage.src = game.image;
  cardImage.alt = `${game.title} cover`;

  title.textContent = game.title;
  description.textContent = game.description;
  genreBadge.textContent = game.genre;
  moodBadge.textContent = game.mood;
  ratingBadge.textContent = `${game.rating}`;
  platformText.textContent = `Platforms: ${game.platform.join(", ")}`;

  if (favoriteGames.includes(game.id)) {
    favoriteBtn.textContent = "Favorited";
  } else {
    favoriteBtn.textContent = "Favorite";
  }
  favoriteBtn.addEventListener("click", () => {
    toggleFavorite(game.id);
  });

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", game.title);
}

function toggleFavorite(gameId) {
  if(favoriteGames.includes(gameId)) {
    favoriteGames = favoriteGames.filter((id) => id !== gameId);
  } else {
    favoriteGames.push(gameId);
  }
  applyFilters();
}

function populateGenreFilter() {
  const genreFilter = document.getElementById("genre-filter");
  const genres = [...new Set(games.map((game) => game.genre))];

  for (let i = 0; i < genres.length; i++) {
    const option = document.createElement("option");
    option.value = genres[i];
    option.textContent = genres[i];
    genreFilter.appendChild(option);
  }
}

function applyFilters() {
  const searchValue = document
  .getElementById("search-input")
  .value.toLowerCase()
  .trim();

  const selectedGenre = document.getElementById("genre-filter").value;
  const selectedSort = document.getElementById("sort-select").value;

  filteredGames = games.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(searchValue);
    const matchesGenre = selectedGenre === "all" || game.genre === selectedGenre;
    const matchesFavorites = !showFavorites || favoriteGames.includes(game.id);

    return matchesSearch && matchesGenre && matchesFavorites;
  });

  if (selectedSort === "rating-high") {
    filteredGames.sort((a, b) => b.rating - a.rating);
  } else if (selectedSort === "rating-low") {
    filteredGames.sort((a, b) => a.rating - b.rating);
  } else if (selectedSort === "title-az") {
    filteredGames.sort((a, b) => a.title.localeCompare(b.title));
  }
  showCards(filteredGames);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", () => {
  populateGenreFilter();
  showCards(games);

  document
  .getElementById("search-input")
  .addEventListener("input", applyFilters);

  document
  .getElementById("genre-filter")
  .addEventListener("change", applyFilters);

  document
  .getElementById("sort-select")
  .addEventListener("change", applyFilters);

  document
  .getElementById("favorites-toggle")
  .addEventListener("click", () => {
    showFavorites = !showFavorites;

    const button = document.getElementById("favorites-toggle");
    if (showFavorites) {
      button.textContent = "Show All Games";
    } else {
      button.textContent = "Show Favorites";
    }
    applyFilters();
  });
});
