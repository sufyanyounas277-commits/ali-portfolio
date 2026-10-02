export interface LogoItem {
  id: string;
  name: string;
  category: 'Tech' | 'Wellness' | 'Luxury' | 'Minimal' | 'Studio';
  tagline: string;
  year: string;
  description: string;
  gridSpecs: string;
  colors: { name: string; hex: string }[];
  svgType: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  year: string;
  role: string;
  deliverables: string[];
  image: string;
  overview: string;
  challenge: string;
  solution: string;
  colors: { name: string; hex: string; role: string }[];
  typography: { primary: string; secondary: string; sample: string };
  metrics: { value: string; label: string }[];
}

export interface GraphicService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  tools: string[];
  image: string;
  badge: string;
  demoHighlights: string[];
}

export interface BentoItem {
  id: string;
  title: string;
  category: string;
  aspect: 'portrait' | 'square' | 'wide' | 'tall';
  format: string;
  engagement: string;
  description: string;
  image?: string;
  tags: string[];
}

export interface UIProject {
  id: string;
  title: string;
  category: string;
  platform: 'iOS' | 'Web' | 'Desktop';
  description: string;
  deliverables: string[];
  metrics: string;
  features: string[];
}

export const GRAPHIC_SERVICES: GraphicService[] = [
  {
    id: 'brand-identity',
    title: 'Brand Identity & Logo Design',
    subtitle: 'Distinctive visual identities built for enduring brand recall and market authority.',
    description: 'From preliminary concept sketches to complete brand guideline manuals. I craft mathematical vector logomarks, bespoke typography selections, cohesive color architectures, and brand pattern systems that distinguish your business from competitors.',
    deliverables: [
      'Primary & Secondary Vector Logomarks',
      'Comprehensive Brand Style Guide (PDF)',
      'Typography System & Font Licensing Specs',
      'Digital & Print Color Palette (HEX, RGB, CMYK, Pantone)',
      'Vector Asset Library (AI, EPS, SVG, PNG, PDF)'
    ],
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
    image: '/src/assets/images/branding_ourvita_showcase_1790587324103.jpg',
    badge: 'Core Specialization',
    demoHighlights: [
      'Geometric vector logomarks designed on Fibonacci grids',
      'Dark and light mode responsive brand variants',
      'Comprehensive brand guideline book with clear usage rules'
    ]
  },
  {
    id: 'packaging-design',
    title: 'Packaging & Label Architecture',
    subtitle: 'Tactile, high-converting product packaging ready for flawless commercial print runs.',
    description: 'Transforming retail shelves and unboxing moments with masterfully engineered packaging. I deliver precise print-ready dielines with exact bleed margins, barcode zones, regulatory typography, and luxury finishes like blind debossing, foil stamping, and spot UV.',
    deliverables: [
      'Custom Dieline Layouts & Print Production Files',
      'Product Box & Sleeve Packaging',
      'Bottle, Canister & Dropper Labels',
      'Flexible Pouches & Foil Bags',
      'Photorealistic 3D Renders & Mockups'
    ],
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Blender 3D'],
    image: '/src/assets/images/packaging_luxury_craft_1790587339048.jpg',
    badge: 'Shelf-Ready',
    demoHighlights: [
      'Production-tested dieline templates with 3mm bleed',
      'Luxury finishing specs: Pantone matching & hot foil stamps',
      'FMCG, nutrition, and cosmetic industry packaging standards'
    ]
  },
  {
    id: 'social-media-design',
    title: 'Social Media Graphics & Ad Creatives',
    subtitle: 'High-engagement carousel decks, story sets, and performance ad visuals.',
    description: 'Creating scroll-stopping social content that commands attention in crowded feeds. I engineer multi-slide informational carousels, promotional story templates, and high-CTR paid advertisement banners designed for peak conversion and visual consistency.',
    deliverables: [
      'Multi-Slide Educational Carousels (4:5 Ratio)',
      'Instagram, Facebook & TikTok Story Sets (9:16)',
      'Paid Social Ad Creative Banners (Feed & Stories)',
      'YouTube & Podcast Video Thumbnails',
      'Editable Canva or Figma Source Templates for Teams'
    ],
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma'],
    image: '/src/assets/images/stationery_merch_showcase_1790700711693.jpg',
    badge: 'High Conversion',
    demoHighlights: [
      'Proven 4:5 swipe-through rate carousel frameworks',
      'Bold typographic hierarchy with strategic contrast points',
      'Modular template libraries for effortless daily publishing'
    ]
  },
  {
    id: 'marketing-print',
    title: 'Print Media & Large-Format Collateral',
    subtitle: 'Flawless tangible editorial layouts, marketing brochures, and outdoor displays.',
    description: 'Bringing physical marketing to life with razor-sharp prepress expertise. Whether designing tri-fold corporate brochures, event roll-up banners, or monumental urban billboards, every layout is calibrated for color accuracy and viewing distance ergonomics.',
    deliverables: [
      'Corporate Profile & Annual Report Brochures',
      'Flyers, Postcards & Direct Mail Collateral',
      'Roll-Up Standees & Exhibition Booth Graphics',
      'Large-Format Outdoor Billboards & Transit Posters',
      'Color-Calibrated Prepress Files (CMYK, 300 DPI)'
    ],
    tools: ['Adobe InDesign', 'Adobe Illustrator', 'Adobe Photoshop'],
    image: '/src/assets/images/billboard_campaign_urban_1790587355390.jpg',
    badge: 'Prepress Certified',
    demoHighlights: [
      'Editorial grid alignment with balanced typographic margins',
      'Certified CMYK Fogra39 color profiles for print shops',
      'Multi-page publication architecture with automated masters'
    ]
  },
  {
    id: 'corporate-stationery',
    title: 'Corporate Stationery & Merchandise',
    subtitle: 'Unified collateral systems that communicate institutional polish and authority.',
    description: 'Equipping leadership teams and companies with polished physical touchpoints. From premium cotton business cards with edge painting to professional letterheads, envelopes, presentation slide decks, and custom apparel merchandise.',
    deliverables: [
      'Premium Double-Sided Business Card Suites',
      'Corporate Letterheads (Print & Word/Google Docs)',
      'Branded Envelopes, Folders & Presentation Kits',
      'Executive Keynote & Pitch Deck Slide Templates',
      'Staff Merchandise: T-shirts, Hoodies, Mugs & Tote Bags'
    ],
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
    image: '/src/assets/images/stationery_merch_showcase_1790700711693.jpg',
    badge: 'Corporate Standard',
    demoHighlights: [
      'Double-sided business card dielines with tactile finishes',
      'Digital document templates ready for enterprise teams',
      'Vector embroidery and screen-print apparel asset files'
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Web Visual Design',
    subtitle: 'Human-centered mobile app screens, landing pages, and interactive design systems.',
    description: 'Translating brand guidelines into intuitive digital products. I design high-fidelity mobile application interfaces, conversion-optimized landing pages, and scalable design token systems that developers love implementing.',
    deliverables: [
      'Mobile iOS & Android Screen Mockups',
      'Responsive Web Landing Page Layouts',
      'SaaS Dashboard & Web Application Frames',
      'Component Design Systems with Auto-Layout in Figma',
      'Interactive Clickable Prototypes'
    ],
    tools: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator'],
    image: '/src/assets/images/uiux_device_ecosystem_1790587370875.jpg',
    badge: 'Modern SaaS & App',
    demoHighlights: [
      'Full auto-layout Figma component libraries with token states',
      '8pt grid mathematical spacing for seamless engineering handoff',
      'Dark mode and high-contrast ergonomics'
    ]
  }
];

export const LOGO_ITEMS: LogoItem[] = [
  {
    id: 'ourvita',
    name: 'Ourvita',
    category: 'Wellness',
    tagline: 'Organic Botanical Wellness Nutrition',
    year: '2025',
    description: 'A harmonious leaf spiral engineered from Fibonacci proportions, representing circular health and natural cellular renewal.',
    gridSpecs: 'Golden ratio 1.618 concentric arcs, 45° tangent alignment',
    colors: [
      { name: 'Matcha Forest', hex: '#1C3A2B' },
      { name: 'Cyber Yellow', hex: '#FFDD00' },
      { name: 'Oatmeal', hex: '#F3EFE6' }
    ],
    svgType: 'leaf-spiral'
  },
  {
    id: 'nexaflow',
    name: 'NexaFlow',
    category: 'Tech',
    tagline: 'High-Throughput Neural Pipelines',
    year: '2025',
    description: 'An infinity vector constructed from dual isometric loops, capturing continuous algorithmic intelligence without visual friction.',
    gridSpecs: '60° isometric plane, 4px uniform stroked path',
    colors: [
      { name: 'Electric Yellow', hex: '#FFDD00' },
      { name: 'Deep Space', hex: '#0B0F19' },
      { name: 'Pure White', hex: '#FFFFFF' }
    ],
    svgType: 'infinity-loop'
  },
  {
    id: 'lumina',
    name: 'Lumina',
    category: 'Studio',
    tagline: 'Architectural Lighting & Prisms',
    year: '2024',
    description: 'A pure geometric triangular prism refracting directional photon beams into minimalist planar typography.',
    gridSpecs: 'Equilateral triangle with 30° optical dispersion lines',
    colors: [
      { name: 'Prism Yellow', hex: '#FFDD00' },
      { name: 'Slate Gray', hex: '#161B26' }
    ],
    svgType: 'prism-light'
  },
  {
    id: 'monolith',
    name: 'Monolith',
    category: 'Luxury',
    tagline: 'Brutalist Architectural Ceramics',
    year: '2024',
    description: 'Heavy structural typography and monolithic pillars evoking timeless permanence and raw tactile texture.',
    gridSpecs: 'Strict 12x12 modular grid block construction',
    colors: [
      { name: 'Carbon Black', hex: '#0B0F19' },
      { name: 'Warm Cream', hex: '#EDE8DF' }
    ],
    svgType: 'monolith-arch'
  },
  {
    id: 'apex-labs',
    name: 'Apex Labs',
    category: 'Tech',
    tagline: 'Quantum Compute Accelerators',
    year: '2025',
    description: 'Ascending delta intersecting dual photon channels, engineered for laser-engraved microchip packaging and dark mode interfaces.',
    gridSpecs: '72° acute delta with counter-carved channel',
    colors: [
      { name: 'Apex Yellow', hex: '#FFDD00' },
      { name: 'Obsidian Slate', hex: '#121824' }
    ],
    svgType: 'delta-quantum'
  },
  {
    id: 'verve',
    name: 'Verve',
    category: 'Minimal',
    tagline: 'Contemporary Editorial House',
    year: '2025',
    description: 'Interlocking twin V-monograms rendered with razor-sharp tapered serifs, balancing modern edge with classical publishing dignity.',
    gridSpecs: 'Precision optical kerning, 2.5:1 stroke contrast',
    colors: [
      { name: 'Cyber Gold', hex: '#FFDD00' },
      { name: 'True White', hex: '#FFFFFF' }
    ],
    svgType: 'verve-interlock'
  },
  {
    id: 'chrono',
    name: 'Chrono Lab',
    category: 'Tech',
    tagline: 'Micro-Mechanical Horology',
    year: '2024',
    description: 'Concentric radial indices arranged around a hollow core, visualizing atomic precision and temporal cycles.',
    gridSpecs: '12-axis radial division with 4px circular apertures',
    colors: [
      { name: 'Titanium', hex: '#8E9AA8' },
      { name: 'Yellow Dial', hex: '#FFDD00' }
    ],
    svgType: 'chrono-radial'
  },
  {
    id: 'solis',
    name: 'Solis Foods',
    category: 'Wellness',
    tagline: 'Sun-Dried Mediterranean Extracts',
    year: '2025',
    description: 'A radiant solar disc harmoniously carved with negative-space botanical olive leaves.',
    gridSpecs: '8-petal radial symmetry around 48px nucleus',
    colors: [
      { name: 'Amber Gold', hex: '#FFDD00' },
      { name: 'Olive Dark', hex: '#1B2E1E' }
    ],
    svgType: 'solis-sun'
  }
];

export const BRANDING_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'ourvita-wellness',
    title: 'Ourvita — Organic Botanical Nutrition',
    subtitle: 'End-to-end brand architecture, packaging typography & sustainable tactile packaging',
    client: 'Ourvita Organics Ltd',
    year: '2025',
    role: 'Lead Visual Designer & Packaging Architect',
    deliverables: ['Identity System', 'Brand Stylebook (64 Pages)', '12x Package SKUs', 'E-Commerce Art Direction', 'Unboxing Experience'],
    image: '/src/assets/images/branding_ourvita_showcase_1790587324103.jpg',
    overview: 'Ourvita is a pioneering organic nutrition house bridging bioactive cellular research with botanical ingredients. The objective was creating an unmistakable visual presence that exudes luxury purity without clinical coldness.',
    challenge: 'The supplement market is flooded with synthetic pharmaceutical aesthetics or generic rustic kraft paper tropes. Ourvita required an authoritative, scientific yet deeply sensual visual language that command a premium on retail shelves.',
    solution: 'Engineered a bespoke typographic wordmark featuring custom glyph incisions paired with an organic spiral leaf monogram. Selected a rich palette of deep chlorophyll greens, warm raw silk neutrals, and electric cyber yellow as the tactical highlight.',
    colors: [
      { name: 'Matcha Chlorophyll', hex: '#1E382B', role: 'Primary Brand Surface' },
      { name: 'Oatmeal Silk', hex: '#F4EFE6', role: 'Secondary Print Stock' },
      { name: 'Cyber Yellow', hex: '#FFDD00', role: 'Accent & Highlight' },
      { name: 'Deep Obsidian', hex: '#0B0F19', role: 'Typography & Structure' }
    ],
    typography: {
      primary: 'Syne (Custom Weight Mod)',
      secondary: 'Plus Jakarta Sans Book',
      sample: 'Pure Bioactive Botanicals · Formulated For Cellular Longevity'
    },
    metrics: [
      { value: '+340%', label: 'Direct-to-Consumer Launch Velocity' },
      { value: '42,000+', label: 'Pre-order Subscriptions in 30 Days' },
      { value: '100%', label: 'Biodegradable Compostable Outer Packaging' }
    ]
  },
  {
    id: 'nexa-intelligence',
    title: 'NEXA Intelligence — Next-Gen AI Compute',
    subtitle: 'Corporate visual identity, dark-mode design system & hardware launch campaign',
    client: 'NEXA Semiconductor',
    year: '2024–2025',
    role: 'Senior Graphic Designer & Brand Strategist',
    deliverables: ['Vector Wordmark & Monogram', 'Design System Tokens', 'Conference Booth Architecture', 'Keynote Visuals'],
    image: '/src/assets/images/billboard_campaign_urban_1790587355390.jpg',
    overview: 'NEXA manufactures ultra-dense inference accelerator chips. The identity was designed to communicate unprecedented computing density, cryptographic resilience, and raw processing throughput.',
    challenge: 'Enterprise tech branding often sinks into identical blue gradients and generic 3D nodes. NEXA needed an aggressive, razor-sharp visual stance that appeals directly to top AI researchers and cloud infrastructure leads.',
    solution: 'Designed an unapologetically bold identity grounded in deep slate black (#0B0F19), stark white typographic hierarchy, and the signature Electric Cyber Yellow (#FFDD00) as an energy conduit.',
    colors: [
      { name: 'Deep Space', hex: '#0B0F19', role: 'Dominant Canvas' },
      { name: 'Muted Dark Slate', hex: '#161B26', role: 'Structural Surfaces' },
      { name: 'Electric Yellow', hex: '#FFDD00', role: 'Energy & Focus Accent' },
      { name: 'Pure White', hex: '#FFFFFF', role: 'Display Typography' }
    ],
    typography: {
      primary: 'Syne Heavy',
      secondary: 'JetBrains Mono & Plus Jakarta Sans',
      sample: 'Parallel Neural Acceleration · Distributed Compute Nodes'
    },
    metrics: [
      { value: '180,000+', label: 'Developer SDK Registrations' },
      { value: '100%', label: 'Consistency Across 48 Marketing Touchpoints' },
      { value: '1st Place', label: 'Enterprise Brand Identity Award' }
    ]
  }
];

export const BENTO_WORKS: BentoItem[] = [
  {
    id: 'bento-1',
    title: 'Kinetic Poster Series · Chromatic Balance',
    category: 'Social Media',
    aspect: 'portrait',
    format: '4:5 Editorial Carousel',
    engagement: '142K Saves',
    description: 'Typographic explorations dissecting human emotion through deliberate grid balance and high-contrast yellow typography.',
    tags: ['Motion Poster', 'Editorial', 'Typography']
  },
  {
    id: 'bento-2',
    title: 'Artisanal Canister & Pouch System',
    category: 'Package Design',
    aspect: 'wide',
    format: '3D Render & Physical Sample',
    engagement: 'Pantone 102C + Deboss',
    description: 'Matte black soft-touch canisters with micro-embossed yellow gold foil signatures and magnetic friction seals.',
    image: '/src/assets/images/packaging_luxury_craft_1790587339048.jpg',
    tags: ['Luxury Packaging', 'Foil Stamping', 'Structural']
  },
  {
    id: 'bento-3',
    title: 'Metropolitan Billboard Showcase',
    category: 'Print & Outdoor',
    aspect: 'wide',
    format: '14m x 6m Digital & Vinyl',
    engagement: '1.2M Daily Impressions',
    description: 'Large-format outdoor display installed at high-density transit arteries, leveraging stark negative space for 100% glance retention.',
    image: '/src/assets/images/billboard_campaign_urban_1790587355390.jpg',
    tags: ['Outdoor OOH', 'Billboard', 'Print Spec']
  },
  {
    id: 'bento-4',
    title: 'Corporate Stationery & Merch Suite',
    category: 'Stationery',
    aspect: 'square',
    format: 'Premium Cotton + Silk Screen',
    engagement: 'Edge-Painted Cards',
    description: 'Executive stationery package featuring textured Fedrigoni business cards, envelopes, notebooks, and embroidered apparel.',
    image: '/src/assets/images/stationery_merch_showcase_1790700711693.jpg',
    tags: ['Stationery', 'Corporate Identity', 'Merchandise']
  }
];

export const DESIGNER_INFO = {
  name: 'Sufyan Ali',
  age: 28,
  role: 'Senior Graphic Designer & Visual Strategist',
  location: 'Lahore, Pakistan (Available for Worldwide & Remote Projects)',
  experience: '6+ Years of Professional Industry Experience',
  email: 'sufyanyounas277@gmail.com',
  portraitImage: '/src/assets/images/sufyan_designer_portrait_1790700689246.jpg',
  about: {
    headline: 'Transforming Business Ambition Into Irresistible Visual Realities',
    intro: 'I am Sufyan Ali, a 28-year-old passionate Senior Graphic Designer with over 6 years of hands-on experience crafting market-defining brand identities, luxury packaging, high-converting social campaigns, and tangible print collateral.',
    education: [
      {
        institution: 'National College of Arts (NCA), Lahore',
        degree: 'Bachelor of Design in Visual Communication Design',
        detail: 'Graduated with distinction; rigorous training in classical typography, semiotics, brand psychology, and prepress engineering at Pakistan’s most prestigious art institution.'
      },
      {
        institution: 'Beaconhouse National University (BNU) — School of Visual Arts & Design',
        degree: 'Post-Graduate Masterclasses in Contemporary Brand Architecture & Editorial Design',
        detail: 'Advanced study in dynamic visual identity systems, digital typography, and consumer packaging psychology.'
      },
      {
        institution: 'National University of Sciences & Technology (NUST) & Industry Workshops',
        degree: 'Visiting Design Mentor & Brand Strategy Advisor',
        detail: 'Conducted design thinking workshops on commercial print standards, packaging dielines, and international brand elevation.'
      }
    ],
    philosophy: 'My philosophy is rooted in intentional design: no fluff, no generic templates, and zero guesswork. Every curve, font pairing, and color choice is engineered to command authority, establish emotional connection, and drive commercial performance for my clients across Pakistan, the Middle East, UK, and North America.',
    achievements: [
      '6+ years of full-time professional graphic design experience across agencies and direct enterprise clients.',
      'Over 280+ projects successfully delivered on time with 99% 5-star client satisfaction.',
      'Comprehensive command over both physical print production (CMYK, pantone, foils, die-cutting) and digital media ecosystems.',
      'Direct one-on-one communication with zero agency middlemen.'
    ]
  },
  stats: [
    { value: '6+', label: 'Years Experience' },
    { value: '280+', label: 'Delivered Projects' },
    { value: '99%', label: 'Client Satisfaction' },
    { value: '100%', label: 'On-Time Delivery' }
  ],
  services: [
    'Brand Identity & Logo Design',
    'Packaging & Label Architecture',
    'Social Media Graphics & Ad Creatives',
    'Marketing & Print Collateral (Brochures & Billboards)',
    'Corporate Stationery & Merchandise Design',
    'UI/UX & Web Visual Design'
  ],
  tools: [
    'Adobe Illustrator',
    'Adobe Photoshop',
    'Adobe InDesign',
    'Figma',
    'Blender 3D',
    'Adobe After Effects'
  ]
};

export const UI_PROJECTS: UIProject[] = [
  {
    id: 'kinetix-desktop',
    title: 'Kinetix OS — Trading Terminal & Analytics',
    category: 'Fintech & SaaS',
    platform: 'Desktop',
    description: 'A modular, high-contrast workstation interface with customizable multi-window docking and chart telemetry.',
    deliverables: ['Design System Tokens', 'Figma Auto-Layout Components', 'Dark Mode UI Specs'],
    metrics: '< 16ms render latency',
    features: ['Instant hotkey command palette', 'Dynamic depth heatmaps', 'Sub-millisecond chart telemetry']
  },
  {
    id: 'aura-mobile',
    title: 'Aura — Mindful Biometrics & Circadian Rhythm',
    category: 'HealthTech & Mobile',
    platform: 'iOS',
    description: 'An ambient mobile companion translating daily wellness scores into micro-interactions.',
    deliverables: ['iOS Native App Architecture', 'Interactive Haptic Micro-Interactions'],
    metrics: '380k Active Users',
    features: ['Real-time HRV clock', 'Gentle breathing feedback', 'Privacy-first offline sync']
  }
];
