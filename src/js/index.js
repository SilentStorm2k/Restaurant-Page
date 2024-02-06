import { HomePage } from "./initialPageLoad";
import 'normalize.css';
import  '../css/styles.css';

HomePage();

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");

homeButton.addEventListener('click', HomePage);
menuButton.addEventListener('click', MenuPage);
aboutButton.addEventListener('click', AboutPage);