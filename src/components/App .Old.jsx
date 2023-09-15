import { Component } from 'react';

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

export class App extends Component {
  // state = {
  //   query: '',
  //   images: [],
  //   page: 1,
  //   isLoading: false,
  //   showModal: false,
  //   selectedImage: '', // Велике зображення для модалки
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevState.query !== this.state.query ||
  //     prevState.page !== this.state.page
  //   ) {
  //     this.fetchImages();
  //   }
  // }

  // // Отримуємо картинки і вносимо їх в стан
  // fetchImages = () => {
  //   const { query, page, images } = this.state;

  //   this.setState({ isLoading: true });

  //   return GetImg(query, page)
  //     .then(response => {
  //       this.setState(prevState => ({
  //         images: [...images, ...response.data.hits],
  //         isLoading: false,
  //       }));
  //     })
  //     .catch(error => {
  //       console.error('Помилка при отриманні зображень з API:', error);
  //       this.setState({ isLoading: false });
  //     });
  // };

  // // Зчитуємо запит та сздіснюємо пошук за введеним словом
  // handleSearch = query => {
  //   this.setState({ query, images: [], page: 1 }, () => {
  //     this.fetchImages();
  //   });
  // };

  // // Завантажити ще порцію по натисканню кнопки лояд мор
  // loadMore = () => {
  //   this.setState(
  //     prevState => ({
  //       page: prevState.page + 1,
  //     }),
  //     () => {
  //       this.fetchImages();
  //     }
  //   );
  // };

  // // Відкриваємо модалку
  // openModal = largeImageURL => {
  //   this.setState({ showModal: true, selectedImage: largeImageURL });
  // };

  // // Закриваємо модалку
  // closeModal = () => {
  //   this.setState({ showModal: false, selectedImage: '' });
  // };

  render() {
    const { images, isLoading, showModal, selectedImage } = this.state;

    return (
      <Layout>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} onImageClick={this.openModal} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.loadMore}>Load More</Button>
        )}
        {showModal && (
          <Modal largeImageURL={selectedImage} onClose={this.closeModal} />
        )}
        <GlobalStyle />
      </Layout>
    );
  }
}
