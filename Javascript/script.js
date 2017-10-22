$(document).ready(function() {
  $(window).resize(function() {
    location.reload();
  });

  if ($(window).width() > 708) {
    $('a').click(function() {
      $('a').removeClass('selected');
      $(this).addClass('selected');
      current = $(this);
      $('.wrapper').scrollTo($(this).attr('href'), 800);
      return false;
    });

    $('.move-ahead').show('fade', 1000);
  }

  $('.nav-menu-bars').click(function() {
    $('.nav-menu').toggle('fade', 'slow');
    //$(this).find('i').toggleClass('fa-bars fa-arrow-right')
  });

  if ($(window).width() < 708) {
    $('.nav-menu-bars').click(function() {
      return (this.tog = !this.tog) ? menu() : menuClose();
    });

    $('.nav-menu ul li a').click(function() {
      $('.nav-menu').hide();
      $('body').animate({ left: '0px' });
    });

    $('.move-ahead').show('fade', 1000);
  }

  setTimeout(function start() {
    $('.bar').each(function(i) {
      var $bar = $(this);
      $(this).append('<span class="count"></span>');
      setTimeout(function() {
        $bar.css('width', $bar.attr('data-percent'));
      }, i * 100);
    });
    $('.count').each(function() {
      $(this)
        .prop('Counter', 0)
        .animate(
          {
            Counter: $(this)
              .parent('.bar')
              .attr('data-percent'),
          },
          {
            duration: 1000,
            easing: 'swing',
            step: function(now) {
              $(this).text(Math.ceil(now) + '%');
            },
          },
        );
    });
  }, 100);
});

function menu() {
  $('body').animate({ left: '130px' }, 200);
}

function menuClose() {
  $('.nav-menu').hide();
  $('body').animate({ left: '0px' }, 200);
}

// projects page code

$('.filters ul li').click(function() {
  // $('.filters ul li').removeClass('active');
  // $(this).addClass('active');
  $('.filters ul li').removeClass('after-click');
  $(this).addClass('after-click');

  var data = $(this).attr('data-filter');
  $grid.isotope({
    filter: data,
  });
});

var $grid = $('.grid').isotope({
  itemSelector: '.all',
  percentPosition: true,
  masonry: {
    columnWidth: '.all',
  },
});

// end of the projects page
