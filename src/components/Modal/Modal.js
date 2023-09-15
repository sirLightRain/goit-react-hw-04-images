import React, { useEffect } from 'react';
import { StyledModalOverlay, StyledModal } from './Modal.styled';

export const Modal = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    // Функція для обробки натискання клавіші "Escape"
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    // Додаємо слухача подій клавіш "Escape" при монтуванні компонента
    window.addEventListener('keydown', this.handleKeyDown);

    // При демонтажі компонента видаляємо слухача подій
    return () => {
      window.removeEventListener('keydown', this.handleKeyDown);
    };
  }, [onClose]);

  // Функція для обробки кліку на оверлей
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <StyledModalOverlay onClick={handleBackdropClick}>
      <StyledModal>
        <img src={largeImageURL} alt="Large" />
      </StyledModal>
    </StyledModalOverlay>
  );
};
