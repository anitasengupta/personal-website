/* // footnotes
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
    // close all specialization footnotes
    window.onmouseup = hideFootnotes; */


// carousel
const indicators = document.querySelectorAll('.control li');
const sections = document.querySelectorAll('section');
const captions = document.querySelectorAll('.caption p');

  // changing styles on scroll
  function isInViewport(elem) {
    const distance = elem.getBoundingClientRect();
    return (
      distance.top >= distance.height * -1 &&
      distance.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  function resetActiveCarouselStyles(i) {
    document.querySelector('.control .selected').classList.remove('selected');
    indicators[i].classList.add('selected');
    document.querySelector('.selected-caption').classList.remove('selected-caption');
    captions[i].classList.add('selected-caption');
  }

  function reflectScrollPosition() {
    sections.forEach((section, i) => { 
    if (isInViewport(sections[i])) {
        resetActiveCarouselStyles(i);
      }
    });
  }

  window.onscroll = reflectScrollPosition;

  // carousel indicator behavior on click and hover
  function scrollSectionIntoView(i) {
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

// footnotes
  // specialization footnotes
  const specializationMainContent = document.querySelectorAll('#specialization-main-content span');
  const specializationFootnoteLinks = document.querySelectorAll('#specialization-main-content .footnote-link');
  const specializationFootnotes = document.querySelectorAll('.specialization-footnote');

  function styleActiveFootnoteLinkSpecialization() {
    specializationMainContent.forEach((span) => {
      if (span != event.target) {
        span.classList.remove('active-footnote-link');
        span.classList.add('inactive-main-content');
      } else {
        span.classList.remove('inactive-main-content');
        span.classList.add('active-footnote-link');
      }
    });
  }

  function clearSpecializationFootnotes() {
    specializationFootnotes.forEach((footnote) => {
      if (footnote.classList.contains('active-specialization-footnote')) {
      	footnote.style.transition = 'opacity .2s ease-out 0s';
        footnote.classList.remove('active-specialization-footnote');
      }
    });
  }

  function showClickedSpecializationFootnote(i) {
    clearSpecializationFootnotes();
    specializationFootnotes[i].classList.add('active-specialization-footnote');
    styleActiveFootnoteLinkSpecialization();
  }

  specializationFootnoteLinks.forEach((link, i) => {
      link.addEventListener('click', () => {
        showClickedSpecializationFootnote(i);
      });
    });

  // work footnotes
  const workMainContent = document.querySelectorAll('#work-main-content span');
  const workFootnoteLinks = document.querySelectorAll('#work-main-content .footnote-link');
  const workFootnotes = document.querySelectorAll('.work-footnote');

  function styleActiveFootnoteLinkWork() {
    workMainContent.forEach((span) => {
      if (span != event.target) {
        span.classList.remove('active-footnote-link');
        span.classList.add('inactive-main-content');
      } else {
        span.classList.remove('inactive-main-content');
        span.classList.add('active-footnote-link');
      }
    });
  }

  function clearWorkFootnotes() {
    workFootnotes.forEach((footnote) => {
      if (footnote.classList.contains('active-work-footnote')) {
      	footnote.style.transition = 'opacity .2s ease-out 0s'; // not working
        footnote.classList.remove('active-work-footnote');
      }
    });
  }

  function showClickedWorkFootnote(i) {
    clearWorkFootnotes();
    workFootnotes[i].classList.add('active-work-footnote');
    styleActiveFootnoteLinkWork();
  }

  workFootnoteLinks.forEach((link, i) => {
      link.addEventListener('click', () => {
        showClickedWorkFootnote(i);
      });
    });

  // clear footnotes
  function resetMainContentStyles() {
    specializationMainContent.forEach((span) => {
      span.style.transition = 'opacity .2s ease-out 0s';
      span.classList.remove('active-footnote-link');
      span.style.transition = 'opacity .2s ease-in 0s';
      span.classList.remove('inactive-main-content');
    });
    workMainContent.forEach((span) => {
      span.style.transition = 'opacity .2s ease-out 0s';
      span.classList.remove('active-footnote-link');
      span.style.transition = 'opacity .2s ease-in 0s';
      span.classList.remove('inactive-main-content');
    });
  }

  function closeFootnotes() {
    if (event.target.parentNode != specializationFootnotes[0] &&
        event.target.parentNode != workFootnotes[0] &&
        event.target.parentNode.parentNode != workFootnotes[0]) {
      clearSpecializationFootnotes();
      clearWorkFootnotes();
      resetMainContentStyles();
    }
  }

window.onmouseup = closeFootnotes;

