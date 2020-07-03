console.log("Hello");

function getData(searchTerm){ 

    //COCKTAIL
    var cocktailData = null;

    //CHUCK NORRIS
    var chuckNorrisData = null;

    //GIPHY
    var giphyData = null;

    //WIKIPEDIA
    var wikipediaData = null;

    //CURRENT
    var currentData = null;

    //VIMEO 
    var vimeoData = null;
    var videoId = "172825105";
    var vimeoUrl = "https://api.vimeo.com/videos/" + videoId

    
    fetch(vimeoUrl)
    .then(function(response){
        if(response.ok){
            response.json().then
        }
    })

    compileData();

}

function compileData(){

}

//when the random is clicked
$("#random-button").on("click", function(){

    //get and store the searchTerm from the search bar
    var searchTerm = $(this).siblings("#search-bar").val().trim();
    
    if(searchTerm != ""){
        //sends viable searchTerm to the getData function
        getData(searchTerm);
    }
    else{
        return;
    }

});

//when the search bar is clicked
$("#search-button").on("click", function(){

    //get and store the searchTerm from the search bar
    var searchTerm = $(this).siblings("#search-bar").val().trim();
    
    if(searchTerm != ""){
        //sends viable searchTerm to the getData function
        getData(searchTerm);
    }
    else{
        return;
    }

});