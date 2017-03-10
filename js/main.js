$(function(){
  $('.versions-list').on('click', function() {
    $(this).toggleClass('closed');
  });
  $('.guides-menu').on('click', function() {
    $(this).toggleClass('opened');
  });
});