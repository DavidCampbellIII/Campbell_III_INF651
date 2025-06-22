const movies = [];

const addMovie = () => {
  const movieName = document.getElementById("movie-name").value;
  if (movieName.trim() === "") {
    alert("Movie name cannot be empty. Please enter a movie name.");
    return;
  }

  if (movies.includes(movieName)) {
    alert("This movie is already in your watchlist.");
    return;
  }

  movies.push(movieName);

  const listItem = document.createElement("li");
  listItem.className = "collection-item";

  const movieTitle = document.createElement("span");
  movieTitle.className = "movie-title";
  movieTitle.textContent = movieName;

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.className = "remove-btn";
  removeButton.addEventListener("click", () => {
    listItem.remove();
  });

  listItem.appendChild(movieTitle);
  listItem.appendChild(removeButton);

  const movieList = document.getElementById("movie-list");
  movieList.appendChild(listItem);
};

const addButton = document.getElementById("add-movie-btn");
addButton.addEventListener("click", addMovie);
