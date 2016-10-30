$(document).ready(function(){

  $('.mainNav').on('click','li', function(){
    console.log('active');
    $(this).addClass('active').siblings().removeClass('active');
  })



});