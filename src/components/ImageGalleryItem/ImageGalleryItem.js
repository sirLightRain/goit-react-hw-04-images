import { StyledImageGalleryItem, StyledImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, tags, onClick }) => {
  return (
    <StyledImageGalleryItem>
      <StyledImg src={webformatURL} alt={tags} onClick={onClick} />
    </StyledImageGalleryItem>
  );
};
