
var button = document.querySelector("#random-click");
var domEl = document.querySelector("#current-news");

// click event to pull current news
var submitRandom = function (event) 
{
    currentNews();
}

// API request from current news function
var currentNews = function () 
{
    var apiURL = "https://api.currentsapi.services/v1/latest-news?english=us&apiKey=pqzZJrIzA7wKGaeyM4YYpxXkqkA6mmvHesnowVpytmqiX-0d";

    fetch(apiURL).then(function (response) 
    {
        if (response.ok) 
        {
            response.json().then(function (data) 
            {
                displayNews(data);
            })
        }
    });

}

var displayNews = function (data) 
{
    domEl.innerHTML = "";

    // length of article array
    var numArticles = data.news.length
    // console.log(numArticles);

    for (i = 0; i < 3; i++) 
    {
        // function to choose random number from array
        var randomNumber = (Math.floor(Math.random() * numArticles))

        // pull random article name
        var articleTitle = data.news[randomNumber].title;

        // pull description of article
        var articleDescrip = data.news[randomNumber].description;

        // pull article's image
        var articleImg = data.news[randomNumber].image;

        // pull article's link for the website
        var articleUrl = data.news[randomNumber].url;

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

        var contentEl = document.createElement("div");
        contentEl.classList ="card_content";

        if (articleImg === "None") 
        {
            // if no image available for the article append bored at home img
            // var boredImg = document.createElement("img");
            // boredImg.setAttribute("src", "./assets/image.png")
            // boredImg.classList = "card_img"
            // divEl.appendChild(boredImg);
            
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
        contentEl.appendChild(titleEl);
        contentEl.appendChild(descripEl);

        // append content element to div el (each article card)
        divEl.appendChild(contentEl);

        // append div element to list element
        listEl.appendChild(divEl);
 
        // append to the dom
        domEl.appendChild(containerEl);
    }

}

button.addEventListener('click', submitRandom);