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
    if (!Array.prototype.slice.call(specializationFootnotes).includes(event.target.parentNode) &&
    	!Array.prototype.slice.call(workFootnotes).includes(event.target.parentNode) &&
    	!Array.prototype.slice.call(workFootnotes).includes(event.target.parentNode.parentNode)) {
      clearSpecializationFootnotes();
      clearWorkFootnotes();
      resetMainContentStyles();
    }
  }

window.onmouseup = closeFootnotes;

