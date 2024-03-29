import reset from "./reset";
import { createContentBox } from "./initialPageLoad";
import ramen1 from "../images/bars-ramen-in-saigon-3227774_1280.jpg";
import ramen2 from "../images/korean-instant-noodle-tteokbokki-korean-spicy-sauce-ancient-food.jpg";
import ramen3 from "../images/side-view-shrimp-caesar-plate-topped-with-potato-shoestrings.jpg";

export default function MenuPage (e) {
    if (e) {
        if (e.target.id == 'menu' && document.getElementById('content').classList.contains('menu'))
            return;
    }
    reset();
    const contentContainer = document.getElementById('content');
    contentContainer.classList.add("menu");

    const contentBox = createContentBox(contentContainer);
    contentBox.style.flexDirection = 'row';
    contentBox.style.flexWrap = 'wrap';
    contentBox.style.justifyContent = 'center';
    contentBox.style.gap = '3rem';
    addMenuItem(ramen1, "Ramen", contentBox);
    addMenuItem(ramen2, "Tteokbokki", contentBox);
    addMenuItem(ramen3, "Caesar plate", contentBox);
    
    contentContainer.appendChild(contentBox);
}

function addMenuItem (link, description, container) {
    const itemImg = document.createElement('a');
    const itemText = document.createElement('h4');
    const menuItem = document.createElement('div');
    
    itemImg.style.background = "center/cover no-repeat url(" + link + ")";
    itemImg.style.width = '200px';
    itemImg.style.height = '200px';
    itemImg.style.border = "2px solid wheat";
    itemImg.style.borderRadius = '20px';
    itemImg.href = "https://naruto.fandom.com/wiki/Ramen_Ichiraku";

    itemText.textContent = description;

    menuItem.style.width = '250px';
    menuItem.style.height = '250px';
    menuItem.style.display = 'flex';
    menuItem.style.flexDirection = 'column';
    menuItem.style.justifyContent = 'center';
    menuItem.style.alignItems = 'center';
    menuItem.appendChild(itemImg);
    menuItem.appendChild(itemText);
    container.appendChild(menuItem);
}