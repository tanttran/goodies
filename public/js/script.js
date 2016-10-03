$(document).ready(function(){


  // $('.itemName').on('click','li', function(){
  //   console.log('active');
  //   $(this).addClass('active').siblings().removeClass('active');
  // });

  $('.mainNav').on('click','li', function(){
    console.log('active');
    $(this).addClass('active').siblings().removeClass('active');
  })


});