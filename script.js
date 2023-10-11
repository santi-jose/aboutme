
// get elements to manipulate from HTML
const darkLightButton = document.getElementById("darkLightButton");
const html = document.querySelector("html");
const body = document.querySelector("body");
const buttons = document.getElementsByTagName("button");
const gameButton = document.getElementById("gameButton");
const filmButton = document.getElementById("filmButton");
const helloButton = document.getElementById("helloButton");

// initial value of boolean light, telling us we are in light mode
let light = true;

// function to change button style when clicked
function darkLight(){
  // if we are in light mode
  if(light){
    // change to dark mode
    alert("Dark mode activated!");

    // update darkLightButton
    darkLightButton.innerText = "Light";

    // update common button background color to dark mode black
    for(let i = 0; i < buttons.length; i++){
      buttons[i].style.backgroundColor = "black";
    }

    // update html background color
    html.style.backgroundColor = "black";

    // update body background color
    body.style.backgroundColor = "black";
    
    light = false; // set light mode boolean to false
  }else{ // we are in dark mode
    // change to light mode
    alert("Light mode activated!");

    // update darkLightButton
    darkLightButton.innerText = "Dark";
    
    // update common button background color to light mode #645464
    for(let i = 0; i < buttons.length; i++){
      buttons[i].style.backgroundColor = "#645464";
    }

    // update html background color
    html.style.backgroundColor = "#544454";
    
    // update body bakcground color
    body.style.backgroundColor = "#645464";
    
    light = true; // set light mode boolean to true
  }
}

// add event listener to darkLightButton
darkLightButton.addEventListener("click", darkLight);

// add event listener to gameButton
gameButton.addEventListener("click", function(){
  alert("Heading to Purgatory!"); // alert on click
});

// add event listener to filmButton
filmButton.addEventListener("click", function(){
  alert("Heading to Unemployed!"); // alert on click
});

// add event listener to helloButton
helloButton.addEventListener("click", function(){
  // alert on click and execute console.log
  alert("console.log(\"HelloWorld!\"); \nexecuted");
  console.log("Hello World!");
})

