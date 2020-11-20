//specialization elements
let specializationOverlay = document.getElementById('specialization-overlay')

// specialization main content
let uxDesignMainContent = document.getElementById('ux-design')
let brandCreationMainContent = document.getElementById('brand-creation')
let printGraphicDesignMainContent = document.getElementById('print-graphic-design')
let digitalGraphicDesignDesignMainContent = document.getElementById('digital-graphic-design')
let specializationSpan1 = document.getElementById('specialization-span-1')
let specializationSpan2 = document.getElementById('specialization-span-2')
let specializationSpan3 = document.getElementById('specialization-span-3')
let specializationSpan4 = document.getElementById('specialization-span-4')

//specialization footnotes
let uxDesignFootnote = document.getElementById('ux-design-footnote')

// add hover

function displayUxDesignFootnote(){
  uxDesignFootnote.style.display = 'block';
  specializationOverlay.style.display = 'block';
  //opacity of selected: 100%
  //opacity of rest of paragraph: 10%
  uxDesignMainContent.style.opacity= '1';
  specializationSpan1.style.opacity = '0.2';
  specializationSpan2.style.opacity = '0.2';
  specializationSpan3.style.opacity = '0.2';
  specializationSpan4.style.opacity = '0.2';
  brandCreationMainContent.style.opacity = '0.2';
  printGraphicDesignMainContent.style.opacity = '0.2';
  digitalGraphicDesignDesignMainContent.style.opacity = '0.2';
}

function clearUxDesignFootnote(){
  uxDesignFootnote.style.display = 'none';
  specializationOverlay.style.display = 'none';
  //opacity of selected: 85%
  //opacity of rest of paragraph: 85%
  specializationMainContent.style.opacity = '0.85';
}

uxDesignMainContent.onclick = displayUxDesignFootnote;
specializationOverlay.onclick = clearUxDesignFootnote;