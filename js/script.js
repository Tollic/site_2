const photos = document.querySelectorAll('.photo');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

// Обработчики событий для увеличения и уменьшения фотографий
photos.forEach((photo, index) => {
  photo.addEventListener('click', () => {
    if (photo.classList.contains('active')) {
      photo.classList.remove('active');
    } else {
      photo.classList.add('active');
    }
  });
});

// Обработчик события для переключения на следующие фотографии
nextButton.addEventListener('click', () => {
  if (currentIndex < photos.length - 3) {
    currentIndex++;
    updateVisiblePhotos();
  }
});

// Обработчик события для переключения на предыдущие фотографии
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateVisiblePhotos();
  }
});

// Функция обновления видимых фотографий
function updateVisiblePhotos() {
  photos.forEach((photo, index) => {
    if (index >= currentIndex && index < currentIndex + 3) {
      photo.style.display = 'inline-block';
    } else {
      photo.style.display = 'none';
    }
  });
}

// Изначально показывать первые три фотографии
updateVisiblePhotos();
