// var numOne = document.getElementById("num-one")
// var numTwo = document.getElementById("num-two")
// var addSum = document.getElementById("add-sum")

// function add() {
//   var one = parseFloat(numOne.value) || 0 ;
//   var two = parseFloat(numTwo.value) || 0 ;
//   addSum.innerHTML = "your sum is "+(one+two);
// };

// numOne.addEventListener("input", add);
// numTwo.addEventListener("input", add);


var lindy = document.getElementById("lindy");
var shag = document.getElementById("shag");
var blues = document.getElementById("blues");


lindy.addEventListener("click", picLink);
shag.addEventListener("click", picLink);
blues.addEventListener("click", picLink);

function picLink() {
  var allImages = document.querySelectorAll("img");
  var picId = this.attributes["data-img"].value;
  var pic = document.getElementById(picId);
  for (i = 0; i < allImages.length; i++) {
   if (allImages[i] !== pic) {
     allImages[i].className = "hide";
    }

  }

  if (pic.className === "hide") {
    pic.className = "";
  } else {
    pic.className = "hide";
  } 
};