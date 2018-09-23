
var Engeneering = ['건설','교육','기계','산업안전','재료','전기전자컴퓨터','화공고분자에너지'];
Engeneering[0] = ['건축공학','건축학','도시공학','조경학','토목공학','환경공학'];
Engeneering[1] = ['교양공학','중등공학교육'];
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
  'height': $(window).outerHeight() - $('.top').outerHeight(true) - $('.Dropdown').outerHeight(true) - $(window).outerHeight() * 0.05 + 'px'
});
$('.iframe').css({
  'height': $(window).outerHeight() * 0.5 + 'px',
  'width': $('.Major_Department').outerWidth()+'px'
});



var num1;
var num2;
var num3;
$('.D_Lev1').change(function(){

  console.log($('#'+$(this).attr('id')+' > :selected').val());
  console.log($('#'+$(this).attr('id')+' > :selected').text());
  num1 = $('#'+$(this).attr('id')+' > :selected').text();
  //console.log($(':selected').text());
});
$('.D_Lev2').change(function(){

  console.log($('#'+$(this).attr('id')+' > :selected').val());
  console.log($('#'+$(this).attr('id')+' > :selected').text());
  //console.log($(':selected').text());
  console.log(num1);
  num2 = $('#'+$(this).attr('id')+' > :selected').text();
});
$('.D_Lev3').change(function(){
console.log($('#' + $(this).attr('id') + ' > :selected').val());
console.log($('#' + $(this).attr('id') + ' > :selected').text());
num3 = $('#' + $(this).attr('id') + ' > :selected').text();
//console.log($(':selected').text());
$('.iframe').attr({
  'src': 'introduce/' + num1 + '_' + num2 + '_' + num3 + '.html'
});
$('.iframe').removeClass('hide');
});
$()
