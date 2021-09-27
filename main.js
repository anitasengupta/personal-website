$(document).ready(() => {

  // create controller
  const controller = new ScrollMagic.Controller({globalSceneOptions: {duration: '20%'}});

  // create animations
  const fadeOutIntro = gsap.to('#intro', {opacity: 0.3});
  const fadeInSp = gsap.to('#specialization', {display: "inline", opacity: 1});
  const fadeOutSp = gsap.to('#specialization', {opacity: 0.3});
  const fadeInWork = gsap.to('#work', {display: "inline", opacity: 1});
  const fadeOutWork = gsap.to('#work', {opacity: 0.3});
  const fadeInContact = gsap.to('#contact', {display: "inline", opacity: 1});

  // create scenes
  const scene1 = new ScrollMagic.Scene({
    triggerElement: '#one',
  })
  .setTween(fadeOutIntro)
  .addTo(controller);

  const scene2 = new ScrollMagic.Scene({
    triggerElement: '#two',
  })
  .setTween(fadeInSp)
  .addTo(controller);

  const scene3 = new ScrollMagic.Scene({
    triggerElement: '#three',
  })
  .setTween(fadeOutSp)
  .addTo(controller);

  const scene4 = new ScrollMagic.Scene({
    triggerElement: '#four',
  })
  .setTween(fadeInWork)
  .addTo(controller);

  const scene5 = new ScrollMagic.Scene({
    triggerElement: '#five',
  })
  .setTween(fadeOutWork)
  .addTo(controller);

  const scene6 = new ScrollMagic.Scene({
    triggerElement: '#six',
  })
  .setTween(fadeInContact)
  .addTo(controller);
});
