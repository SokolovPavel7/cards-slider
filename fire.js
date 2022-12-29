const slides = document.querySelectorAll('.slide');

/*используем цикл for of для итерации массива элементов, полученных из slides*/
/*смысл цикла в том, чтобы убрать у всех классов slide состояние active и передать 
это состояние только тому слайду, который мы кликаем*/
for (const slide of slides) {
  /*Метод addEventListener() присоединяет обработчик события к определенному элементу.
    При этом новый обработчик события не переписывает уже существующие обработчики событий.*/
  slide.addEventListener('click', () => {
    clearActiveClasses();
    slide.classList.add('active');
  });
}
/*Эта функция перебирает элементы массива и удаляет классы с состоянием active*/
function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
}
