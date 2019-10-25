console.log("national parks js file")

fetch ("http://localhost:8088/parks")
.then(response => response.json())
.then(jsonfiedResponse=> jsonIterator(jsonfiedResponse))


jsonIterator=(jsonfiedResponse)=>{
console.log(jsonfiedResponse)

for (i=0; i<jsonfiedResponse.length; i++){
console.log (jsonfiedResponse[i].name)
console.log (jsonfiedResponse[i].state)
console.log (jsonfiedResponse[i].visited)
}
// insert code here for json iteration

}







domPrinter=()=>{
  //insert code here for buiding the DOM elements
    // `<article>
    //     <h3>Park Name</h3>
    //     <p>State the park in located in</p>
    // </article>`

}