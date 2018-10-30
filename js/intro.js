
$('.tip > div').css({
  'padding-top':($('.tip').outerHeight()-$('.tip > div').outerHeight())*0.5+'px'
});
$('.ol1').css({
  'top':($('.tip').outerHeight()-$('.ol1').outerHeight())*0.5+'px'
});
$('.ol2').css({
  'top':($('.tip').outerHeight()-$('.ol2').outerHeight())*0.5+'px'
});
$('.ol3').css({
  'top':($('.tip').outerHeight()-$('.ol3').outerHeight())*0.5+'px'
});
$('.ol4').css({
  'top':($('.tip').outerHeight()-$('.ol4').outerHeight())*0.5+'px'
});
$('.box > .tip').hover(function(){
  $(this).children('div').css({
    'transform':'matrix(1,0,0,1,-300,0)',
    'opacity':'0'
  });
  $(this).children('ol').css({
    'transform':'matrix(1,0,0,1,-300,0)',
    'opacity':'1'
  })
},function(){
  $(this).children('div').css({
    'transform':'matrix(1,0,0,1,0,0)',
    'opacity':'1'
  });
  $(this).children('ol').css({
    'transform':'matrix(1,0,0,1,0,0)',
    'opacity':'0'
  });

});
$('footer > span').css({
  'top':($('footer').outerHeight()-$('footer > span').outerHeight())*0.5+'px',
  'left':($('footer').outerWidth()-$('footer > span').outerWidth())*0.5+'px'
});
