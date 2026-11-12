
// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');

        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.textContent = isOpen ? '✕' : '☰';
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.textContent = '☰';
        });
    });
}


// ==========================================
// PORTFOLIO CATEGORY FILTERS
// ==========================================

const filterButtons = document.querySelectorAll('.filter-btn');
const photoCards = document.querySelectorAll('.photo-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {

        // Remove active class from all buttons
        filterButtons.forEach(item => {
            item.classList.remove('active');
        });

        // Activate selected filter
        button.classList.add('active');

        const filter = button.dataset.filter;

        // Display matching photographs
        photoCards.forEach(card => {
            card.hidden =
                filter !== 'all' &&
                card.dataset.category !== filter;
        });
    });
});


// ==========================================
// IMAGE LIGHTBOX / IMAGE PREVIEW
// ==========================================

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeLightbox = document.getElementById('closeLightbox');

// Open selected photograph
photoCards.forEach(card => {
    card.addEventListener('click', () => {

        if (!lightbox || !lightboxImage) return;

        lightboxImage.src = card.dataset.full;

        lightboxImage.alt =
            card.querySelector('img')?.alt || 'Portfolio photograph';

        lightbox.classList.add('open');
    });
});

// Close image preview
function closeImage() {
    if (!lightbox || !lightboxImage) return;

    lightbox.classList.remove('open');
    lightboxImage.src = '';
}

if (closeLightbox) {
    closeLightbox.addEventListener('click', closeImage);
}

// Close when clicking outside the image
if (lightbox) {
    lightbox.addEventListener('click', event => {
        if (event.target === lightbox) {
            closeImage();
        }
    });
}

// Close using Escape key
document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        closeImage();
    }
});


// ==========================================
// AUTOMATIC COPYRIGHT YEAR
// ==========================================

const yearElement = document.getElementById('year');

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ==========================================
// VIDEO PLAYBACK INTERACTION
// ==========================================

const video = document.querySelector('.video-placeholder video');
const playHint = document.querySelector('.play-hint');

if (video && playHint) {

    // Hide play icon when video starts
    video.addEventListener('play', () => {
        playHint.style.display = 'none';
    });

    // Show play icon when video pauses
    video.addEventListener('pause', () => {
        playHint.style.display = 'grid';
    });
}
