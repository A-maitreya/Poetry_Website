// JavaScript for Interactivity

// Quote of the Day
const quotes = [
    '"The woods are lovely, dark and deep..."',
    '"To live is the rarest thing in the world..."',
    '"Do not go gentle into that good night..."',
    '"Hope is the thing with feathers..."',
  ];
  
  function displayQuote() {
    const quoteElement = document.querySelector("#quote-of-the-day p");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  }
  
  displayQuote();
  
  // Filter Poems by Category
  function filterPoems(category) {
    const poems = document.querySelectorAll(".poem-list article");
    poems.forEach((poem) => {
      if (category === "All" || poem.dataset.category === category) {
        poem.style.display = "block";
      } else {
        poem.style.display = "none";
      }
    });
  }
  
  // Search Poems
  const searchBar = document.getElementById("search-bar");
  searchBar.addEventListener("input", () => {
    const searchText = searchBar.value.toLowerCase();
    const poems = document.querySelectorAll(".poem-list article");
    poems.forEach((poem) => {
      const title = poem.querySelector("h3").textContent.toLowerCase();
      if (title.includes(searchText)) {
        poem.style.display = "block";
      } else {
        poem.style.display = "none";
      }
    });
  });
  