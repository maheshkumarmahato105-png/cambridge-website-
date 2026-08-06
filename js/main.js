/**
 * Cambridge Institute Website — Main Application Entry Point
 */

import { initNavigation } from './navigation.js';
import { initDrawer } from './drawer.js';
import { initTestimonials } from './testimonials.js';
import { initForms } from './forms.js';
import { initUtilities, branchData, destinationsData, sopBankData } from './utilities.js';
import { initAnimations } from './animations.js';

// Attach datasets to window object for page-specific scope access
window.branchData = branchData;
window.destinationsData = destinationsData;
window.sopBankData = sopBankData;

function initApp() {
    initNavigation();
    initDrawer();
    initTestimonials();
    initForms();
    initUtilities();
    initAnimations();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
