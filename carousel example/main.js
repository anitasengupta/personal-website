const indicators = document.querySelectorAll('.control li');
const captions = document.querySelectorAll('.caption p');
const sections = document.querySelectorAll('section');

// changing styles on scroll
const isInViewport = function (elem) {
	const distance = elem.getBoundingClientRect();
	return (
		distance.top >= distance.height * -1 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight)
	);
};

window.addEventListener('scroll', event => {
  sections.forEach((section, i) => { 
	if (isInViewport(sections[i])) {
		document.querySelector('.control .selected').classList.remove('selected');
	    indicators[i].classList.add('selected');
	    document.querySelector('.selected-caption').classList.remove('selected-caption');
	    captions[i].classList.add('selected-caption');
    } else {
    }
  });
});

// indicator behavior on hover and click
indicators.forEach((indicator, i) => {
	indicator.addEventListener('click', () => {
	    sections[i].scrollIntoView();
	 });
	indicator.addEventListener('mouseover', () => {
	    document.querySelector('.control .selected').classList.remove('selected');
	    indicators[i].classList.add('selected');
	    document.querySelector('.selected-caption').classList.remove('selected-caption');
	    captions[i].classList.add('selected-caption');
	 });
	indicator.addEventListener('mouseout', () => {
	    sections.forEach((section, i) => { 
			if (isInViewport(sections[i])) {
				document.querySelector('.control .selected').classList.remove('selected');
	    		indicators[i].classList.add('selected');
	   		 document.querySelector('.selected-caption').classList.remove('selected-caption');
	   		 captions[i].classList.add('selected-caption');
    		} else {
    		}
  		});
	 });
});