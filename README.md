# Project 1 - Bored at Home

## The Lucky Charms (Team 2) - Joseph Flanagan(lead), Tom Breazier, Claudia Lay, Alvaro Saldana, Darius Wright

## GitHub URL
https://josephptflanagan.github.io/project-1

## Site URL
https://github.com/josephptflanagan/project-1

## GIF URL
![demo of site](https://github.com/josephptflanagan/project-1/blob/master/assets/images/Bored_.gif)

### How Bored at Home Works

The HTML body consists of a header, main, and footer. The header and footer are fairly straight forward, the main consists of 4 divs, a button-div and 3 section divs identified as section-0, section-1, and section-2. These section divs work as anchors for the generated content I’ll detail ahead. 

The script is composed of several functions:

startup, getData, displayData, displayButtons, saveData, and loadData. Along with this there are DOM references at the top and button event managers at the bottom

Startup is the most simple of these functions, acting redundantly as a way to display the starter buttons rather than just calling displayButtons directly. 

DisplayButtons creates the buttons in the aforementioned button-div. It has two different states depending on the source of the displayButtons function call. When called from the startUp function, the buttons created allow for the user to either interact with more content or not. Once the user has chosen to interact with more content, the displayButtons function is called from the button event manager to generate new buttons allowing the user to choose between randomized and search generated content. 

The user can then hit the random button, or enter a search term in the search bar and hit search. If a term is entered into the search bar and searched, this term is saved to local data, and will be recalled to serve as the placeholder in the search bar going forward until it is replaced by a new search. Both random and search button presses send a searchTerm to the asynchronous getData function, an empty search term in the case of the random button. GetData’s overall structure is laid out in an if statement, going down one path (random) with a blank searchTerm, and down a second path (search) if there is a searchTerm. Either path though consists of the generation of API URL’s using the searchTerm in the case of the search side of the if statement. These generated API URL’s are pushed into an urlArray. This urlArray is then run through a for loop, with a fetch requesting data from each URL in the urlArray awaiting the response and pushing the json version of the data into a dataArray. This dataArray is then sent to the displayData function. 

When entering the displayData function the three sections in the HTML are emptied. Then, based on the length of the dataArray (3 in the case of the random content and 2 in the case of the search content, the displayData function will then enter its own if statement. Each side of this if statement has sections it needs to display: Current, Chuck, and Cocktail on the random side, and Wiki and Giphy on the search side. Using the data in the dataArray each section populates section-0 through section-2 (or section-0 through section-1 on the search side). Once the data has populated the divs, the program awaits further interactivity.

