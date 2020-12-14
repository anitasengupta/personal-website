function eventHandlerFunction() {
	// this block of code will run when click event happens
}

eventTarget.addEventListener('click', eventHandlerFunction;

// or

eventTarget.onclick = eventHandlerFunction;


// variables
let uxDesignMainContent = document.getElementById('ux-design');
let uxDesignFootnote = document.getElementById('ux-design-footnote');
let name = document.getElementById('name');

// functions
function showUxDesignFootnote() {
	uxDesignFootnote.style.display = 'block';
}

function hideUxDesignFootnote() {
	uxDesignFootnote.style.display = 'none';
}

//event listeners
uxDesignMainContent.onclick = showUxDesignFootnote;
name.onclick = hideUxDesignFootnote;







<div class="grid" id="specialization">
			<p class="main-content" id="specialization-main-content">I specialize in <span id="ux-design">user experience design,<sup>1</sup></span> <span id="brand-creation">brand creation,<sup>2</sup></span> & <span id="print-graphic-design">print<sup>3</sup></span> and <span id="digital-graphic-design">digital<sup>4</sup></span> graphic design.</p>
			<div class="specialization-overlay">
				<div class="list-style-footnote" id="ux-design-footnote">
					<div class="list-style-footnote-number">1</div>
					<div class="list-style-footnote-list">
						<p class="footnote-list-item">UX audits</p>
						<p class="footnote-list-item">User research</p>
						<p class="footnote-list-item">User flows</p>
						<p class="footnote-list-item">Wireframes</p>
						<p class="footnote-list-item">Prototypes</p>
						<p class="footnote-list-item">User testing</p>
						<p class="footnote-list-item">Design systems</p>
					</div>
				</div>
				<div class="list-style-footnote" id="brand-creation-footnote">
					<span class="list-style-footnote-number">2</span>
					<div class="list-style-footnote-list">
						<p class="footnote-list-item">Brand concepting</p>
						<p class="footnote-list-item">Logos</p>
						<p class="footnote-list-item">Typography</p>
						<p class="footnote-list-item">Color palettes</p>
						<p class="footnote-list-item">Visual guidelines</p>
					</div>
				</div>
				<div class="list-style-footnote" id="print-graphic-design-footnote">
					<span class="list-style-footnote-number">3</span>
					<div class="list-style-footnote-list">
						<p class="footnote-list-item">Print ads</p>
						<p class="footnote-list-item">Business collateral</p>
						<p class="footnote-list-item">Event materials</p>
						<p class="footnote-list-item">Long form documents</p>
					</div>
				</div>
				<div class="list-style-footnote" id="digital-graphic-design-footnote">
					<span class="list-style-footnote-number">4</span>
					<div class="list-style-footnote-list">
						<p class="footnote-list-item">Digital ads</p>
						<p class="footnote-list-item">Emails</p>
						<p class="footnote-list-item">Social content</p>
					</div>
				</div>
			</div>
		</div>




/* old js

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
specializationOverlay.onclick = clearUxDesignFootnote; */