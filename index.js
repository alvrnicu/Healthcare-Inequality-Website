let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);

let signNowButton = document.getElementById("sign-now-button")


const addSignature = (person) => {
  let string = `🖊️ ${person.name} from ${person.hometown} supports this.<br><br>`
  document.getElementById('new-sig').innerHTML += string
  let counter = document.getElementById('counter');
  counter.remove()
  let loc = document.getElementById('signatures-location');
  let locp = document.createElement('p');
  locp.id = 'counter';
  loc.appendChild(locp);
  count = count + 1;
  let string2 = `🖊️ ${count} people have signed this petition and support this cause.`
  document.getElementById('counter').innerHTML = string2;
}
let count = 3;

const validateForm = () => {

  let containsErrors = false;

  let petitionInputs = document.getElementById("sign-petition").elements;

  let person = {
    name: petitionInputs[0].value,
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value
  }
  console.log(petitionInputs)
  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }

  const email = document.getElementById('email');

  if (!email.value.includes('.com')) {
    containsErrors = true;
    email.classList.add('error');
  }
  else {
    email.classList.remove('error');
  }

  if (containsErrors == false) {
    addSignature(person);
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    toggleModal(person)
    }
  }
}

signNowButton.addEventListener("click", validateForm);

const email = document.getElementById('email');

if (!email.value.includes('.com')) {
  containsErrors = true;
}
else {
  email.classList.remove('error');
}

// Project 8

let animation = {
  revealDistance: 700,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease-in-out'
}

var revealableContainers = document.querySelectorAll('.revealable');

const reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
}
window.addEventListener("scroll", () => {
  reveal();
})

// Stretch

const scrollOffset = 100;

const scrollElement = document.querySelector(".js-scroll");

const elementInView = (el, offset = 0) => {
  const elementTop = scrollElement.getBoundingClientRect().top;
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};

const displayScrollElement = () => {
  scrollElement.classList.add('scrolled');
}

const hideScrollElement = () => {
  scrollElement.classList.remove('scrolled');
}

const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
      displayScrollElement();
  } else {
    hideScrollElement();
  }
}

window.addEventListener('scroll', () => {
  handleScrollAnimation();
})

// Last Unit
const toggleModal = (person) => {
  let modal = document.querySelector('#thanks-modal')
  let modalContent = document.querySelector('#thanks-content-modal')
  modal.style.display = 'flex';
  modalContent.textContent = `Thank you ${person.name} for supporting this cause! ${person.hometown} represent!`;
  
  let intervalId = setInterval(scaleImage, 500);
  
  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 3000)
}

var scaleFactor = .8;
let modalImage = document.querySelector("#pusheen");

const scaleImage = () => {
  if (scaleFactor == .8) {
    scaleFactor = 0.6;
  } else {
    scaleFactor = .8;
  }
  modalImage.style.transform = `scale(${scaleFactor})`;
}

let closeButton = document.getElementById("close");

const closeModal = () => {
  let modal = document.querySelector('#thanks-modal')
  modal.style.display = 'none';
}

closeButton.addEventListener("click", closeModal);
