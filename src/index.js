import './css/vendor/tailwind.vendor.css';
import './css/style.css';
import greetingModule from "./dom";
import favIconImg from "./assets/favicon.png";

const init = () => {
  const favIcon = document.querySelector('href="assets/favicon.png"');
  favIcon.setAttribute('href', favIconImg);
  
  const gm = greetingModule();
  const mainContent = document.getElementById('content');
  mainContent.classList.add(...['flex', 'justify-center'])
  mainContent.appendChild(gm.createGreeting('Hello World'));
};

init();