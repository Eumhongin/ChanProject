<?php
  $conn = mysqli_connect("localhost","root","um0723","hong");
  if(!$conn){
  echo "connect fail";
  }else{
  //echo "connect Success";
  }
  echo "<script>alert('".$_POST['lev3']."');</script>";
  $lev3 = $_POST['lev3'];
  $sql = "SELECT * FROM ex WHERE major = '".$lev3."'";

  $result = mysqli_query($conn,$sql);

?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title><?php echo $_POST['lev1'].'/'.$_POST['lev2'].'/'.$_POST['lev3'] ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script src="../js/jquery-min.js" charset="utf-8"></script>
    <link rel="stylesheet" href="../css/core.css">
    <link rel="stylesheet" href="../css/intro.css">
    <link rel="stylesheet" href="../font/font.css">

  </head>
  <body>
    <header>
      <div class="header_content">
        <h1><?php echo $_POST['lev3'] ?></h1>
      </div>
    </header>
    <hr class="hd_se">
    <section>
      <div class="major box">
        <div class="tip">
          <div>전공 적합성 관련</div>
          <ol class="ol1">
            <li>학업 계획이나 향후 진로에 대한 질문을 대비하기 위해 학과 홈페이지에 나와있는 학과 커리큘럼이나 졸업,취업 현황 등에 대해 꼼꼼히 알아보자</li>
            <li>진로에 대한 구체적인 질문에 대비해 평소 자신의 진로에 대해 많이 생각하고 정리해 보는 것이 필요함</li>
            <li>진로의 동기나 향후 계획에 대한 질문의 경우 거창하게 말하기보다는 솔직하고 구체적으로 얘기하는 것이 좋음</li>
          </ol>

        </div>
        <hr class="sub_hr major_hr">
        <p>제목위에 마우스를 올리시면 각 질문의 팁을 보실수 있습니다!</p>
        <ol>
          <?php
          while($row=mysqli_fetch_array($result,MYSQLI_ASSOC)){
          echo "<li>".$row["content"]."</li><br>";
          }
          ?>

        </ol>

      </div>
      <hr>
      <div class="Academic box">
        <div class="tip">
          <div>학업역량 관련</div>
          <ol class="ol2">
            <li>부족한 과목에 대한 질문의 경우, 내신이 치열하다는 점을 어필하고 낮은 성적을 극복하고자 노력했던 것을 말하는 것이 좋음</li>
            <li>성적이 낮았는데 지속적으로 상승한 경우, ‘진로를 확실히 정하게 됨’, ‘어려운 일이 있었지만 극복함’ 등 전환점이 된 계기를 말해주는 것이 좋다</li>
          </ol>

        </div>
        <hr class="sub_hr Aca_hr">
        <p>제목위에 마우스를 올리시면 각 질문의 팁을 보실수 있습니다!</p>
        <ol>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
        </ol>

      </div>
      <hr>
      <div class="dev box">
        <div class="tip">
          <div>발전가능성 및 인성 관련</div>
          <ol class="ol3">
            <li>여러 교내 활동들 중 ‘전공과 관련된 활동들’ 위주로 말할 것</li>
            <li>자신의 경험을 구체적으로 말하고, 느낀 점이나 배운 점에 대해서도 꼭 언급할 것</li>
          </ol>

        </div>
        <hr class="sub_hr dev_hr">
        <p>제목위에 마우스를 올리시면 각 질문의 팁을 보실수 있습니다!</p>
        <ol>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
        </ol>

      </div>
      <hr>
      <div class="free box">
        <div class="tip">
          <div>자유질문</div>
          <ol class="ol4">
            <li>올해 이슈가 되었던 뉴스나 지원한 전공과 관련된 시사 상식에 대해 관심을 갖고 생각을 해 보는 것이 중요함, 친구들과 토론을 해 보는 것도 좋음</li>
            <li>압박면접과 같은 공격적인 질문들은 할 수 없게 되어있다. 고등학교의 범위를 넘어서는 문제를 출제할 수도 없다. 그러니 면접보기 전에 지레 겁먹지 말자</li>

          </ol>

        </div>
        <hr class="sub_hr free_hr">
        <p>제목위에 마우스를 올리시면 각 질문의 팁을 보실수 있습니다!</p>
        <ol>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
        </ol>

      </div>
      <?php mysqli_close($conn); ?>
    </section>
    <footer>
      <span>Copyright @ 면접플러스</span>
    </footer>
    <script src="../js/intro.js" charset="utf-8"></script>
  </body>
</html>
