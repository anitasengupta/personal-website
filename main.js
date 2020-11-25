// variables

  // grid
  // const specializationGrid = document.getElementById('specialization');

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

  // other
  const name = document.getElementById('name');

// functions
function showUxDesignFootnote() {
  uxDesignFootnote.classList.add('active-footnote');
  uxDesignMainContent.classList.add('active-footnote-link')
  specializationNonLinkedContent1.classList.add('inactive-main-content');
  specializationNonLinkedContent2.classList.add('inactive-main-content');
  specializationNonLinkedContent3.classList.add('inactive-main-content');
  specializationNonLinkedContent4.classList.add('inactive-main-content');
  brandCreationMainContent.classList.add('inactive-main-content');
  printGraphicDesignMainContent.classList.add('inactive-main-content');
  digitalGraphicDesignMainContent.classList.add('inactive-main-content');
}

function hideUxDesignFootnote() {
  uxDesignFootnote.style.transition = 'opacity .2s ease-out 0s';
  uxDesignFootnote.classList.remove('active-footnote');
  uxDesignMainContent.style.transition = 'opacity .2s ease-out 0s';
  uxDesignMainContent.classList.remove('active-footnote-link');
  specializationNonLinkedContent1.style.transition = 'opacity .2s ease-in 0s';
  specializationNonLinkedContent1.classList.remove('inactive-main-content');
  specializationNonLinkedContent2.style.transition = 'opacity .2s ease-in 0s';
  specializationNonLinkedContent2.classList.remove('inactive-main-content');
  specializationNonLinkedContent3.style.transition = 'opacity .2s ease-in 0s';
  specializationNonLinkedContent3.classList.remove('inactive-main-content');
  specializationNonLinkedContent4.style.transition = 'opacity .2s ease-in 0s';
  specializationNonLinkedContent4.classList.remove('inactive-main-content');
  brandCreationMainContent.style.transition = 'opacity .2s ease-in 0s';
  brandCreationMainContent.classList.remove('inactive-main-content');
  printGraphicDesignMainContent.style.transition = 'opacity .2s ease-in 0s';
  printGraphicDesignMainContent.classList.remove('inactive-main-content');
  digitalGraphicDesignMainContent.style.transition = 'opacity .2s ease-in 0s';
  digitalGraphicDesignMainContent.classList.remove('inactive-main-content');
}

//event listeners
uxDesignMainContent.onclick = showUxDesignFootnote;
// specializationGrid.onclick = hideUxDesignFootnote;
// name.onclick = hideUxDesignFootnote;

//scratch
window.addEventListener('mouseup', function(event){
  if(event.target != /*name*/ uxDesignFootnote && event.target.parentNode != uxDesignFootnote) {
    uxDesignFootnote.style.transition = 'opacity .2s ease-out 0s';
    uxDesignFootnote.classList.remove('active-footnote');
    uxDesignMainContent.style.transition = 'opacity .2s ease-out 0s';
    uxDesignMainContent.classList.remove('active-footnote-link');
    specializationNonLinkedContent1.style.transition = 'opacity .2s ease-in 0s';
    specializationNonLinkedContent1.classList.remove('inactive-main-content');
    specializationNonLinkedContent2.style.transition = 'opacity .2s ease-in 0s';
    specializationNonLinkedContent2.classList.remove('inactive-main-content');
    specializationNonLinkedContent3.style.transition = 'opacity .2s ease-in 0s';
    specializationNonLinkedContent3.classList.remove('inactive-main-content');
    specializationNonLinkedContent4.style.transition = 'opacity .2s ease-in 0s';
    specializationNonLinkedContent4.classList.remove('inactive-main-content');
    brandCreationMainContent.style.transition = 'opacity .2s ease-in 0s';
    brandCreationMainContent.classList.remove('inactive-main-content');
    printGraphicDesignMainContent.style.transition = 'opacity .2s ease-in 0s';
    printGraphicDesignMainContent.classList.remove('inactive-main-content');
    digitalGraphicDesignMainContent.style.transition = 'opacity .2s ease-in 0s';
    digitalGraphicDesignMainContent.classList.remove('inactive-main-content');
  }
})
