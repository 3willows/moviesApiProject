const userInput = document.querySelector("#movieName");

let timeoutId;

const fetchInfo = (searchTerm) => {
  axios.get(`https://www.omdbapi.com/?t=${searchTerm}&apikey=f354532a`)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  }); 
}

const onInput = () => {
  const searchTerm = userInput.value;
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => { console.log(`${searchTerm}`);
  fetchInfo(searchTerm);}, 2000)
};

userInput.addEventListener("keypress", onInput);