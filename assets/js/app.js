var drinkButton = document.getElementById("drink-button");
var displayCurrentEl = document.querySelector("#section-0");
var displayChuckEl = document.querySelector("#section-1");
var displayCocktailEl = document.querySelector("#section-2");
var wikiContainerEl = document.querySelector("#section-0");


var getData = async (searchTerm) => {

    console.log("searchTerm: " + searchTerm);

    if (searchTerm == null) { searchTerm = ""; } //for testing purposes only, REMOVE
    var urlArray = [];
    var dataArray = [];

    if (searchTerm == "") {

        //CURRENT
        var currentUrl = "https://api.currentsapi.services/v1/latest-news?english=us&apiKey=pqzZJrIzA7wKGaeyM4YYpxXkqkA6mmvHesnowVpytmqiX-0d";
        urlArray.push(currentUrl);

        //CHUCK NORRIS
        var chuckNorrisUrl = "https://api.chucknorris.io/jokes/random";
        urlArray.push(chuckNorrisUrl);

        //GIPHY
        //var giphyUrl = "";
        //urlArray.push(giphyUrl);

        //COCKTAIL
        var cocktailApiKey = 1;
        var cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/" + cocktailApiKey + "/random.php";
        urlArray.push(cocktailUrl);

    }
    else {

        //WIKIPEDIA
        var wikiApiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/" + searchTerm;
        urlArray.push(wikiApiUrl);

        /* //VIMEO 
        var videoId = "172825105";
        var vimeoAccessToken = "https://api.vimeo.com/oauth/authorize?response_type=code&clinet_id=fbc534edd13479f3a002a38342265d98e170a563&redirect_uri=https://josephptflanagan.github.io/project-1/&state{}&scope={}";
        var vimeoUrl = "https://api.vimeo.com/oauth/videos?fields=uri,width,height,title";
        urlArray.push(vimeoUrl);
       */
        saveData(searchTerm);
    }

    for (var i = 0; i < urlArray.length; i++) {

        var data = await fetch(urlArray[i]);
        var json = await data.json();
        dataArray.push(json);
    }

    displayData(dataArray);

};
//function for displaying 
function displayData(dataArray) {

    $("#section-0").empty();
    $("#section-1").empty();
    $("#section-2").empty();

    //update buttons
    displayButtons("content")
    
    //RANDOM DATA START
    if(dataArray.length == 3){       

        //CURRENT DISPLAY START dataArray[0]

        var numArticles = dataArray[0].news.length
        // console.log(numArticles);

        for (i = 0; i < 3; i++) 
        {
            // function to choose random number from array
            var randomNumber = (Math.floor(Math.random() * numArticles))

            // pull random article name
            var articleTitle = dataArray[0].news[randomNumber].title;

            // pull description of article
            var articleDescrip = dataArray[0].news[randomNumber].description;

            // pull article's image
            var articleImg = dataArray[0].news[randomNumber].image;

            // pull article's link for the website
            var articleUrl = dataArray[0].news[randomNumber].url;

            // create unordered list element
            var containerEl = document.createElement("ul");
            containerEl.classList = "cards"

            // create list element for unordered list
            var listEl = document.createElement("li");
            listEl.classList= "cards_item";
            containerEl.appendChild(listEl);

            // create div element for every card
            var divEl = document.createElement("div");
            divEl.classList= "card"

            if (articleImg === "None") 
            {
            
            }
            else 
            {
                // create link for image to article
                var imgLinkEl = document.createElement("a");
                imgLinkEl.classList = "card_image"
                imgLinkEl.setAttribute("href", articleUrl);
                imgLinkEl.setAttribute("target", "_blank");

                // pull image url and create image element
                var imgEl = document.createElement("img");
                imgEl.setAttribute("src", articleImg);

                // append link to image
                imgLinkEl.appendChild(imgEl);
                
                // append to the div element with class card
                divEl.appendChild(imgLinkEl);
            }
        
            // create link element to link title
            var titleEl = document.createElement("a");
            titleEl.classList = "card_title";
            titleEl.setAttribute("href", articleUrl);
            titleEl.setAttribute("target", "_blank")
            titleEl.textContent = articleTitle;
            divEl.appendChild(titleEl);

            // create p element for article description
            var descripEl = document.createElement("p");
            descripEl.classList = "card_text";
            descripEl.textContent = articleDescrip;

            // append title and description to content element
            var contentEl = document.createElement('div');
            contentEl.classList ='card_content';
            contentEl.appendChild(titleEl);
            contentEl.appendChild(descripEl);

            // append content element to div el (each article card)
            divEl.appendChild(contentEl);

            // append div element to list element
            listEl.appendChild(divEl);
    
            // append to the dom
            displayCurrentEl.appendChild(containerEl);
        }
    
        //CURRENT DISPLAY END

        //CHUCK NORRIS DISPLAY START dataArray[1]
        displayChuckEl.innerHTML = `
        <div class="pure-g">
            <div class="pure-u-1-2" id="chuck">
                <p id="chuck-joke">${dataArray[1].value}</p>
            </div>
        </div>`;
        
        //CHUCK NORRIS DISPLAY END
        
        //COCKTAIL DISPLAY START dataArray[2]
        displayCocktailEl.innerHTML = `
        <div>
            <h2 id=“cocktailName”>${dataArray[2].drinks[0].strDrink}</h2>
            <img src=${dataArray[2].drinks[0].strDrinkThumb} alt=${dataArray[2].strDrink} id=“cocktailImage”/>
        </div>
        <div>
            <p id=“cocktailInstructions”>${dataArray[2].drinks[0].strInstructions}</p>
        </div>
        <h3>Ingredients</h3>
        <span id=“measure1">${dataArray[2].drinks[0].strMeasure1}</span>
        <span id=“ingredient1”>${dataArray[2].drinks[0].strIngredient1}</span>`;
        if (dataArray[2].drinks[0].strIngredient2 !== null) {
            displayCocktailEl.innerHTML += `
            <span id=“measurement2">${dataArray[2].drinks[0].strMeasure2}</span>
            <span id=“ingredient2”>${dataArray[2].drinks[0].strIngredient2}</span>
            `;
        }
        if (dataArray[2].drinks[0].strIngredient3 !== null) {
            displayCocktailEl.innerHTML += `
            <span id=“measurement3">${dataArray[2].drinks[0].strMeasure3}</span>
            <span id=“ingredient3”>${dataArray[2].drinks[0].strIngredient3}</span>
            `;
        }
        if (dataArray[2].drinks[0].strIngredient4 !== null) {
            displayCocktailEl.innerHTML += `
            <span id=“measurement4">${dataArray[2].drinks[0].strMeasure4}</span>
            <span id=“ingredient4”>${dataArray[2].drinks[0].strIngredient4}</span>
            `;
        }
        if (dataArray[2].drinks[0].strIngredient5 !== null) {
            displayCocktailEl.innerHTML += `
            <span id=“measurement5">${dataArray[2].drinks[0].strMeasure5}</span>
            <span id=“ingredient5”>${dataArray[2].drinks[0].strIngredient5}</span>
            `;
        }
        if (dataArray[2].drinks[0].strIngredient6 !== null) {
            displayCocktailEl.innerHTML += `
            <span id=“measurement6">${dataArray[2].drinks[0].strMeasure6}</span>
            <span id=“ingredient6”>${dataArray[2].drinks[0].strIngredient6}</span>
            `;
        }
        if (dataArray[2].drinks[0].strIngredient7 !== null) {
            displayCocktailEl.innerHTML += `
            <span id=“measurement7">${dataArray[2].drinks[0].strMeasure7}</span>
            <span id=“ingredient7”>${dataArray[2].drinks[0].strIngredient7}</span>
            `;
        }
        if (dataArray[2].drinks[0].strIngredient8 !== null) {
            displayCocktailEl.innerHTML += `
            <span id=“measurement8">${dataArray[2].drinks[0].strMeasure8}</span>
            <span id=“ingredient8”>${dataArray[2].drinks[0].strIngredient8}</span>
            `;
        }
        if (dataArray[2].drinks[0].strIngredient9 !== null) {
            displayCocktailEl.innerHTML += `
            <span id=“measurement9">${dataArray[2].drinks[0].strMeasure9}</span>
            <span id=“ingredient9”>${dataArray[2].drinks[0].strIngredient9}</span>
            `;
        }
        if (dataArray[2].drinks[0].strIngredient10 !== null) {
            displayCocktailEl.innerHTML += `
            <span id=“measurement10">${dataArray[2].drinks[0].strMeasure10}</span>
            <span id=“ingredient10”>${dataArray[2].drinks[0].strIngredient10}</span>
            `;
        }
        if (dataArray[2].drinks[0].strIngredient11 !== null) {
            displayCocktailEl.innerHTML += `
            <span id=“measurement11">${dataArray[2].drinks[0].strMeasure11}</span>
            <span id=“ingredient11”>${dataArray[2].drinks[0].strIngredient11}</span>
            `;
        }
        if (dataArray[2].drinks[0].strIngredient12 !== null) {
            displayCocktailEl.innerHTML += `
            <span id=“measurement12">${dataArray[2].drinks[0].strMeasure12}</span>
            <span id=“ingredient12”>${dataArray[2].drinks[0].strIngredient12}</span>
            `;
        }
        if (dataArray[2].drinks[0].strIngredient13 !== null) {
            displayCocktailEl.innerHTML += `
            <span id=“measurement13">${dataArray[2].drinks[0].strMeasure13}</span>
            <span id=“ingredient13”>${dataArray[2].drinks[0].strIngredient13}</span>
            `;
        }
        if (dataArray[2].drinks[0].strIngredient14 !== null) {
            displayCocktailEl.innerHTML += `
            <span id=“measurement14">${dataArray[2].drinks[0].strMeasure14}</span>
            <span id=“ingredient14”>${dataArray[2].drinks[0].strIngredient14}</span>
            `;
        }
        if (dataArray[2].drinks[0].strIngredient15 !== null) {
            displayCocktailEl.innerHTML += `
                <span id=“measurement15">${dataArray[2].drinks[0].strMeasure15}</span>
                <span id=“ingredient15”>${dataArray[2].drinks[0].strIngredient15}</span>
            `;
        }
        //COCKTAIL DISPLAY END
        
        //RANDOM DATA END
    }
       
    if (dataArray.length == 1) {//SEARCH DATA START temporarily set to 1 to test wiki

        //WIKIPEDIA DISPLAY START dataArray[0] 
        if (dataArray[0].type === "disambiguation") {
            var disabmExtract = dataArray[0].extract;
            console.log(disabmExtract);
            
            var disambTitle = dataArray[0].title;
            
            var wikiTableDiv = document.createElement("div");
            wikiTableDiv.setAttribute("class", "pure-table pure-table-horizontal");
            var disambTitleEl = document.createElement("h3");
            var disabmExtractEl = document.createElement("p");

            disambTitleEl.textContent = disambTitle;
            disabmExtractEl.textContent = disabmExtract;
            
            wikiTableDiv.appendChild(disambTitleEl);
            wikiTableDiv.appendChild(disabmExtractEl);

            wikiContainerEl.appendChild(wikiTableDiv);

        }

        else {
            var wikiTitle = dataArray[0].title;
            var wikiExtract = dataArray[0].extract;

            var wikiLink = dataArray[0].content_urls.desktop.page;

            var wikiImg = dataArray[0].thumbnail.source;

            var wikiTableDiv = document.createElement("div");
            wikiTableDiv.setAttribute("class", "pure-table pure-table-horizontal");
            var wikiTitleEl = document.createElement("h3");
            var wikiExtractEl = document.createElement("p");
            var wikiImgEl = document.createElement("img");

            wikiTitleEl.textContent = wikiTitle;
            wikiExtractEl.textContent = wikiExtract;
            wikiImgEl.setAttribute("src", wikiImg);

            wikiTableDiv.appendChild(wikiTitleEl);
            wikiTableDiv.appendChild(wikiExtractEl);
            wikiTableDiv.appendChild(wikiImgEl);

            wikiContainerEl.appendChild(wikiTableDiv);
        }
        //WIKIPEDIA DISPLAY END

        /*
        //VIMEO DISPLAY START dataArray[0] for now, dataArray[1] once all are present
        var vimeoVideoURL = "https://player.vimeo.com/" + dataArray[0].uri;

        var vimeoPlayer = $("<iframe>")
            .attr("src", vimeoVideoURL)
            .attr("width", dataArray[0].width)
            .attr("height", dataArray[0].height)
            .attr("frameborder", "0")
            .attr("title", dataArray[0].title)
            .attr("webkitallowfullscreen")
            .attr("mozallowfullscreen")
            .attr("allowfullscreen");

        var vimeoDiv = $("<div>")
            .addClass("vimeo-card")
            .attr("id", "vimeo")
            .append(vimeoPlayer);

        var vimeoSection = $("<div>")
            .addClass("pure-g")
            .append(vimeoDiv);

        $("#section-1").append(vimeoSection);
        //VIMEO DISPLAY END

        //SEARCH DATA END
        */
    }

};

function saveData(searchTerm) {

    localStorage.clear();
    localStorage.setItem("search-term", searchTerm);

};

function loadData() {
    var search = localStorage.getItem("search-term");

  //  localStorage.clear();

    if (!search) {
        return "Search";
    }
    else {
        return search;
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
    else if (source == "content") {

        var randomButton = $("<button>")
            .addClass("pure-button btn")
            .attr("id", "randomize")
            .text("Random Content");

        var randomButtonDiv = $("<div>")
            .addClass("pure-u-1-2")
            .append(randomButton);

        var searchBar = $("<input>")
            .addClass("search")
            .attr("type", "text")
            .attr("placeholder", loadData())
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
            .append(randomButtonDiv, searchBarForm)

        $("#button-div").append(enclosingDiv);
    }
};

function startUp() {

    displayButtons("startUp");

};

//when the search bar is clicked
$("#button-div").on("click", function () {

    //get continue-button input
    if (event.target.matches("#continue-button")) {

            displayButtons("content");

    }

    //get randomize button input
    if (event.target.matches("#randomize")) {
        var searchTerm = "";
        getData(searchTerm);
    }

    //get and store the searchTerm from the search bar
    if (event.target.matches("#search-button")) {

        event.preventDefault();

        var searchTerm = $("#search-bar").val().trim();

        if (searchTerm != "") {
            //sends viable searchTerm to the getData function
            getData(searchTerm);

        }
        else {
            return;
        }
    }


});

//drinkButton.addEventListener("click", getRandomCocktail);

startUp();

