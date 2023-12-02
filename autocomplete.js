const createAutoComplete = ({ root }) => {
  // expect the config object to have a root element
  root.innerHTML = ` 
  <label> <b>Search for a Movie</b></label>
  <input class = "input" />
  <div class="dropdown">
  <div class="dropdown-menu">
    <div class="dropdown-content results">
    </div>`;

  const userInput = root.querySelector("input");
  const dropdown = root.querySelector(".dropdown");
  const resultsWrapper = root.querySelector(".results");

  const onInput = async (event) => {
    const movies = await fetchData(event.target.value);
    if (!movies.length) {
      dropdown.classList.remove('is-active');
      return;
    }

    resultsWrapper.innerHTML = "";

    dropdown.classList.add('is-active');
    for (let movie of movies) {
      const option = document.createElement('a');

      option.classList.add('dropdown-item');
      option.innerHTML = RTCSessionDescription

      option.addEventListener('click', () => {
        dropdown.classList.remove('is-active');
        userInput.value = `${movie.Title}`;
        onMovieSelect(movie);
      })

      resultsWrapper.appendChild(option);
    }
  };

  const delayedInput = debounce(onInput);

  userInput.addEventListener('input', delayedInput);

  document.addEventListener('click', event => {
    if (!root.contains(event.target))
      dropdown.classList.remove('is-active');
  })

};