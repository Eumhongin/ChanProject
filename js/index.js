$('header').css({'height':$(window).outerHeight()*0.1+'px'});
$('.Panel1').css({'height':$(window).outerHeight()*0.5+'px'});
$('.P1_OurStory').css({'bottom':-$('.P1_OurStory').outerHeight()*2+'px'});
$('.P1_TT').css({'top':-$('.P1_TT').outerHeight()*1.2+'px'});
$('<div>').css({'position':'absolute','background':'black','width':'100%','height':$(window).outerHeight()+'px','top':$('.Panel1background').outerHeight()+$('header').outerHeight()+'px'}).appendTo('html');
