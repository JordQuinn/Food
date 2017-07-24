// console.log("G'Day!")

//copied from NewLine:
//some function goes here with this:
function submit(){

var input = document.getElementById('query').value
  fetch(
    "http://www.recipepuppy.com/api/?q=" + `${input}`
  )
    .then(function(response) {
      if (response.status !== 200) {
        console.log(response.status);

        return;
      }
      response.json().then(function(data) {
        console.log("test", response.url);
        console.log(data)
        displayInfo(data)//calling the function of "data" to get the data to display
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });

//write everything else here
//queryselector into "display"
//add a div to hold all data and within that div, add a href, add a div for recipe, add img src=`${}`, add a paragraph to hold the recipe name
let container = document.querySelector("#display")// this is a variable for the querySelector
function displayInfo(data){//create a fucntion to  grab the data from above and chuck it into the div
  let list = " ";


  data.results.forEach(function(item) {

  list +=`<div class = "container">
    <a href = "${item.href}">
      <div><img src="${item.thumbnail}"/></div>
      <div id = "title">${item.title}</div>
    </a>
    </div>`

  });
  container.innerHTML = list
}

}
