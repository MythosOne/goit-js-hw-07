import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
// console.log(galleryItems.length);

const gallery = document.querySelector(".gallery");
// console.log(gallery);

const galleryImage = galleryItems.map(({ preview, description, original }) =>
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`);

gallery.insertAdjacentHTML("beforeend", galleryImage.join(""));
gallery.addEventListener("click", onClick);

// console.log(basicLightbox);

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

