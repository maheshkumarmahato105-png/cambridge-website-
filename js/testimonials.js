/**
 * Testimonials & Partner Universities Slider Module
 */

export function initTestimonials() {
    // University partner logos infinite track marquee setup
    const uniTrack = document.querySelector('.uni-logos-slider-track');
    if (uniTrack) {
        uniTrack.innerHTML += uniTrack.innerHTML + uniTrack.innerHTML;
    }

    // Student testimonials slider
    const slides = document.querySelectorAll('.story-slide-card');
    const dots = document.querySelectorAll('.story-dot');
    
    if (slides.length === 0) return;

    const showTestimonialSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) slide.classList.add('active');
        });
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === index) dot.classList.add('active');
        });
    };

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'), 10);
            showTestimonialSlide(index);
        });
    });

    // Auto-advance testimonials every 8 seconds
    let currentTestimonial = 0;
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % slides.length;
        showTestimonialSlide(currentTestimonial);
    }, 8000);
}
