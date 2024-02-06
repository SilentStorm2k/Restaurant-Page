export default function reset () {
    const contentContainer = document.getElementById("content");
    contentContainer.removeAttribute('class');
    while (contentContainer.firstChild)
        contentContainer.removeChild(contentContainer.firstChild);
}