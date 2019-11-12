$(document).ready(function() {  
  // theme
  var localTheme = localStorage.getItem('theme');
  if (localTheme) {
      $('#root').attr('class', `theme__${localTheme}`);
  }
  
  // scroll
  var position = $(window).scrollTop();
  $(window).scroll(function () {
    var navbar = $('.navbar');
    var gtt = $('#gtt');    

    var scroll = $(window).scrollTop();
    if (scroll > position) { // scroll down 
      if (scroll < 45) {
        return null;
      }

      if (!navbar.hasClass('navbar--hide')) {
        navbar.addClass('navbar--hide');
      } else if (navbar.hasClass('navbar--show')) {
        navbar.removeClass('navbar--show');
      }
      
      if (scroll > 500) {
        gtt.show(200);
      }
      
      $(".single__contents :header").each(function () {
        if (!$("#toggle-toc").is(":checked")) {
            return null;
        }

        if ($(window).scrollTop() >= $(this).position().top) {
          var id = $(this).attr('id');
          $('.toc a').removeClass('active');
          $('.toc a[href="#' + id + '"]').addClass('active');

          $('#toc > li').each(function () {
            $(this).find('ul').css('display', 'none');
          });
          $(`#toc [href="#${id}"]`).next().css('display', 'block');
          $(`#toc [href="#${id}"]`).parents('ul').css('display', 'block');
        }
      });
    } else { // scroll up
      if (navbar.hasClass('navbar--hide')) {
        navbar.removeClass('navbar--hide');
      } else if (!navbar.hasClass('navbar--show')) {
        navbar.addClass('navbar--show');
      }

      if (scroll < 500) {
        gtt.hide(200);
      }

      $(".single__contents :header").each(function () {
        if (!$("#toggle-toc").is(":checked")) {
            return null;
        }
        
        if ($(window).scrollTop() >= $(this).position().top) {
          var id = $(this).attr('id');
          $('.toc a').removeClass('active');
          $('.toc a[href="#' + id + '"]').addClass('active');

          $('#toc > li').each(function () {
            $(this).find('ul').css('display', 'none');
          });
          $(`#toc [href="#${id}"]`).next().css('display', 'block');
          $(`#toc [href="#${id}"]`).parents('ul').css('display', 'block');
        }
      });
    }
    position = scroll;
  });
  
  // media query
  enquire.register("screen and (max-width: 769px)", {
    match: function () {
      $('main').removeClass('main-main').removeClass('main').addClass('main');
      $('aside').removeClass('main-side').removeClass('hide').addClass('hide');     
    },
    unmatch: function () {      
      if ($('aside').length > 0) {
        $('main').removeClass('main-main').removeClass('main').addClass('main-main');
        $('aside').removeClass('main-side').removeClass('hide').addClass('main-side');
      }
      $('.navbar__burger').removeClass('is-active');
      $('.navbar__menu').removeClass('is-active');
    },
    setup: function () { },
    deferSetup: true,
    destroy: function () { },
  });

  // navbar
  $('.navbar__burger').click(function() {
    if ($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
      $('.navbar__menu').removeClass('is-active');
    } else {
      $(this).addClass('is-active');
      $('.navbar__menu').addClass('is-active');
    }
  });
  $('.navbar__menu-item').each(function() {
    var menu = $(this).text().trim().toLowerCase();
    if (location.pathname.includes(menu)) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });

  // truncate
  $('.summary__text').shave(160);
});
