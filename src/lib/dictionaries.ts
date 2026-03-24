export type Locale = 'lv' | 'en';

export interface Dictionary {
  // Navigation
  nav: {
    about: string;
    services: string;
    benefits: string;
    solutions: string;
    why: string;
    contact: string;
    contactBtn: string;
  };

  // Hero section
  hero: {
    badge: string;
    heading1: string;
    heading2: string;
    heading3: string;
    subheading: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
    stat4Value: string;
    stat4Label: string;
  };

  // About section
  about: {
    badge: string;
    heading: string;
    headingHighlight: string;
    description: string;
    cap1Title: string;
    cap1Desc: string;
    cap2Title: string;
    cap2Desc: string;
    cap3Title: string;
    cap3Desc: string;
    cap4Title: string;
    cap4Desc: string;
    cap5Title: string;
    cap5Desc: string;
    cap6Title: string;
    cap6Desc: string;
  };

  // Services section
  services: {
    badge: string;
    heading: string;
    headingHighlight: string;
    description: string;
    service1Title: string;
    service1Desc: string;
    service1Tags: string[];
    service2Title: string;
    service2Desc: string;
    service2Tags: string[];
    service3Title: string;
    service3Desc: string;
    service3Tags: string[];
    service4Title: string;
    service4Desc: string;
    service4Tags: string[];
    service5Title: string;
    service5Desc: string;
    service5Tags: string[];
    service6Title: string;
    service6Desc: string;
    service6Tags: string[];
    service7Title: string;
    service7Desc: string;
    service7Tags: string[];
    service8Title: string;
    service8Desc: string;
    service8Tags: string[];
  };

  // Values section
  values: {
    badge: string;
    heading: string;
    headingHighlight: string;
    description: string;
    value1Title: string;
    value1Desc: string;
    value1Metric: string;
    value1MetricLabel: string;
    value2Title: string;
    value2Desc: string;
    value2Metric: string;
    value2MetricLabel: string;
    value3Title: string;
    value3Desc: string;
    value3Metric: string;
    value3MetricLabel: string;
    value4Title: string;
    value4Desc: string;
    value4Metric: string;
    value4MetricLabel: string;
    value5Title: string;
    value5Desc: string;
    value5Metric: string;
    value5MetricLabel: string;
    value6Title: string;
    value6Desc: string;
    value6Metric: string;
    value6MetricLabel: string;
  };

  // Showcase section
  showcase: {
    badge: string;
    heading: string;
    headingHighlight: string;
    description: string;
    item1Title: string;
    item1Desc: string;
    item2Title: string;
    item2Desc: string;
    item3Title: string;
    item3Desc: string;
    viewDetails: string;
    newRequest: string;
    aiClassification: string;
    automaticProcessing: string;
    qualityCheck: string;
    completed: string;
    leadScore: string;
    probability: string;
    aiRecommendations: string;
    sendFollowUp: string;
    offerDemo: string;
    addPremium: string;
  };

  // WhyUs section
  whyUs: {
    badge: string;
    heading: string;
    headingHighlight: string;
    description: string;
    reason1Title: string;
    reason1Desc: string;
    reason2Title: string;
    reason2Desc: string;
    reason3Title: string;
    reason3Desc: string;
    reason4Title: string;
    reason4Desc: string;
    reason5Title: string;
    reason5Desc: string;
    reason6Title: string;
    reason6Desc: string;
  };

  // CTA section
  cta: {
    badge: string;
    heading1: string;
    heading2: string;
    description: string;
    ctaPrimary: string;
    ctaEmail: string;
    trustConsultation: string;
    trust24h: string;
    trustNDA: string;
  };

  // Footer
  footer: {
    description: string;
    linksTitle: string;
    link1: string;
    link2: string;
    link3: string;
    link4: string;
    link5: string;
    contactTitle: string;
    email: string;
    location: string;
    companyName: string;
    regNumber: string;
    copyright: string;
    systemActive: string;
  };
}

const dictionaries: Record<Locale, Dictionary> = {
  lv: {
    // Navigation
    nav: {
      about: 'Par mums',
      services: 'Pakalpojumi',
      benefits: 'Ieguvumi',
      solutions: 'Risinājumi',
      why: 'Kāpēc mēs',
      contact: 'Kontakti',
      contactBtn: 'Sazināties',
    },

    // Hero
    hero: {
      badge: 'AI & Automatizācija',
      heading1: 'Veidojam',
      heading2: 'nākotnes',
      heading3: 'uzņēmumus',
      subheading: 'AI risinājumi, vadītāju dashboardi un procesu automatizācija, kas ļauj vienā mēnesī paveikt to, kam citkārt vajadzīgi divi gadi.',
      ctaPrimary: 'Sākt sarunu',
      ctaSecondary: 'Uzzināt vairāk',
      scroll: 'Scroll',
      stat1Value: '24x',
      stat1Label: 'Ātrāka izpilde',
      stat2Value: '150+',
      stat2Label: 'Automatizēti procesi',
      stat3Value: '99.9%',
      stat3Label: 'Sistēmu uptime',
      stat4Value: '10x',
      stat4Label: 'ROI pieaugums',
    },

    // About
    about: {
      badge: 'Ko mēs darām',
      heading: 'Tehnoloģijas, kas',
      headingHighlight: 'pārveido',
      description: 'Mēs radām AI risinājumus, vadītāju command centrus, dashboardus un automatizētas sistēmas, kas jūsu uzņēmumu padara neapturamu.',
      cap1Title: 'Dizains & Maketēšana',
      cap1Desc: 'Premium vizuālais dizains un UI/UX, kas komunicē jūsu vērtību.',
      cap2Title: 'AI Risinājumi',
      cap2Desc: 'Mākslīgais intelekts, kas strādā jūsu biznesa interesēs 24/7.',
      cap3Title: 'Vadītāju Dashboardi',
      cap3Desc: 'Reāllaika datu paneļi, kas dod pilnu biznesa ainu vienā skatā.',
      cap4Title: 'Command Centri',
      cap4Desc: 'Centralizētas vadības sistēmas visai jūsu organizācijai.',
      cap5Title: 'Sales Automatizācija',
      cap5Desc: 'Pārdošanas procesi, kas strādā ātri, gudri un bez liekas piepūles.',
      cap6Title: 'Procesu Optimizācija',
      cap6Desc: 'Administratīvo rutīnu eliminācija ar gudru automatizāciju.',
    },

    // Services
    services: {
      badge: 'Pakalpojumi',
      heading: 'Pilns arsenāls jūsu',
      headingHighlight: 'izaugsmei',
      description: 'No dizaina līdz AI — katrs pakalpojums veidots, lai jūsu uzņēmums darbotos nākamajā līmenī.',
      service1Title: 'Dizains un maketēšana',
      service1Desc: 'Premium vizuālā identitāte, UI/UX dizains un mārketinga materiāli, kas izceļ jūsu zīmolu tirgū.',
      service1Tags: ['UI/UX', 'Branding', 'Web dizains'],
      service2Title: 'AI risinājumi uzņēmumiem',
      service2Desc: 'Individuāli mākslīgā intelekta rīki, kas analizē, prognozē un automatizē jūsu biznesa procesus.',
      service2Tags: ['Machine Learning', 'NLP', 'Prognozēšana'],
      service3Title: 'Vadītāju dashboardi',
      service3Desc: 'Reāllaika datu paneļi ar pilnu biznesa ainu — pārdošana, finanses, operācijas vienā skatā.',
      service3Tags: ['Reāllaika dati', 'KPI', 'Vizualizācija'],
      service4Title: 'Command centri',
      service4Desc: 'Centralizētas vadības sistēmas, kas apvieno visus datu avotus un dod pilnu kontroli.',
      service4Tags: ['Kontrole', 'Integrācija', 'Monitorings'],
      service5Title: 'Sales automatizācija',
      service5Desc: 'Automatizēti pārdošanas procesi — no lead ģenerēšanas līdz deal slēgšanai bez manuālas piepūles.',
      service5Tags: ['CRM', 'Pipeline', 'Leads'],
      service6Title: 'Administratīvo procesu optimizācija',
      service6Desc: 'Rutīnas uzdevumu automatizācija — dokumenti, atskaites, komunikācija, uzdevumu vadība.',
      service6Tags: ['Workflow', 'Dokumenti', 'Atskaites'],
      service7Title: 'Iekšējie AI rīki komandām',
      service7Desc: 'Gudri iekšējie asistenti un rīki, kas palīdz katram komandas dalībniekam strādāt efektīvāk.',
      service7Tags: ['AI asistenti', 'Produktivitāte', 'Komandas'],
      service8Title: 'Individuāli automatizācijas risinājumi',
      service8Desc: 'Pēc pasūtījuma veidotas sistēmas, kas risina tieši jūsu biznesa unikālās vajadzības.',
      service8Tags: ['Custom', 'API', 'Integrācija'],
    },

    // Values
    values: {
      badge: 'Ieguvumi',
      heading: 'Ko iegūst',
      headingHighlight: 'jūsu bizness',
      description: 'Katrs mūsu risinājums ir veidots ar vienu mērķi — dot jums nesamērīgu priekšrocību.',
      value1Title: 'Mazāk haosa',
      value1Desc: 'Skaidra struktūra, automatizēti procesi un sistēmas, kas novērš jebkādu nevajadzīgu haosu jūsu uzņēmumā.',
      value1Metric: '-85%',
      value1MetricLabel: 'mazāk manuālu kļūdu',
      value2Title: 'Ātrāka lēmumu pieņemšana',
      value2Desc: 'Reāllaika dati un AI analītika jūsu rokās — pieņemiet pareizos lēmumus sekunžu, nevis dienu laikā.',
      value2Metric: '10x',
      value2MetricLabel: 'ātrāki lēmumi',
      value3Title: 'Mazāk manuālu darbību',
      value3Desc: 'Automatizācija pārņem rutīnu — jūsu komanda fokusējas uz to, kas tiešām rada vērtību.',
      value3Metric: '-70%',
      value3MetricLabel: 'mazāk rutīnas darbu',
      value4Title: 'Gudrāka pārdošana',
      value4Desc: 'AI identificē labākās iespējas, automatizē follow-up un palīdz slēgt darījumus ātrāk.',
      value4Metric: '+45%',
      value4MetricLabel: 'konversijas pieaugums',
      value5Title: 'Efektīvāka komanda',
      value5Desc: 'Katrs komandas dalībnieks ar AI rīkiem paveic vairāk, ātrāk un ar augstāku kvalitāti.',
      value5Metric: '3x',
      value5MetricLabel: 'produktivitātes pieaugums',
      value6Title: 'Milzīgs produktivitātes lēciens',
      value6Desc: 'Vienā mēnesī paveiciet to, kam iepriekš bija vajadzīgi divi gadi. Tas nav solījums — tā ir realitāte.',
      value6Metric: '24x',
      value6MetricLabel: 'ātrāka izpilde',
    },

    // Showcase
    showcase: {
      badge: 'Risinājumi darbībā',
      heading: 'Ieskats',
      headingHighlight: 'nākotnes sistēmās',
      description: 'Šādi izskatās mūsu veidotie risinājumi — gudri, vizuāli un pilnībā funkcionāli.',
      item1Title: 'Vadītāja Command Center',
      item1Desc: 'Reāllaika biznesa vadības panelis ar AI prognozēm un KPI monitoringu.',
      item2Title: 'AI Pārdošanas Asistents',
      item2Desc: 'Automatizēts pārdošanas process no lead kvalifikācijas līdz deal noslēgšanai.',
      item3Title: 'Procesu Automatizācija',
      item3Desc: 'Pilnībā automatizēti administratīvie procesi ar gudru uzdevumu sadali.',
      viewDetails: 'Apskatīt detaļas',
      newRequest: 'Jauns pieprasījums',
      aiClassification: 'AI Klasifikācija',
      automaticProcessing: 'Automātiska apstrāde',
      qualityCheck: 'Kvalitātes pārbaude',
      completed: 'Pabeigts ✓',
      leadScore: 'Lead Score',
      probability: 'Varbūtība',
      aiRecommendations: 'AI Ieteikumi',
      sendFollowUp: 'Nosūtīt follow-up e-pastu',
      offerDemo: 'Piedāvāt demo sesiju',
      addPremium: 'Pievienot premium paketi',
    },

    // WhyUs
    whyUs: {
      badge: 'Kāpēc mēs',
      heading: 'Kāpēc izvēlēties',
      headingHighlight: 'Global WM',
      description: 'Mēs neesam parasta aģentūra. Mēs esam jūsu tehnoloģiskais partneris, kas būvē nākotni.',
      reason1Title: 'Uzticamība',
      reason1Desc: 'Mēs nesolām to, ko nevaram izdarīt. Katrs projekts ir rezultāts, nevis eksperiments.',
      reason2Title: 'Premium pieeja',
      reason2Desc: 'Katrs risinājums ir veidots ar augstākajiem standartiem — no dizaina līdz kodam.',
      reason3Title: 'Praktiski risinājumi',
      reason3Desc: 'Ne tikai skaists dizains — katrs rīks tiešām risina reālu biznesa problēmu.',
      reason4Title: 'AI ar biznesa pielietojumu',
      reason4Desc: 'Mūsu AI risinājumi nav teorētiski — tie strādā un nes reālu peļņu jūsu uzņēmumam.',
      reason5Title: 'Ātrums',
      reason5Desc: 'No idejas līdz gatavam produktam ātrāk nekā jebkad iepriekš — jo laiks ir nauda.',
      reason6Title: 'Nesamērīgi vairāk',
      reason6Desc: 'Mūsu risinājumi ļauj ar mazāku komandu paveikt to, kam parasti vajag veselu nodaļu.',
    },

    // CTA
    cta: {
      badge: 'Gatavi sākt?',
      heading1: 'Jūsu uzņēmuma',
      heading2: 'nākotne sākas šodien',
      description: 'Sazinieties ar mums un uzziniet, kā AI un automatizācija var transformēt jūsu biznesu. Pirmā konsultācija — bez maksas.',
      ctaPrimary: 'Sākt sarunu',
      ctaEmail: 'klavs@globalwolfmotors.com',
      trustConsultation: 'Bezmaksas konsultācija',
      trust24h: 'Ātra atbilde 24h',
      trustNDA: 'NDA pēc pieprasījuma',
    },

    // Footer
    footer: {
      description: 'Veidojam nākotnes uzņēmumus ar AI, automatizāciju un premium dizainu. Jūsu biznesa izaugsme ir mūsu misija.',
      linksTitle: 'Navigācija',
      link1: 'Par mums',
      link2: 'Pakalpojumi',
      link3: 'Ieguvumi',
      link4: 'Risinājumi',
      link5: 'Kontakti',
      contactTitle: 'Kontakti',
      email: 'klavs@globalwolfmotors.com',
      location: 'Rīga, Latvija',
      companyName: 'SIA GLOBAL WOLF MOTORS',
      regNumber: 'Reg. Nr. 42103108904',
      copyright: 'Visas tiesības aizsargātas.',
      systemActive: 'Sistēmas aktīvas',
    },
  },

  en: {
    // Navigation
    nav: {
      about: 'About',
      services: 'Services',
      benefits: 'Benefits',
      solutions: 'Solutions',
      why: 'Why Us',
      contact: 'Contact',
      contactBtn: 'Get in Touch',
    },

    // Hero
    hero: {
      badge: 'AI & Automation',
      heading1: 'Building',
      heading2: 'the future',
      heading3: 'of business',
      subheading: 'AI solutions, executive dashboards and process automation that deliver in one month what typically takes two years.',
      ctaPrimary: 'Start Conversation',
      ctaSecondary: 'Learn More',
      scroll: 'Scroll',
      stat1Value: '24x',
      stat1Label: 'Faster Execution',
      stat2Value: '150+',
      stat2Label: 'Automated Processes',
      stat3Value: '99.9%',
      stat3Label: 'System Uptime',
      stat4Value: '10x',
      stat4Label: 'ROI Growth',
    },

    // About
    about: {
      badge: 'What We Do',
      heading: 'Technology that',
      headingHighlight: 'transforms',
      description: 'We create AI solutions, executive command centers, dashboards and automated systems that make your business unstoppable.',
      cap1Title: 'Design & UI/UX',
      cap1Desc: 'Premium visual design and UI/UX that communicates your value.',
      cap2Title: 'AI Solutions',
      cap2Desc: 'Artificial intelligence working in your business interests 24/7.',
      cap3Title: 'Executive Dashboards',
      cap3Desc: 'Real-time data panels that give you the complete business picture at a glance.',
      cap4Title: 'Command Centers',
      cap4Desc: 'Centralized management systems for your entire organization.',
      cap5Title: 'Sales Automation',
      cap5Desc: 'Sales processes that work fast, smart and effortlessly.',
      cap6Title: 'Process Optimization',
      cap6Desc: 'Eliminate administrative routines with intelligent automation.',
    },

    // Services
    services: {
      badge: 'Services',
      heading: 'Complete arsenal for your',
      headingHighlight: 'growth',
      description: 'From design to AI — every service is built to take your business to the next level.',
      service1Title: 'Design and UI/UX',
      service1Desc: 'Premium visual identity, UI/UX design and marketing materials that make your brand stand out.',
      service1Tags: ['UI/UX', 'Branding', 'Web Design'],
      service2Title: 'AI Solutions for Businesses',
      service2Desc: 'Custom artificial intelligence tools that analyze, forecast and automate your business processes.',
      service2Tags: ['Machine Learning', 'NLP', 'Forecasting'],
      service3Title: 'Executive Dashboards',
      service3Desc: 'Real-time data panels with complete business view — sales, finance, operations in one place.',
      service3Tags: ['Real-time Data', 'KPI', 'Visualization'],
      service4Title: 'Command Centers',
      service4Desc: 'Centralized management systems that unite all data sources and provide complete control.',
      service4Tags: ['Control', 'Integration', 'Monitoring'],
      service5Title: 'Sales Automation',
      service5Desc: 'Automated sales processes — from lead generation to deal closing without manual effort.',
      service5Tags: ['CRM', 'Pipeline', 'Leads'],
      service6Title: 'Administrative Process Optimization',
      service6Desc: 'Routine task automation — documents, reports, communication, task management.',
      service6Tags: ['Workflow', 'Documents', 'Reports'],
      service7Title: 'Internal AI Tools for Teams',
      service7Desc: 'Smart internal assistants and tools that help every team member work more efficiently.',
      service7Tags: ['AI Assistants', 'Productivity', 'Teams'],
      service8Title: 'Custom Automation Solutions',
      service8Desc: 'Tailor-made systems that solve your unique business needs.',
      service8Tags: ['Custom', 'API', 'Integration'],
    },

    // Values
    values: {
      badge: 'Benefits',
      heading: 'What your business',
      headingHighlight: 'gains',
      description: 'Every solution we create has one goal — give you an unfair advantage.',
      value1Title: 'Less Chaos',
      value1Desc: 'Clear structure, automated processes and systems that prevent unnecessary chaos in your organization.',
      value1Metric: '-85%',
      value1MetricLabel: 'fewer manual errors',
      value2Title: 'Faster Decision Making',
      value2Desc: 'Real-time data and AI analytics in your hands — make the right decisions in seconds, not days.',
      value2Metric: '10x',
      value2MetricLabel: 'faster decisions',
      value3Title: 'Less Manual Work',
      value3Desc: 'Automation takes over routine work — your team focuses on what truly creates value.',
      value3Metric: '-70%',
      value3MetricLabel: 'less routine work',
      value4Title: 'Smarter Sales',
      value4Desc: 'AI identifies best opportunities, automates follow-ups and helps close deals faster.',
      value4Metric: '+45%',
      value4MetricLabel: 'conversion increase',
      value5Title: 'More Effective Team',
      value5Desc: 'Every team member with AI tools accomplishes more, faster and with higher quality.',
      value5Metric: '3x',
      value5MetricLabel: 'productivity increase',
      value6Title: 'Massive Productivity Leap',
      value6Desc: 'In one month accomplish what previously took two years. Not a promise — a reality.',
      value6Metric: '24x',
      value6MetricLabel: 'faster execution',
    },

    // Showcase
    showcase: {
      badge: 'Solutions in Action',
      heading: 'Glimpse into',
      headingHighlight: 'future systems',
      description: 'This is what our solutions look like — smart, visual and fully functional.',
      item1Title: 'Executive Command Center',
      item1Desc: 'Real-time business management dashboard with AI forecasts and KPI monitoring.',
      item2Title: 'AI Sales Assistant',
      item2Desc: 'Automated sales process from lead qualification to deal closing.',
      item3Title: 'Process Automation',
      item3Desc: 'Fully automated administrative processes with intelligent task distribution.',
      viewDetails: 'View Details',
      newRequest: 'New Request',
      aiClassification: 'AI Classification',
      automaticProcessing: 'Automatic Processing',
      qualityCheck: 'Quality Check',
      completed: 'Completed ✓',
      leadScore: 'Lead Score',
      probability: 'Probability',
      aiRecommendations: 'AI Recommendations',
      sendFollowUp: 'Send Follow-up Email',
      offerDemo: 'Offer Demo Session',
      addPremium: 'Add Premium Package',
    },

    // WhyUs
    whyUs: {
      badge: 'Why Us',
      heading: 'Why choose',
      headingHighlight: 'Global WM',
      description: 'We\'re not a typical agency. We\'re your technology partner building the future.',
      reason1Title: 'Reliability',
      reason1Desc: 'We don\'t promise what we can\'t deliver. Every project is a result, not an experiment.',
      reason2Title: 'Premium Approach',
      reason2Desc: 'Every solution is built to the highest standards — from design to code.',
      reason3Title: 'Practical Solutions',
      reason3Desc: 'Not just beautiful design — every tool actually solves a real business problem.',
      reason4Title: 'AI with Business Application',
      reason4Desc: 'Our AI solutions aren\'t theoretical — they work and bring real profit to your business.',
      reason5Title: 'Speed',
      reason5Desc: 'From idea to finished product faster than ever — because time is money.',
      reason6Title: 'Disproportionate Results',
      reason6Desc: 'Our solutions let a small team accomplish what typically requires an entire department.',
    },

    // CTA
    cta: {
      badge: 'Ready to Start?',
      heading1: 'Your Business\'s',
      heading2: 'Future Starts Today',
      description: 'Contact us and learn how AI and automation can transform your business. First consultation is free.',
      ctaPrimary: 'Start Conversation',
      ctaEmail: 'klavs@globalwolfmotors.com',
      trustConsultation: 'Free Consultation',
      trust24h: 'Fast 24h Response',
      trustNDA: 'NDA on Request',
    },

    // Footer
    footer: {
      description: 'Building future businesses with AI, automation and premium design. Your business growth is our mission.',
      linksTitle: 'Navigation',
      link1: 'About',
      link2: 'Services',
      link3: 'Benefits',
      link4: 'Solutions',
      link5: 'Contact',
      contactTitle: 'Contact',
      email: 'klavs@globalwolfmotors.com',
      location: 'Riga, Latvia',
      companyName: 'SIA GLOBAL WOLF MOTORS',
      regNumber: 'Reg. Nr. 42103108904',
      copyright: 'All rights reserved.',
      systemActive: 'Systems Active',
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries.lv;
}
