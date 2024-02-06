import favicon from '../images/favicon.png';

export default function addFavicon() {
    const head = document.querySelector("header");
    const linkToFavicon = document.createElement('link');
    linkToFavicon.href = favicon;
    linkToFavicon.rel = 'icon';
    linkToFavicon.type = 'image/x-icon';
    head.appendChild(linkToFavicon);
}

