$('.intro-text').slideUp(1)
$(".logo").slideUp(1).delay(300).slideDown('slow', () ->
  $('.intro-text').delay(400).slideDown('slow')
)