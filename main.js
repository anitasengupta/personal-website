// footnotes
  // variables

    // specialization main content
    const specializationNonLinkedContent1 = document.getElementById('specialization-non-linked-content-1');
    const specializationNonLinkedContent2 = document.getElementById('specialization-non-linked-content-2');
    const specializationNonLinkedContent3 = document.getElementById('specialization-non-linked-content-3');
    const specializationNonLinkedContent4 = document.getElementById('specialization-non-linked-content-4');
    const uxDesignMainContent = document.getElementById('ux-design');
    const brandCreationMainContent = document.getElementById('brand-creation');
    const printGraphicDesignMainContent = document.getElementById('print-graphic-design');
    const digitalGraphicDesignMainContent = document.getElementById('digital-graphic-design');

    // specialization footnotes
    const uxDesignFootnote = document.getElementById('ux-design-footnote');
    const brandCreationFootnote = document.getElementById('brand-creation-footnote');
    const printGraphicDesignFootnote = document.getElementById('print-graphic-design-footnote');
    const digitalGraphicDesignFootnote = document.getElementById('digital-graphic-design-footnote');

    // work main content
    const workNonLinkedContent1 = document.getElementById('work-non-linked-content-1');
    const workNonLinkedContent2 = document.getElementById('work-non-linked-content-2');
    const workNonLinkedContent3 = document.getElementById('work-non-linked-content-3');
    const auxolarMainContent = document.getElementById('auxolar');
    const joySpaceMainContent = document.getElementById('joy-space');
    const anavaProjectsMainContent = document.getElementById('anava-projects');

    // work footnotes
    const auxolarFootnote = document.getElementById('auxolar-footnote');
    const joySpaceFootnote = document.getElementById('joy-space-footnote');
    const anavaProjectsFootnote = document.getElementById('anava-projects-footnote');

  // functions
    
    // open ux footnote
    function showUxDesignFootnote() {
      // hide any already visible footnotes
      brandCreationFootnote.style.transition = 'opacity .2s ease-out 0s';
      brandCreationFootnote.classList.remove('active-footnote');
      printGraphicDesignFootnote.style.transition = 'opacity .2s ease-out 0s';
      printGraphicDesignFootnote.classList.remove('active-footnote');
      digitalGraphicDesignFootnote.style.transition = 'opacity .2s ease-out 0s';
      digitalGraphicDesignFootnote.classList.remove('active-footnote');

      // show relevant footnote
      uxDesignFootnote.classList.add('active-footnote');

      // give main content link active styles
      uxDesignMainContent.classList.add('active-footnote-link')

      // give other main content inactive styles
      specializationNonLinkedContent1.classList.add('inactive-main-content');
      specializationNonLinkedContent2.classList.add('inactive-main-content');
      specializationNonLinkedContent3.classList.add('inactive-main-content');
      specializationNonLinkedContent4.classList.add('inactive-main-content');
      brandCreationMainContent.classList.add('inactive-main-content');
      printGraphicDesignMainContent.classList.add('inactive-main-content');
      digitalGraphicDesignMainContent.classList.add('inactive-main-content');
    }

    // open brand creation footnote
    function showBrandCreationFootnote() {
      // hide any already visible footnotes
      uxDesignFootnote.style.transition = 'opacity .2s ease-out 0s';
      uxDesignFootnote.classList.remove('active-footnote');
      printGraphicDesignFootnote.style.transition = 'opacity .2s ease-out 0s';
      printGraphicDesignFootnote.classList.remove('active-footnote');
      digitalGraphicDesignFootnote.style.transition = 'opacity .2s ease-out 0s';
      digitalGraphicDesignFootnote.classList.remove('active-footnote');

      // show relevant footnote
      brandCreationFootnote.classList.add('active-footnote');

      // give main content link active styles
      brandCreationMainContent.classList.add('active-footnote-link')

      // give other main content inactive styles
      specializationNonLinkedContent1.classList.add('inactive-main-content');
      specializationNonLinkedContent2.classList.add('inactive-main-content');
      specializationNonLinkedContent3.classList.add('inactive-main-content');
      specializationNonLinkedContent4.classList.add('inactive-main-content');
      uxDesignMainContent.classList.add('inactive-main-content');
      printGraphicDesignMainContent.classList.add('inactive-main-content');
      digitalGraphicDesignMainContent.classList.add('inactive-main-content');
    }

    // open print graphic design footnote
    function showPrintGraphicDesignFootnote() {
      // hide any already visible footnotes
      uxDesignFootnote.style.transition = 'opacity .2s ease-out 0s';
      uxDesignFootnote.classList.remove('active-footnote');
      brandCreationFootnote.style.transition = 'opacity .2s ease-out 0s';
      brandCreationFootnote.classList.remove('active-footnote');
      digitalGraphicDesignFootnote.style.transition = 'opacity .2s ease-out 0s';
      digitalGraphicDesignFootnote.classList.remove('active-footnote');

      // show relevant footnote
      printGraphicDesignFootnote.classList.add('active-footnote');

      // give main content link active styles
      printGraphicDesignMainContent.classList.add('active-footnote-link')

      // give other main content inactive styles
      specializationNonLinkedContent1.classList.add('inactive-main-content');
      specializationNonLinkedContent2.classList.add('inactive-main-content');
      specializationNonLinkedContent3.classList.add('inactive-main-content');
      specializationNonLinkedContent4.classList.add('inactive-main-content');
      uxDesignMainContent.classList.add('inactive-main-content');
      brandCreationMainContent.classList.add('inactive-main-content');
      digitalGraphicDesignMainContent.classList.add('inactive-main-content');
    }

    // open digital graphic design footnote
    function showDigitalGraphicDesignFootnote() {
      // hide any already visible footnotes
      uxDesignFootnote.style.transition = 'opacity .2s ease-out 0s';
      uxDesignFootnote.classList.remove('active-footnote');
      brandCreationFootnote.style.transition = 'opacity .2s ease-out 0s';
      brandCreationFootnote.classList.remove('active-footnote');
      printGraphicDesignFootnote.style.transition = 'opacity .2s ease-out 0s';
      printGraphicDesignFootnote.classList.remove('active-footnote');

      // show relevant footnote
      digitalGraphicDesignFootnote.classList.add('active-footnote');

      // give main content link active styles
      digitalGraphicDesignMainContent.classList.add('active-footnote-link')

      // give other main content inactive styles
      specializationNonLinkedContent1.classList.add('inactive-main-content');
      specializationNonLinkedContent2.classList.add('inactive-main-content');
      specializationNonLinkedContent3.classList.add('inactive-main-content');
      specializationNonLinkedContent4.classList.add('inactive-main-content');
      uxDesignMainContent.classList.add('inactive-main-content');
      brandCreationMainContent.classList.add('inactive-main-content');
      printGraphicDesignMainContent.classList.add('inactive-main-content');
    }

    // open auxolar footnote
    function showAuxolarFootnote() {
      // hide any already visible footnotes
      joySpaceFootnote.style.transition = 'opacity .2s ease-out 0s';
      joySpaceFootnote.classList.remove('active-image-footnote');
      anavaProjectsFootnote.style.transition = 'opacity .2s ease-out 0s';
      anavaProjectsFootnote.classList.remove('active-image-footnote');

      // show relevant footnote
      auxolarFootnote.classList.add('active-footnote');

      // give main content link active styles
      auxolarMainContent.classList.add('active-footnote-link')

      // give other main content inactive styles
      workNonLinkedContent1.classList.add('inactive-main-content');
      workNonLinkedContent2.classList.add('inactive-main-content');
      workNonLinkedContent3.classList.add('inactive-main-content');
      joySpaceMainContent.classList.add('inactive-main-content');
      anavaProjectsMainContent.classList.add('inactive-main-content');
    }

    // open joy space footnote
    function showJoySpaceFootnote() {
      // hide any already visible footnotes
      auxolarFootnote.style.transition = 'opacity .2s ease-out 0s';
      auxolarFootnote.classList.remove('active-footnote');
      anavaProjectsFootnote.style.transition = 'opacity .4s ease-out 0s';
      anavaProjectsFootnote.classList.remove('active-image-footnote');

      // show relevant footnote
      joySpaceFootnote.style.transition = 'opacity .4s ease-in 0s';
      joySpaceFootnote.classList.add('active-image-footnote');

      // give main content link active styles
      joySpaceMainContent.classList.add('active-footnote-link')

      // give other main content inactive styles
      workNonLinkedContent1.classList.add('inactive-main-content');
      workNonLinkedContent2.classList.add('inactive-main-content');
      workNonLinkedContent3.classList.add('inactive-main-content');
      auxolarMainContent.classList.add('inactive-main-content');
      anavaProjectsMainContent.classList.add('inactive-main-content');
    }

    // open anava projects footnote
    function showAnavaProjectsFootnote() {
      // hide any already visible footnotes
      auxolarFootnote.style.transition = 'opacity .2s ease-out 0s';
      auxolarFootnote.classList.remove('active-footnote');
      joySpaceFootnote.style.transition = 'opacity .4s ease-out 0s';
      joySpaceFootnote.classList.remove('active-image-footnote');

      // show relevant footnote
      anavaProjectsFootnote.style.transition = 'opacity .4s ease-in 0s';
      anavaProjectsFootnote.classList.add('active-image-footnote');


      // give main content link active styles
      anavaProjectsMainContent.classList.add('active-footnote-link')

      // give other main content inactive styles
      workNonLinkedContent1.classList.add('inactive-main-content');
      workNonLinkedContent2.classList.add('inactive-main-content');
      workNonLinkedContent3.classList.add('inactive-main-content');
      auxolarMainContent.classList.add('inactive-main-content');
      joySpaceMainContent.classList.add('inactive-main-content');
    }

      // show intro hover styles on carousel
      function showIntroCaption() {
        // hide already visible captions
        specializationCaption.classList.remove('active-carousel-caption');
        backgroundCaption.classList.remove('active-carousel-caption');
        interestsCaption.classList.remove('active-carousel-caption');
        workCaption.classList.remove('active-carousel-caption');
        contactCaption.classList.remove('active-carousel-caption');

        // show relevant caption
        introCaption.classList.add('active-carousel-caption');

        // show circle hover styles
        introCircle.classList.add('hover-carousel-circle');
      }

      // hide intro hover styles on carousel
      function hideIntroCaption() {
        introCaption.classList.remove('active-carousel-caption');

        // remove circle hover styles
        introCircle.classList.remove('hover-carousel-circle');
      }

    // close all footnotes
    function hideFootnotes() {
      if(event.target != uxDesignFootnote && event.target.parentNode != uxDesignFootnote 
        && event.target != brandCreationFootnote && event.target.parentNode != brandCreationFootnote 
        && event.target != printGraphicDesignFootnote && event.target.parentNode != printGraphicDesignFootnote 
        && event.target != digitalGraphicDesignFootnote && event.target.parentNode != digitalGraphicDesignFootnote
        && event.target != auxolarFootnote && event.target.parentNode != auxolarFootnote && event.target.parentNode.parentNode != auxolarFootnote
        && event.target != joySpaceFootnote && event.target.parentNode.parentNode != joySpaceFootnote
        && event.target != anavaProjectsFootnote && event.target.parentNode != anavaProjectsFootnote && event.target.parentNode.parentNode != anavaProjectsFootnote) {
        // hide footnotes
        uxDesignFootnote.style.transition = 'opacity .2s ease-out 0s';
        uxDesignFootnote.classList.remove('active-footnote');
        brandCreationFootnote.style.transition = 'opacity .2s ease-out 0s';
        brandCreationFootnote.classList.remove('active-footnote');
        printGraphicDesignFootnote.style.transition = 'opacity .2s ease-out 0s';
        printGraphicDesignFootnote.classList.remove('active-footnote');
        digitalGraphicDesignFootnote.style.transition = 'opacity .2s ease-out 0s';
        digitalGraphicDesignFootnote.classList.remove('active-footnote');
        auxolarFootnote.style.transition = 'opacity .2s ease-out 0s';
        auxolarFootnote.classList.remove('active-footnote');
        joySpaceFootnote.style.transition = 'opacity .4s ease-out 0s';
        // joySpaceFootnote.style.opacity = '0';
        joySpaceFootnote.classList.remove('active-image-footnote');
        anavaProjectsFootnote.style.transition = 'opacity .4s ease-out 0s';
        anavaProjectsFootnote.classList.remove('active-image-footnote');

        // remove active styling on main content links
        uxDesignMainContent.style.transition = 'opacity .2s ease-out 0s';
        uxDesignMainContent.classList.remove('active-footnote-link');
        brandCreationMainContent.style.transition = 'opacity .2s ease-out 0s';
        brandCreationMainContent.classList.remove('active-footnote-link');
        printGraphicDesignMainContent.style.transition = 'opacity .2s ease-out 0s';
        printGraphicDesignMainContent.classList.remove('active-footnote-link');
        digitalGraphicDesignMainContent.style.transition = 'opacity .2s ease-out 0s';
        digitalGraphicDesignMainContent.classList.remove('active-footnote-link');
        auxolarMainContent.style.transition = 'opacity .2s ease-out 0s';
        auxolarMainContent.classList.remove('active-footnote-link');
        joySpaceMainContent.style.transition = 'opacity .2s ease-out 0s';
        joySpaceMainContent.classList.remove('active-footnote-link');
        anavaProjectsMainContent.style.transition = 'opacity .2s ease-out 0s';
        anavaProjectsMainContent.classList.remove('active-footnote-link');

        // remove inactive styling on all main content
        specializationNonLinkedContent1.style.transition = 'opacity .2s ease-in 0s';
        specializationNonLinkedContent1.classList.remove('inactive-main-content');
        specializationNonLinkedContent2.style.transition = 'opacity .2s ease-in 0s';
        specializationNonLinkedContent2.classList.remove('inactive-main-content');
        specializationNonLinkedContent3.style.transition = 'opacity .2s ease-in 0s';
        specializationNonLinkedContent3.classList.remove('inactive-main-content');
        specializationNonLinkedContent4.style.transition = 'opacity .2s ease-in 0s';
        specializationNonLinkedContent4.classList.remove('inactive-main-content');
        uxDesignMainContent.style.transition = 'opacity .2s ease-in 0s';
        uxDesignMainContent.classList.remove('inactive-main-content');
        brandCreationMainContent.style.transition = 'opacity .2s ease-in 0s';
        brandCreationMainContent.classList.remove('inactive-main-content');
        printGraphicDesignMainContent.style.transition = 'opacity .2s ease-in 0s';
        printGraphicDesignMainContent.classList.remove('inactive-main-content');
        digitalGraphicDesignMainContent.style.transition = 'opacity .2s ease-in 0s';
        digitalGraphicDesignMainContent.classList.remove('inactive-main-content');
        workNonLinkedContent1.style.transition = 'opacity .2s ease-in 0s';
        workNonLinkedContent1.classList.remove('inactive-main-content');
        workNonLinkedContent2.style.transition = 'opacity .2s ease-in 0s';
        workNonLinkedContent2.classList.remove('inactive-main-content');
        workNonLinkedContent3.style.transition = 'opacity .2s ease-in 0s';
        workNonLinkedContent3.classList.remove('inactive-main-content');
        auxolarMainContent.style.transition = 'opacity .2s ease-in 0s';
        auxolarMainContent.classList.remove('inactive-main-content');
        joySpaceMainContent.style.transition = 'opacity .2s ease-in 0s';
        joySpaceMainContent.classList.remove('inactive-main-content');
        anavaProjectsMainContent.style.transition = 'opacity .2s ease-in 0s';
        anavaProjectsMainContent.classList.remove('inactive-main-content');
      }
    }

  // event listeners

    // open ux footnote
    uxDesignMainContent.onclick = showUxDesignFootnote;

    // open brand creation footnote
    brandCreationMainContent.onclick = showBrandCreationFootnote;

    // open print graphic design footnote
    printGraphicDesignMainContent.onclick = showPrintGraphicDesignFootnote;

    // open digital graphic design footnote
    digitalGraphicDesignMainContent.onclick = showDigitalGraphicDesignFootnote;

    //open auxolar footnote
    auxolarMainContent.onclick = showAuxolarFootnote;

    //open joy space footnote
    joySpaceMainContent.onclick = showJoySpaceFootnote;

    //open anava projects footnote
    anavaProjectsMainContent.onclick = showAnavaProjectsFootnote;

    // close all specialization footnotes
    window.onmouseup = hideFootnotes;


// carousel
const indicators = document.querySelectorAll('.control li');

// changing styles on scroll
function isInViewport(elem) {
  const distance = elem.getBoundingClientRect();
  return (
    distance.top >= distance.height * -1 &&
    distance.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function resetActiveCarouselStyles(i) {
  const captions = document.querySelectorAll('.caption p');
  document.querySelector('.control .selected').classList.remove('selected');
  indicators[i].classList.add('selected');
  document.querySelector('.selected-caption').classList.remove('selected-caption');
  captions[i].classList.add('selected-caption');
}

function reflectScrollPosition() {
  const sections = document.querySelectorAll('section');
  sections.forEach((section, i) => { 
  if (isInViewport(sections[i])) {
      resetActiveCarouselStyles(i);
    }
  });
}

window.onscroll = reflectScrollPosition;

// carousel indicator behavior on click and hover
function scrollSectionIntoView(i) {
  const sections = document.querySelectorAll('section');
  sections[i].scrollIntoView();
}

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    scrollSectionIntoView(i);
   });
  indicator.addEventListener('mouseover', () => {
    resetActiveCarouselStyles(i);
   });
  indicator.addEventListener('mouseout', reflectScrollPosition);
});




