$(function(){
  var articleContents = '';
  $('.article-main-content h2').each(function(e) {
    var text = $(this).text();
    var path = $(this).attr('id');
    articleContents += '<li class="article-contents__item"><a href="#'+path+'">'+text+'</a></li>';
  });

  $('.article-contents__list').append(articleContents);

  $('.versions-list').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('closed');
  });

  $('.submenu__title').on('click', function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('opened');
  });

  $('.search-input').focusin(function() {
    $(this).parent().addClass('active');
  });

  $('.search-input').focusout(function() {
    $(this).parent().removeClass('active');
  });

  $('.article-affordance__btn.share').on('click', function() {
    $('.share-form__url').val(location.href);
    $('.share-overlay').css('display', 'block');
  });

  $('.share-form__copy').on('click', function() {
    document.querySelector('.share-form__url').select();
    document.execCommand('copy');
  });

  $('.share-form__btn.send').on('click', function() {
    $('.share-block').addClass('success');
  });

  $('.share-close').on('click', function() {
    $('.share-overlay').css('display', 'none');
    $('.share-block').removeClass('success');
  });

  $('.guides-menu').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('opened');
  });
});