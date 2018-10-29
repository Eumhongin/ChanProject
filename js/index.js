var Engeneering = new Array(6);
var Represent_Eng = ['건설', '기계', '산업안전', '재료', '전기전자컴퓨터', '화공고분자에너지'];
Engeneering[0] = ['건축공학', '건축학', '도시공학', '토목공학', '환경공학'];
Engeneering[1] = ['기계공학', '자동차공학', '조선해양공학', '항공우주공학'];
Engeneering[2] = ['방재공학', '산업공학', '안전공학'];
Engeneering[3] = ['반도체공학', '신소재공학', '금속공학'];
Engeneering[4] = ['전기공학', '컴퓨터공학', '전자공학', '정보통신공학'];
Engeneering[5] = ['고분자공학', '생명공학', '화학공학', '에너지공학'];


var Medical = new Array(1);
var Represent_Medical = ['의료'];
Medical[0] = ['의예', '한의학', '치의예', '수의예', '간호'];

var Social = new Array(5);
var Represent_Social = ['경영경제', '교육', '사회과학', '언어문학', '인문학'];
Social[0] = ['경영학', '경제학', '경영정보', '회계학', '광고홍보', '무역학'];
Social[1] = ['중등언어교육', '중등사회교육', '교육학'];
Social[2] = ['사회학', '심리학', '국제학', '문헌정보학', '사회복지학', '아동가족학', '언론방송매체학', '정치외교학', '행정학', '지리학'];
Social[3] = ['국어국문학', '독일어문학', '러시아어문학', '언어학', '영미어문학', '일본어문학', '중국어문학', '프랑스어문학'];
Social[4] = ['역사고고학', '인류종교학', '철학윤리학'];

var Science = new Array(5);
var Represent_Science = ['교육', '농림수산', '생활과학', '수학물리천문지구', '화학생명과학환경'];
Science[0] = ['중등자연과학교육', '공학교육'];
Science[1] = ['농림수산바이오시스템공학', '농림수산환경생태학', '산림학', '조경학', '작물원예학'];
Science[2] = ['식품영양학', '의류의상학'];
Science[3] = ['물리학', '수학', '지구과학', '천문기상학', '통계학'];
Science[4] = ['생명과학', '화학', '환경학', '해양학'];



$('.AD').css({
  'height': parseInt($('.title').css('height')) * 1.5 + 'px'
});
$('.Major_Department').css({
  'height': $(window).outerHeight() * 1.3 - $('.top').outerHeight(true) - $('.Dropdown').outerHeight(true) - $(window).outerHeight() * 0.2 + 'px'
});




var num1;
var num2;
var num3;

function FinalLevelSpreding(lev1, lev2) {
  var pick;
  if (lev1 == '공학') {
    pick = Engeneering;
  } else if (lev1 == '의학') {
    pick = Medical;
  } else if (lev1 == '인문사회') {
    pick = Social;
  } else if (lev1 == '자연과학') {
    pick = Science;
  } else {
    console.log('error in FinalLevelSpreding Function!!');
  }
  $('.D_Lev3 > *').remove();
  $('<option value="0" selected>').text("소분류").appendTo('#D_Lev3');
  for (let i = 0; i < pick[parseInt(lev2) - 1].length; i++) {
    let tt = i + 1;
    $('<option value=' + pick[parseInt(lev2) - 1][i] + '>').text(pick[parseInt(lev2) - 1][i]).appendTo('#D_Lev3');
  }
}
$('.D_Lev1').change(function() {
  //다음 option 설정
  if ($('#' + $(this).attr('id') + ' > :selected').val() == '공학') {
    $('.D_Lev2 > *').remove();
    $('<option value="0" selected>').text("중분류").appendTo('#D_Lev2');
    console.log('pass! eng');
    for (let i = 0; i < Engeneering.length; i++) {
      let tt = i + 1;
      $('<option value=' + Represent_Eng[i] + ' name=' + tt + '>').text(Represent_Eng[i]).appendTo('#D_Lev2');
    }
  } else if ($('#' + $(this).attr('id') + ' > :selected').val() == '의학') {
    console.log('pass! medical');
    $('.D_Lev2 > *').remove();
    $('<option value="0" selected>').text("중분류").appendTo('#D_Lev2');
    for (let i = 0; i < Medical.length; i++) {
      let tt = i + 1;
      $('<option value=' + Represent_Medical[i] + ' name=' + tt + '>').text(Represent_Medical[i]).appendTo('#D_Lev2');
    }
  } else if ($('#' + $(this).attr('id') + ' > :selected').val() == '인문사회') {
    console.log('pass! social');
    $('.D_Lev2 > *').remove();
    $('<option value="0" selected>').text("중분류").appendTo('#D_Lev2');
    for (let i = 0; i < Social.length; i++) {
      let tt = i + 1;
      $('<option value=' + Represent_Social[i] + ' name=' + tt + '>').text(Represent_Social[i]).appendTo('#D_Lev2');
    }
  } else if ($('#' + $(this).attr('id') + ' > :selected').val() == '자연과학') {
    console.log('pass! science');
    $('.D_Lev2 > *').remove();
    $('<option value="0" selected>').text("중분류").appendTo('#D_Lev2');
    for (let i = 0; i < Science.length; i++) {
      let tt = i + 1;
      $('<option value=' + Represent_Science[i] + ' name='+ tt + '>').text(Represent_Science[i]).appendTo('#D_Lev2');
    }
  } else {
    console.log('pass! else');
    // alert('Error in D_Lev2');
    // location.href = "404.html";
  }
  // console.log($('#' + $(this).attr('id') + ' > :selected').val());
  // console.log($('#' + $(this).attr('id') + ' > :selected').text());
  num1 = $('#' + $(this).attr('id') + ' > :selected').text();
  //console.log($(':selected').text());
});
$('.D_Lev2').change(function() {
  FinalLevelSpreding($('.D_Lev1 > :selected').val(), $('#' + $(this).attr('id') + ' > :selected').attr('name'));
  console.log($('.D_Lev1 > :selected').val() + "_" + $('.D_Lev2 > :selected').val());
  console.log($('#' + $(this).attr('id') + ' > :selected').val());
  console.log($('#' + $(this).attr('id') + ' > :selected').text());
  console.log(num1);
  num2 = $('#' + $(this).attr('id') + ' > :selected').text();
});
$('.D_Lev3').change(function() {
  console.log($('#' + $(this).attr('id') + ' > :selected').val());
  console.log($('#' + $(this).attr('id') + ' > :selected').text());
  num3 = $('#' + $(this).attr('id') + ' > :selected').text();



  // 옵션선택되면 바로 페이지 이동함
  // document.location.href = 'introduce/' + num1 + '_' + num2 + '_' + num3 + '.html';

});
$('.Dropdown > button').css({
  'right': ($(window).outerWidth() - $('.Major_Department').outerWidth(true)) * 0.45 + 'px'
});
// $('.Dropdown > button').click(function() {
//   document.location.href = 'introduce/' + num1 + '_' + num2 + '_' + num3 + '.html';
// });

anychart.onDocumentReady(function() {
  var text =
    "물리 물리 물리 물리 물리 생물 물리 화학 생물 컴퓨터 전자공학 기계공학 기계공학 전자공학 컴퓨터 물리 생물 경영 경제 사회 사회 건축 간호 심리 유아 아동 유아 아동 수의예 의예 의예 간호 수의예 환경공학 환경공학 인문 자율 인문 자율 자율 철학 독어독문 노어노문 경제통상 무역 무역 경제통상 사회과학 지리 전자공학 전자공학 전자공학 전자공학 영어교육 물리 응용생명 국어국문 전자공학 영어교육 통계학 수학교육 지질 전자공학 중어중문 경제통상 천문대기과학 독어독문 환경공학 화학교육 금속신소재 불어불문 의예과 화학 신문방송 물리교육 건축 경제통상 수의예 사회복지 물리 윤리교육 신소재 전자공학 화학교육 경영 정치외교 영어영문 역사교육 생물교육 간호 국어국문 생명 물리 조경 토목 물리교육 경영 응용생명 경영 의류 독어독문 간호 고분자 식품공학 아동가족 전자공학 영어영문 조경 영어교육 전자공학 경제통상 사회 역사교육 토목 간호 경제통상 전자공학 화학공학 간호 식품영양 건축 불어교육 농업경제 철학 조경 물리교육 한문 아동가족 경영 환경공학 노어노문 응용화학 의류 간호 생명공학 에너지공학 지리 교육 식품공학 경영 경영 수의예 지구과학교육 국어교육 건축공학 천문대기 환경공학 에너지공학 전자공학 간호 생명공학 독어독문 기계공학 간호 간호 간호 간호 간호 간호 간호 간호 간호 간호 간호 간호 간호 간호" +
    " 컴퓨터 컴퓨터 컴퓨터 컴퓨터 컴퓨터 컴퓨터 컴퓨터" +
    " 전자공학 전자공학 전자공학 전자공학 전자공학 전자공학 전자공학" +
    " 사회복지 사회복지 사회복지 사회복지 사회복지 사회복지" +
    " 기계공학 기계공학 기계공학 기계공학 기계공학 기계공학" +
    " 경영 경영 경영 경영 경영 경영" +
    " 경제 경제 경제 경제 경제 경제" +
    " 건축 건축 건축 건축 건축" +
    " 간호 간호 간호 간호 간호" +
    " 심리 심리 심리 심리 심리"


  // create a chart
  chart = anychart.tagCloud();


  // configure angles
  chart.angles([0]);

  // set 전자공학 parsing mode
  chart.data(text, {
    mode: "by-word"
  });

  // set 전자공학 chart title
  // chart.listen("chartDraw", function() {
  //   chart.title("Tag Cloud Chart: Mode = " + chart.mode());
  // });

  // set 전자공학 container id
  chart.container("container");

  // initiate drawing 전자공학 chart
  chart.draw();
});
