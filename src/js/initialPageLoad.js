import logo from '../images/logo.jpeg';
import reset from './reset';
import ownerImg from '../images/Teuchi_Infobox.jpg';

export function HomePage (e = null) {
    if (e) {
        if (e.target.id == 'home' && document.getElementById('content').classList.contains('home'))
            return;
    }
    reset();
    const contentContainer = document.getElementById("content");
    contentContainer.classList.add('home');

    const bgImage = createBGImage(contentContainer); 
    const contentBox = createContentBox(contentContainer);
    const heading = createHeading(contentBox);
    const content = createContent(contentBox);
    const owner = createOwner(contentBox);

    contentContainer.appendChild(contentBox);
}

export function createContentBox (contentContainer) {
    const contentBox = document.createElement('div');
    contentBox.classList.add("contentBox");
    contentContainer.appendChild(contentBox);
    setTimeout(() => {
        contentBox.style.opacity = '1';
    });
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

function createOwner (container) {
    const owner = document.createElement('a');
    owner.href = "https://www.youtube.com/watch?v=r3z73eCcFRQ";
    owner.style.border = "2px solid wheat";
    owner.style.borderRadius = '20px';
    owner.style.alignSelf = 'center';
    owner.style.width = '200px';
    owner.style.height = '200px';
    owner.style.background = 'center/cover no-repeat url(' + ownerImg + ')';
    container.appendChild(owner);
}