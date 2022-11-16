
import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector(".gallery");

const images = galleryItems.map((image) =>
    `<a class="gallery__link" href="${image.original}"><img class="gallery__image" 
        src="${image.preview}" data-source="${image.original}" alt="${image.description}"/></a>`).join("");

gallery.insertAdjacentHTML("afterbegin", images);


const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});
