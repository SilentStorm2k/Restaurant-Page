import logo from '../images/logo.jpeg';

export function HomePage () {
    const contentContainer = document.getElementById("content");
    const image = document.createElement("img");
    const heading = document.createElement("h2");
    const content = document.createElement("p");
    image.src = logo;
    heading.textContent = "Ichiraku Ramen";
    content.textContent = "Welcome to ichiraku ramen, where you can indulge in your carnal desires to eat Naruto the 7th hokage himself";
    contentContainer.appendChild(image);
    contentContainer.appendChild(heading);
    contentContainer.appendChild(content);
}