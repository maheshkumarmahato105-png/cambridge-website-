const destinationData = {
    australia: {
        name: "Australia",
        flagCode: "au",
        flagEmoji: "🇦🇺",
        banner: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1200",
        tagline: "Study Down Under and open doors to global opportunities.",
        intro: "Australia offers world-class education, a relaxed lifestyle, and excellent post-study work opportunities. It is home to several top-ranking universities globally known for research and academic excellence.",
        intakes: "Feb / July / Nov",
        fees: "$20,000 - $45,000 / year",
        livingCost: "$21,041 - $25,000 / year",
        ielts: "Overall 6.0 - 6.5 (PTE: 50-58)",
        universities: [
            "University of Melbourne",
            "Australian National University",
            "University of Sydney",
            "University of New South Wales",
            "Macquarie University",
            "UTS Australia"
        ],
        requirements: [
            "Academic transcripts (GPA 2.8+ or equivalent)",
            "English Language Proficiency (IELTS 6.0+ or PTE 50+)",
            "Statement of Purpose (SOP)",
            "Proof of sufficient funds for tuition and living",
            "Overseas Student Health Cover (OSHC)"
        ]
    },
    usa: {
        name: "USA",
        flagCode: "us",
        flagEmoji: "🇺🇸",
        banner: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1200",
        tagline: "Empower your career in the world's hub of innovation and leadership.",
        intro: "The United States hosts the largest number of international students worldwide, boasting iconic Ivy League institutions, state-of-the-art campus facilities, and unparalleled optional practical training (OPT) placements.",
        intakes: "Jan / August (Fall/Spring)",
        fees: "$25,000 - $55,000 / year",
        livingCost: "$15,000 - $22,000 / year",
        ielts: "Overall 6.5 - 7.0 (PTE: 58-65)",
        universities: [
            "Harvard University",
            "Stanford University",
            "Massachusetts Institute of Technology",
            "Arizona State University",
            "University of California, Berkeley",
            "New York University"
        ],
        requirements: [
            "Academic transcripts (GPA 3.0+)",
            "IELTS 6.5+ or TOEFL 80+ (SAT/ACT optional)",
            "Letters of Recommendation (LOR) & Essays",
            "Financial Statement (I-20 issuance support documentation)",
            "F-1 Student Visa Interview clearance"
        ]
    },
    uk: {
        name: "United Kingdom",
        flagCode: "gb",
        flagEmoji: "🇬🇧",
        banner: "https://images.unsplash.com/photo-1513635269975-59663e0ca1ad?q=80&w=1200",
        tagline: "Obtain a prestigious British degree and experience rich cultural heritage.",
        intro: "The UK is renowned for historical academic traditions, shorter degree durations (3-year Bachelor's, 1-year Master's), and the standard 2-year Graduate Route visa for post-study work.",
        intakes: "Jan / Sept / May",
        fees: "£12,000 - £26,000 / year",
        livingCost: "£12,000 - £15,600 / year",
        ielts: "Overall 6.0 - 6.5 (PTE: 51-59)",
        universities: [
            "University of Oxford",
            "University of Cambridge",
            "Imperial College London",
            "Leeds Beckett University",
            "Coventry University",
            "University of Greenwich"
        ],
        requirements: [
            "Academic certificates showing 60% or higher",
            "IELTS 6.0+ overall with no band less than 5.5",
            "Clear Statement of Purpose (SOP)",
            "Tuberculosis (TB) Test certificate",
            "Financial proof covering remaining fees and 9 months living cost"
        ]
    },
    canada: {
        name: "Canada",
        flagCode: "ca",
        flagEmoji: "🇨🇦",
        banner: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=1200",
        tagline: "Build your future in a friendly, safe, and highly diverse destination.",
        intro: "Canada offers high educational standards, affordable tuition compared to other English-speaking nations, and path-breaking immigration opportunities via the Post-Graduation Work Permit (PGWP).",
        intakes: "Jan / Sept / May",
        fees: "CAD $18,000 - $35,000 / year",
        livingCost: "CAD $20,635 / year",
        ielts: "Overall 6.5 with no band less than 6.0",
        universities: [
            "University of Toronto",
            "University of British Columbia",
            "McGill University",
            "University of Windsor",
            "Humber College",
            "Seneca Polytechnic"
        ],
        requirements: [
            "Minimum 60% in high school or university",
            "IELTS Academic score 6.5 overall",
            "Guaranteed Investment Certificate (GIC) of CAD $20,635",
            "Letter of Acceptance (LOA) from a Designated Learning Institution (DLI)",
            "Statement of Purpose (Study Plan)"
        ]
    },
    newzealand: {
        name: "New Zealand",
        flagCode: "nz",
        flagEmoji: "🇳🇿",
        banner: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200",
        tagline: "Study in a natural paradise with globally accredited institutions.",
        intro: "New Zealand offers a uniquely practical, industry-oriented learning system. Students enjoy a safe, peaceful environment with up to 3 years of post-study work rights.",
        intakes: "Feb / July / Nov",
        fees: "NZD $22,000 - $38,000 / year",
        livingCost: "NZD $20,000 / year",
        ielts: "Overall 6.0 - 6.5 (PTE: 50-58)",
        universities: [
            "University of Auckland",
            "University of Otago",
            "Victoria University of Wellington",
            "Auckland University of Technology",
            "Lincoln University",
            "Massey University"
        ],
        requirements: [
            "Good academic standing (55%+ GPA)",
            "IELTS 6.0 (Undergrad) or 6.5 (Postgrad)",
            "SOP and Academic References",
            "Funds showing NZD $20,000 per year of study",
            "Medical insurance and police clearance certificates"
        ]
    },
    germany: {
        name: "Germany",
        flagCode: "de",
        flagEmoji: "🇩🇪",
        banner: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200",
        tagline: "Benefit from low or zero tuition fees in the powerhouse of Europe.",
        intro: "Germany is famous for its public university system with minimal administration fees, highly advanced engineering degrees, and strong industry linkages for student internships.",
        intakes: "April (Summer) / October (Winter)",
        fees: "Almost €0 at public universities / €10K-€20K private",
        livingCost: "€11,208 / year (Blocked Account)",
        ielts: "Overall 6.0 - 6.5 (or B2 German level)",
        universities: [
            "Technical University of Munich",
            "Ludwig Maximilian University of Munich",
            "Heidelberg University",
            "Humboldt University Berlin",
            "RWTH Aachen University"
        ],
        requirements: [
            "University Entrance Qualification (Abitur equivalent or Studienkolleg)",
            "English (IELTS) or German language proficiency",
            "Blocked Bank Account showing €11,208",
            "CV/Resume & Letters of Motivation",
            "Health insurance coverage"
        ]
    },
    denmark: {
        name: "Denmark",
        flagCode: "dk",
        flagEmoji: "🇩🇰",
        banner: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=1200",
        tagline: "Experience high-quality living and innovative collaborative teaching.",
        intro: "Denmark is home to clean, sustainable cities and universities that emphasize student-led project work and active class discussions. Degrees are globally respected.",
        intakes: "Feb / Sept",
        fees: "€6,000 - €16,000 / year",
        livingCost: "DKK 6,000 - 8,000 / month",
        ielts: "Overall 6.5 (PTE: 58)",
        universities: [
            "University of Copenhagen",
            "Technical University of Denmark",
            "Aarhus University",
            "Aalborg University",
            "Copenhagen Business School"
        ],
        requirements: [
            "Academic certificates translated into English or Danish",
            "Proof of English proficiency (IELTS 6.5+)",
            "Motivation letter and academic resume",
            "Sufficient financial means to support living costs",
            "Danish residence permit application details"
        ]
    },
    ireland: {
        name: "Ireland",
        flagCode: "ie",
        flagEmoji: "🇮🇪",
        banner: "https://images.unsplash.com/photo-1590089415225-4f3ed6a50e70?q=80&w=1200",
        tagline: "Launch your career in Europe's booming technological heartland.",
        intro: "Ireland is the European headquarters of companies like Google, Apple, and Facebook, making it a stellar location for business, software, and technology students looking for placements.",
        intakes: "Jan / Sept",
        fees: "€10,000 - €22,000 / year",
        livingCost: "€7,000 - €12,000 / year",
        ielts: "Overall 6.0 - 6.5 (PTE: 51-58)",
        universities: [
            "Trinity College Dublin",
            "University College Dublin",
            "National University of Ireland, Galway",
            "Dublin City University",
            "University College Cork"
        ],
        requirements: [
            "Undergraduate degree or High school transcripts",
            "English test scores (IELTS 6.0 or 6.5)",
            "Two Letters of Recommendation",
            "Detailed CV and Statement of Purpose",
            "Evidence of tuition fee payment and living funds"
        ]
    },
    japan: {
        name: "Japan",
        flagCode: "jp",
        flagEmoji: "🇯🇵",
        banner: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200",
        tagline: "Immerse yourself in technological advancements and rich history.",
        intro: "Japan offers high academic standards, rich traditional culture, and safe environments. It is a fantastic destination for engineering, technology, and Japanese language research.",
        intakes: "April / October",
        fees: "¥500,000 - ¥1,000,000 / year",
        livingCost: "¥80,000 - ¥120,000 / month",
        ielts: "Basic English (for English medium) or N5 Japanese Level",
        universities: [
            "University of Tokyo",
            "Kyoto University",
            "Tokyo Institute of Technology",
            "Waseda University",
            "Osaka University"
        ],
        requirements: [
            "Academic certificates of 12 years of formal education",
            "Japanese language certificate (150 hours study minimum or JLPT N5)",
            "Financial Sponsor declaration with tax certificate",
            "Certificate of Eligibility (COE) application files",
            "Valid passport and passport-size photographs"
        ]
    },
    korea: {
        name: "South Korea",
        flagCode: "kr",
        flagEmoji: "🇰🇷",
        banner: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200",
        tagline: "Explore cutting-edge education in the cradle of K-Wave.",
        intro: "South Korea combines state-of-the-art campus learning with an energetic urban culture. Excellent scholarships are available through government schemes.",
        intakes: "March (Spring) / September (Fall)",
        fees: "$3,000 - $8,000 / semester",
        livingCost: "$800 - $1,200 / month",
        ielts: "IELTS 5.5 - 6.0 (or TOPIK Level 3)",
        universities: [
            "Seoul National University",
            "KAIST (Korea Advanced Institute of Science & Tech)",
            "Korea University",
            "Yonsei University",
            "Sungkyunkwan University"
        ],
        requirements: [
            "Graduation certificate from previous institution",
            "TOPIK level transcript or IELTS test score",
            "Sponsor's financial statement ($18,000 - $20,000)",
            "Family relation certificate",
            "Medical check-up clearance for student visa"
        ]
    },
    france: {
        name: "France",
        flagCode: "fr",
        flagEmoji: "🇫🇷",
        banner: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200",
        tagline: "Acquire creative management and luxury skills in the heart of Europe.",
        intro: "France is a leading destination for art, fashion, gastronomy, and business management. It offers high quality public education and subsidized housing for students.",
        intakes: "Feb / Sept",
        fees: "€2,770 - €3,770 / year (Public) / €8K-€15K (Private)",
        livingCost: "€600 - €1,000 / month",
        ielts: "Overall 6.0 (or TEF French Proficiency)",
        universities: [
            "Sorbonne University",
            "HEC Paris",
            "Ecole Polytechnique",
            "Sciences Po",
            "INSEAD"
        ],
        requirements: [
            "Previous diplomas and transcript of records",
            "Language certificate (IELTS 6.0+ or DELF B2)",
            "Statement of purpose explaining career match",
            "Proof of basic funds (€615/month for one year)",
            "Campus France Registration and Interview"
        ]
    },
    switzerland: {
        name: "Switzerland",
        flagCode: "ch",
        flagEmoji: "🇨🇭",
        banner: "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?q=80&w=1200",
        tagline: "Study in the world leader of hospitality, banking, and luxury tourism.",
        intro: "Switzerland offers premium educational programs, particularly in business, luxury hospitality, and scientific engineering. It is synonymous with high standards of living.",
        intakes: "Feb / Sept / Oct",
        fees: "CHF 15,000 - 35,000 / year",
        livingCost: "CHF 1,800 - 2,500 / month",
        ielts: "Overall 6.0 (PTE: 51)",
        universities: [
            "ETH Zurich",
            "EPFL Lausanne",
            "University of Zurich",
            "EHL Hospitality Business School",
            "Swiss Hotel Management School"
        ],
        requirements: [
            "Completed secondary school or bachelor transcripts",
            "English test scores (IELTS 6.0+)",
            "Cover letter explaining study motivation in Switzerland",
            "Evidence of financial sponsorship (Bank balance certificate)",
            "CV detailing academic achievements"
        ]
    },
    netherlands: {
        name: "Netherlands",
        flagCode: "nl",
        flagEmoji: "🇳🇱",
        banner: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
        tagline: "Learn in a creative, progressive, and highly open English-friendly environment.",
        intro: "The Netherlands pioneered English-taught courses in Continental Europe. It features excellent research facilities, progressive curriculum setups, and high student happiness indices.",
        intakes: "Feb / Sept",
        fees: "€8,000 - €18,000 / year",
        livingCost: "€950 - €1,400 / month",
        ielts: "Overall 6.0 - 6.5 (PTE: 55-60)",
        universities: [
            "University of Amsterdam",
            "Delft University of Technology",
            "Utrecht University",
            "Leiden University",
            "Eindhoven University of Technology"
        ],
        requirements: [
            "Secondary school diploma equivalent to Dutch VWO",
            "IELTS 6.5 overall (minimum 6.0 in subtests)",
            "Motivation statement and project papers",
            "Pre-enrolment in Studielink portal",
            "Proof of living cost deposits for MVV visa"
        ]
    },
    finland: {
        name: "Finland",
        flagCode: "fi",
        flagEmoji: "🇫🇮",
        banner: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1200",
        tagline: "Experience the world's best school system and happiest country.",
        intro: "Finland has high-tech laboratories and a modern focus on work-life balance. Universities of Applied Sciences offer highly practical courses and post-study opportunities.",
        intakes: "Jan / Sept",
        fees: "€6,000 - €15,000 / year",
        livingCost: "€700 - €900 / month",
        ielts: "Overall 6.0 (PTE: 51)",
        universities: [
            "University of Helsinki",
            "Aalto University",
            "Tampere University",
            "University of Oulu",
            "Metropolia University of Applied Sciences"
        ],
        requirements: [
            "Secondary school certificate or bachelor transcripts",
            "English language proficiency (IELTS 6.0+)",
            "Online entrance exam score or SAT scores (if required)",
            "Financial statement showing €6,720 for a year",
            "Valid international student insurance"
        ]
    },
    malaysia: {
        name: "Malaysia",
        flagCode: "my",
        flagEmoji: "🇲🇾",
        banner: "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1200",
        tagline: "Affordable global degrees in a multicultural Asian hub.",
        intro: "Malaysia is a top cost-effective destination. Students can obtain dual degrees from prestigious UK and Australian universities with campuses based in Kuala Lumpur.",
        intakes: "Jan / May / Oct",
        fees: "$4,000 - $8,000 / year",
        livingCost: "$3,000 - $5,000 / year",
        ielts: "Overall 5.5 - 6.0 (PTE: 46-50)",
        universities: [
            "Universiti Malaya",
            "Monash University Malaysia",
            "Heriot-Watt University Malaysia",
            "Taylor's University",
            "UCSI University"
        ],
        requirements: [
            "Academic certificates (min GPA 2.5 or equivalent)",
            "IELTS 5.5 overall score or TOEFL 500 equivalent",
            "Approval from EMGS (Education Malaysia Global Services)",
            "Completed medical health check declaration",
            "No Objection Letter (NOC) if required"
        ]
    },
    thailand: {
        name: "Thailand",
        flagCode: "th",
        flagEmoji: "🇹🇭",
        banner: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1200",
        tagline: "Combine quality tropical education with a vibrant hospitality industry.",
        intro: "Thailand hosts excellent international university branches, particularly strong in fields like hospitality management, international business, and Asian studies.",
        intakes: "Jan / Aug",
        fees: "$3,000 - $7,000 / year",
        livingCost: "$400 - $700 / month",
        ielts: "Overall 5.5",
        universities: [
            "Chulalongkorn University",
            "Mahidol University",
            "Thammasat University",
            "Stamford International University",
            "Assumption University"
        ],
        requirements: [
            "High school diploma or bachelor transcripts",
            "IELTS overall band 5.5 or equivalent",
            "Letter of Admission from Thai University",
            "Sponsor declaration of living cost",
            "Visa clearance at local Royal Thai Embassy"
        ]
    },
    india: {
        name: "India",
        flagCode: "in",
        flagEmoji: "🇮🇳",
        banner: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200",
        tagline: "Expand your career horizons in one of the fastest growing global economies.",
        intro: "India is a major destination for IT, medicine, engineering, and commerce, featuring cheap tuition fees, diverse environments, and a massive network of institutions.",
        intakes: "July / August",
        fees: "$2,000 - $6,000 / year",
        livingCost: "$2,000 - $4,000 / year",
        ielts: "Not mandatory for many South Asian students (English medium certificates accepted)",
        universities: [
            "Indian Institute of Technology Delhi",
            "Indian Institute of Science Bangalore",
            "University of Delhi",
            "Manipal Academy of Higher Education",
            "Sharda University"
        ],
        requirements: [
            "10+2 academic transcripts with required grades",
            "English medium instruction certificate (for waiver)",
            "Equivalence Certificate from Association of Indian Universities (AIU)",
            "University provisional allotment letter",
            "Valid passport and student visa clearance"
        ]
    },
    uae: {
        name: "UAE",
        flagCode: "ae",
        flagEmoji: "🇦🇪",
        banner: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200",
        tagline: "Experience modern education in a global trading and architectural wonder.",
        intro: "The UAE, particularly Dubai, provides branches of famous global universities. It offers fantastic options for students to study and network in a dynamic business hub.",
        intakes: "Jan / Sept / May",
        fees: "$12,000 - $25,000 / year",
        livingCost: "$8,000 - $12,000 / year",
        ielts: "Overall 5.5 - 6.0",
        universities: [
            "Heriot-Watt University Dubai",
            "Middlesex University Dubai",
            "University of Birmingham Dubai",
            "Zayed University",
            "American University in Dubai"
        ],
        requirements: [
            "Equated high school certificate with decent grades",
            "IELTS 5.5 overall (min 5.0 in individual modules)",
            "Entry permit application confirmation letter",
            "Financial statements showing sufficient tuition fee funds",
            "National medical fitness test certificate"
        ]
    }
};
window.destinationData = destinationData;
