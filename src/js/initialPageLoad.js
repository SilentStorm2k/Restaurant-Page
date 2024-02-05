export function addContent () {
    const contentContainer = document.getElementById("content");
    const image = document.createElement("img");
    const heading = document.createElement("h2");
    const content = document.createElement("p");
    image.src = "images/logo.jpeg";
    heading.textContent = "Ichiraku Ramen";
    content.textContent = "Welcome to ichiraku ramen, where you can indulge in your carnal desires to eat Naruto the 7th hokage himself";
    contentContainer.appendChild(image);
    contentContainer.appendChild(heading);
    contentContainer.appendChild(content);
}