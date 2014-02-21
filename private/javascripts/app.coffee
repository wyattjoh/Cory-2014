$('.intro-text').slideUp(1)
$(".logo").slideUp(1).delay(300).slideDown('slow', () ->
  $('.intro-text').delay(400).slideDown('slow')
)

introBody = $('.intro-body')
introBodyPosition = 0
introBodyPositionMax = 64
introBodyUpdate = 200

animateBackground = () ->
  introBodyPosition--
  if introBodyPosition % introBodyPositionMax == 0
    introBodyPosition = 0

  introBody.css 'background-position-x', introBodyPosition

setInterval animateBackground, introBodyUpdate
animateBackground()
