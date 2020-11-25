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

  // other
  const name = document.getElementById('name');

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

  // close all footnotes
  function hideSpecializationFootnotes() {
    if(event.target != uxDesignFootnote && event.target.parentNode != uxDesignFootnote && event.target != brandCreationFootnote && event.target.parentNode != brandCreationFootnote && event.target != printGraphicDesignFootnote && event.target.parentNode != printGraphicDesignFootnote && event.target != digitalGraphicDesignFootnote && event.target.parentNode != digitalGraphicDesignFootnote) {
      // hide footnotes
      uxDesignFootnote.style.transition = 'opacity .2s ease-out 0s';
      uxDesignFootnote.classList.remove('active-footnote');
      brandCreationFootnote.style.transition = 'opacity .2s ease-out 0s';
      brandCreationFootnote.classList.remove('active-footnote');
      printGraphicDesignFootnote.style.transition = 'opacity .2s ease-out 0s';
      printGraphicDesignFootnote.classList.remove('active-footnote');
      digitalGraphicDesignFootnote.style.transition = 'opacity .2s ease-out 0s';
      digitalGraphicDesignFootnote.classList.remove('active-footnote');

      // remove active styling on main content links
      uxDesignMainContent.style.transition = 'opacity .2s ease-out 0s';
      uxDesignMainContent.classList.remove('active-footnote-link');
      brandCreationMainContent.style.transition = 'opacity .2s ease-out 0s';
      brandCreationMainContent.classList.remove('active-footnote-link');
      printGraphicDesignMainContent.style.transition = 'opacity .2s ease-out 0s';
      printGraphicDesignMainContent.classList.remove('active-footnote-link');
      digitalGraphicDesignMainContent.style.transition = 'opacity .2s ease-out 0s';
      digitalGraphicDesignMainContent.classList.remove('active-footnote-link');

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
    }
  }

//event listeners

  // open ux footnote
  uxDesignMainContent.onclick = showUxDesignFootnote;

  // open brand creation footnote
  brandCreationMainContent.onclick = showBrandCreationFootnote;

  // open print graphic design footnote
  printGraphicDesignMainContent.onclick = showPrintGraphicDesignFootnote;

  // open digital graphic design footnote
  digitalGraphicDesignMainContent.onclick = showDigitalGraphicDesignFootnote;

  // close all footnotes
  window.onmouseup = hideSpecializationFootnotes;

