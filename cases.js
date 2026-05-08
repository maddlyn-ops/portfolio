// Case study data — written as plain JS object exported to window
// to be consumed by app.jsx
window.CASES = [
  {
    id: "bfm-app",
    volet: "craft",
    n: "01",
    company: "CMA Média",
    period: "2024–2025",
    role: "Lead designer",
    status: "Livré",
    title: "Refonte App BFM",
    teaser: "Une app utilisée par 17M de personnes par mois, refondue sous le regard du nouvel actionnaire. Quatre projets en un.",
    quote: "En 2024, on m'a confié la refonte de l'app BFM. Sur le papier, c'était un projet produit. En réalité, c'était quatre projets en un, sous le regard du nouvel actionnaire, et sans le droit de se louper.",
    metrics: [
      { value: "+5%", label: "visites moyennes (objectif initial : +1%)" },
      { value: "+42s", label: "temps de visite moyen" },
      { value: "+5pts", label: "consommation de shorts vidéo" },
    ],
    sections: [
      {
        h: "Le contexte",
        body: [
          "Une refonte produit avec trois exigences chiffrées : +1% d'audiences sur l'année (objectif business), une mise en avant claire de l'actu chaude et des shorts vidéo (objectif produit), un confort de lecture aligné sur les standards du marché.",
          "Au-dessus, une bascule de marque. L'app devait passer d'une chaîne unique à une plateforme d'info agrégée qui rassemblait pour la première fois plusieurs chaînes du groupe dans une seule expérience.",
          "Et au-dessus encore, un enjeu politique. Premier projet à sortir sous la bannière du nouveau groupe, après le rachat. Tout changeait de manière visible : nom, logo, DA, promesse. On n'avait pas le droit de rater l'atterrissage.",
        ],
      },
      {
        h: "Le problème",
        body: [
          "Comment refondre une app utilisée par 17M de personnes par mois, en faisant tenir ensemble trois exigences qui se contredisent : densifier l'offre éditoriale sans sacrifier la lisibilité, mettre en avant l'actu chaude et la vidéo courte sans masquer la profondeur du catalogue, imposer une nouvelle DA sans perdre les utilisateurs dans leurs repères.",
          "Le tout sur une home dont le moindre déplacement de bloc devient un sujet politique en interne.",
        ],
      },
      {
        h: "Mon rôle",
        body: [
          "Lead designer, en binôme avec la PM senior de l'app. Discovery menée à deux, scope owné conjointement. J'ai porté l'ensemble des livrables côté app (refonte structurelle complète : home, articles, navigation, vidéo, shorts), et j'ai été responsable des impacts collatéraux côté web : bascule typo, palette couleur, et portage des adaptations vers le web.",
          "Le projet a duré un an au total, avec 5 à 6 mois de discovery et 6 à 7 mois de delivery parallélisé avec la fin de la discovery (la réalité terrain plutôt que le manuel agile).",
        ],
      },
      {
        h: "Discovery",
        image: "./assets/cases/discovery-bfm.png",
        imageAlt: "Trois plans de discovery menés en parallèle sur le projet BFM",
        body: [
          "5 à 6 mois de structuration progressive de la pensée produit. Trois plans en parallèle :",
        ],
        list: [
          "Cadrage des problématiques. Identifier les sujets structurants (fidélisation faible, vidéo courte sous-exploitée, agrégation pas lisible, confort de lecture en deçà du marché) et les hiérarchiser.",
          "Exploration des parcours et des solutions. Pour chaque problème prioritaire, plusieurs hypothèses confrontées, vue système gardée à chaque étape.",
          "Validation utilisateurs. 15 interviews qualitatives, 1 sondage quanti sur 1 026 Français, 1 focus group sur 10 utilisateurs réguliers.",
        ],
        after: "Quand le scope creep s'est intensifié et que la direction a fait pivoter plusieurs fois les directives, on a pu ré-articuler le puzzle à chaque fois sans perdre la cohérence.",
      },
      {
        h: "Quatre décisions structurantes",
        sub: [
          { t: "1. L'ordre des blocs sur la home", b: "Personne ne voulait supprimer son bloc, alors que les données montraient que personne ne descendait jusqu'au bas. Ma position : si personne n'allait au bout, l'ordre des derniers blocs était secondaire. Ce qui comptait, c'était les 3 ou 4 premiers blocs et leur capacité à raconter l'identité éditoriale en une seule scroll. Le débat s'est déplacé : de \"où est mon bloc\" vers \"comment maximiser la valeur des premiers écrans\"." },
          { t: "2. Le menu burger : accepter de bouger les repères", b: "L'agrégation multi-chaînes changeait fondamentalement la nature du menu. Le conserver à l'identique aurait été incohérent avec la nouvelle promesse. J'ai porté une refonte complète, structurée par logique d'usage et non par historique d'organisation interne." },
          { t: "3. La couleur : tenir la subtilité face à la pression", b: "Pression interne forte pour aller dans la direction colorée d'un concurrent. Ma position : la couleur joue deux rôles, et seulement deux. Branding (couleur de marque, présente mais subtile, dispersée sans saturer) et sémantique (rouge pour l'alerte, l'actu chaude, la notification ; bleu pour les actualités classiques). Un usage utilitaire, pas décoratif." },
          { t: "4. Mettre en avant l'actu chaude sans noyer la profondeur", b: "Hiérarchiser par moment de consultation, pas par importance éditoriale absolue. L'actu chaude prend la priorité visuelle dans les premiers écrans, mais les formats analyse et profondeur ont leur entrée propre, leur rythme, leur place légitime dans le scroll." },
        ],
      },
      {
        h: "Bilan",
        balance: {
          left: { title: "Pour le produit et la boîte", items: [
            "3 objectifs business et produit atteints ou dépassés (+5% pour un objectif de +1%, +42s, +5pts shorts)",
            "Bascule de marque faite sans crise utilisateur ni crise interne",
            "Première vitrine produit du nouveau groupe post-rachat, signal fort sur la qualité",
          ]},
          right: { title: "Pour ma pratique", items: [
            "Une discovery structurée n'évite pas le scope creep, elle permet de le tenir en gardant la cohérence à chaque pivot",
            "Une refonte multi-enjeux se gagne sur les arbitrages, pas sur les écrans : couleur, ordre des blocs, menu, ont eu plus d'impact que la finition graphique",
            "Le contexte politique est une donnée de design, pas un parasite",
          ]},
        },
      },
    ],
  },
  {
    id: "rmc-sport",
    volet: "craft",
    n: "02",
    company: "CMA Média",
    period: "2024",
    role: "Lead designer",
    status: "Livré",
    title: "Réinternalisation App Sport",
    teaser: "4 jours pour reprendre une app entière, l'aligner sur les contraintes du socle technique, et la livrer dans un état exploitable par la tech.",
    quote: "4 jours pour reprendre une app entière, en l'alignant sur les contraintes du socle. Pas le projet le plus glamour de mon parcours. Mais celui qui a posé ma crédibilité auprès des leads tech.",
    sections: [
      {
        h: "Le contexte",
        body: [
          "L'app Sport était jusque-là développée par un prestataire externe. La décision a été prise de la réinternaliser pour reprendre la main sur le produit, l'aligner avec le reste de l'écosystème et faciliter la maintenance long terme.",
          "Quand j'ai pris le sujet, l'équipe design avait déjà commencé à poser une direction artistique générale. Mais le travail n'était pas exploitable côté tech : contraintes du socle non intégrées, incohérences entre écrans, livrables non formatés pour les devs internes.",
          "Le problème : on avait des délais courts. Si on ne reprenait pas tout, on partait en prod avec un produit qui allait casser à l'implémentation.",
        ],
      },
      {
        h: "Ce que j'ai fait",
        body: ["J'ai repris l'intégralité de l'app en 4 jours. Toute l'app, tous les écrans, chrono en main."],
        list: [
          "Réintégration complète des contraintes du socle technique (composants partagés, règles d'architecture front, dépendances avec les autres produits du groupe).",
          "Mise en cohérence visuelle : alignement des composants, harmonisation des espacements et des hiérarchies, suppression des incohérences héritées.",
          "Responsivité des maquettes : déclinaison sur mobile et tablette, gestion des breakpoints, adaptation des grilles et des hiérarchies.",
          "Reformatage des livrables pour les devs internes : maquettes utilisables directement, specs claires, gestion des états et des cas à la marge.",
        ],
      },
      {
        h: "Ce que ça raconte de moi",
        body: [
          "Ce n'est pas le projet sur lequel j'ai inventé quelque chose. C'est le projet où j'ai prouvé que je sais reprendre une app en feu, vite, et la livrer dans un état exploitable par la tech.",
          "Et c'est aussi le projet qui a posé ma crédibilité auprès des leads tech sur la suite. Quand la refonte BFM est arrivée six mois plus tard, je n'avais plus à démontrer que je savais penser en intégrant les contraintes du socle. C'était acquis.",
        ],
      },
    ],
  },
  {
    id: "sso",
    volet: "craft",
    n: "03",
    company: "CMA Média",
    period: "2024–en cours",
    role: "Lead designer",
    status: "WIP",
    title: "Login multi-marques (SSO)",
    teaser: "Compte unique pour 5 marques média + 1 marque streaming, sur 4 plateformes, avec une promesse cross-produits et un enjeu data côté régie.",
    quote: "Concevoir un compte unique pour 5 marques média et 1 marque streaming, sur 4 plateformes, avec une promesse cross-produits côté utilisateur et un enjeu data côté régie. Et le faire en tenant la rigueur RGPD.",
    sections: [
      {
        h: "Le contexte",
        body: [
          "Cinq marques média plus une marque streaming. Jusqu'ici, chacune fonctionnait avec ses propres logiques d'identification, sans pont entre publishing et streaming, et sans vue unifiée de l'utilisateur.",
          "L'enjeu est double. Côté produit, mieux connaître l'utilisateur cross-marques pour personnaliser et préparer des features de fidélisation (incluant IA). Côté régie, et c'est un signal fort dans un groupe média, mutualiser et qualifier la base utilisateurs pour densifier la valeur publicitaire.",
          "Le projet couvre web, iOS, tablette et TV, et touche tous les produits du groupe.",
        ],
      },
      {
        h: "Le problème",
        body: [
          "Concevoir un compte unique perçu comme cohérent sans nier les identités fortes de chaque marque ; tenir les exigences RGPD ; gérer la migration des comptes existants sans casser leur usage ; poser une fondation suffisamment robuste pour porter les futures features de personnalisation et d'IA.",
          "Avec en plus une vraie tension de marque : certaines marques de l'écosystème n'aiment pas être associées entre elles. Le compte unifié ne pouvait donc pas devenir un message d'unification visible.",
        ],
      },
      {
        h: "L'approche : compte universel, fonctionnalités contextuelles",
        image: "./assets/cases/login-sso-features.png",
        imageAlt: "Architecture du compte universel et des fonctionnalités contextuelles par marque",
        body: [
          "L'arbitrage de fond : l'expérience du compte est la même partout, et ce sont uniquement les fonctionnalités contextuelles qui se déclinent par marque.",
        ],
        list: [
          "Un seul compte (un seul email, un seul mot de passe, une seule base data).",
          "La gestion du compte est identique quel que soit le point d'entrée. Mêmes écrans, même logique.",
          "Ce qui se différencie, ce sont les fonctionnalités contextuelles à la marque : contenus enregistrés, préférences éditoriales, historiques de visionnage.",
        ],
        after: "Cette position résout deux choses à la fois : elle respecte les sensibilités de marque, et elle simplifie radicalement la gestion compte en éliminant la complexité d'une gestion multi-versions.",
      },
      {
        h: "Quatre sujets de design qui ont structuré le projet",
        sub: [
          { t: "1. Onboarding : créer un compte sans friction", b: "Approche progressive. On demande le strict minimum à la création, on enrichit ensuite à des moments de valeur perçue. La data se construit dans le temps, pas en une seule fois." },
          { t: "2. Migration des comptes existants", b: "Traité comme un parcours principal à part entière, avec ses écrans dédiés, ses messages clarifiés, et une logique de continuité visible pour l'utilisateur." },
          { t: "3. Stratégie de consentement RGPD", b: "Trois principes : transparence sur ce qui est collecté et pourquoi, granularité des consentements (pas un bloc on/off mais des choix par finalité), retrait facile sans devoir traverser cinq écrans." },
          { t: "4. La qualité de la friction", b: "Le message d'erreur quand on tape mal son email, le repositionnement de l'écran après soumission, le traitement visuel d'une erreur qui rassure, l'organisation de la page de gestion. Une erreur mal formulée, et l'utilisateur abandonne." },
        ],
      },
      {
        h: "État d'avancement",
        list: [
          "Parcours inscription, connexion et gestion de compte validés.",
          "Maquettes finalisées à 95%.",
          "Live côté streaming. Le déploiement publishing suivra.",
          "Travail en cours sur les features de personnalisation et IA qui s'appuieront sur la fondation compte unique.",
        ],
      },
    ],
  },
  {
    id: "ds",
    volet: "system",
    n: "04",
    company: "CMA Média",
    period: "2024–en cours",
    role: "Lead designer, seule sur le sujet",
    status: "WIP",
    title: "Design System multi-marques",
    teaser: "Construire un DS pour 4 marques média, sur web, iOS et Android, dans un environnement où la complexité technique freinait les identités.",
    quote: "Construire un design system pour 4 marques média, sur web, iOS et Android, dans un environnement où la complexité technique freine les identités de marque. Un projet que personne n'avait commencé, et que j'ai porté parce que j'avais envie qu'il existe.",
    metrics: [
      { value: "109 → 14", label: "couleurs RMC web" },
      { value: "83 → 18", label: "éléments typographiques" },
      { value: "18 → 6", label: "espacements" },
    ],
    sections: [
      {
        h: "Le contexte",
        body: [
          "Quand je suis arrivée, le sujet design system existait à l'état d'idée mais pas de projet. Côté design, une librairie Figma sans composants. Côté tech, beaucoup de complexité héritée et une contrainte de socle technique partagé qui cannibalisait les projets des marques au moment précis où le groupe cherchait à réaffirmer leurs identités uniques.",
          "Sur le terrain, j'étais seule sur le fond : seule à creuser l'audit, seule à arbitrer les décisions d'architecture, seule à porter le sujet face à la tech. Je l'ai porté parce que j'avais envie qu'il existe, et parce qu'aucun projet de DS multi-marques tenable ne pouvait sortir d'une dynamique où personne n'osait prendre la barre.",
        ],
      },
      {
        h: "Le problème",
        body: ["Comment poser, seule côté design, un design system qui :"],
        list: [
          "couvre 4 marques sur 3 plateformes (web, iOS en SwiftUI, Android en Jetpack Compose),",
          "gère le theming par marque, le dark/light mode, les breakpoints, et la distinction tokens bruts / sémantiques dans une architecture qui tienne dans la durée,",
          "respecte la bande passante des équipes tech déjà à flux tendu,",
          "affirme les identités de marque plutôt que de les uniformiser au nom de la mutualisation technique.",
        ],
        after: "Le tout en partant d'un existant fait de 109 couleurs sur une seule marque, 83 éléments typographiques, 18 espacements, dont la moitié n'avait pas de raison d'être autre que l'historique.",
      },
      {
        h: "Phase 1 : un audit chiffré comme fondation",
        body: [
          "Je n'ai pas voulu poser un DS sans mesurer précisément l'existant. Pas de pifomètre, pas de \"y'a trop de couleurs\", mais des chiffres qui rendent le projet défendable.",
          "Méthode : Claude analyse l'intégralité du site web d'une marque et extrait toutes les valeurs avec leur contexte d'usage. Tout est agrégé dans une base Notion, en faisant un pré-arbitrage. Je tranche. Le pré-arbitrage me fait gagner 80% du temps de tri.",
        ],
      },
      {
        h: "Trois décisions d'architecture",
        image: "./assets/cases/achitecture-tokens-ds.png",
        imageAlt: "Architecture à trois niveaux de tokens : globaux, marque, composants",
        sub: [
          { t: "1. Trois niveaux de tokens, en débat assumé", b: "Tokens globaux (valeurs brutes), tokens marque (theming par marque), composants à variants. Cette architecture absorbe en parallèle theming par marque, dark/light, plateformes web vs app, breakpoints, et distinction valeur brute vs sémantique." },
          { t: "2. La librairie Figma sert déjà les équipes tech", b: "Mon premier livrable concret n'est pas un DS abouti. C'est une librairie Figma à variantes qui couvre les axes ci-dessus. Pas une fin, un début. Et pourtant, les devs app l'ont remarquée et reproduisent la même logique dans leurs styles." },
          { t: "3. Affirmer les identités de marque, pas les uniformiser", b: "Le piège classique d'un DS multi-marques, c'est l'uniformisation. Le DS doit être l'outil qui permet aux marques d'affirmer leur identité, pas celui qui la dissout." },
        ],
      },
      {
        h: "État d'avancement",
        image: "./assets/cases/ds-roadmap.png",
        imageAlt: "Roadmap du Design System multi-marques",
        table: [
          { k: "Phase 1. Foundations (W1-2)", v: "En cours. Audit web fait, app à compléter." },
          { k: "Phase 2. Tokens (W3-5)", v: "À venir." },
          { k: "Phase 3. Components v1 (W6-8)", v: "À venir." },
          { k: "Phase 4. Documentation et industrialisation", v: "À venir." },
          { k: "Phase 5. Launch et adoption (W10+)", v: "Cible : fin Q2 2026." },
        ],
      },
    ],
  },
  {
    id: "framework",
    volet: "system",
    n: "05",
    company: "CMA Média",
    period: "2025–en cours",
    role: "Lead designer sur la dimension design",
    status: "WIP",
    title: "Framework Product",
    teaser: "Redéfinir la place du Product Design dans le framework de l'entreprise, en partant du réel — pas des bonnes pratiques génériques.",
    quote: "Comment fait-on entrer une organisation produit dans une nouvelle façon de travailler ? En écoutant d'abord ce qu'elle vit, puis en structurant à partir de là.",
    sections: [
      {
        h: "Le contexte",
        body: [
          "Mon recrutement portait notamment une mission claire : fluidifier les échanges entre produit et design. Le contexte a changé quand j'ai été rattachée à l'équipe produit, et qu'un poste de Product Ops a été créé pour porter la transformation des process.",
          "Périmètre : refondre les frameworks produits (Full Track et Fast Track) pour clarifier les étapes, les rôles, les livrables. Ma proposition complémentaire : redéfinir la place du Product Design dans ce framework, instruite par les pain points réels.",
        ],
      },
      {
        h: "Le problème",
        body: ["Comment faire évoluer une organisation produit où :"],
        list: [
          "Le design entre trop tard dans le cycle (étape 4 sur 6, alors qu'il devrait entrer à l'étape 2 ou 3),",
          "Les livrables sont incomplets (états manquants, déclinaisons oubliées, animations non spécifiées),",
          "La collaboration design-tech passe systématiquement par le PM comme intermédiaire,",
          "Il n'y a aucune validation gate ni définition de done par étape,",
          "Il n'y a aucun retour design post-production,",
          "La distinction entre Product Designer et Designer n'est ni nommée ni outillée.",
        ],
      },
      {
        h: "L'insight central : Product Designer vs Designer",
        image: "./assets/cases/prd-vs-design.png",
        imageAlt: "Comparaison Product Designer vs Designer",
        body: [
          "Une distinction est apparue spontanément dans 6 entretiens sur 6. La formulation revenait, mot pour mot ou à peu près : \"avec le Product Designer on a tout, avec le Designer il manque des choses\".",
          "Ce n'est pas une question de talent ou de qualité graphique. C'est une question de maturité produit. La pratique du Design est historiquement ancrée dans une logique DA/print/web vitrine, qui n'a pas pris le virage de la culture produit. Le Product Design, lui, est au cœur de cette culture.",
        ],
      },
      {
        h: "Pain points adressés dans le framework",
        image: "./assets/cases/interviews-framework.png",
        imageAlt: "Tableau de synthèse cross-interviews du framework produit",
        table: [
          { k: "Design entre trop tard", v: "Entrée du PrD à l'étape 2 (vs étape 4 historiquement)" },
          { k: "Livrables incomplets", v: "Définition of done par étape avec checklist" },
          { k: "Collaboration design-tech filtrée par le PM", v: "Sessions design-tech directes à l'étape 5" },
          { k: "Pas de validation gate", v: "Validation formelle entre chaque étape" },
          { k: "Pas de design QA post-prod", v: "Étape 6 dédiée à la recette design post-livraison" },
          { k: "Pas de distinction PrD vs Designer", v: "Deux rôles distincts, deux entrées, deux RACI" },
        ],
      },
      {
        h: "L'angle qui m'anime",
        body: [
          "Au-delà de la rigueur structurelle, ce qui m'intéresse vraiment, c'est de rendre le travail des gens plus facile et plus agréable.",
          "Un framework, ce n'est pas un formulaire de plus à remplir. C'est des rituels qu'on attend avec plaisir, des ateliers qui débloquent des sujets en quelques heures plutôt qu'en plusieurs réunions, un cadre qui concentre l'énergie sur la valeur ajoutée de chacun.",
        ],
      },
      {
        h: "État d'avancement",
        image: "./assets/cases/framework-roadmap.png",
        imageAlt: "Roadmap du framework produit",
      },
    ],
  },
  {
    id: "reworld",
    volet: "system",
    n: "06",
    company: "Reworld Media",
    period: "2021–2024",
    role: "Product Designer",
    status: "Background",
    title: "80+ marques en flux tendu",
    teaser: "Deux ans à designer pour 80+ marques média, plus une douzaine de plateformes clients, en flux tendu permanent.",
    quote: "Deux ans et quelques mois à designer pour 80+ marques média, plus une douzaine de plateformes clients, en flux tendu permanent. C'est sur cette période que se sont formés mes réflexes de système, de pragmatisme et de scale.",
    sections: [
      {
        h: "Le contexte",
        body: [
          "Reworld Media, c'est un groupe média qui possède plus de 80 marques propres, à quoi s'ajoutent les plateformes médias bâties pour des clients. Côté design, j'étais le point d'entrée de tous les besoins design dès qu'il y avait un site, une feature, un bloc.",
          "Pas un fonctionnement par sprint, pas de roadmap claire : flux tendu permanent, tickets qui arrivaient au fil de l'eau, et la nécessité de tenir la qualité sur un volume que personne n'aurait dimensionné rationnellement.",
        ],
      },
      {
        h: "Ce qui m'a façonnée",
        sub: [
          { t: "1. La rigueur d'organisation comme survie", b: "J'ai refondu le système de ticketing sur Notion : bases de données par équipe, formules pour calculer les charges, boards personnalisés selon les rôles. Probablement le premier projet d'ops design que j'ai porté sans savoir que ça portait ce nom." },
          { t: "2. Le réflexe système, avant le DS officiel", b: "J'ai construit un catalogue de templates présentables aux clients pressés ou à budget contraint, qui permettaient de livrer vite tout en garantissant un standard. Une logique de produit packagé avant de connaître le terme. Et plus tard, la maintenance seule d'un DS hérité d'une équipe partie." },
          { t: "3. Une responsabilité élargie, vite", b: "Je me suis rapidement retrouvée seule en responsabilité sur un large périmètre, en front avec la plupart des clients. J'ai aussi accompagné deux alternantes : briefs, reviews, onboarding, et soutien sur la légitimité de leurs avis." },
        ],
      },
      {
        h: "Bilan",
        balance: {
          left: { title: "Pour le produit et la boîte", items: [
            "Volume de marques et de plateformes maintenues à un standard de qualité dans un environnement où la productivité primait sur la rigueur",
            "Système de ticketing Notion qui a remplacé un outil peu adapté et structuré le travail de l'équipe",
            "DS hérité maintenu seule pour ne pas que le travail des designers partis se perde",
          ]},
          right: { title: "Pour ma pratique", items: [
            "J'ai appris à scaler par le système quand le volume rendait le travail à la main intenable",
            "J'ai pris la mesure de ce que veut dire être en autonomie tôt : seule sur des projets, en front avec des clients",
            "J'ai compris en pratique que le design ne vaut que par l'écosystème qui le porte jusqu'à la prod",
          ]},
        },
      },
    ],
  },
];
