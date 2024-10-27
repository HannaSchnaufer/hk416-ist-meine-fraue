fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Respon Error")
    }
  })

  .then(data => {
    console.log(data);
    displayCocktail(data)
  })

  .catch((error) => console.error("fetch gagal:", error));

  function displayCocktail(data) {
    const cocktail = data.drinks[0];
    const cocktailDiv = document.getElementById("cocktail");

    const cocktailName = cocktail.strDrink;
    const heading = document.createElement("h1")
    heading.innerHTML = cocktailName;
    cocktailDiv.appendChild(heading)

    const cocktailImg = document.createElement("img")
    cocktailImg.src = cocktail.strDrinkThumb;
    cocktailDiv.appendChild(cocktailImg);
    document.body.style.backgroundImage = "url('" + cocktail.strDrinkThumb + "')";
  }