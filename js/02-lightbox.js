import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
// console.log(gallery);

const galleryImage = galleryItems.map(({ preview, description, original }) =>
    `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`);

gallery.insertAdjacentHTML("beforeend", galleryImage.join(""));
// gallery.addEventListener("click", onClick);

new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});