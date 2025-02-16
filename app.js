const gifImg = document.querySelector("#gif");
const searchInput = document.querySelector("#search");
const searchImg = document.querySelector("#search-img");
const imgSection = document.querySelector("#img-section");

searchImg.addEventListener("click", () => {
  fetchCatGif(searchInput.value);
  imgSection.innerHTML = "";
});

function createGifs(src) {
  const gif = document.createElement("img");
  gif.src = src;
  imgSection.appendChild(gif);
}

async function fetchCatGif(search) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=1cbzbJFmH5vZwyM3T1Ny0KepjJ1f7O3i&q=${search}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`,
      { mode: "cors" }
    );
    const gifData = await response.json();
    // Gipyhy API returns an empty array if the searched term not returns anything
    if (gifData.data.length === 0) {
      throw new Error(`${search} is invalid!`)
    } else {
      for (let i = 0; i < gifData.data.length; i++) {
        const src = gifData.data[i].images.original.url;
        createGifs(src);
      }
    }
    
  } catch (err) {
    alert(err);
  }
}
