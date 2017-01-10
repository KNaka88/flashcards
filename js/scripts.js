$(function(){

//  $(".panel-title").click(function(){
//    $(".initially-showing").toggle();
//    $(".initially-hidden").toggle();
//  });

  $(".panel-body").click(function(){
    $(this).children().toggle();
  });


});
