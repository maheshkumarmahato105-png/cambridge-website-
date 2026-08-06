/**
 * Scroll Reveal & Page Entrance Animations Module
 */

export function initAnimations() {
    setTimeout(() => {
        document.body.classList.add('page-loaded');
    }, 40);

    const animateTargets = document.querySelectorAll(
        '.utility-top-bar, .main-navigation-header, ' +
        '.hero-left-column > *, .hero-right-column > *, .hero-main-slogan, .hero-description-text, .orbiting-graphic-wrapper, ' +
        '.section-title-accented, .section-paragraph-text, .centered-text > *, .section-header-block > *, ' +
        '.destinations-grid > *, .services-grid-container > *, .services-mega-list > *, .dest-grid-card, ' +
        '.uni-logo-card, .country-nav-card, .prep-course-card, .prep-schedule-card, ' +
        '.branch-tab, .branch-address-detail-card, .sop-preview-box, .story-slide-card, .inquiry-form-wrapper, ' +
        '.application-form-container > *, .app-input-group, .send-app-submit-btn, .service-card, .feature-card, ' +
        '.testimonial-card, .stat-number-box, .stat-item, .news-item-card, ' +
        '.footer-col, .footer-top-container > *, .footer-grid-4cols > *, .footer-bottom-bar > *, ' +
        '.dest-hero-container > *, .dest-stats-grid > *, .dest-main-text > *, .dest-sidebar > *, section > .section-container > *'
    );

    const parentMap = new Map();
    const isMobileViewport = window.innerWidth <= 768;

    animateTargets.forEach((el) => {
        if (el.closest('.side-drawer-content') || el.closest('.custom-modal-backdrop')) {
            return;
        }
        el.classList.add('reveal-element');
        const parent = el.parentElement || document.body;
        if (!parentMap.has(parent)) {
            parentMap.set(parent, []);
        }
        parentMap.get(parent).push(el);
    });

    // Compute staggered transition delays
    parentMap.forEach((children) => {
        children.forEach((child, index) => {
            const delayStep = isMobileViewport ? 60 : 100;
            const maxDelay = isMobileViewport ? 420 : 700;
            const delayMs = Math.min(index * delayStep, maxDelay);
            child.style.transitionDelay = `${delayMs}ms`;
        });
    });

    const universalObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !entry.target.classList.contains('revealed')) {
                entry.target.classList.add('revealed');
                universalObserver.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -30px 0px',
        threshold: 0.05
    });

    requestAnimationFrame(() => {
        animateTargets.forEach((el) => {
            if (!el.closest('.side-drawer-content') && !el.closest('.custom-modal-backdrop')) {
                universalObserver.observe(el);
            }
        });
    });
}
