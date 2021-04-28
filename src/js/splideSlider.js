import Splide from '@splidejs/splide';

new Splide('.splide', {
    'type': "loop",
    'autoplay': true,
    perPage: 4,
	height : '8rem',
    breakpoints: {
        640: {
            perPage: 2,
        },
    }
}).mount();