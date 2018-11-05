$(document).ready(function() {

  if ($(window).outerWidth() >= '2560') {
    $('.Sub_Back').css({
      'height': $(window).outerHeight() * 0.4 + 'px'
    });

  } else if ($(window).outerWidth() >= '1024') {
    $('.Sub_Back').css({
      'height': $(window).outerHeight() * 0.3 + 'px'
    });
  } else if ($(window).outerWidth() >= '768') {
    $('.Sub_Back').css({
      'height': $(window).outerHeight() * 0.2 + 'px'
    });
  } else if ($(window).outerWidth() >= '0') {
    $('.Sub_Back').css({
      'height': $(window).outerHeight() * 0.1 + 'px'
    });
  }
  $('input').css({
    'height': $('.survey_wrap').outerHeight() * 0.05 + 'px'
  });

  $('.plus_btn > button').css({
    'height': $('.plus_btn > button').outerWidth() + 'px'
  });
  $('.submit_btn > button').css({
    'height': $('.submit_btn > button').outerWidth() * 0.3 + 'px'
  });
  $('.survey_wrap').css({
    'height': $('.survey_content').outerHeight() * 1.2 + 'px'
  });
});

function content_adding(number) {
  let changeint = 1 + number;

  let content = $('<div>').addClass('content').appendTo('.content_control');
  let content_main = $('<div>').addClass('content_main').appendTo(content);
  let content_main_p = $('<p>').text('면접 질문').appendTo(content_main);
  let content_content = $('<div>').addClass('content_content row').appendTo(content_main);
  let content_content_input = $('<input type="text" name="question' + changeint + '" value="">').appendTo(content_content);
  let delete_content = $('<div>').addClass('delete_content').appendTo(content_content);
  let delete_content_btn = $('<button type="button" name="button" onclick="content_delete(this,' + changeint + ')">').appendTo(delete_content);
  console.log($('.content').outerHeight());
  $(content).css({
    'height': $('.content').outerHeight() + 'px'
  });
  $(content_content_input).css({
    'height': $('.content_main > input').outerHeight() + 'px'
  });
  $(delete_content).css({
    'margin-left': parseInt($('.content_content').outerWidth() - $('.content_content > input').outerWidth() - $('.delete_content').outerWidth()) * 0.8 + 'px'
  });

  $(delete_content_btn).css({
    'border-radius': '10px',
    'cursor': 'pointer',
    'background-image': 'url("../img/delete_btn.png")',
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    'width': $('.content_main > input').outerHeight() + 'px',
    'height': $('.content_main > input').outerHeight() + 'px'
  });

  $('.survey_wrap').css({
    'height': $(content).offset().top + $('.plus_btn').outerHeight() + $('.submit_btn').outerHeight() + 'px'
  });

  //   $('.plus_btn > button').remove();
  //   $('<button type="submit" name="button" onclick="content_adding('+1+changeint+')">').css(btn_css).appendTo('.plus_btn');
  //$(window).scrollTop();

  let v = $(content).outerHeight() * changeint * 2;

  $('.checklength').attr({
    'value': 1 + parseInt($('.checklength').val())
  });

  $('.plus_btn > button').attr({
    'onclick': 'content_adding(' + changeint + ')'
  });
  $('html, body').animate({
    scrollTop: v
  }, 400);
};
function content_delete(e, number) {
  //$(this).parents('content').remove();
  // console.log($('.content_main > p').css('margin'));
  // console.log($('.survey_wrap').outerHeight());
  // console.log($(e).parents('.content').outerHeight());
  // console.log($('.survey_wrap').outerHeight() - $(e).parents('.content').outerHeight());
  // $('.survey_wrap').css({
  //   'height':$('.survey_wrap').outerHeight()-($(e).parents('.content').outerHeight()+parseInt($(e).parents('.content_main').children('p').css('margin-top'))*2)+'px'
  // });

  let sub = number-1;
  console.log(sub);
  $('.survey_wrap').css({
    'height': $('.content').last().offset().top + $('.plus_btn').outerHeight() + $('.submit_btn').outerHeight() - $('.content').last().outerHeight() + 'px'
  });
  $(e).parents('.content').remove();
  $('.checklength').attr({
    'value': $('.checklength').val() - 1
  });
  console.log('value : ' + $('.checklength').val());
  $('.plus_btn > button').attr({
    'onclick': 'content_adding('+sub+')'
  });

};
