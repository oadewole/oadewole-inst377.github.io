/* 
Note: I did not use the MDN source code at all for this assignment. However I did look at their descriptions of what the JS should accomplish in order to gain clarity on what was being asked in the assignment description. */

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Looping through images */
for (let i = 1; i <= 5; i++) {
  const newImage = document.createElement("img");

  let path = "images/pic" + i + ".jpg";

  newImage.setAttribute("src", path);
  thumbBar.appendChild(newImage);

  // adding onClick handler to change to selected image path (not sure why this is works/how to logic the explanation)
  newImage.onclick = function() {
    displayedImage.setAttribute("src", path);
  };
}

/* Wiring up the Darken/Lighten button */
