var drinkButton = document.getElementById("drink-button");
var displayCocktailEl = document.querySelector(".display-cocktail");

function getData(searchTerm) {

    //COCKTAIL
    var cocktailData = null;
    var cocktailApiKey = 1;
    var cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/" + cocktailApiKey + "/random.php";

    //CHUCK NORRIS
    var chuckNorrisData = null;

    //GIPHY
    var giphyData = null;

    //WIKIPEDIA
    var wikipediaData = null;

    //CURRENT
    var currentData = null;

    //VIMEO 
    /*var vimeoData = null;
    var videoId = "172825105";
    var vimeoUrl = "https://api.vimeo.com/videos/" + videoId*/


    //COCKTAIL FETCH
    fetch(cocktailUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                cocktailData = data;
                console.log(data);
                console.log("creation: " + cocktailData);
                displayData(cocktailData);
            })
        }
    });

    //VIMEO FETCH
    /*fetch(vimeoUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    vimeoData = data;
                })
            }
        })*/

    //console.log("post fetch: " + cocktailData);
    //compileData(cocktailData);

};

function compileData(cocktailData) {
    console.log("compile Data: " + cocktailData);

    displayData(cocktailData);

};

function displayData(cocktailData) {

    console.log(cocktailData);
    displayCocktailEl.innerHTML = `
    <div>
        <h2 id=“cocktailName”>${cocktailData.drinks[0].strDrink}</h2>
        <img src=${cocktailData.drinks[0].strDrinkThumb} alt=${cocktailData.strDrink} id=“cocktailImage”/>
    </div>
    <div>
            <p id=“cocktailInstructions”>${cocktailData.drinks[0].strInstructions}</p>
    </div>
    <h3>Ingredients</h3>
    <span id=“measure1">${cocktailData.drinks[0].strMeasure1}</span>
    <span id=“ingredient1”>${cocktailData.drinks[0].strIngredient1}</span>`;
    if (cocktailData.drinks[0].strIngredient2 !== null) {
        displayCocktailEl.innerHTML += `
        <span id=“measurement2">${cocktailData.drinks[0].strMeasure2}</span>
        <span id=“ingredient2”>${cocktailData.drinks[0].strIngredient2}</span>
        `;
    }
    if (cocktailData.drinks[0].strIngredient3 !== null) {
        displayCocktailEl.innerHTML += `
        <span id=“measurement3">${cocktailData.drinks[0].strMeasure3}</span>
        <span id=“ingredient3”>${cocktailData.drinks[0].strIngredient3}</span>
        `;
    }
    if (cocktailData.drinks[0].strIngredient4 !== null) {
        displayCocktailEl.innerHTML += `
        <span id=“measurement4">${cocktailData.drinks[0].strMeasure4}</span>
        <span id=“ingredient4”>${cocktailData.drinks[0].strIngredient4}</span>
        `;
    }
    if (cocktailData.drinks[0].strIngredient5 !== null) {
        displayCocktailEl.innerHTML += `
        <span id=“measurement5">${cocktailData.drinks[0].strMeasure5}</span>
        <span id=“ingredient5”>${cocktailData.drinks[0].strIngredient5}</span>
        `;
    }
    if (cocktailData.drinks[0].strIngredient6 !== null) {
        displayCocktailEl.innerHTML += `
        <span id=“measurement6">${cocktailData.drinks[0].strMeasure6}</span>
        <span id=“ingredient6”>${cocktailData.drinks[0].strIngredient6}</span>
        `;
    }
    if (cocktailData.drinks[0].strIngredient7 !== null) {
        displayCocktailEl.innerHTML += `
        <span id=“measurement7">${cocktailData.drinks[0].strMeasure7}</span>
        <span id=“ingredient7”>${cocktailData.drinks[0].strIngredient7}</span>
        `;
    }
    if (cocktailData.drinks[0].strIngredient8 !== null) {
        displayCocktailEl.innerHTML += `
        <span id=“measurement8">${cocktailData.drinks[0].strMeasure8}</span>
        <span id=“ingredient8”>${cocktailData.drinks[0].strIngredient8}</span>
        `;
    }
    if (cocktailData.drinks[0].strIngredient9 !== null) {
        displayCocktailEl.innerHTML += `
        <span id=“measurement9">${cocktailData.drinks[0].strMeasure9}</span>
        <span id=“ingredient9”>${cocktailData.drinks[0].strIngredient9}</span>
        `;
    }
    if (cocktailData.drinks[0].strIngredient10 !== null) {
        displayCocktailEl.innerHTML += `
        <span id=“measurement10">${cocktailData.drinks[0].strMeasure10}</span>
        <span id=“ingredient10”>${cocktailData.drinks[0].strIngredient10}</span>
        `;
    }
    if (cocktailData.drinks[0].strIngredient11 !== null) {
        displayCocktailEl.innerHTML += `
        <span id=“measurement11">${cocktailData.drinks[0].strMeasure11}</span>
        <span id=“ingredient11”>${cocktailData.drinks[0].strIngredient11}</span>
        `;
    }
    if (cocktailData.drinks[0].strIngredient12 !== null) {
        displayCocktailEl.innerHTML += `
        <span id=“measurement12">${cocktailData.drinks[0].strMeasure12}</span>
        <span id=“ingredient12”>${cocktailData.drinks[0].strIngredient12}</span>
        `;
    }
    if (cocktailData.drinks[0].strIngredient13 !== null) {
        displayCocktailEl.innerHTML += `
        <span id=“measurement13">${cocktailData.drinks[0].strMeasure13}</span>
        <span id=“ingredient13”>${cocktailData.drinks[0].strIngredient13}</span>
        `;
    }
    if (cocktailData.drinks[0].strIngredient14 !== null) {
        displayCocktailEl.innerHTML += `
        <span id=“measurement14">${cocktailData.drinks[0].strMeasure14}</span>
        <span id=“ingredient14”>${cocktailData.drinks[0].strIngredient14}</span>
        `;
    }
    if (cocktailData.drinks[0].strIngredient15 !== null) {
        displayCocktailEl.innerHTML += `
            <span id=“measurement15">${cocktailData.drinks[0].strMeasure15}</span>
            <span id=“ingredient15”>${cocktailData.drinks[0].strIngredient15}</span>
        `;
    }
};


function displayButtons(source) {

    $("#button-div").empty();

    if (source == "startUp") {

        var continueButton = $("<button>")
            .addClass("pure-button btn")
            .attr("id", "continue-button")
            .text("OH, Yeah!");

        var continueButtonDiv = $("<div>")
            .addClass("pure-u-1-2")
            .append(continueButton);

        var trollButton = $("<a>")
            .addClass("pure-button btn")
            .attr("href", "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
            .text("Not Really");

        var trollButtonDiv = $("<div>")
            .addClass("pure-u-1-2")
            .append(trollButton);

        $("#button-div").append(continueButtonDiv, trollButtonDiv);
    }
    else if (source == "random") {

        var randomButton = $("<button>")
            .addClass("pure-button btn")
            .attr("id", "randomize")
            .text("Random Content");

        var randomButtonDiv = $("<div>")
            .addClass("pure-u-1-2")
            .append(randomButton);

        var toSearchButton = $("<button>")
            .addClass("pure-button btn")
            .attr("id", "to-search-button")
            .text("Search Instead");

        var toSearchButtonDiv = $("<div>")
            .addClass("pure-u-1-2")
            .append(toSearchButton);

        $("#button-div").append(randomButtonDiv, toSearchButtonDiv);
    }
    else if (source == "search") {

        var toRandomButton = $("<button>")
            .addClass("pure-button btn")
            .attr("id", "to-random-button")
            .text("Random Instead");

        var toRandomButtonDiv = $("<div>")
            .addClass("sub")
            .append(toRandomButton);

        var searchBar = $("<input>")
            .addClass("search")
            .attr("type", "text")
            .attr("placeholder", "Search")
            .attr("aria-label", "Search")
            .attr("id", "search-bar");

        var searchButton = $("<button>")
            .addClass("pure-button search-btn")
            .attr("type", "submit")
            .attr("id", "search-button")
            .text("Search");

        var searchField = $("<fieldset>")
            .append(searchBar, searchButton);

        var searchBarForm = $("<form>")
            .addClass("pure-form sub")
            .append(searchField);

        var enclosingDiv = $("<div>")
            .addClass("high pure-g")
            .append(toRandomButtonDiv, searchBarForm)

        $("#button-div").append(enclosingDiv);
    }



};

function saveData() {

};

function loadData() {

};

function startUp() {



    displayButtons("search");

};

//when the search instead is clicked
$("#to-search-button").on("click", function () {

    displayButtons("search");

});

//when the random instead is clicked
$("#to-random-button").on("click", function () {

    console.log("to-random-button clicked")

    displayButtons("random");

});

//when the random is clicked
$("#random-button").on("click", function () {

    //get and store the searchTerm from the search bar
    var searchTerm = $(this).siblings("#search-bar").val().trim();

    if (searchTerm != "") {
        //sends viable searchTerm to the getData function
        getData(searchTerm);
    }
    else {
        return;
    }

});

//when the search bar is clicked
$("#search-button").on("click", function () {

    //get and store the searchTerm from the search bar
    var searchTerm = $(this).siblings("#search-bar").val().trim();

    if (searchTerm != "") {
        //sends viable searchTerm to the getData function
        getData(searchTerm);
    }
    else {
        return;
    }

});

//drinkButton.addEventListener("click", getRandomCocktail);

startUp();
getData();