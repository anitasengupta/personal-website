$(document).ready(() => {

  // create controller
  const controller = new ScrollMagic.Controller({globalSceneOptions: {duration: '20%'}});

  // create animations
  // dim intro
  const fadeOutIntro = gsap.to('#intro', {opacity: 0.3});
  const fadeOutIntroCap = gsap.to('#intro-cap', {opacity: 0});
  const fadeOutIntroInd = gsap.to('#intro-ind', {opacity: 0.3});

  // highlight specialization
  const fadeInSp = gsap.to('#specialization', {display: "inline", opacity: 1});
  const fadeInSpCap = gsap.to('#sp-cap', {opacity: 1});
  const fadeInSpInd = gsap.to('#sp-ind', {opacity: 1});

  // dim specialization
  const fadeOutSp = gsap.to('#specialization', {opacity: 0.3});
  const fadeOutSpCap = gsap.to('#sp-cap', {opacity: 0});
  const fadeOutSpInd = gsap.to('#sp-ind', {opacity: 0.3});

  // highlight work
  const fadeInWork = gsap.to('#work', {display: "inline", opacity: 1});
  const fadeInWorkCap = gsap.to('#work-cap', {opacity: 1});
  const fadeInWorkInd = gsap.to('#work-ind', {opacity: 1});

  // dim work
  const fadeOutWork = gsap.to('#work', {opacity: 0.3});
  const fadeOutWorkCap = gsap.to('#work-cap', {opacity: 0});
  const fadeOutWorkInd = gsap.to('#work-ind', {opacity: 0.3});

  // hightlight contact
  const fadeInContact = gsap.to('#contact', {display: "inline", opacity: 1});
  const fadeInContactCap = gsap.to('#contact-cap', {opacity: 1});
  const fadeInContactInd = gsap.to('#contact-ind', {opacity: 1});

  // create scenes
  // dim intro
  const scene1a = new ScrollMagic.Scene({
    triggerElement: '#one',
  })
  .setTween(fadeOutIntro)
  .addTo(controller);

  const scene1b = new ScrollMagic.Scene({
    triggerElement: '#one',
  })
  .setTween(fadeOutIntroCap)
  .addTo(controller);

  const scene1c = new ScrollMagic.Scene({
    triggerElement: '#one',
  })
  .setTween(fadeOutIntroInd)
  .addTo(controller);

  // highlight specialization
  const scene2a = new ScrollMagic.Scene({
    triggerElement: '#two',
  })
  .setTween(fadeInSp)
  .addTo(controller);

  const scene2b = new ScrollMagic.Scene({
    triggerElement: '#two',
  })
  .setTween(fadeInSpCap)
  .addTo(controller);

  const scene2c = new ScrollMagic.Scene({
    triggerElement: '#two',
  })
  .setTween(fadeInSpInd)
  .addTo(controller);

  // dim specialization
  const scene3a = new ScrollMagic.Scene({
    triggerElement: '#three',
  })
  .setTween(fadeOutSp)
  .addTo(controller);

  const scene3b = new ScrollMagic.Scene({
    triggerElement: '#three',
  })
  .setTween(fadeOutSpCap)
  .addTo(controller);

  const scene3c = new ScrollMagic.Scene({
    triggerElement: '#three',
  })
  .setTween(fadeOutSpInd)
  .addTo(controller);

  // hightlight work
  const scene4a = new ScrollMagic.Scene({
    triggerElement: '#four',
  })
  .setTween(fadeInWork)
  .addTo(controller);

  const scene4b = new ScrollMagic.Scene({
    triggerElement: '#four',
  })
  .setTween(fadeInWorkCap)
  .addTo(controller);

  const scene4c = new ScrollMagic.Scene({
    triggerElement: '#four',
  })
  .setTween(fadeInWorkInd)
  .addTo(controller);

  // dim work
  const scene5a = new ScrollMagic.Scene({
    triggerElement: '#five',
  })
  .setTween(fadeOutWork)
  .addTo(controller);

  const scene5b = new ScrollMagic.Scene({
    triggerElement: '#five',
  })
  .setTween(fadeOutWorkCap)
  .addTo(controller);

  const scene5c = new ScrollMagic.Scene({
    triggerElement: '#five',
  })
  .setTween(fadeOutWorkInd)
  .addTo(controller);

  // hightlight contact
  const scene6a = new ScrollMagic.Scene({
    triggerElement: '#six',
  })
  .setTween(fadeInContact)
  .addTo(controller);

  const scene6b = new ScrollMagic.Scene({
    triggerElement: '#six',
  })
  .setTween(fadeInContactCap)
  .addTo(controller);

  const scene6c = new ScrollMagic.Scene({
    triggerElement: '#six',
  })
  .setTween(fadeInContactInd)
  .addTo(controller);
});
