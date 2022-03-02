$(document).ready(function() {
  $('.circle-container').find('a').click(function(event) {
    event.preventDefault();
  });
  $('.circle-container').find('li').hover(function() {
    $('.circle-container').find('li').removeClass('active');
    $(this).addClass('active');
    $('.services-container').find('li.active').removeClass('active animated fadeIn');

    $(".services-container").find('li').eq($(this).data('id')).addClass('active animated fadeIn');

  });
  $('.circle-containerT').find('a').click(function(event) {
    event.preventDefault();
  });
  $('.circle-containerT').find('li').hover(function() {
    $('.circle-containerT').find('li').removeClass('active');
    $(this).addClass('active');
    $('.services-container').find('li.active').removeClass('active animated fadeIn');

    $(".services-container").find('li').eq($(this).data('id')).addClass('active animated fadeIn');

  });

});