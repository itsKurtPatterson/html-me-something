TweenMax.to(".overlay h1", 2, {
    opacity: 0,
    x: -60,
    ease: Expo.easeInOut
})

TweenMax.to(".overlay", 2, {
    delay: 0,
    left: "-100%",
    ease: Expo.easeInOut
})

TweenMax.from(".logo", 1, {
    delay: 0.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".nav", 2, {
    delay: 0.0,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".nav ul li", 1, {
    delay: 0.2, 
    opacity: 0, 
    y: 20,
    ease: Expo.easeInOut
}, 0.2)

TweenMax.staggerFrom(".social-media ul li", 1, {
    delay: 0.2, 
    opacity: 0, 
    y: 20,
    ease: Expo.easeInOut
}, 0.2)

TweenMax.from(".side-strip", 2, {
    delay: 0.2,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
})

TweenMax.from(".row", 2, {
    delay: 0.2,
    opacity: 0,
    x: 40,
    ease: Expo.easeInOut
})

TweenMax.from(".row h6", 2, {
    delay: 0.8,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
})

TweenMax.from(".row p", 2, {
    delay: 1.0,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".header h4", 2, {
    delay: 1.0,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".header h1", 2, {
    delay: 1.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".header p", 2, {
    delay: 1.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".header button", 2, {
    delay: 1.6,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})
