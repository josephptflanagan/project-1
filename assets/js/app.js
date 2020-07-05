console.log("Hello");

var wikiContainerEl = document.querySelector("#wiki-container");
// https://en.wikipedia.org/w/api.php
// https://en.wikipedia.org/api/rest_v1/page/random/summary


var wikiApiUrl = "https://en.wikipedia.org/api/rest_v1/page/random/summary"; 
searchTerm = "";

// if searchTerm is NOT empty them add search term to wikiApiUrl
if (searchTerm != "") {
    wikiApiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/" + searchTerm;
};

fetch(wikiApiUrl)
    .then(function(response){return response.json();})
    .then(function(response) {
        displayWiki(response);
    })
    .catch(function(error){console.log(error);
});

var displayWiki = function(data) {
    console.log(data);
    var wikiTitle = data.title;
    console.log(wikiTitle);
    var wikiExtract = data.extract;
    console.log(wikiExtract);
    var wikiLink = data.content_urls.desktop.page;
    console.log(wikiLink);
    var wikiImg = data.thumbnail.source; 
    console.log(wikiImg);

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

}; 