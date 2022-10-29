import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
// console.log(gallery);

const galleryImage = galleryItems.map(({ preview, description, original }) =>
    `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`);

gallery.insertAdjacentHTML("beforeend", galleryImage.join(""));
gallery.addEventListener("click", onClick);

// console.log(basicLightbox);
console.log(SimpleLightbox);

function onClick(event) {
    event.preventDefault();
    if (event.target.classList.contains("gallery__image")) {
        const LargeImage = event.target.dataset.source;
        // console.log(LargeImage);
        
        const instance = basicLightbox.create(
            `<img src="${LargeImage}" width="800" height="600">`);

        instance.show();
    }
}
