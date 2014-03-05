logo = $(".logo")
intro_text = $('.intro .text')

logo.delay(300).slideDown('slow', () ->
  intro_text.delay(600).slideDown('slow')
)

panObject = (selector, introBodyPosition = 0, introBodyPositionMax = 64, introBodyUpdate = 100) ->
  introBody = $(selector)

  introBodyPosition = Math.floor(Math.random() * (introBodyPositionMax - introBodyPosition + 1)) + introBodyPosition;

  animateBackground = () ->
    introBodyPosition--
    if introBodyPosition % introBodyPositionMax == 0
      introBodyPosition = 0

    introBody.css 'background-position-x', introBodyPosition

  setInterval animateBackground, introBodyUpdate
  animateBackground()

panObject '.backgrounds .ground, .clouds .body, .backgrounds .forest-ground'
panObject '.backgrounds .mountains, .backgrounds .hills, .backgrounds .forest', 0, 1024, 450
