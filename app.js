const img = document.querySelector("img");
fetchCatGif();
const button = document.querySelector("button");
button.addEventListener("click", fetchCatGif);

function fetchCatGif() {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=1cbzbJFmH5vZwyM3T1Ny0KepjJ1f7O3i&s=cats",
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
}

