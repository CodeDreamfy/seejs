$(function(){
  $nav = $('nav');
  
  /* nav hover */
  $nav.find('.logo a').addClass('one')
  setTimeout(function(){
    $nav.find('.logo a').removeClass('one');
  },1000);
  
})