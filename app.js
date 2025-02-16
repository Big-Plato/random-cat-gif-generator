const gifImg = document.querySelector("#gif");
const searchInput = document.querySelector("#search");
const searchImg = document.querySelector("#search-img");
const imgSection = document.querySelector("#img-section");
const gifsArray = [];

searchImg.addEventListener("click", () => {
  console.log("Clicked");
  fetchCatGif(searchInput.value);
  imgSection.innerHTML = "";
});

function createGifs(src) {
  const gif = document.createElement("img");
  gif.src = src;
  imgSection.appendChild(gif);
}

async function fetchCatGif(search) {
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=1cbzbJFmH5vZwyM3T1Ny0KepjJ1f7O3i&q=${search}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      for (let i = 0; i < response.data.length; i++) {
        const src = response.data[i].images.original.url;
        createGifs(src);
      }
    })
    .catch(function (err) {});
}
