// variables
let uxDesignMainContent = document.getElementById('ux-design');
let uxDesignFootnote = document.getElementById('ux-design-footnote');
let name = document.getElementById('name');

// functions
function showUxDesignFootnote() {
  uxDesignFootnote.style.display = 'block';
  uxDesignMainContent.classList.add('active-footnote-link');
}

function hideUxDesignFootnote() {
  uxDesignFootnote.style.display = 'none';
  uxDesignMainContent.classList.remove('active-footnote-link');
}

//event listeners
uxDesignMainContent.onclick = showUxDesignFootnote;
name.onclick = hideUxDesignFootnote;