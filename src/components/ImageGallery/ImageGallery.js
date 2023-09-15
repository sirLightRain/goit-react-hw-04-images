import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { StyledImageGallery } from './ImageGallery.styled';

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <StyledImageGallery>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          largeImageURL={largeImageURL} // Передаємо URL великого зображення для модалки
          onClick={() => onImageClick(largeImageURL)} // Додаємо обробник кліку
        />
      ))}
    </StyledImageGallery>
  );
};
