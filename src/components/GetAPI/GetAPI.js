import axios from 'axios';

// 38440649-adbc72164fad22e06504da38e - мій ключ з ресурсу

export const GetImg = (searchQuery, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=38440649-adbc72164fad22e06504da38e&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(response => {
      console.log(
        'Виводимо дані з відповіді від https://pixabay.com/ в консоль',
        response.data
      ); // Виводимо дані з відповіді в консоль
  
      return response;
    })
    .catch(error => {
      console.error('Помилка при отриманні зображень з API:', error);

      throw error; // Викидаємо помилку для обробки вище
    });
};
