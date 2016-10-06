$(document).ready(function(){

  $('.mainNav').on('click','li', function(){
    console.log('active');
    $(this).addClass('active').siblings().removeClass('active');
  })

  // $('.user-logout').on('click', function(){
  //   $('.modal-dialog').hide();
  // })

  // $('#modal-login').on('click', function (){
  //   $('.modal-dialog').show();
  // })


});