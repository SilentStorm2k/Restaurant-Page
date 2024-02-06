import { addContent } from "./initialPageLoad";
import 'normalize.css';
import  '../css/styles.css';

console.log("Hello");
addContent();

function reset () {
    const contentContainer = document.getElementById("content");
    while (contentContainer.firstChild)
        contentContainer.removeChild(contentContainer.firstChild);
}