$(document).ready(function(){
    $(".add_btn").click(function(){
      $("#addition1").clone().appendTo("#add1").find("input").val("");
      $(".tel").removeClass('col-md-6');
      $(".tel").addClass('col-md-5');
      $(".delete").removeClass('d-none');
    });
    $(".add_btn2").click(function(){
      $("#addition2").clone().appendTo("#add2").find("input").val("");
      $(".tel2").removeClass('col-12');
      $(".tel2").addClass('col-11');
      $(".delete2").removeClass('d-none');
    });
    $(".add_btn3").click(function(){
      $("#addition3").clone().appendTo("#add3").find("input").val("");
      $(".tel3").removeClass('col-md-6');
      $(".tel3").addClass('col-md-5');
      $(".delete3").removeClass('d-none');
    });
    $(".add_btn4").click(function(){
      $("#addition4").clone().appendTo("#add4").find("input").val("");
      $(".tel4").removeClass('col-12');
      $(".tel4").addClass('col-11');
      $(".delete4").removeClass('d-none');
    });
    $(".add_btn5").click(function(){
      $("#addition5").clone().appendTo("#add5").find("input").val("");
      $(".tel5").removeClass('col-12');
      $(".tel5").addClass('col-11');
      $(".delete5").removeClass('d-none');
    });
    $(".add_btn6").click(function(){
      $("#addition6").clone().appendTo("#add6").find("input").val("");
      $(".tel6").removeClass('col-12');
      $(".tel6").addClass('col-11');
      $(".delete6").removeClass('d-none');
    });
    $(".add_btn7").click(function(){
      $("#addition7").clone().appendTo("#add7").find("input").val("");
      $(".tel7").removeClass('col-12');
      $(".tel7").addClass('col-11');
      $(".delete7").removeClass('d-none');
    });
    $(".add_btn8").click(function(){
      $("#addition8").clone().appendTo("#add8").find("input").val("");
      $(".tel8").removeClass('col-12');
      $(".tel8").addClass('col-11');
      $(".delete8").removeClass('d-none');
    });
  });
