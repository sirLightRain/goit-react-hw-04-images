import React, { useState, useEffect } from 'react';

//! Імпорт компонент
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { GetImg } from './GetAPI/GetAPI';
//! Імпорт компонент

import { Layout } from 'Layout';
import { GlobalStyle } from 'GlobalStyle';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, SetSelectedImage] = useState('');

  // Отримуємо картинки і вносимо їх в стан
  const fetchImages = async () => {
    if (!query) { 
      return;
    }

    setIsLoading(true);

    try {
      const response = await GetImg(query, page);
      setImages(prevImg => [...prevImg, ...response.data.hits]);
      setIsLoading(false);
    } catch (error) {
      console.error('Помилка при отриманні зображень з API:', error);
      setIsLoading(false);
    }
  };

  // Завантажити зображення при зміні запиту абосторінки
  useEffect(() => {
    fetchImages();
  }, [query, page]);

  // Зчитуємо запит та сздіснюємо пошук за введеним словом
  const handleSearch = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  // Функція для завантаження додаткових зображень
  const loadMore = () => {
    setPage(prevPage => prevPage + 1); // Збільшуємо номер сторінки на 1
  };

  // Відкриваємо модалку
  const openModal = largeImageURL => {
    setShowModal(true);
    SetSelectedImage(largeImageURL);
  };

  // Закриваємо модалку
  const closeModal = () => {
    setShowModal(false);
    SetSelectedImage('');
  };

  return (
    <Layout>
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <Button onClick={loadMore}>Load More</Button>
      )}
      {showModal && (
        <Modal largeImageURL={selectedImage} onClose={closeModal} />
      )}
      <GlobalStyle />
    </Layout>
  );
};
