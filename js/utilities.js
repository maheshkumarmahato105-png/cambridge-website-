/* ==========================================
   STUDENT UTILITIES & BRANCH SELECTION MODULE
   ========================================== */

export const branchData = {
    putalisadak: {
        name: "Putalisadak Head Office",
        desc: "Way to Bagbazar (Opposite Nepal Investment Mega Bank), Kathmandu, Nepal",
        phone: "+977-1-4433221, 4433222",
        email: "info@cambridge.edu.np"
    },
    lalitpur: {
        name: "Lagankhel Branch (Lalitpur)",
        desc: "Ground Floor, Lalitpur Mall, Lagankhel, Lalitpur, Nepal",
        phone: "+977-1-5544332",
        email: "lalitpur@cambridge.edu.np"
    },
    pokhara: {
        name: "Chipledhunga Branch (Pokhara)",
        desc: "Second Floor, Pokhara Trade Mall, Chipledhunga, Pokhara, Nepal",
        phone: "+977-61-532211",
        email: "pokhara@cambridge.edu.np"
    },
    chitwan: {
        name: "Chaubiskoti Branch (Chitwan)",
        desc: "Opposite Bharatpur Hospital, Chaubiskoti, Bharatpur, Chitwan, Nepal",
        phone: "+977-56-523311",
        email: "chitwan@cambridge.edu.np"
    }
};

export const destinationsData = {
    australia: {
        title: "Study in Australia",
        flag: "🇦🇺",
        overview: "Australia offers world-class education, vibrant student cities, and post-study work opportunities. It is currently one of the top destinations for Nepalese students due to its flexible academic pathways.",
        intakes: "February, July, November",
        fees: "AUD 22,000 - 45,000 / Year",
        living: "AUD 29,710 / Year",
        english: "IELTS: 6.0 (no band < 5.5) | PTE: 50+",
        reqs: [
            "Academic transcripts (GPA 2.8+ preferred for 10+2/Bachelor)",
            "Proof of financial capacity (showing 1 year of tuition & living costs)",
            "Genuine Student (GS) statement outlining career goals",
            "Overseas Student Health Cover (OSHC)"
        ]
    },
    usa: {
        title: "Study in USA",
        flag: "🇺🇸",
        overview: "The United States is home to the world's most prestigious universities, offering unmatched academic flexibility, research facilities, and Optional Practical Training (OPT) work opportunities.",
        intakes: "January (Spring), August (Fall)",
        fees: "USD 18,000 - 40,000 / Year",
        living: "USD 12,000 - 18,000 / Year",
        english: "IELTS: 6.5 | PTE: 54+ | TOEFL: 80+",
        reqs: [
            "Form I-20 financial support documentation from a sponsor",
            "Statement of Purpose (SOP) & Letter of Recommendation",
            "Standardized test scores (SAT/ACT or GRE/GMAT) for scholarships",
            "F-1 visa interview appointment at US Embassy Kathmandu"
        ]
    },
    uk: {
        title: "Study in United Kingdom",
        flag: "🇬🇧",
        overview: "The UK is famous for fast-track degree courses (3 years Bachelor, 1 year Masters), historic universities, and a 2-year Graduate Route visa for international students.",
        intakes: "January, September",
        fees: "GBP 13,000 - 26,000 / Year",
        living: "GBP 12,000 - 15,000 / Year",
        english: "IELTS: 6.0 (no band < 5.5) | PTE: 51+",
        reqs: [
            "Academic certificate with no major study gaps",
            "TB test certificate from IOM Kathmandu",
            "Credibility interview cleared by the university",
            "Bank balance certificate held for 28 consecutive days"
        ]
    },
    canada: {
        title: "Study in Canada",
        flag: "🇨🇦",
        overview: "Canada offers high-quality public colleges and universities, a safe environment, and a direct path to permanent residency via the Post-Graduation Work Permit (PGWP).",
        intakes: "January, May, September",
        fees: "CAD 16,000 - 32,000 / Year",
        living: "CAD 20,635 / Year",
        english: "IELTS: 6.0 (no band < 6.0) | PTE: 60+",
        reqs: [
            "Guaranteed Investment Certificate (GIC) from a Canadian Bank",
            "Payment of 1 year of tuition fees in advance",
            "Detailed Study Plan explaining course fit",
            "Biometrics submission at VFS Global Kathmandu"
        ]
    },
    newzealand: {
        title: "Study in New Zealand",
        flag: "🇳🇿",
        overview: "New Zealand provides scenic living, hands-on practical education, and post-study work visa rights in sectors with critical skill shortages.",
        intakes: "February, July",
        fees: "NZD 24,000 - 38,000 / Year",
        living: "NZD 20,000 / Year",
        english: "IELTS: 6.0 | PTE: 50+",
        reqs: [
            "Funds showing tuition fees plus NZD 20,000 living costs",
            "PCC (Police Clearance Certificate) from Nepal Police",
            "Chest X-ray medical examination report",
            "SOP explaining career value of the qualification"
        ]
    },
    germany: {
        title: "Study in Germany",
        flag: "🇩🇪",
        overview: "Germany is a global engineering powerhouse with tuition-free public universities. Students can study in English while enjoying low costs via blocked accounts.",
        intakes: "April (Summer), October (Winter)",
        fees: "EUR 0 (Public) | EUR 10,000+ (Private)",
        living: "EUR 11,208 / Year",
        english: "IELTS: 6.5 (for English taught) | German B2 (for German taught)",
        reqs: [
            "APS Certificate issued by APS India/Germany",
            "Opening a Blocked Account (Sperrkonto) with EUR 11,208",
            "Academic transcripts with good CGPA",
            "Motivation letter detailing career plans"
        ]
    },
    france: {
        title: "Study in France",
        flag: "🇫🇷",
        overview: "France is a leading destination for culinary arts, fashion, business, and luxury management. Many courses are taught in English with government housing subsidies.",
        intakes: "January, September",
        fees: "EUR 3,000 - 15,000 / Year",
        living: "EUR 8,000 / Year",
        english: "IELTS: 6.0 | PTE: 50+",
        reqs: [
            "Campus France Interview registration",
            "Academic records and CV in English/French",
            "Proof of accommodation for the first 3 months",
            "Financial proof showing EUR 615 per month"
        ]
    },
    japan: {
        title: "Study in Japan",
        flag: "🇯🇵",
        overview: "Japan combines ancient traditions with cutting-edge technology. Students can work part-time up to 28 hours a week while studying language or specialized vocational courses.",
        intakes: "April, July, October, January",
        fees: "JPY 600,000 - 900,000 / Year",
        living: "JPY 1,000,000 / Year",
        english: "Japanese NAT-TEST / JLPT N5 (Minimum requirement)",
        reqs: [
            "Certificate of Eligibility (COE) document from Japanese Immigration",
            "150+ hours of Japanese language study proof",
            "Sponsor relationship documents and bank statement",
            "Academic transcripts showing school completion"
        ]
    },
    korea: {
        title: "Study in South Korea",
        flag: "🇰🇷",
        overview: "South Korea is a major tech and entertainment hub, offering affordable tuition, high-tech campuses, and job search options after degree completion.",
        intakes: "March, September",
        fees: "KRW 4,000,000 - 8,000,000 / Semester",
        living: "KRW 800,000 / Month",
        english: "TOPIK Level 3 (Korean) or IELTS 5.5 (English)",
        reqs: [
            "Certificate of Admission from a recognized Korean University",
            "Financial sponsor bank certificate showing USD 20,000",
            "Apostilled or Consular-verified academic documents",
            "Medical certificate showing negative Tuberculosis test result"
        ]
    }
};

export const sopBankData = {
    'it_australia': `Subject: Statement of Purpose — Genuine Student Requirement (GS)

Dear Admissions Committee / Home Affairs Delegate,

I am writing this Statement of Purpose to formally express my intent to pursue the Bachelor of Information Technology program at [Target University Name], Australia.

1. Academic Background:
I completed my Higher Secondary Education (Science Stream) under the National Examination Board (NEB) of Nepal with a focus on Physics, Mathematics, and Computer Science.

2. Rationale for Choosing Australia:
Australia is internationally renowned for its TEQSA-regulated academic frameworks and high standard of practical education. The course structure offered by [Target University Name] integrates modern software engineering and cloud computing modules that align with my academic goals.

3. Future Career Prospects:
Upon successful completion of my degree, I plan to return to Nepal to pursue professional opportunities as a Software Engineer in leading technology firms in Kathmandu.`,

    'it_canada': `Study Plan for Canadian Visa Officer:

Program of Study: Post-Graduate Diploma in Applied Software Development
Institution: [Target College Name], Canada

1. Educational Background & Rationale:
Having earned my Bachelor's degree in Computer Science in Nepal, I aim to specialize in scalable cloud architecture and software quality assurance.

2. Why Canada & Selected Institution:
Canada's education system emphasizes hands-on industry application. [Target College Name] provides industry-aligned lab projects and co-op opportunities that meet global standards.

3. Ties to Home Country:
My long-term objective is to return to Nepal and lead software development initiatives in our expanding domestic IT sector.`,

    'it_usa': `Statement of Purpose — Master of Science in Cybersecurity (USA)

Respected Admissions Committee,

In today's interconnected digital landscape, securing critical cloud infrastructure is essential. Pursuing a Master of Science in Cybersecurity in the United States offers access to cutting-edge research facilities and hands-on simulation environments.

Following my studies and OPT practical training, I intend to return to Nepal to offer cybersecurity advisory services for regional financial institutions and tech enterprises.`,

    'business_australia': `Statement of Purpose — Master of Business Administration (MBA)

Dear Delegate,

I wish to apply for the MBA program at [Business School Name], Australia. This course provides comprehensive modules in strategic leadership, corporate finance, and global market analytics. Studying in Australia will provide international exposure, which I plan to leverage upon returning to Nepal to manage software and business operations.`,

    'business_canada': `Study Plan — Global Business Management

Dear Visa Officer,

My decision to study Global Business Management in Canada stems from the interactive case-study methodologies employed by Canadian institutions. This program will equip me with analytical leadership tools, enabling me to manage international supply chains upon my return to Nepal.`,

    'business_usa': `Statement of Purpose — MBA in Technology Management (USA)

My career objective is to bridge technical development and strategic business management. A US MBA specializing in Technology Management provides the strategic framework needed to drive innovation. Upon completing my academic journey, I aim to return to Nepal to consult for emerging technology startups.`,

    'nursing_australia': `Statement of Purpose — Bachelor of Nursing (Graduate Entry)

Dear Admissions Team,

Nursing education in Australia is recognized worldwide for its evidence-based clinical practices and high standards under AHPRA and NMBA frameworks. Mastering these clinical methodologies will equip me to make meaningful contributions to tertiary healthcare facilities in Nepal.`,

    'nursing_canada': `Study Plan — Practical Nursing Diploma

Dear Visa Officer,

I am applying for the Practical Nursing program in Canada to gain specialized skills in patient-centered care and community health services. The training acquired will enable me to participate in healthcare enhancement initiatives upon returning to Nepal.`,

    'nursing_usa': `Statement of Purpose — Bachelor of Science in Nursing (BSN)

My goal is to qualify as a compassionate registered nurse through comprehensive US clinical placements and simulation labs. The skills developed will lay a firm foundation for advanced critical care work in hospital wards upon my return home.`
};

export function initUtilities() {
    /* --- INTERACTIVE BRANCH SELECTION --- */
    const branchTabs = document.querySelectorAll('.branch-tab');
    const branchPins = document.querySelectorAll('.branch-pin-pulse');
    const displayTitle = document.getElementById('active-branch-name');
    const displayDesc = document.getElementById('active-branch-desc');
    const displayContacts = document.getElementById('active-branch-contacts');

    const updateBranchDetailsCard = (branchKey) => {
        const data = branchData[branchKey];
        if (!data || !displayTitle || !displayDesc || !displayContacts) return;

        displayTitle.textContent = data.name;
        displayDesc.textContent = data.desc;
        displayContacts.innerHTML = `<i class="fa-solid fa-phone"></i> ${data.phone} &nbsp;&nbsp;|&nbsp;&nbsp; <i class="fa-solid fa-envelope"></i> ${data.email}`;

        branchTabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.getAttribute('data-branch') === branchKey) {
                tab.classList.add('active');
            }
        });

        branchPins.forEach(pin => {
            pin.classList.remove('active');
            if (pin.id === `pin-${branchKey}`) {
                pin.classList.add('active');
            }
        });
    };

    branchTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const branchKey = tab.getAttribute('data-branch');
            updateBranchDetailsCard(branchKey);
        });
    });

    branchPins.forEach(pin => {
        pin.addEventListener('click', () => {
            const branchKey = pin.id.replace('pin-', '');
            updateBranchDetailsCard(branchKey);
        });
    });

    /* --- STUDENT UTILITIES MODAL (TABBED CONTROLLER) --- */
    const utilTabs = document.querySelectorAll('.util-tab-btn');
    const utilContents = document.querySelectorAll('.util-tab-content');

    const switchUtilityTab = (tabName) => {
        utilTabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.getAttribute('data-util-tab') === tabName) {
                tab.classList.add('active');
            }
        });
        utilContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === `utab-${tabName}`) {
                content.classList.add('active');
            }
        });
    };

    utilTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-util-tab');
            switchUtilityTab(targetTab);
        });
    });

    document.querySelectorAll('.link-f-utility').forEach(fLink => {
        fLink.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = fLink.getAttribute('data-tab');
            switchUtilityTab(targetTab);
            if (window.showModal) window.showModal('utilities-modal');
        });
    });

    /* 1. Currency Conversion logic */
    const inputNpr = document.getElementById('curr-npr-amount');
    const selectTarget = document.getElementById('curr-target-select');
    const resultValue = document.getElementById('curr-result-value');

    const runCurrencyConversion = () => {
        if (!inputNpr || !selectTarget || !resultValue) return;
        const nprVal = parseFloat(inputNpr.value) || 0;
        const selectedOpt = selectTarget.options[selectTarget.selectedIndex];
        const rate = parseFloat(selectedOpt.getAttribute('data-rate')) || 0;
        const code = selectTarget.value;
        const converted = (nprVal * rate).toFixed(2);
        
        const formatted = parseFloat(converted).toLocaleString('en-US', { minimumFractionDigits: 2 });
        resultValue.textContent = `${code} ${formatted}`;
    };

    inputNpr?.addEventListener('input', runCurrencyConversion);
    selectTarget?.addEventListener('change', runCurrencyConversion);

    /* 2. Date Conversion logic (BS-AD converter) */
    const btnConvertDate = document.getElementById('btn-convert-date');
    const bsYearIn = document.getElementById('date-bs-year');
    const bsMonthIn = document.getElementById('date-bs-month');
    const bsDayIn = document.getElementById('date-bs-day');
    const dateResult = document.getElementById('date-result-value');

    const englishMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    btnConvertDate?.addEventListener('click', () => {
        if (!bsYearIn || !bsMonthIn || !bsDayIn || !dateResult) return;
        const year = parseInt(bsYearIn.value);
        const monthIndex = parseInt(bsMonthIn.value) - 1;
        const day = parseInt(bsDayIn.value);

        let adYear = year - 57;
        let adMonth = monthIndex + 4;
        let adDay = day + 13;

        if (adDay > 30) {
            adDay -= 30;
            adMonth += 1;
        }
        if (adMonth > 11) {
            adMonth -= 12;
            adYear += 1;
        }

        const formattedDay = adDay.toString().padStart(2, '0');
        dateResult.textContent = `${englishMonths[adMonth]} ${formattedDay}, ${adYear}`;
    });

    /* 3. SOP Library logic */
    const btnLoadSop = document.getElementById('btn-load-sop');
    const streamSelect = document.getElementById('sop-stream-select');
    const countrySelect = document.getElementById('sop-country-select');
    const previewTitle = document.getElementById('sop-preview-title');
    const previewText = document.getElementById('sop-preview-text');

    btnLoadSop?.addEventListener('click', () => {
        if (!streamSelect || !countrySelect || !previewTitle || !previewText) return;
        const stream = streamSelect.value;
        const country = countrySelect.value;
        const key = `${stream}_${country}`;
        const text = sopBankData[key] || "Sample content is being updated. Check back shortly.";

        const streamText = streamSelect.options[streamSelect.selectedIndex].text;
        const countryText = countrySelect.options[countrySelect.selectedIndex].text;

        previewTitle.textContent = `Sample SOP: ${streamText} for ${countryText}`;
        previewText.textContent = text;
    });

    /* 4. Score Equivalence calculation logic */
    const ieltsInput = document.getElementById('score-ielts');
    const pteResult = document.getElementById('score-pte-result');
    const toeflResult = document.getElementById('score-toefl-result');

    const updateScoreEquivalents = () => {
        if (!ieltsInput || !pteResult || !toeflResult) return;
        const band = parseFloat(ieltsInput.value) || 0;

        let pteVal = "Under 30";
        let toeflVal = "Under 30";

        if (band >= 8.5) {
            pteVal = "86 - 90";
            toeflVal = "115 - 120";
        } else if (band >= 8.0) {
            pteVal = "80 - 85";
            toeflVal = "110 - 114";
        } else if (band >= 7.5) {
            pteVal = "73 - 79";
            toeflVal = "102 - 109";
        } else if (band >= 7.0) {
            pteVal = "65 - 72";
            toeflVal = "94 - 101";
        } else if (band >= 6.5) {
            pteVal = "58 - 64";
            toeflVal = "79 - 93";
        } else if (band >= 6.0) {
            pteVal = "50 - 57";
            toeflVal = "60 - 78";
        } else if (band >= 5.5) {
            pteVal = "42 - 49";
            toeflVal = "46 - 59";
        } else if (band >= 5.0) {
            pteVal = "36 - 41";
            toeflVal = "35 - 45";
        } else if (band >= 4.5) {
            pteVal = "30 - 35";
            toeflVal = "32 - 34";
        }

        pteResult.textContent = pteVal;
        toeflResult.textContent = toeflVal;
    };

    ieltsInput?.addEventListener('input', updateScoreEquivalents);

    // Book Session Button in Destination Modal
    document.getElementById('dest-book-session-btn')?.addEventListener('click', () => {
        if (window.hideModal) window.hideModal('dest-details-modal');
    });
}
