document.addEventListener('DOMContentLoaded', function() {
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

    window.toggleFilter = function(category) {
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

    window.showGallery = function() {
        // Clear any filters and reset selectedFilters
        selectedFilters.clear();
        selectedFilters.add('all');

        // Reset the visibility of all images
        const images = document.getElementsByClassName('filter');
        for (let img of images) {
            img.style.display = 'block';
        }

        document.getElementById('image-gallery').style.display = 'flex';
        document.getElementById('random-image-container').style.display = 'none';
        document.querySelector('.filter-container').style.display = 'block';
<<<<<<< Updated upstream
=======
        document.querySelector('.button-container').style.display = 'none';
>>>>>>> Stashed changes
    }

    window.showRandomImage = function() {
        const images = document.querySelectorAll('.image-gallery img');
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImageElement = images[randomIndex];
        const randomImageSrc = randomImageElement.src;
        const randomImageTitle = randomImageElement.getAttribute('title');

        if (randomImageElement && randomImageElement.nodeType === 1 && randomImageElement.nodeName === "IMG") {
            document.getElementById('random-image').src = randomImageSrc;
            document.getElementById('random-image-title').textContent = randomImageTitle;
            document.getElementById('random-image-container').style.display = 'block';
            document.getElementById('image-gallery').style.display = 'none';
            document.querySelector('.filter-container').style.display = 'none';
<<<<<<< Updated upstream
=======
            document.getElementById('filter-toggle-button').style.display = 'none';
            document.querySelector('.button-container').style.display = 'none';
>>>>>>> Stashed changes
        } else {
            console.error('Selected element is not a valid image element.');
        }
    }
});
