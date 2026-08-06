/**
 * Header Navigation & Modal Dialog Management Module
 */

export function initNavigation() {
    // Desktop navigation menu dropdown toggles
    const navMenuItems = document.querySelectorAll('.nav-menu-item.has-mega-menu, .nav-menu-item.has-dropdown');
    
    navMenuItems.forEach(item => {
        const link = item.querySelector('.nav-menu-link');
        if (link) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                const isOpen = item.classList.contains('active');

                // Close open menu items
                navMenuItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });

                if (!isOpen) {
                    item.classList.add('active');
                }
            });
        }
    });

    // Close navigation dropdowns on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-menu-item')) {
            navMenuItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });

    // Close dropdown when selecting sub-links
    const dropdownSubLinks = document.querySelectorAll('.nav-mega-menu a, .nav-submenu a');
    dropdownSubLinks.forEach(subLink => {
        subLink.addEventListener('click', () => {
            navMenuItems.forEach(item => {
                item.classList.remove('active');
            });
        });
    });

    // Sticky header shadow transition on scroll
    const mainHeaderEl = document.querySelector('.main-navigation-header');
    if (mainHeaderEl) {
        const handleNavScroll = () => {
            if (window.scrollY > 20) {
                mainHeaderEl.classList.add('scrolled-navbar');
            } else {
                mainHeaderEl.classList.remove('scrolled-navbar');
            }
        };
        window.addEventListener('scroll', handleNavScroll, { passive: true });
        handleNavScroll();
    }

    // Modal dialog open/close helpers
    window.showModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
        }
    };

    window.hideModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
        }
    };

    // Close modal triggers
    document.getElementById('close-dest-modal')?.addEventListener('click', () => window.hideModal('dest-details-modal'));
    document.getElementById('close-utils-modal')?.addEventListener('click', () => window.hideModal('utilities-modal'));
    document.getElementById('close-news-modal')?.addEventListener('click', () => window.hideModal('news-offers-modal'));

    // Backdrop click dismiss for modals
    document.querySelectorAll('.custom-modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    });

    // Quick scroll to application section on action buttons
    document.querySelectorAll('.speak-with-us-btn').forEach(btn => {
        if (btn.tagName === 'BUTTON' || btn.getAttribute('href') === '#application-form-section') {
            btn.addEventListener('click', (e) => {
                const formSection = document.getElementById('application-form-section');
                if (formSection) {
                    e.preventDefault();
                    formSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    });

    // Utility news link modal trigger
    const utilityNewsLink = document.querySelector('a[href="#news-offers"]');
    if (utilityNewsLink) {
        utilityNewsLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.showModal('news-offers-modal');
        });
    }

    // World map interactive country navigation
    const openCountryDetail = (countryName) => {
        const cleanName = countryName.toLowerCase()
            .replace('united kingdom', 'uk')
            .replace('south korea', 'korea')
            .replace('new zealand', 'nz')
            .trim();
        window.location.href = `destination.html?country=${cleanName}`;
    };

    document.querySelectorAll('.map-dot-pulse').forEach(dot => {
        dot.style.cursor = 'pointer';
        dot.addEventListener('click', () => {
            const label = dot.nextElementSibling;
            if (label && label.tagName === 'text') {
                openCountryDetail(label.textContent.trim());
            }
        });
    });

    document.querySelectorAll('.map-label-txt').forEach(lbl => {
        lbl.style.cursor = 'pointer';
        lbl.addEventListener('click', () => {
            openCountryDetail(lbl.textContent.trim());
        });
    });
}
