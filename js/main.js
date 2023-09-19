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



  /**
   * Добавление изменяемой новости через Markdown
   */
  const converter = new showdown.Converter();
  const html = converter.makeHtml(news);
  document.querySelector("#news__inner").innerHTML = html;
});

