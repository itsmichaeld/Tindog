import dogs from "./data.js";
import Dog from "./Dog.js";
import endMessage from "./utils.js";

let index = 0;
let chosenDog = new Dog(dogs[index]);
let isWaiting = false;

const dislike = () => {
  if (!isWaiting) {
    chosenDog.hasBeenSwiped = true;
    document.querySelector(".image-container").innerHTML += chosenDog.liked();
    isWaiting = true;
    setTimeout(() => {
      getNewDog();
      render();
      isWaiting = false;
    }, 1000);
  }
};

const like = () => {
  if (!isWaiting) {
    chosenDog.hasBeenLiked = true;
    chosenDog.hasBeenSwiped = true;
    document.querySelector(".image-container").innerHTML += chosenDog.liked();
    isWaiting = true;
    setTimeout(() => {
      getNewDog();
      render();
      isWaiting = false;
    }, 1000);
  }
};

const render = () => {
  document.querySelector(".image-container").innerHTML = chosenDog.getDogHtml();
};

const getNewDog = () => {
  index++;
  if (index === 3) {
    document.querySelector(".container").innerHTML = endMessage();
  } else {
    chosenDog = new Dog(dogs[index]);
    render();
  }
};

// Add event listeners to like/dislike buttons
document.querySelector("#btn-no").addEventListener("click", dislike);
document.querySelector("#btn-yes").addEventListener("click", like);
render();
