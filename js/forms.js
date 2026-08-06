/**
 * Forms & Interactive Diagnostic Quiz Module
 */

export function initForms() {
    // Handle main inquiry application submission
    const inquiryForm = document.getElementById('inquiry-application-form');
    const successOverlay = document.getElementById('app-form-success-overlay');

    if (inquiryForm) {
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (!inquiryForm.checkValidity()) {
                inquiryForm.reportValidity();
                return;
            }

            inquiryForm.classList.add('hidden');
            if (successOverlay) successOverlay.classList.remove('hidden');
            
            // Reset overlay state after 7 seconds
            setTimeout(() => {
                inquiryForm.reset();
                inquiryForm.classList.remove('hidden');
                if (successOverlay) successOverlay.classList.add('hidden');
            }, 7000);
        });
    }

    // English language diagnostic quiz scoring
    const quizForm = document.getElementById('english-diagnostic-quiz-form');
    const quizOverlayResult = document.getElementById('quiz-results-overlay');
    const quizScoreTxt = document.getElementById('quiz-band-score-txt');
    const quizResetBtn = document.getElementById('btn-reset-quiz');

    if (quizForm) {
        quizForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let score = 0;
            const q1Val = quizForm.elements['q1']?.value;
            const q2Val = quizForm.elements['q2']?.value;
            const q3Val = quizForm.elements['q3']?.value;

            if (q1Val === 'B') score++;
            if (q2Val === 'A') score++;
            if (q3Val === 'B') score++;

            let bandSuggestion = "";
            if (score === 3) {
                bandSuggestion = "Estimated IELTS: 7.5+ | PTE: 73+ (Strong proficiency across grammar & vocabulary)";
            } else if (score === 2) {
                bandSuggestion = "Estimated IELTS: 6.5 | PTE: 58 (Solid foundation, targeted preparation recommended)";
            } else {
                bandSuggestion = "Estimated IELTS: 5.0 - 5.5 | PTE: 42 (Recommend joining our IELTS Foundation course)";
            }

            if (quizScoreTxt && quizOverlayResult) {
                quizScoreTxt.innerHTML = `${score} / 3 Correct.<br><strong>${bandSuggestion}</strong>`;
                quizOverlayResult.classList.remove('hidden');
            }
        });
    }

    if (quizResetBtn && quizForm && quizOverlayResult) {
        quizResetBtn.addEventListener('click', () => {
            quizForm.reset();
            quizOverlayResult.classList.add('hidden');
        });
    }

    // Newsletter subscription form
    const newsletterForm = document.getElementById('footer-newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('input[type="email"]');
            const email = input ? input.value : "";
            
            alert(`Thank you! ${email} has been subscribed to the Cambridge Institute newsletter.`);
            newsletterForm.reset();
        });
    }
}
