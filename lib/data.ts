export interface Programme {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string[];
  imageUrl: string;
  features: string[];
  objectives: string[];
  targetAudience: string[];
  benefits: string[];
  duration?: string;
  ageGroup?: string;
  priceInfo?: string;
  stats?: { label: string; value: string }[];
  cta: {
    text: string;
    link: string;
  };
}

export const programmesData: Programme[] = [
  {
    id: 1,
    slug: "abm-tech-club",
    title: "ABM TECH CLUB",
    subtitle: "Programme de formation en programmation, coding et robotique",
    shortDescription: "Formation en programmation, coding et robotique dans les écoles secondaires pour préparer aux métiers du futur.",
    fullDescription: [
      "Le programme ABM TECH CLUB est une initiative innovante conçue pour initier les élèves du secondaire aux technologies du futur. À travers des ateliers pratiques, des projets concrets et un accompagnement personnalisé, nous transformons les salles de classe en laboratoires d'innovation numérique.",
      "Notre approche pédagogique combine théorie et pratique avec un ratio de 30% de théorie et 70% de pratique. Chaque session est animée par des professionnels du secteur tech qui partagent leur expérience et orientent les élèves vers les carrières de demain.",
      "Nous croyons que chaque élève mérite d'acquérir des compétences numériques fondamentales pour réussir dans un monde de plus en plus digitalisé."
    ],
    imageUrl: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&h-800&fit=crop",
    features: [
      "Initiation à la programmation Python et JavaScript",
      "Ateliers de robotique avec kits LEGO Mindstorms et Arduino",
      "Développement d'applications mobiles basiques",
      "Concepts d'intelligence artificielle et machine learning adaptés",
      "Création de sites web interactifs",
      "Participation à des hackathons scolaires"
    ],
    objectives: [
      "Développer la pensée computationnelle et logique",
      "Initier aux langages de programmation modernes",
      "Stimuler la créativité et l'innovation technologique",
      "Préparer aux métiers du numérique et de la tech",
      "Favoriser l'inclusion numérique dans les milieux scolaires"
    ],
    targetAudience: [
      "Élèves du secondaire (12-18 ans)",
      "Établissements scolaires publics et privés",
      "Enseignants souhaitant se former au numérique"
    ],
    benefits: [
      "Certification ABM Tech Club délivrée en fin de programme",
      "Accès à une plateforme d'apprentissage en ligne",
      "Mentorat par des professionnels du secteur",
      "Participation à des compétitions nationales de robotique",
      "Portfolio de projets pour les études supérieures"
    ],
    duration: "Année scolaire (8 mois)",
    ageGroup: "12-18 ans",
    stats: [
      { label: "Élèves formés", value: "1500+" },
      { label: "Écoles partenaires", value: "45" },
      { label: "Taux de satisfaction", value: "98%" },
      { label: "Projets réalisés", value: "300+" }
    ],
    cta: {
      text: "Inscrire mon école",
      link: "/contact?programme=tech-club"
    }
  },
  {
    id: 2,
    slug: "abm-elite-internationale",
    title: "ABM ÉLITE INTERNATIONALE",
    subtitle: "Accompagnement vers l'internationalisation",
    shortDescription: "Programme d'accompagnement pour l'internationalisation des élèves, enseignants et professionnels.",
    fullDescription: [
      "ABM ÉLITE INTERNATIONALE est un programme complet d'accompagnement pour les personnes souhaitant poursuivre leurs études ou leur carrière à l'étranger. Notre équipe d'experts en mobilité internationale guide chaque bénéficiaire à travers toutes les étapes du processus.",
      "Nous collaborons avec un réseau de plus de 50 institutions partenaires à travers le monde, notamment au Canada, en France, en Belgique, aux États-Unis et dans plusieurs pays d'Afrique.",
      "Notre approche personnalisée tient compte des aspirations individuelles, du profil académique et des contraintes budgétaires de chaque candidat."
    ],
    imageUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&h=800&fit=crop",
    features: [
      "Recherche et sélection d'institutions adaptées au profil",
      "Préparation complète des dossiers académiques",
      "Assistance pour les procédures de visa et migration",
      "Préparation aux tests de langue (TOEFL, IELTS, DELF)",
      "Ateliers d'adaptation interculturelle",
      "Suivi post-admission et intégration"
    ],
    objectives: [
      "Faciliter l'accès à l'éducation internationale",
      "Accompagner dans les démarches administratives complexes",
      "Maximiser les chances d'admission dans les institutions ciblées",
      "Préparer à l'intégration socio-culturelle dans le pays d'accueil",
      "Créer un réseau d'anciens élèves à l'international"
    ],
    targetAudience: [
      "Élèves souhaitant poursuivre des études à l'étranger",
      "Enseignants désirant des opportunités de formation internationale",
      "Professionnels cherchant à développer leur carrière à l'étranger",
      "Institutions souhaitant des partenariats internationaux"
    ],
    benefits: [
      "Accès à notre réseau d'institutions partenaires",
      "Simulation de budget personnalisé",
      "Rencontres avec des anciens étudiants à l'étranger",
      "Assistance 24/7 durant les premières semaines d'arrivée",
      "Ateliers de préparation au choc culturel"
    ],
    stats: [
      { label: "Pays partenaires", value: "15+" },
      { label: "Admissions réussies", value: "850+" },
      { label: "Taux d'obtention de visa", value: "94%" },
      { label: "Institutions partenaires", value: "50+" }
    ],
    cta: {
      text: "Débuter mon projet international",
      link: "/contact?programme=elite-internationale"
    }
  },
  {
    id: 3,
    slug: "un-eleve-un-ordinateur",
    title: "UN ÉLÈVE, UN ORDINATEUR",
    subtitle: "Accès à la technologie pour tous",
    shortDescription: "Programme d'accès à des ordinateurs portables abordables pour élèves et enseignants.",
    fullDescription: [
      "Face à la fracture numérique qui affecte de nombreux élèves, ABM a lancé le programme 'UN ÉLÈVE, UN ORDINATEUR'. Cette initiative vise à fournir des ordinateurs portables reconditionnés de haute qualité à des prix accessibles.",
      "Nos ordinateurs sont soigneusement sélectionnés, reconditionnés et testés pour offrir des performances optimales. Provenant principalement du Canada, ils répondent aux normes techniques les plus strictes.",
      "Nous proposons un système de paiement échelonné adapté aux situations économiques diverses, permettant aux bénéficiaires d'utiliser l'appareil pendant la formation et d'en devenir propriétaires après paiement complet."
    ],
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=800&fit=crop",
    features: [
      "Ordinateurs portables reconditionnés importés du Canada",
      "Garantie de 12 mois sur tous les appareils",
      "Configuration adaptée aux besoins éducatifs",
      "Logiciels éducatifs pré-installés",
      "Accès à des ressources pédagogiques en ligne",
      "Service après-vente et support technique"
    ],
    objectives: [
      "Réduire la fracture numérique dans les milieux scolaires",
      "Faciliter l'accès aux ressources pédagogiques en ligne",
      "Promouvoir l'apprentissage numérique",
      "Soutenir les élèves défavorisés dans leur parcours éducatif",
      "Encourager la réutilisation responsable du matériel informatique"
    ],
    targetAudience: [
      "Élèves du primaire et secondaire",
      "Étudiants universitaires",
      "Enseignants et formateurs",
      "Écoles et institutions éducatives"
    ],
    benefits: [
      "Paiement flexible sans frais supplémentaires",
      "Possession définitive après paiement complet",
      "Formation à l'utilisation de l'ordinateur incluse",
      "Accès à la plateforme ABM d'apprentissage en ligne",
      "Mise à jour gratuite des logiciels éducatifs"
    ],
    priceInfo: "À partir de 150 000 FCFA avec des options de paiement sur 3 à 12 mois",
    stats: [
      { label: "Ordinateurs distribués", value: "2,500+" },
      { label: "Bénéficiaires", value: "2,800+" },
      { label: "Écoles équipées", value: "75" },
      { label: "Taux de satisfaction", value: "96%" }
    ],
    cta: {
      text: "Demander un ordinateur",
      link: "/contact?programme=un-eleve-un-ordinateur"
    }
  },
  {
    id: 4,
    slug: "education-award",
    title: "ABM EDUCATION AWARD",
    subtitle: "Reconnaissance de l'excellence éducative",
    shortDescription: "Programme de reconnaissance et de valorisation de l'excellence éducative.",
    fullDescription: [
      "Les ABM EDUCATION AWARDS sont des prix annuels visant à célébrer et récompenser l'excellence dans le domaine éducatif. Ces distinctions mettent en lumière les acteurs les plus méritants du système éducatif et créent des modèles inspirants pour la communauté.",
      "Notre jury, composé d'experts en éducation, d'universitaires et de personnalités du secteur privé, évalue les candidatures sur la base de critères rigoureux et transparents.",
      "La cérémonie de remise des prix est un événement majeur qui rassemble chaque année plus de 500 participants du monde éducatif, politique et économique."
    ],
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
    features: [
      "Cérémonie annuelle officielle de remise des prix",
      "Dotations financières importantes pour les lauréats",
      "Médiatisation nationale et internationale des lauréats",
      "Réseautage avec les leaders du secteur éducatif",
      "Programme de mentorat pour les lauréats",
      "Publication d'un livre des lauréats"
    ],
    objectives: [
      "Valoriser l'excellence dans le système éducatif",
      "Inspirer les autres acteurs par l'exemple des lauréats",
      "Créer une communauté d'élite éducative",
      "Promouvoir les meilleures pratiques pédagogiques",
      "Stimuler l'innovation dans l'enseignement"
    ],
    targetAudience: [
      "Enseignants exceptionnels",
      "Élèves brillants en sciences et mathématiques",
      "Directeurs d'écoles innovantes",
      "Établissements scolaires performants",
      "Éducateurs ayant réalisé des projets remarquables"
    ],
    benefits: [
      "Reconnaissance nationale et internationale",
      "Dotation financière (1 à 5 millions FCFA selon la catégorie)",
      "Opportunités de formation supplémentaires",
      "Mentorat par des experts internationaux",
      "Mise en réseau avec des institutions prestigieuses"
    ],
    stats: [
      { label: "Catégories de prix", value: "7" },
      { label: "Lauréats depuis 2018", value: "42" },
      { label: "Montant total des dotations", value: "85M FCFA" },
      { label: "Candidatures annuelles", value: "500+" }
    ],
    cta: {
      text: "Postuler ou nominer",
      link: "/contact?programme=education-award"
    }
  },
  {
    id: 5,
    slug: "bourse-mukwege",
    title: "BOURSE EXCELLENT DENIS MUKWEGE",
    subtitle: "Persévérance et engagement malgré l'adversité",
    shortDescription: "Programme inspiré des valeurs du Dr Denis Mukwege, Prix Nobel de la Paix 2018.",
    fullDescription: [
      "Inspirée des valeurs de résilience et de compassion du Dr Denis Mukwege, Prix Nobel de la Paix 2018, cette bourse soutient des étudiants ayant fait preuve d'une persévérance exceptionnelle face à des circonstances difficiles.",
      "Le Dr Mukwege, surnommé 'l'homme qui répare les femmes', a dédié sa vie à aider les survivantes de violences sexuelles en République Démocratique du Congo. Notre bourse perpétue son esprit en soutenant ceux qui, malgré les traumatismes et difficultés, poursuivent leurs rêves éducatifs.",
      "Les bénéficiaires peuvent utiliser cette bourse pour étudier en Afrique ou à l'étranger, dans l'institution de leur choix, selon leur projet académique et professionnel."
    ],
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=800&fit=crop",
    features: [
      "Bourse complète couvrant frais de scolarité et de subsistance",
      "Accompagnement psychologique si nécessaire",
      "Mentorat personnalisé tout au long du parcours",
      "Intégration dans le réseau des boursiers Mukwege",
      "Possibilité d'étudier en Afrique ou à l'international",
      "Participation aux événements de la communauté ABM"
    ],
    objectives: [
      "Soutenir les étudiants ayant surmonté des traumatismes graves",
      "Promouvoir la résilience et la persévérance académique",
      "Honorer l'héritage humanitaire du Dr Denis Mukwege",
      "Créer une communauté de survivants inspirants",
      "Investir dans l'éducation comme outil de reconstruction"
    ],
    targetAudience: [
      "Étudiants ayant survécu à des violences sexuelles",
      "Jeunes affectés par des conflits armés",
      "Orphelins poursuivant des études supérieures",
      "Étudiants de milieux socio-économiques extrêmement défavorisés",
      "Personnes ayant surmonté des traumatismes majeurs"
    ],
    benefits: [
      "Bourse complète (jusqu'à 10 000 USD par an)",
      "Accès à des services de soutien psychologique",
      "Formation en leadership et développement personnel",
      "Stage professionnel dans des organisations partenaires",
      "Participation à la conférence annuelle des boursiers"
    ],
    stats: [
      { label: "Boursiers soutenus", value: "28" },
      { label: "Pays représentés", value: "8" },
      { label: "Taux de réussite académique", value: "100%" },
      { label: "Montant total attribué", value: "450K USD" }
    ],
    cta: {
      text: "Découvrir les critères d'éligibilité",
      link: "/contact?programme=bourse-mukwege"
    }
  }
];