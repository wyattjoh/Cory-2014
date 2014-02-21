$('.ground .text').slideUp(1)
$(".logo").slideUp(1).delay(300).slideDown('slow', () ->
  $('.ground .text').delay(400).slideDown('slow')
)

panObject = (selector, introBodyPosition = 0, introBodyPositionMax = 64, introBodyUpdate = 100) ->
  introBody = $(selector)

  animateBackground = () ->
    introBodyPosition--
    if introBodyPosition % introBodyPositionMax == 0
      introBodyPosition = 0

    introBody.css 'background-position-x', introBodyPosition

  setInterval animateBackground, introBodyUpdate
  animateBackground()

panObject '.backgrounds .ground, .clouds .body'
panObject '.backgrounds .mountains', 0, 1024, 450