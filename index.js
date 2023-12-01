const root = document.querySelector(".autocomplete");
root.innerHTML = ` 
<label> <b>Search for a Movie</b></label>
<input class = "input" />
<div class="dropdown">
<div class="dropdown-menu">
  <div class="dropdown-content results">
  </div>`
  
  const fetchData = async searchTerm => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'f354532a',
      s: searchTerm
    }
  })
    .catch(() => {
    })
  if (response.data.Error) {
    return [];
  }
  return response.data.Search;
};



const userInput = document.querySelector("input");
const dropdown= document.querySelector(".dropdown");
const resultsWrapper = document.querySelector(".results");

const onInput = async () => {
  const movies = await fetchData(userInput.value);
  // same as event.target.value;
  console.log(movies);
  dropdown.classList.add('is-active');
  for (let movie of movies) {
    const optionAnchor = document.createElement('a');
    
    optionAnchor.classList.add('dropdown-item')
    optionAnchor.innerHTML = `
    <img src="${movie.Poster}" alt="image of one movie poster">
    ${movie.Title}    
    `
    resultsWrapper.appendChild(optionAnchor);
  }
};

const delayedInput = debounce(onInput);

userInput.addEventListener('input', delayedInput);