console.log("national parks js file")


const resultsContainer = document.querySelector("#results-container");

// ***************************************************************************
// Initial fetch call to the local json server
// ***************************************************************************
fetch("http://localhost:8088/parks")
  .then(response => response.json())
  .then(jsonfiedResponse => jsonIterator(jsonfiedResponse))

jsonIterator = (jsonfiedResponse) => {
  console.log(jsonfiedResponse)

  for (i = 0; i < jsonfiedResponse.length; i++) {
    let parkName = jsonfiedResponse[i].name
    let parkState = jsonfiedResponse[i].state
    let parkVisted = jsonfiedResponse[i].visited
    let parkLong = jsonfiedResponse[i].longitude
    let parkLat = jsonfiedResponse[i].latitude


    domPrinter(parkName, parkState, parkVisted, parkLong, parkLat); // calling the dom printer function passing all the parameters

    console.log(parkName)
    console.log(parkState)
    console.log(parkVisted)
    console.log(parkLong)
    console.log(parkLat)
  }
}

// ***************************************************************************
// The DOM printer helper function
// ***************************************************************************

domPrinter = (parkName, ParkState, parkVisted, parkLong, parkLat) => {

  // If the park has been visited, the article tag should have a red dashed border. If the park has not been visited, it should have a green solid border.
  const parkArticleEl = document.createElement("article")
  const parkNameEl = document.createElement("h3")
  const parkStateEL = document.createElement("p")
  const parkUlEL = document.createElement("ul")
  const parkLiCurrently = document.createElement("li")
  const parkLiToday = document.createElement("li")
  const parkLiWeek = document.createElement("li")


  // calling the Dark Sky API to get the weather forcast and assign it to variables
  let parkLiCurrentlyResponse = fetchWeather(parkLong, parkLat, "Currently");
  let parkLiTodayResponse = fetchWeather(parkLong, parkLat, "Today");
  let parkLiWeekResponse = fetchWeather(parkLong, parkLat, "Week");


// adding the all the li to the ul
  parkUlEL.appendChild(parkLiCurrently, parkLiToday, parkLiWeek)

// adding all the child elements to the parent article
  parkArticleEl.appendChild(parkNameEl)
  parkArticleEl.appendChild(parkStateEL)
  parkArticleEl.appendChild(parkUlEL)


  parkNameEl.textContent = `Name: ${parkName}`
  parkStateEL.textContent = `State: ${ParkState}`
  parkLiCurrently.textContent = `Currently: ${parkLiCurrentlyResponse}`
  parkLiToday.textContent = `Today: ${parkLiTodayResponse}`
  parkLiWeek.textContent = `Week: ${parkLiWeekResponse}`

  if (parkVisted) {
    parkArticleEl.classList.add("visited") //adding the relevant class to the element
  } else {
    parkArticleEl.classList.add("not-visited") //adding the relevant class to the element
  }
  resultsContainer.appendChild(parkArticleEl) // adding the article element to the html container

}
// ***************************************************************************
// Calling the Dark Sky API to get the weather info based on long/lat coordinates and returning the requested weather forcast (currently/today/week) 
// ***************************************************************************
fetchWeather = (parkLong, parkLat, whatWeather) => {
  fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKey}/${parkLat},${parkLong}`)
    .then(darkSkyresponse => darkSkyresponse.json())
    .then(darkSkyJsonfiedResponse => {
      if (whatWeather === "Currently") {
        return(darkSkyJsonfiedResponse.currently.summary)
      }
      if (whatWeather === "Today") {
        return(darkSkyJsonfiedResponse.daily.summary)
      }
      if (whatWeather === "Week") {
        return (darkSkyJsonfiedResponse.hourly.summary)
      }
      console.log(darkSkyJsonfiedResponse)

})
}

