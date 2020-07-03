var drinkButton = document.getElementById("drink-button");
var displayCocktailEl = document.querySelector(".display-cocktail");
var apiKey = 1;

var getRandomCocktail = function() {

    var apiUrl = "https://www.thecocktaildb.com/api/json/v1/" + apiKey + "/random.php";
  
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            displayCocktailEl.innerHTML = `
                <div>
                    <h2 id="cocktailName">${data.drinks[0].strDrink}</h2>
                    <img src=${data.drinks[0].strDrinkThumb} alt=${data.strDrink} id="cocktailImage"/>
                </div>
                <div>
                        <p id="cocktailInstructions">${data.drinks[0].strInstructions}</p>
                </div>
                <h3>Ingredients</h3>
                    <span id="measure1">${data.drinks[0].strMeasure1}</span>
                    <span id="ingredient1">${data.drinks[0].strIngredient1}</span>`;
                    if(data.drinks[0].strIngredient2 !== null) {
                        displayCocktailEl.innerHTML += `
                        <span id="measurement2">${data.drinks[0].strMeasure2}</span>
                        <span id="ingredient2">${data.drinks[0].strIngredient2}</span>
                        `;
                      }
                      if(data.drinks[0].strIngredient3 !== null) {
                        displayCocktailEl.innerHTML += `
                        <span id="measurement3">${data.drinks[0].strMeasure3}</span>
                        <span id="ingredient3">${data.drinks[0].strIngredient3}</span>
                        `;
                      }
                      if(data.drinks[0].strIngredient4 !== null) {
                        displayCocktailEl.innerHTML += `
                        <span id="measurement4">${data.drinks[0].strMeasure4}</span>
                        <span id="ingredient4">${data.drinks[0].strIngredient4}</span>
                        `;
                      }
                      if(data.drinks[0].strIngredient5 !== null) {
                        displayCocktailEl.innerHTML += `
                        <span id="measurement5">${data.drinks[0].strMeasure5}</span>
                        <span id="ingredient5">${data.drinks[0].strIngredient5}</span>
                        `;
                      }
                      if(data.drinks[0].strIngredient6 !== null) {
                        displayCocktailEl.innerHTML += `
                        <span id="measurement6">${data.drinks[0].strMeasure6}</span>
                        <span id="ingredient6">${data.drinks[0].strIngredient6}</span>
                        `;
                      }
                      if(data.drinks[0].strIngredient7 !== null) {
                        displayCocktailEl.innerHTML += `
                        <span id="measurement7">${data.drinks[0].strMeasure7}</span>
                        <span id="ingredient7">${data.drinks[0].strIngredient7}</span>
                        `;
                      }
                      if(data.drinks[0].strIngredient8 !== null) {
                        displayCocktailEl.innerHTML += `
                        <span id="measurement8">${data.drinks[0].strMeasure8}</span>
                        <span id="ingredient8">${data.drinks[0].strIngredient8}</span>
                        `;
                      }
                      if(data.drinks[0].strIngredient9 !== null) {
                        displayCocktailEl.innerHTML += `
                        <span id="measurement9">${data.drinks[0].strMeasure9}</span>
                        <span id="ingredient9">${data.drinks[0].strIngredient9}</span>
                        `;
                      }
                      if(data.drinks[0].strIngredient10 !== null) {
                        displayCocktailEl.innerHTML += `
                        <span id="measurement10">${data.drinks[0].strMeasure10}</span>
                        <span id="ingredient10">${data.drinks[0].strIngredient10}</span>
                        `;
                      }
                      if(data.drinks[0].strIngredient11 !== null) {
                        displayCocktailEl.innerHTML += `
                        <span id="measurement11">${data.drinks[0].strMeasure11}</span>
                        <span id="ingredient11">${data.drinks[0].strIngredient11}</span>
                        `;
                      }
                      if(data.drinks[0].strIngredient12 !== null) {
                        displayCocktailEl.innerHTML += `
                        <span id="measurement12">${data.drinks[0].strMeasure12}</span>
                        <span id="ingredient12">${data.drinks[0].strIngredient12}</span>
                        `;
                      }
                      if(data.drinks[0].strIngredient13 !== null) {
                        displayCocktailEl.innerHTML += `
                        <span id="measurement13">${data.drinks[0].strMeasure13}</span>
                        <span id="ingredient13">${data.drinks[0].strIngredient13}</span>
                        `;
                      }
                      if(data.drinks[0].strIngredient14 !== null) {
                        displayCocktailEl.innerHTML += `
                        <span id="measurement14">${data.drinks[0].strMeasure14}</span>
                        <span id="ingredient14">${data.drinks[0].strIngredient14}</span>
                        `;
                      }
                      if(data.drinks[0].strIngredient15 !== null) {
                        displayCocktailEl.innerHTML += `
                        <span id="measurement15">${data.drinks[0].strMeasure15}</span>
                        <span id="ingredient15">${data.drinks[0].strIngredient15}</span>
                        `;
                      }
                    });
        });
    };

drinkButton.addEventListener("click", getRandomCocktail);
