$(document).ready(function() { 
  // theme change
  var localTheme = localStorage.getItem('theme');
  if (localTheme) {
    $('.select-theme__item').each(function () {
      $(this).removeClass('is-active');
    });
    $(`.select-theme a:contains("${localTheme}")`).addClass('is-active');
  }

  $('.select-theme__item').click(function (e) {
    var selectedThemeVariant = $(e.target).text().trim();
    localStorage.setItem('theme', selectedThemeVariant);

    if ($(this).attr('class').trim() === selectedThemeVariant) {
      return null;
    }

    $('#root').removeAttr('class').addClass(`theme__${selectedThemeVariant}`);
    var nodes = $('.select-theme').children('.dropdown-item');

    nodes.each(function () {
      if ($(this).text().trim() === selectedThemeVariant) {
        if (!$(this).hasClass('is-active')) {
          $(this).addClass('is-active');
        }
      } else {
        if ($(this).hasClass('is-active')) {
          $(this).removeClass('is-active');
        }
      }
    });

    if (window.mermaid) {
      if (selectedThemeVariant === "dark" || selectedThemeVariant === "hacker") {
        mermaid.initialize({ theme: 'dark' });
        location.reload();
      } else {
        mermaid.initialize({ theme: 'default' });
        location.reload();
      }
    }
  });
  
  // go to top
  $('.gtt').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 250);
  });

  if ($(window).scrollTop() === 0) {
    $('.gtt').hide(200);
  } else if ($(this).scrollTop() > $(document).height() - $(window).height() - 250) { // near the bottom
    $('.gtt').show(200);
  } else {
    $('.gtt').hide(200);
  }

  // scroll
  var position = $(window).scrollTop();
  $(window).scroll(function () {
    var navbar = $('.navbar');

    var scroll = $(window).scrollTop();
    if (scroll > position) { // scroll down 
      if (scroll < 250) {
        $('.gtt').hide(200);
      } else {
        $('.gtt').show(200);
      } 

      if (scroll < 45) {        
        return null;
      }      

      if (!navbar.hasClass('navbar--hide')) {
        navbar.addClass('navbar--hide');
      } else if (navbar.hasClass('navbar--show')) {
        navbar.removeClass('navbar--show');
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
      if (scroll < 250) {
        $('.gtt').hide(200);
      }

      if (navbar.hasClass('navbar--hide')) {
        navbar.removeClass('navbar--hide');
      } else if (!navbar.hasClass('navbar--show')) {
        navbar.addClass('navbar--show');
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

  // mobile search
  $('.mobile-search').hide(200);
  $('#mobileSearchBtn').click(function() {
    $('#search-mobile-container').fadeIn(250);
    $('#search-mobile').focus();
    $('html').css('overflow-y', 'hidden');
  });
  $('#search-mobile-close').click(function() {
    $('#search-mobile-container').fadeOut(250);
    $('#search-mobile').val('');
    $('#search-mobile-results').empty();
    $('html').css('overflow-y', 'visible');
  });
  $('#search-mobile').keydown(function(e) {
    // e.key === "Enter"
    if (e.key === "Escape") {
      $('#search-mobile-container').fadeOut(250);
      $('#search-mobile').val('');
      $('#search-mobile-results').empty();
      $('html').css('overflow-y', 'visible');
    }
  });

  // markdown table
  const tables = document.querySelectorAll('.single__contents > table');
  for (let i = 0; i < tables.length; i++) {
    const table = tables[i];
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';
    table.parentElement.replaceChild(wrapper, table);
    wrapper.appendChild(table);
  }

  // utils
  $.fn.digits = function() {
    return this.each(function() {
      $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
  }
});
