	const indicators = document.querySelectorAll('.control li');
	const captions = document.querySelectorAll('.caption p');
	const sections = document.querySelectorAll('section');
	// index = 0;

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

	// hover
	// reflect scroll position