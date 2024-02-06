import logo from '../images/logo.jpeg';
import reset from './reset';

export function HomePage () {
    reset();
    const contentContainer = document.getElementById("content");
    contentContainer.classList.add('home');

    const bgImage = createBGImage(contentContainer); 
    const contentBox = createContentBox(contentContainer);
    const heading = createHeading(contentBox);
    const content = createContent(contentBox);

    contentContainer.appendChild(contentBox);
}

function createContentBox (contentContainer) {
    const contentBox = document.createElement('div');
    contentContainer.appendChild(contentBox);
    return contentBox;
}

function createHeading (container) {
    const heading = document.createElement("h2");
    heading.textContent = "Ichiraku Ramen";
    container.appendChild(heading);
    return heading;
}

function createContent (container) {
    const content = document.createElement("p");
    content.textContent = "Welcome to ichiraku ramen, where you can indulge in your carnal desires to eat Naruto the 7th hokage himself";
    container.appendChild(content);
    return content;
}

function createBGImage (container) {
    const image = document.createElement("img");
    image.src = logo;
    container.appendChild(image);
    return image;
}