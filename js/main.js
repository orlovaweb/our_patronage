// иницилизация анимации
AOS.init();

/**
 * Обработка слайдера
 */
$(function () {
  $('.slider__inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 300,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false
        }
      }
    ]
  });


  /**
   * Обработка блока Вопрос-ответ
   */
  $('.faq__item').on('click', function () {
    $(this).find('.faq__item-text').slideToggle();
    $(this).find('.faq__item-btn').toggleClass('up');
    return false;

  });

  /**
   * Обработка бургер меню
   */
  $('.header__menu-btn').on('click', function () {
    $('.header__menu').slideToggle();
    // $('.header__call').slideToggle();

  });
  $('.menu-close').on('click', function () {
    $('.header__menu').hide();
    // $('.header__call').hide();
  });

  if (document.documentElement.clientWidth <= 1100) {

    $('.menu__item').on('click', function () {
      $('.header__menu').hide();
    });
  }



  /**
   * Добавление изменяемой новости через Markdown
   */
  const converter = new showdown.Converter();
  const html = converter.makeHtml(news);
  const newsBlock = document.querySelector("#news__inner");
  if (newsBlock) {

    newsBlock.innerHTML = html;
  }
});
// плавный скролл
document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function (e) {
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = document.querySelector('.header').offsetHeight;
    // const topOffset = 0; // если не нужен отступ сверху
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});
