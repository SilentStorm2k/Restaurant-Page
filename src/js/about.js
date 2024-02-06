import reset from "./reset";
import { createContentBox } from "./initialPageLoad";

export default function AboutPage (e) {
    if (e) {
        if (e.target.id == 'about' && document.getElementById('content').classList.contains('about'))
            return;
    }
    reset();
    const content = document.getElementById('content');
    content.classList.add("about");
    const contentBox = createContentBox(content);

    addParagraph("Ichiraku Ramen: Konohagakure's Legendary Ramen!", contentBox, 'h2');
    addParagraph("Believe it! Ichiraku Ramen serves up the most mouthwatering ramen in the village, crafted by Teuchi and Ayame with generations of passion. From our classic miso ramen to vegetarian options, every bowl is a flavor explosion.", contentBox, 'p');
    addParagraph("More than just food: Ichiraku is a community hub, welcoming everyone with open arms and warm smiles. Share stories, celebrate triumphs, or simply slurp down a satisfying bowl – ramen brings us together!", contentBox, 'p');
    addParagraph("Beyond the counter: We proudly support Konohagakure by sourcing local ingredients and sponsoring community events. Come experience Ichiraku – ramen that nourishes body and soul!", contentBox, 'p');
    addParagraph("P.S. Ask about the 'Naruto Combo' – it's legendary! (Hokage dreams not included.)", contentBox, 'p');

}

function addParagraph (text, container, type) {
    const para = document.createElement(`${type}`);
    para.textContent = text;
    container.appendChild(para);
}