anime({
    targets: '.bubble',
    translateY: function() {
        return anime.random(-1000, 200)
      },
      loop: true,
      direction:'alternate',
      duration:4000,
      easing: 'easeInOutSine',
      translateX: function() {
        return anime.random(-70, 70);
      },
    })

    anime({
      targets: '.bubble2',
      translateY: function() {
          return anime.random(-200, 1000)
        },
        loop: true,
        direction:'alternate',
        delay: 4200,
        duration:4000,
        easing: 'easeInOutSine',
        translateX: function() {
          return anime.random(-70, 70);
        },
      })

      anime({
        targets: '.bubble3',
        translateY: function() {
            return anime.random(-200, 1000)
          },
          loop: true,
          direction:'alternate',
          delay: 12000,
          duration:4000,
          easing: 'easeInOutSine',
          translateX: function() {
            return anime.random(-70, 70);
          },
        })

