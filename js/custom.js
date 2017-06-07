$(document).ready( function(){
  $('#nav-home').click(function(){
    $('html, body').animate(
      {scrollTop: $('#home').offset().top}
      , 1000
    )
  })
  $('#nav-career').click(function(){
    $('html, body').animate(
      {scrollTop: $('#career').offset().top}
      , 1000
    )
  })
  $('#nav-projects').click(function(){
    $('html, body').animate(
      {scrollTop: $('#projects').offset().top}
      , 1000
    )
  })
  $('#nav-resume').click(function(){
    $('html, body').animate(
      {scrollTop: $('#resume').offset().top}
      , 1000
    )
  })
  $('#nav-contact').click(function(){
    $('html, body').animate(
      {scrollTop: $('#contact').offset().top}
      , 1000
    )
  })
})