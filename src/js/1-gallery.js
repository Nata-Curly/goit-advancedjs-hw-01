import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import images from '../data/images';

const gallery = document.querySelector('.gallery');

function createGAlleryCard({ preview, original, description }) {
  return `<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img class="gallery-image" src="${preview}" alt="${description}" />
  </a>
</li>`;
}

const galleryMarkup = images.map(createGAlleryCard).join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  enableKeyboard: true,
  animationSlide: true,
  overlay: true,
});
