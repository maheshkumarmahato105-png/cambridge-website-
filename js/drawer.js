/**
 * Mobile Navigation Drawer Module
 */

export function initDrawer() {
    const menuToggle = document.querySelector('.nav-hamburger-toggle');
    const drawerOverlay = document.getElementById('side-navigation-drawer');
    const closeDrawerBtn = document.getElementById('btn-close-drawer');
    const drawerSublinks = document.querySelectorAll('.drawer-sub-link, .drawer-cta-btn');
    const drawerSubmenuToggles = document.querySelectorAll('.drawer-submenu-toggle');

    function openDrawer() {
        if (drawerOverlay) drawerOverlay.classList.add('active');
        if (menuToggle) {
            menuToggle.classList.add('active');
            menuToggle.setAttribute('aria-expanded', 'true');
        }
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        if (drawerOverlay) drawerOverlay.classList.remove('active');
        if (menuToggle) {
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
        document.body.style.overflow = '';
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            if (drawerOverlay && drawerOverlay.classList.contains('active')) {
                closeDrawer();
            } else {
                openDrawer();
            }
        });
    }

    if (closeDrawerBtn) {
        closeDrawerBtn.addEventListener('click', closeDrawer);
    }

    if (drawerOverlay) {
        drawerOverlay.addEventListener('click', (e) => {
            if (e.target === drawerOverlay) {
                closeDrawer();
            }
        });
    }

    // Toggle submenus inside side drawer
    drawerSubmenuToggles.forEach(toggleBtn => {
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const parentLi = toggleBtn.closest('.drawer-has-submenu');
            if (parentLi) {
                parentLi.classList.toggle('open');
            }
        });
    });

    // Close side drawer on menu navigation
    const navLinksInDrawer = document.querySelectorAll('.drawer-menu-link');
    navLinksInDrawer.forEach(link => {
        link.addEventListener('click', () => {
            const parentLi = link.closest('.drawer-has-submenu');
            if (parentLi) {
                parentLi.classList.toggle('open');
            } else {
                closeDrawer();
            }
        });
    });

    drawerSublinks.forEach(sublink => {
        sublink.addEventListener('click', closeDrawer);
    });

    // Pressing Escape closes drawer
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawerOverlay && drawerOverlay.classList.contains('active')) {
            closeDrawer();
        }
    });
}
