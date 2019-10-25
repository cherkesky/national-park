console.log("national parks js file")


const resultsContainer= document.querySelector("#results-container");

// ***************************************************************************
// Initial fetch call to the local json server
// ***************************************************************************
fetch ("http://localhost:8088/parks") 
.then(response => response.json())
.then(jsonfiedResponse=> jsonIterator(jsonfiedResponse))

jsonIterator=(jsonfiedResponse)=>{
 console.log(jsonfiedResponse)

for (i=0; i<jsonfiedResponse.length; i++){
    let parkName = jsonfiedResponse[i].name
    let parkState = jsonfiedResponse[i].state
    let parkVisted = jsonfiedResponse[i].visited
    let parkLong = jsonfiedResponse[i].longitude
    let parkLat = jsonfiedResponse[i].latitude

domPrinter(parkName, parkState, parkVisted, parkLong, parkLat); // calling the dom printer function

console.log (parkName)
console.log (parkState)
console.log (parkVisted)
console.log (parkLong)
console.log (parkLat)


}
}

// ***************************************************************************
// The DOM printer helper function
// ***************************************************************************

domPrinter=(parkName,ParkState, parkVisted, parkLong, parkLat)=>{
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
  fetchWeather(parkLong, parkLat); // calling the Dark Sky API


}
// ***************************************************************************
// Calling the Dark Sky API to get the weather info based on long/lat coordinates
// ***************************************************************************
 fetchWeather=(parkLong, parkLat)=>{
  fetch (`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKey}/${parkLat},${parkLong}`)
  .then(darkSkyresponse=>darkSkyresponse.json())
  .then(darkSkyJsonfiedResponse=>weatherInfoGrabber(darkSkyJsonfiedResponse))
}

// ***************************************************************************
// Grabbing the relevant info from the Dark Sky API json response
// ***************************************************************************
weatherInfoGrabber=(darkSkyJsonfiedResponse)=> {
console.log(darkSkyJsonfiedResponse)
}


