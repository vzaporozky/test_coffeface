// let slideIndex = 1;
// /* Вызываем функцию, которая реализована ниже: */
// showSlides(slideIndex);

// /* Увеличиваем индекс на 1 — показываем следующий слайд: */
// function nextSlide() {
//     showSlides(slideIndex += 1);
// }

// /* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
// function previousSlide() {
//     showSlides(slideIndex -= 1);  
// }

// /* Устанавливаем текущий слайд: */
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// /* Функция перелистывания: */
// function showSlides(n) {
//     /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
//     let slides = document.getElementsByClassName("block3__subtitle");
    
//     /* Проверяем количество слайдов: */
//     if (n > slides.length) {
//         slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
    
//     /* Проходим по каждому слайду в цикле for: */
//     for (let slide of slides) {
//         slide.style.display = "none";
//     }
//     /* Делаем элемент блочным: */
//     slides[slideIndex - 1].style.display = "block";    
// }





// let offset = 0;
// const sliderLine = document.querySelector('.block3__slider-line');

// document.querySelector('.block3__ellipse-right').addEventListener('click', function(){
//     offset = offset + 650;
//     if (offset > 1768) {
//         offset = 0;
//     }
//     sliderLine.style.left = -offset + 'px';
// });

// document.querySelector('.block3__ellipse-left').addEventListener('click', function () {
//     offset = offset - 650;
//     if (offset < 0) {
//         offset = 768;
//     }
//     sliderLine.style.left = -offset + 'px';
// });