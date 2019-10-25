console.log("national parks js file")

fetch ("http://localhost:8088/parks")
.then(response => response.json())
.then(jsonfiedResponse=> console.log(jsonfiedResponse))