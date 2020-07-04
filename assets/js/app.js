var drinkButton = document.getElementById("drink-button");
var displayCocktailEl = document.querySelector(".display-cocktail");

var getData = async(searchTerm)=>{

    searchTerm = "";
    var urlArray = [];
    var dataArray = [];

    if(searchTerm == ""){
        //COCKTAIL
        var cocktailApiKey = 1;
        var cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/" + cocktailApiKey + "/random.php";
        urlArray.push(cocktailUrl);

        //CHUCK NORRIS
        //var chuckNorrisUrl = "";
        //urlArray.push(chuckNorrisUrl);

        //GIPHY
        //var giphyUrl = "";
        //urlArray.push(giphyUrl);

        //CURRENT
        //var currentUrl = "";
        //urlArray.push(currentUrl);
        
    }
    else{
        /*
        //WIKIPEDIA
        var wikipediaUrl = "";
        urlArray.push(wikipediaUrl);  

        //VIMEO 
        var videoId = "172825105";
        var vimeoUrl = "https://api.vimeo.com/videos/" + videoId;
        urlArray.push(vimeoUrl);
        */
    }
       
    for(var i = 0; i < urlArray.length; i++){

        var data = await fetch(urlArray[i]);
        var json = await data.json();
        dataArray.push(json);
    }
    
    compileData(dataArray);
        
};

function compileData(dataArray) {

    displayData(dataArray);

};

function displayData(dataArray) {

    //RANDOM DATA START
    if(dataArray.length == 1){//ALERT ALERT ALERT ALERT ALERT <--------------------THIS "1" IS ONLY FOR TESTING PURPOSES, SHOULD BE 4 FOR RANDOM WHEN DATA IS AVAILABLE
        
        //update buttons
        displayButtons("random")

        //COCKTAIL DISPLAY START
        displayCocktailEl.innerHTML = `
        <div>
            <h2 id=“cocktailName”>${dataArray[0].drinks[0].strDrink}</h2>
            <img src=${dataArray[0].drinks[0].strDrinkThumb} alt=${dataArray[0].strDrink} id=“cocktailImage”/>
        </div>
        <div>
                <p id=“cocktailInstructions”>${dataArray[0].drinks[0].strInstructions}</p>
        </div>
        <h3>Ingredients</h3>
        <span id=“measure1">${dataArray[0].drinks[0].strMeasure1}</span>
        <span id=“ingredient1”>${dataArray[0].drinks[0].strIngredient1}</span>`;
        if (dataArray[0].drinks[0].strIngredient2 !== null) {
            displayCocktailEl.innerHTML += `
            <span id=“measurement2">${dataArray[0].drinks[0].strMeasure2}</span>
            <span id=“ingredient2”>${dataArray[0].drinks[0].strIngredient2}</span>
            `;
        }
        if (dataArray[0].drinks[0].strIngredient3 !== null) {
            displayCocktailEl.innerHTML += `
            <span id=“measurement3">${dataArray[0].drinks[0].strMeasure3}</span>
            <span id=“ingredient3”>${dataArray[0].drinks[0].strIngredient3}</span>
            `;
        }
        if (dataArray[0].drinks[0].strIngredient4 !== null) {
            displayCocktailEl.innerHTML += `
            <span id=“measurement4">${dataArray[0].drinks[0].strMeasure4}</span>
            <span id=“ingredient4”>${dataArray[0].drinks[0].strIngredient4}</span>
            `;
        }
        if (dataArray[0].drinks[0].strIngredient5 !== null) {
            displayCocktailEl.innerHTML += `
            <span id=“measurement5">${dataArray[0].drinks[0].strMeasure5}</span>
            <span id=“ingredient5”>${dataArray[0].drinks[0].strIngredient5}</span>
            `;
        }
        if (dataArray[0].drinks[0].strIngredient6 !== null) {
            displayCocktailEl.innerHTML += `
            <span id=“measurement6">${dataArray[0].drinks[0].strMeasure6}</span>
            <span id=“ingredient6”>${dataArray[0].drinks[0].strIngredient6}</span>
            `;
        }
        if (dataArray[0].drinks[0].strIngredient7 !== null) {
            displayCocktailEl.innerHTML += `
            <span id=“measurement7">${dataArray[0].drinks[0].strMeasure7}</span>
            <span id=“ingredient7”>${dataArray[0].drinks[0].strIngredient7}</span>
            `;
        }
        if (dataArray[0].drinks[0].strIngredient8 !== null) {
            displayCocktailEl.innerHTML += `
            <span id=“measurement8">${dataArray[0].drinks[0].strMeasure8}</span>
            <span id=“ingredient8”>${dataArray[0].drinks[0].strIngredient8}</span>
            `;
        }
        if (dataArray[0].drinks[0].strIngredient9 !== null) {
            displayCocktailEl.innerHTML += `
            <span id=“measurement9">${dataArray[0].drinks[0].strMeasure9}</span>
            <span id=“ingredient9”>${dataArray[0].drinks[0].strIngredient9}</span>
            `;
        }
        if (dataArray[0].drinks[0].strIngredient10 !== null) {
            displayCocktailEl.innerHTML += `
            <span id=“measurement10">${dataArray[0].drinks[0].strMeasure10}</span>
            <span id=“ingredient10”>${dataArray[0].drinks[0].strIngredient10}</span>
            `;
        }
        if (dataArray[0].drinks[0].strIngredient11 !== null) {
            displayCocktailEl.innerHTML += `
            <span id=“measurement11">${dataArray[0].drinks[0].strMeasure11}</span>
            <span id=“ingredient11”>${dataArray[0].drinks[0].strIngredient11}</span>
            `;
        }
        if (dataArray[0].drinks[0].strIngredient12 !== null) {
            displayCocktailEl.innerHTML += `
            <span id=“measurement12">${dataArray[0].drinks[0].strMeasure12}</span>
            <span id=“ingredient12”>${dataArray[0].drinks[0].strIngredient12}</span>
            `;
        }
        if (dataArray[0].drinks[0].strIngredient13 !== null) {
            displayCocktailEl.innerHTML += `
            <span id=“measurement13">${dataArray[0].drinks[0].strMeasure13}</span>
            <span id=“ingredient13”>${dataArray[0].drinks[0].strIngredient13}</span>
            `;
        }
        if (dataArray[0].drinks[0].strIngredient14 !== null) {
            displayCocktailEl.innerHTML += `
            <span id=“measurement14">${dataArray[0].drinks[0].strMeasure14}</span>
            <span id=“ingredient14”>${dataArray[0].drinks[0].strIngredient14}</span>
            `;
        }
        if (dataArray[0].drinks[0].strIngredient15 !== null) {
            displayCocktailEl.innerHTML += `
                <span id=“measurement15">${dataArray[0].drinks[0].strMeasure15}</span>
                <span id=“ingredient15”>${dataArray[0].drinks[0].strIngredient15}</span>
            `;
        }
        //COCKTAIL DISPLAY END
        
        //CHUCK NORRIS DISPLAY START dataArray[1] (CONTAINS GIPHY DISPLAY dataArray[2])
        //CHUCK NORRIS DISPLAY END

        //CURRENT DISPLAY START dataArray[3]
        //CURRENT DISPLAY END
        //RANDOM DATA END
    }
    else if(dataArray.length == 2){//SEARCH DATA START

        //update buttons
        displayButtons("search")

        //WIKIPEDIA DISPLAY START dataArray[0]
        //WIKIPEDIA DISPLAY END

        //VIMEO DISPLAY START dataArray[1]
        //VIMEO DISPLAY END
        //SEARCH DATA END
    }


};

//Sets up the buttons at the top of the page depending on the requirements
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
$("#to-search-button").on("click", function() {

    displayButtons("search");

});

//when the random instead is clicked
$("#to-random-button").on("click", function() {

    console.log("to-random-button clicked")

    displayButtons("random");

});

//when the random is clicked
$("#randomize").on("click", function() {

    console.log("random-button clicked")

    //get and store the searchTerm from the search bar
    var searchTerm = "";

    if (searchTerm != "") {
        //sends viable searchTerm to the getData function
        getData(searchTerm);
    }
    else {
        return;
    }

});

//when the search bar is clicked
$("#search-button").on("click", function() {

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