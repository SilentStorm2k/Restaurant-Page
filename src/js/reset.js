export default function reset () {
    const contentContainer = document.getElementById("content");
    while (contentContainer.firstChild)
        contentContainer.removeChild(contentContainer.firstChild);
}