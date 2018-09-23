$('iframe').css({
  'height': $('iframe').outerWidth() * 0.5625 + 'px'
});
$('header').css({
  'height': $(window).outerHeight() * 0.3 + 'px'
});
$('.MAIN').css({
  'left': $('header').outerWidth() * 0.125 + 'px',
  'top': $('header').outerHeight() * 0.25
});
$('.Current').css({
  'bottom': $('header').outerHeight() * 0.1 + 'px',
  'right': $('header').outerWidth() * 0.1 + 'px'
});

$('.Question_tag').click(function(){
  $(this).parent().find('div').animate({
    height:'toggle'
  })
  if ($(this).find('span').text() == '▼') {
    $(this).find('span').text('▲');
  }
  else{
    $(this).find('span').text('▼');
  }

})
