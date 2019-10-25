console.log("national parks js file")
const resultsContainer= document.querySelector("#results-container");

fetch ("http://localhost:8088/parks") // fetching the local json server
.then(response => response.json())
.then(jsonfiedResponse=> jsonIterator(jsonfiedResponse))

jsonIterator=(jsonfiedResponse)=>{
 console.log(jsonfiedResponse)

for (i=0; i<jsonfiedResponse.length; i++){
let parkName = jsonfiedResponse[i].name
let parkState = jsonfiedResponse[i].state
let parkVisted = jsonfiedResponse[i].visited

domPrinter(parkName, parkState, parkVisted); // calling the dom printer function

console.log (parkName)
console.log (parkState)
console.log (parkVisted)
}
}

domPrinter=(parkName,ParkState, parkVisted)=>{
  // If the park has been visited, the article tag should have a red dashed border. If the park has not been visited, it should have a green solid border.
  const parkArticleEl = document.createElement("article")
  const parkNameEl = document.createElement("h3")
  const parkStateEL = document.createElement("p")
  parkArticleEl.appendChild(parkNameEl)
  parkArticleEl.appendChild(parkStateEL)

  parkNameEl.textContent = `Name: ${parkName}`
  parkStateEL.textContent = `Name: ${ParkState}`
 
  if (parkVisted){
    parkArticleEl.classList.add("visited")
  }else{
    parkArticleEl.classList.add("not-visited")
  }

  resultsContainer.appendChild(parkArticleEl)

}


fetch (`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKey}/37.8267,-122.4233`)
.then(darkSkyresponse=>darkSkyresponse.json())
.then(darkSkyJsonfiedResponse=>console.log(darkSkyJsonfiedResponse))

