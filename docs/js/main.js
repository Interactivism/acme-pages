---
layout: null
---

$(function(){

  $('.header-logo').on('click', function(e) {
    localStorage.setItem('version', '');
  });

  var docVersions = '{{ site.data.versions |  join: ","}}';
  docVersions = docVersions.split(',');
  var listVersions = '';

  $('.versions-list').html('');

  for (i=0; i<docVersions.length; i++) {
    if (pageVersion == docVersions[i]) {
      $('.versions-list').prepend('<li class="versions-list__item">Version '+docVersions[i]+'</li>');
    } else {
      listVersions += '<li class="versions-list__item"><a href="/version/'+docVersions[i]+'/">Version '+docVersions[i]+'</a></li>';
    }
  }

  $('.versions-list').append(listVersions);

  $('.search-input-clear').on('click', function(e) {
    e.preventDefault();
    $('.search-input').val('');
  });

  var articleContents = '';
  $('.article-main-content h2').each(function(e) {
    var text = $(this).text();
    var path = $(this).attr('id');
    articleContents += '<li class="article-contents__item"><a href="#'+path+'">'+text+'</a></li>';
  });

  $('.article-contents__list').append(articleContents);

  $(window).on('click', function() {
    $('.versions-list').addClass('closed');
    $('.nav-item.guides-menu').removeClass('opened');
  });

  $('.versions-list').on('click', function(e) {
    e.stopPropagation();
    $(this).toggleClass('closed');
  });

  $('.guides-link').on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).parent().toggleClass('opened');
  });

  $('.submenu__title.accordion').on('click', function(e) {
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

  $('.article-affordance__btn.close').on('click', function() {
    if(document.referrer.split('/')[2]===location.hostname){
      window.history.back();
    }
  });

  $('.share-form__copy').on('click', function() {
    document.querySelector('.share-form__url').select();
    document.execCommand('copy');
  });

  $('.share-form__btn.send').on('click', function() {
    sendMail();
  });

  $('.share-form__email').keyup(function() {
    var recepient = $('.share-form__email').val();
    var mailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var res = mailReg.test(recepient);
    if (res) {
      $('.share-form__btn.send').prop('disabled', false);
    } else {
      $('.share-form__btn.send').prop('disabled', true);
    }
  });

  $('.share-close').on('click', function() {
    $('.share-overlay').css('display', 'none');
    $('.share-block').removeClass('success');
  });

  function sendMail() {
    var recepient = $('.share-form__email').val();
    var message = $('.share-form__message').val();
    var pageUrl = $('.share-form__url').val();
    window.open('mailto:'+recepient+'?body='+pageUrl+' '+message);
  }
});