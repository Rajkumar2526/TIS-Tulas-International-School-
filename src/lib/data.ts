export interface NavItem {
  title: string;
  href: string;
  badge?: string;
  children?: { title: string; description: string; href: string }[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    title: "About TIS",
    href: "#about",
    children: [
      { title: "Legacy & Trust", description: "Established 2012 under Rishabh Educational Trust", href: "#about" },
      { title: "Modern Gurukul", description: "Blending ancient values with contemporary global pedagogy", href: "#about" },
      { title: "Leadership & Vision", description: "Nurturing curious, confident, and empathetic global leaders", href: "#about" },
    ],
  },
  {
    title: "Why TIS",
    href: "#why-tis",
    badge: "Ranked #1",
    children: [
      { title: "22-Acre Green Campus", description: "Lush, pollution-free foothills of the Shivalik range", href: "#why-tis" },
      { title: "6:1 Mentor Ratio", description: "Unmatched personalized attention for every scholar", href: "#why-tis" },
      { title: "Awards & Honors", description: "Recognized among India's top boarding institutions", href: "#achievements" },
    ],
  },
  {
    title: "Academics",
    href: "#academics",
    children: [
      { title: "CBSE Curriculum", description: "Class IV to XII with holistic experiential pedagogy", href: "#academics" },
      { title: "Senior Streams", description: "Science, Commerce & Humanities with career counseling", href: "#academics" },
      { title: "STEM & Robotics", description: "Next-gen AI, robotics labs, and practical inquiry", href: "#academics" },
    ],
  },
  {
    title: "Campus & Boarding",
    href: "#campus",
    children: [
      { title: "Residential Life", description: "Comfortable, safe air-conditioned hostel wings for boys & girls", href: "#campus" },
      { title: "Dining & Nutrition", description: "Nutritious multi-cuisine meals planned by expert dietitians", href: "#campus" },
      { title: "24x7 Infirmary", description: "Full-time resident medical team & ambulance on campus", href: "#campus" },
    ],
  },
  {
    title: "16+ Sports",
    href: "#sports",
    children: [
      { title: "Olympic Standards", description: "Archery, shooting range, horse riding, swimming & more", href: "#sports" },
      { title: "Elite Coaching", description: "National & NIS certified trainers mentoring champions", href: "#sports" },
    ],
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
  {
    title: "Gallery",
    href: "#gallery",
  },
];

export const SCHOOL_STATS = [
  {
    value: "22+",
    label: "Acre Campus",
    sublabel: "Pollution-free green sanctuary in Dehradun",
    icon: "Trees",
  },
  {
    value: "6:1",
    label: "Student-Teacher Ratio",
    sublabel: "Personalized mentoring & individual care",
    icon: "Users",
  },
  {
    value: "16+",
    label: "Olympic Sports",
    sublabel: "From Archery to Equestrian & Shooting",
    icon: "Trophy",
  },
  {
    value: "24x7",
    label: "Medical Care",
    sublabel: "Resident doctors, nurses & hospital tie-up",
    icon: "HeartPulse",
  },
  {
    value: "12+",
    label: "Global Tie-ups",
    sublabel: "International university partnerships & IAYP",
    icon: "Globe",
  },
  {
    value: "100%",
    label: "CBSE Board Results",
    sublabel: "Consistent top percentiles & Ivy League admits",
    icon: "GraduationCap",
  },
];

export const RANKINGS_DATA = [
  {
    rank: "#1",
    scope: "In Dehradun",
    publisher: "Education Today",
    category: "Co-Educational Boarding School",
  },
  {
    rank: "#1",
    scope: "In North India",
    publisher: "Outlook Magazine",
    category: "Co-Educational Residential Excellence",
  },
  {
    rank: "#2",
    scope: "In Uttarakhand",
    publisher: "Education Today",
    category: "North India Co-Ed Boarding School",
  },
  {
    rank: "#4",
    scope: "Across India",
    publisher: "Education Today",
    category: "Premier Residential Boarding School",
  },
];

export const SPORTS_LIST = [
  {
    name: "Archery",
    category: "Target Sports",
    desc: "State-of-the-art range mentored by Asian & World Archery medalists",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop",
    popular: true,
  },
  {
    name: "Shooting Range",
    category: "Olympic Disciplines",
    desc: "10m electronic target rifle and pistol shooting gallery",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=800&auto=format&fit=crop",
    popular: true,
  },
  {
    name: "Horse Riding",
    category: "Equestrian",
    desc: "Dedicated equestrian arena with trained thoroughbreds and dressage instructors",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=800&auto=format&fit=crop",
    popular: true,
  },
  {
    name: "Swimming",
    category: "Aquatics",
    desc: "Semi-Olympic pool with all-weather heating and certified life guards",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=800&auto=format&fit=crop",
    popular: true,
  },
  {
    name: "Football",
    category: "Field Sports",
    desc: "FIFA-standard natural turf football pitch with floodlights",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Lawn Tennis",
    category: "Racquet Sports",
    desc: "Synthetic hard courts matching international tournament standards",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Basketball",
    category: "Court Sports",
    desc: "Maple wood indoor courts and outdoor floodlit championship courts",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Squash",
    category: "Indoor Racquet",
    desc: "Air-conditioned glass-back squash courts with tournament flooring",
    image: "https://images.unsplash.com/photo-1511067007772-9da29974ce44?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Taekwondo",
    category: "Martial Arts",
    desc: "Black-belt certified training instilling agility, discipline, and defense",
    image: "https://images.unsplash.com/photo-1517438322307-e67111335449?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Cricket",
    category: "Field Sports",
    desc: "BCCI-regulation cricket oval with turf wickets and modern net sessions",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Badminton",
    category: "Indoor Racquet",
    desc: "Multi-court wooden flooring arena under shadowless tournament lighting",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Billiards & Snooker",
    category: "Cue Sports",
    desc: "Full-size Riley tables fostering focus, geometry, and tactical thinking",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
  },
];

export const INFLUENTIAL_VISITORS = [
  {
    name: "Sakshi Malik",
    title: "Rio 2016 Olympic Bronze Medalist & Rajiv Gandhi Khel Ratna",
    quote: "The sports facilities and enthusiasm among TIS scholars remind me of international training academies.",
    badge: "Olympic Icon",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Vishesh Bhriguvanshi",
    title: "Indian National Basketball Team Captain",
    quote: "Tula's gives equal priority to athletic training and sportsmanship alongside rigorous academics.",
    badge: "Sports Leader",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Prakashi Tomar",
    title: "Shooter Dadi (30+ National Championships, Inspiration for 'Saand Ki Aankh')",
    quote: "Seeing young girls taking up archery and rifle shooting with courage fills my heart with joy.",
    badge: "National Legend",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Abhishek Verma",
    title: "Arjuna Awardee & Asian Games Gold Medalist Archery",
    quote: "The archery setup at TIS is equipped to produce national champions with its disciplined regiment.",
    badge: "World Class",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr. Ramesh Pokhriyal 'Nishank'",
    title: "Former Union Cabinet Minister for Education, Govt of India",
    quote: "Tula's International School beautifully brings alive the Modern Gurukul philosophy envisioned for 21st-century India.",
    badge: "Education Statesman",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
  },
];

export const TESTIMONIALS_DATA = [
  {
    author: "Tashi Tsering",
    relation: "Father of Jigmet Skaldon",
    text: "I would like to convey a heartfelt thanks to the management and teachers of Tula's International School for taking such extraordinary care of my son. He has blossomed into a disciplined, confident scholar.",
    rating: 5,
    location: "Ladakh",
    badge: "Parent Review",
  },
  {
    author: "Namita Agarwal",
    relation: "Mother of Krishna Agarwal",
    text: "Tula's gives a comprehensive environment for our child to grow. The sports, academics, and extra-curricular activities have helped Krishna know himself better and step out of his comfort zone.",
    rating: 5,
    location: "New Delhi",
    badge: "Boarding Life",
  },
  {
    author: "Sandeep Kumar",
    relation: "Father of Aryan",
    text: "Our experience has been simply amazing with TIS. The residential staff is extremely cooperative, supportive, and compassionate. Aryan always praises the healthy food, sports, and friendly dorm parents.",
    rating: 5,
    location: "Haryana",
    badge: "Pastoral Care",
  },
  {
    author: "Pinky Sharma",
    relation: "Mother of Swastik Sharma",
    text: "I am thoroughly satisfied with the wonderful journey of my child here. The pastoral team is always just a phone call away, providing regular updates and emotional reassurance.",
    rating: 5,
    location: "Uttarakhand",
    badge: "Academic Growth",
  },
  {
    author: "Amit Agrawal",
    relation: "Father of Samruddhi Agrawal",
    text: "As a parent, finding a boarding school that fulfills parameters of safety, hygiene, emotional well-being, and academic rigor is tough. Tula's exceeded all our benchmarks.",
    rating: 5,
    location: "Mumbai",
    badge: "Safety & Security",
  },
  {
    author: "Selendra K. Ajmera",
    relation: "Father of Aman Ajmera",
    text: "In the beginning it was heartbreaking sending our son away. But the day we toured the lush 22-acre campus and met the headmaster, we knew this was the right place to build his future.",
    rating: 5,
    location: "Kolkata",
    badge: "Campus Atmosphere",
  },
];

export const CAMPUS_FACILITIES = [
  {
    id: "dormitories",
    title: "Comfortable Boarding Wings",
    tagline: "A Home Away From Home",
    desc: "Separated, highly secured, climate-controlled boys and girls residences with attached modern bathrooms, ergonomic study suites, reading nooks, and 24/7 dedicated house parents.",
    highlights: ["Air-conditioned spacious rooms", "Dedicated House Masters & Matrons", "Laundry, dry cleaning & hygiene audit", "Evening prep & supervised study hours"],
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "dining",
    title: "Wholesome Multi-Cuisine Mess",
    tagline: "Farm-Fresh Nutrition Daily",
    desc: "A sprawling dining hall serving wholesome vegetarian & non-vegetarian menus prepared under strict ISO-certified food safety protocols, utilizing organic vegetables grown on the school farm.",
    highlights: ["Balanced nutritionist-curated diet", "Organic produce from campus farm", "Breakfast, lunch, high-tea & dinner", "Special dietary care during tournaments"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "smart-classes",
    title: "Techno-Enabled Classrooms",
    tagline: "Interactive 21st-Century Learning",
    desc: "Ergonomically designed classrooms equipped with interactive smart panels, high-speed optic fiber connectivity, and multimedia presentation stations fostering collaborative discussions.",
    highlights: ["Interactive Promethean flat panels", "Acoustically treated environments", "Class sizes capped at 25 scholars", "Continuous formative feedback"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "laboratories",
    title: "STEM, AI & Robotics Labs",
    tagline: "Where Curiosity Meets Innovation",
    desc: "Advanced Physics, Chemistry, Biology, Mathematics, and Artificial Intelligence laboratories where theoretical concepts transform into empirical understanding through hand-on experimentation.",
    highlights: ["3D Printing & drone design rigs", "Comprehensive CBSE practical setups", "Tinkering labs & robotics kits", "Safety shower & ventilation hoods"],
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "infirmary",
    title: "24x7 Medical Health Center",
    tagline: "Uncompromising Well-Being",
    desc: "Fully equipped in-house healthcare center with resident nurses, visiting pediatric specialists, emergency isolation suites, and ambulance ready on round-the-clock standby.",
    highlights: ["Full-time medical staff", "Emergency tie-up with Dehradun superspecialty hospital", "Regular biometric and dental screenings", "Mental health & counseling cell"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop",
  },
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Sprawling 22-Acre Campus Foothills",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
    desc: "Panoramic sunrise over the lush greens and boarding complexes in Selaqui, Dehradun.",
  },
  {
    id: 2,
    title: "National Archery Championship Training",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop",
    desc: "Scholars sharpening focus at the Olympic-specification 70m archery range.",
  },
  {
    id: 3,
    title: "Robotics & AI Innovation Lab",
    category: "Academics",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop",
    desc: "Young scientists programming autonomous robots for inter-school competitions.",
  },
  {
    id: 4,
    title: "Annual Cultural Fest & Performing Arts",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1000&auto=format&fit=crop",
    desc: "Symphony orchestra and classical Indian dance performance at the open-air theatre.",
  },
  {
    id: 5,
    title: "Horse Riding & Equestrian Drills",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=1000&auto=format&fit=crop",
    desc: "Developing courage, balance, and bonding at the TIS equestrian school.",
  },
  {
    id: 6,
    title: "Modern Boarding House Common Lounge",
    category: "Boarding",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1000&auto=format&fit=crop",
    desc: "Cozy community lounge with indoor games, library shelves, and musical instruments.",
  },
  {
    id: 7,
    title: "Model United Nations (MUN) Assembly",
    category: "Academics",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop",
    desc: "Debating global affairs, diplomatic solutions, and international treaties.",
  },
  {
    id: 8,
    title: "Championship Tennis & Multi-Sport Court",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=1000&auto=format&fit=crop",
    desc: "Floodlit hard courts accommodating dusk matches and professional clinics.",
  },
];

export const ADMISSION_STEPS = [
  {
    step: "01",
    title: "Online Registration / Enquiry",
    desc: "Submit the quick enquiry form or register on admission.tis.edu.in to connect with an admissions counselor.",
  },
  {
    step: "02",
    title: "Campus Visit or 360° Virtual Tour",
    desc: "Experience our 22-acre campus, boarding houses, sports arena, and meet the Headmaster in person or virtually.",
  },
  {
    step: "03",
    title: "Aptitude Assessment & Interaction",
    desc: "An age-appropriate general evaluation and friendly interactive discussion with the student and parents.",
  },
  {
    step: "04",
    title: "Provisional Offer & Enrollment",
    desc: "Upon selection, receive the formal admission letter and complete the onboarding formalities to welcome your child.",
  },
];

export const GLOBAL_COLLABORATIONS = [
  { name: "Universidad San Jorge", country: "Spain", logo: "🎓" },
  { name: "Trinity College London", country: "United Kingdom", logo: "🏛️" },
  { name: "INSEEC U.", country: "France", logo: "🌍" },
  { name: "IAYP (Duke of Edinburgh)", country: "International", logo: "🏅" },
  { name: "Universitat de Vic", country: "Spain", logo: "🌐" },
  { name: "Lions Club International", country: "Global", logo: "🤝" },
];

export const FAQ_DATA = [
  {
    question: "What classes are admitted at Tula's International School?",
    answer: "TIS admits boys and girls as residential and day-boarding students from Class IV through Class XII under the CBSE curriculum with Science, Commerce, and Humanities streams in senior secondary.",
  },
  {
    question: "What is the teacher-to-student ratio at TIS?",
    answer: "TIS maintains an exceptional 6:1 student-to-teacher ratio. This ensures every individual child receives dedicated attention, tailored academic mentoring, and pastoral care.",
  },
  {
    question: "How safe is the residential campus?",
    answer: "Safety is our foremost priority. The 22-acre gated campus features 24x7 biometric and CCTV surveillance, security checkpoints, female wardens for girls' hostels, biometric access, and an in-house medical infirmary with round-the-clock nursing.",
  },
  {
    question: "What sports coaching is provided?",
    answer: "Scholars can train in over 16 Olympic and modern disciplines including Archery, 10m/50m Rifle Shooting, Horse Riding, Swimming, Football, Lawn Tennis, Squash, Badminton, Cricket, and Taekwondo under certified national coaches.",
  },
  {
    question: "How can parents schedule a campus tour?",
    answer: "Parents can book an in-person campus visit anytime by calling the admissions helpline at +91-9837983791 or scheduling a guided 360° interactive virtual walk-through right through our website.",
  },
];
