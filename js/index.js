var Engeneering = ['건설', '교육', '기계', '산업안전', '재료', '전기전자컴퓨터', '화공고분자에너지'];
Engeneering[0] = ['건축공학', '건축학', '도시공학', '조경학', '토목공학', '환경공학'];
Engeneering[1] = ['교양공학', '중등공학교육'];
//console.log(Engeneering[1][1]);

/*
공학 - 건설           건축공학 건축학 도시공학 조경학 토목공학 환경공학
      교육            교양공학 중등공학교육
      기계            기계공학 기전공학 자동차공학 조선해양공학 철도공학 항공우주공학
      산업안전        방재공학 산업공학 안전공학
      재료            금속공학 반도체공학 세라믹공학 신소재공학 재료공학
      전기전자컴퓨터   광학공학 응용소프트웨어 의 저기 전산학컴퓨터 전자 정보통신 제어계측
      화공고분자에너지 고분자 생명 섬유 에너지 화학

예체능 교육            중등예술체육교육
      무용체육         무용 체육
      미술             공예 디자인 미술학 순수미술 응용미술
      연극영화        방송연예 연극 영화
      음악            국악 기악 성악 실용음악 음악학 작곡
      응용예술        게임 만화 사진 애니메이션 영상예술 음향

의학    의료          수의학 의학 치의학 한의학

인문사회  경영경제   경영정보학 경영학 경제학 관광학 광고홍보학 금융회계세무학 무역유통학 부동산
          교육      교육학 유아교육학 중등사회교육 중등언어교육 초등교육 특수교육학
          법학      법학
          사회과학  교양사회과학 국제학 군사국방안보 도시지역지리학 문헌정보학
                    사회복지학 사회학 소비자가정자원 심리학 아동가족학
                    언론방송매체학 인류학 정치외교학 행정학
          언어문학   교양어문학 국어국문학 기타아시아어문학 기타유럽어문학
                    독일어문학 러시아어문학 문예창작학 스페인어문학
                    언어학 영미어문학 일본어문학 중국어문학
                    프랑스어문학
          인문학     교양인문학 국제지역학 문화민속미술사학 역사고고학
                    종교학 철학윤리학

자연과학   간호           간호학
          교육            간호본건교육 중등자연과학교육
          농림수산        노림수산바이오시스템공학 농림수산환경생태학 산림학
                          수산학 식품가공학 작물원예학 축산학
          보건            보건관리 보건학 임상보건 재활치료
                          피부미용
          생활과학         식품영양학 의류의상학 조리과학 주거학
          수학물리천문지구  물리학 수학 지구과학 천문기상학 통계학 해양학
          약학              약학 한약학
          의료예과          수의예과 의예과 치의예과 한의예과
          화학생명과학환경  생명과학 화학 환경학
*/

$('.AD').css({
  'height': parseInt($('.title').css('height')) * 1.5 + 'px'
});
$('.Major_Department').css({
  'height': $(window).outerHeight()*1.3 - $('.top').outerHeight(true) - $('.Dropdown').outerHeight(true) - $(window).outerHeight() * 0.2 + 'px'
});
// $('.iframe').css({
//   'height': $(window).outerHeight() * 0.5 + 'px',
//   'width': $('.Major_Department').outerWidth() + 'px'
// });



var num1;
var num2;
var num3;
$('.D_Lev1').change(function() {

  console.log($('#' + $(this).attr('id') + ' > :selected').val());
  console.log($('#' + $(this).attr('id') + ' > :selected').text());
  num1 = $('#' + $(this).attr('id') + ' > :selected').text();
  //console.log($(':selected').text());
});
$('.D_Lev2').change(function() {

  console.log($('#' + $(this).attr('id') + ' > :selected').val());
  console.log($('#' + $(this).attr('id') + ' > :selected').text());
  //console.log($(':selected').text());
  console.log(num1);
  num2 = $('#' + $(this).attr('id') + ' > :selected').text();
});
$('.D_Lev3').change(function() {
  console.log($('#' + $(this).attr('id') + ' > :selected').val());
  console.log($('#' + $(this).attr('id') + ' > :selected').text());
  num3 = $('#' + $(this).attr('id') + ' > :selected').text();
  //$('.Major_Department').addClass('hide');
  //console.log($(':selected').text());


  // 옵션선택되면 바로 페이지 이동함
  // document.location.href = 'introduce/' + num1 + '_' + num2 + '_' + num3 + '.html';

  // $('.iframe').attr({
  //   'src': 'introduce/' + num1 + '_' + num2 + '_' + num3 + '.html'
  // });
  // $('.iframe').removeClass('hide');
});
$('.Dropdown > button').css({
  'right':($(window).outerWidth()-$('.Major_Department').outerWidth(true))*0.45+'px'
});
$('.Dropdown > button').click(function(){
  document.location.href = 'introduce/' + num1 + '_' + num2 + '_' + num3 + '.html';
});

// $('.MD_Shield').css({
//   'height': $('.Major_Department').css('height')
// });
// $('.MD_Shield > div:nth-child(-n+3)').css({
//   'width': $('.Major_Department').outerWidth() * 0.08 + 'px',
//   'height': $('.Major_Department').outerWidth() * 0.08 + 'px'
// });
// $('.MD_Shield > div:nth-child(n+4):nth-child(-n+7)').css({
//   'width': $('.Major_Department').outerWidth() * 0.13 + 'px',
//   'height': $('.Major_Department').outerWidth() * 0.13 + 'px'
// });
// $('.MD_Shield > div:nth-child(n+8):nth-child(-n+9)').css({
//   'width': $('.Major_Department').outerWidth() * 0.2 + 'px',
//   'height': $('.Major_Department').outerWidth() * 0.2 + 'px'
// });

anychart.onDocumentReady(function() {
  var text =
  "물리 물리 물리 물리 물리 생물 물리 화학 생물 컴퓨터 전자공학 기계공학 기계공학 전자공학 컴퓨터 물리 생물 경영 경제 사회 사회 건축 간호 심리 유아 아동 유아 아동 수의예 의예 의예 간호 수의예 환경공학 환경공학 인문 자율 인문 자율 자율 철학 독어독문 노어노문 경제통상 무역 무역 경제통상 사회과학 지리 전자공학 전자공학 전자공학 전자공학 영어교육 물리 응용생명 국어국문 전자공학 영어교육 통계학 수학교육 지질 전자공학 중어중문 경제통상 천문대기과학 독어독문 환경공학 화학교육 금속신소재 불어불문 의예과 화학 신문방송 물리교육 건축 경제통상 수의예 사회복지 물리 윤리교육 신소재 전자공학 화학교육 경영 정치외교 영어영문 역사교육 생물교육 간호 국어국문 생명 물리 조경 토목 물리교육 경영 응용생명 경영 의류 독어독문 간호 고분자 식품공학 아동가족 전자공학 영어영문 조경 영어교육 전자공학 경제통상 사회 역사교육 토목 간호 경제통상 전자공학 화학공학 간호 식품영양 건축 불어교육 농업경제 철학 조경 물리교육 한문 아동가족 경영 환경공학 노어노문 응용화학 의류 간호 생명공학 에너지공학 지리 교육 식품공학 경영 경영 수의예 지구과학교육 국어교육 건축공학 천문대기 환경공학 에너지공학 전자공학 간호 생명공학 독어독문 기계공학 간호 간호 간호 간호 간호 간호 간호 간호 간호 간호 간호 간호 간호 간호"+
  " 컴퓨터 컴퓨터 컴퓨터 컴퓨터 컴퓨터 컴퓨터 컴퓨터"+
  " 전자공학 전자공학 전자공학 전자공학 전자공학 전자공학 전자공학"+
  " 사회복지 사회복지 사회복지 사회복지 사회복지 사회복지"+
  " 기계공학 기계공학 기계공학 기계공학 기계공학 기계공학"+
  " 경영 경영 경영 경영 경영 경영"+
  " 경제 경제 경제 경제 경제 경제"+
  " 건축 건축 건축 건축 건축"+
  " 간호 간호 간호 간호 간호"+
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
