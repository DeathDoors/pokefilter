window.addEventListener('scroll', function() {
    const filterContainer = document.querySelector('.filter-container');
    const sticky = filterContainer.offsetTop;

    if (window.pageYOffset > sticky) {
        filterContainer.classList.add('fixed');
    } else {
        filterContainer.classList.remove('fixed');
    }
});

let selectedFilters = new Set();

function filterImages(category) {
    if (category === 'all') {
        selectedFilters.clear();
        selectedFilters.add('all');
    } else {
        if (selectedFilters.has('all')) {
            selectedFilters.delete('all');
        }
        if (selectedFilters.has(category)) {
            selectedFilters.delete(category);
        } else {
            selectedFilters.add(category);
        }
    }

    console.log('Selected filters:', selectedFilters);
    updateGallery();
}

function updateGallery() {
    const images = document.getElementsByClassName('filter');

    for (let img of images) {
        const imgClasses = img.className.split(' ');
        const matches = [...selectedFilters].every(filter => imgClasses.includes(filter));

        if (selectedFilters.has('all') || matches) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    }
}
