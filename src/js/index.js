import { HomePage } from "./initialPageLoad";
import 'normalize.css';
import '../css/styles.css';
import addFavicon from "./favicon";
import { MenuPage } from "./menu";

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");


function init() {
    homeButton.addEventListener('click', HomePage);
    menuButton.addEventListener('click', MenuPage);
    aboutButton.addEventListener('click', AboutPage);
    addFavicon();
    HomePage();
}

init();