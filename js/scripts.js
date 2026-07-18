/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        const scrollToTopBtn = document.body.querySelector('#scrollToTopBtn');
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
            if (scrollToTopBtn) scrollToTopBtn.classList.remove('visible');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
            if (scrollToTopBtn && window.scrollY > 300) {
                scrollToTopBtn.classList.add('visible');
            } else if (scrollToTopBtn) {
                scrollToTopBtn.classList.remove('visible');
            }
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Preloader removal
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('loaded');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500); // Wait for transition to finish
    }
});

// Initialize Swiper for Equipment Carousel
window.addEventListener('DOMContentLoaded', () => {
    const swiperElement = document.querySelector('.equipment-swiper');
    if (swiperElement) {
        const swiper = new Swiper('.equipment-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                }
            }
        });
    }
});

// Publications Show More Logic
window.addEventListener('DOMContentLoaded', () => {
    const pubList = document.getElementById('publicationList');
    const loadMoreBtn = document.getElementById('loadMorePubsBtn');
    
    if (pubList && loadMoreBtn) {
        const pubItems = pubList.querySelectorAll('.publication-item');
        
        // Hide button if 4 or fewer items
        if (pubItems.length <= 4) {
            loadMoreBtn.style.display = 'none';
        }
        
        loadMoreBtn.addEventListener('click', () => {
            pubList.classList.toggle('show-all');
            
            if (pubList.classList.contains('show-all')) {
                loadMoreBtn.textContent = 'Show Less';
            } else {
                loadMoreBtn.textContent = 'Show More Publications';
                // Optional: Scroll back to the top of the publications list
                const publicationsSection = document.getElementById('publications');
                if (publicationsSection) {
                    publicationsSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
});