const indicators = document.querySelectorAll('.control li');
const captions = document.querySelectorAll('.caption p');
const sections = document.querySelectorAll('section');
// const fromTop = window.scrollY;
// index = 0;

// reflect scroll position
// if sections[i] is in viewport & sections[i-1] is not:
// ... set index to i
// ... remove selected class from any indicator that has it
// ... add selected class to indicators[i]
// ... remove selected-caption class from any caption that has it
// ... add selected-caption class to captions[i]

//Active navigation on scroll
var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= distance.height * -1 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight)
	);
};

var specialization = document.querySelector('#specialization');

window.addEventListener('scroll', function (event) {
	if (isInViewport(specialization)) {
		console.log('In viewport!');
	} else {
    console.log('Nope...');
  }
}, false);


// hover

// click
indicators.forEach((indicator, i) => {
	indicator.addEventListener('click', () => {
		document.querySelector('.control .selected').classList.remove('selected');
	    indicator.classList.add('selected');
	    // index = i;
	    document.querySelector('.selected-caption').classList.remove('selected-caption');
	    captions[i].classList.add('selected-caption');
	    sections[i].scrollIntoView();
	 });
});