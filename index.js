let btn = document.querySelectorAll(".drum").length;

for (let i = 0; i < btn; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let btnClick = this.innerHTML;
    playSound(btnClick);
    buttonAnimation(btnClick);
  });
}

document.addEventListener("keypress", function (event) {
  let key = event.key;
  playSound(key);
  buttonAnimation(key);
});

function playSound(key) {
  switch (key) {
    case "w":
      {
        play("sounds/tom-1.mp3");
      }
      break;

    case "a":
      {
        play("sounds/tom-2.mp3");
      }
      break;

    case "s":
      {
        play("sounds/tom-3.mp3");
      }
      break;

    case "d":
      {
        play("sounds/tom-4.mp3");
      }
      break;

    case "j":
      {
        play("sounds/snare.mp3");
      }
      break;

    case "k":
      {
        play("sounds/crash.mp3");
      }
      break;

    case "l":
      {
        play("sounds/kick-bass.mp3");
      }
      break;
  }
}

function play(fileLocation) {
  let audio = new Audio(fileLocation);
  audio.play();
}

function buttonAnimation(currentKey) {
  let element = document.querySelector("." + currentKey);

  element.classList.add("pressed");
  setTimeout(function () {
    element.classList.remove("pressed");
  }, 100);
}
