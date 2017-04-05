$(function(){

  var docVersions = '2.0.0,1.2.0,0.6.2,0.5.7,0.4.0';
  docVersions = docVersions.split(',');
  lastVersion = docVersions.shift();
  var listVersions = '';

  $('.versions-list').html('');

  for (i=0; i<docVersions.length; i++) {
    if (pageVersion && pageVersion == docVersions[i]) {
      $('.versions-dropdown').prepend('Version '+pageVersion);
    } else {
      listVersions += '<li class="versions-list__item"><a href="/version/'+docVersions[i]+'/">Version '+docVersions[i]+'</a></li>';
    }
  }

  if (pageVersion) {
    $('.version-number').append(pageVersion);
    $('.versions-list').prepend('<li class="versions-list__item last-version"><a href="/">Version '+lastVersion+'</a></li>');
  } else {
    $('.version-number').append(lastVersion);
    $('.versions-dropdown').prepend('Version '+lastVersion);
  }

  $('.versions-list').append(listVersions);

  $('.versions-list__item.last-version').on('click', function(e) {
    localStorage.removeItem('version');
  });

  $('.search-input').focusin(function() {
    $(this).parent().addClass('active');
  });

  $('.search-input').focusout(function() {
    $(this).parent().removeClass('active');
  });

  $('.search-input').keyup(function() {
    if ($(this).val().length == 0) {
      $('.search-input-clear').hide();
    } else {
      $('.search-input-clear').show();
    }
  }).keyup();

  $('.search-input-clear').on('click', function(e) {
    e.preventDefault();
    $('.search-input').val('');
    $(this).hide();
  });

  var articleContents = '';
  $('.article-main-content h2').each(function(e) {
    var text = $(this).text();
    var path = $(this).attr('id');
    articleContents += '<li class="article-contents__item"><a href="#'+path+'">'+text+'</a></li>';
  });

  $('.article-contents__list').append(articleContents);

  $(window).on('click', function() {
    $('.versions-dropdown').removeClass('opened');
    $('.sort-dropdown').removeClass('opened');
    $('.nav-item.guides-menu').removeClass('opened');
  });

  $('.versions-dropdown').on('click', function(e) {
    e.stopPropagation();
    $(this).toggleClass('opened');
  });

  $('.sort-dropdown').on('click', function(e) {
    e.stopPropagation();
    $(this).toggleClass('opened');
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

  $('.mobile-nav-menu__link.accordion').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('opened');
  });

  $('.article-affordance__btn.close').on('click', function() {
    if(document.referrer.split('/')[2]===location.hostname){
      window.history.back();
    }
  });

  $('.article-affordance__btn.share').on('click', function() {
    var subject = $('#mail-subject').text();
    var pageUrl = location.href;
    window.open('mailto:?subject='+subject+'&body=Check out this article: '+pageUrl);
  });

  $('.contact-popup-btn').on('click', function(e) {
    e.preventDefault();
    $('.contact-overlay').css('display', 'block');
  });

  $('.contact-form__btn.send').on('click', function() {
    sendContactMail();
  });

  $('.contact-close').on('click', function() {
    $('.contact-overlay').css('display', 'none');
  });

  function sendContactMail() {
    var sender = $('.contact-form__name').val();
    var message = $('.contact-form__message').val();
    window.open('mailto:mail@example.com?body='+message+' from: '+sender);
  }

  $('.menu-state-link').on('click', function(e) {
    e.preventDefault();
    var state = $(this).attr('data-state');
    var submenu = $(this).attr('data-submenu');
    $('.mobile-nav').removeClass('opened');
    if (submenu) {
      $('.mobile-nav-menu').find('[data-subcategory="' + submenu + '"]').addClass('opened');
    }
    $('.'+state+'-menu').addClass('opened');
  });

  $('.mobile-nav-close').on('click', function(e) {
    e.preventDefault();
    $(this).closest('.mobile-nav').removeClass('opened');
    $('.mobile-nav-menu__link.accordion').removeClass('opened');
  });

  $('.article-block table').each(function(e) {
    $(this).wrap('<div class="table-wrap"></div>');
  });
});