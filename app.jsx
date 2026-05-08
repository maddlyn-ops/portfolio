/* global React, ReactDOM */
const { useState, useEffect, useRef, useCallback, useMemo } = React;

/* ------------------------------------------------------------------
   Small inline SVG icons
------------------------------------------------------------------ */
const Icon = {
  arrowDown: (p) =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 5v14" /><path d="m19 12-7 7-7-7" />
    </svg>,

  arrowUR: (p) =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M7 17 17 7" /><path d="M7 7h10v10" />
    </svg>,

  question: (p) =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>,

  mail: (p) =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>,

  linkedin: (p) =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
    </svg>,

  close: (p) =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M18 6 6 18" /><path d="m6 6 12 12" />
    </svg>

};

/* ------------------------------------------------------------------
   Hooks
------------------------------------------------------------------ */
function useScrollSpy(ids, offset = 200) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + offset;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids, offset]);
  return active;
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-stagger");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ------------------------------------------------------------------
   Cursor
------------------------------------------------------------------ */
function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  useEffect(() => {
    let rx = 0,ry = 0,x = 0,y = 0;
    const onMove = (e) => {
      x = e.clientX;y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`;
      }
    };
    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      }
      requestAnimationFrame(tick);
    };
    const onOver = (e) => {
      const t = e.target.closest("a, button, .case, .principle");
      if (ringRef.current) ringRef.current.classList.toggle("is-hover", !!t);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);
  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true"></div>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true"></div>
    </>);

}

/* ------------------------------------------------------------------
   Case visualizations (abstract, non-branded)
------------------------------------------------------------------ */
function CaseViz({ id }) {
  // Each case gets a unique, abstract animated viz — no real brand UI
  switch (id) {
    case "bfm-app":
      return (
        <svg className="case__viz" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#56c2ff" stopOpacity="0.35" />
              <stop offset="1" stopColor="#138af2" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          <rect x="60" y="20" width="120" height="160" rx="11" fill="#111214" stroke="rgba(255,255,255,0.06)" />
          <rect x="72" y="32" width="40" height="6" rx="2" fill="#ff6363" opacity=".8" />
          <rect x="72" y="46" width="96" height="32" rx="4" fill="url(#g1)" />
          <rect x="72" y="86" width="96" height="14" rx="3" fill="rgba(255,255,255,0.06)" />
          <rect x="72" y="106" width="60" height="8" rx="2" fill="rgba(255,255,255,0.18)" />
          <rect x="72" y="120" width="80" height="8" rx="2" fill="rgba(255,255,255,0.08)" />
          <rect x="72" y="142" width="96" height="28" rx="4" fill="rgba(86,194,255,0.12)" />
          <rect x="200" y="40" width="80" height="120" rx="8" fill="#1b1c1e" stroke="rgba(255,255,255,0.06)" />
          <rect x="208" y="52" width="64" height="52" rx="4" fill="rgba(86,194,255,0.18)" />
          <rect x="208" y="112" width="40" height="6" rx="2" fill="rgba(255,255,255,0.5)" />
          <rect x="208" y="124" width="56" height="6" rx="2" fill="rgba(255,255,255,0.2)" />
          <rect x="208" y="136" width="48" height="6" rx="2" fill="rgba(255,255,255,0.2)" />
        </svg>);

    case "rmc-sport":
      return (
        <svg className="case__viz" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">
          {[0, 1, 2, 3].map((i) =>
          <rect key={i} x={40 + i * 60} y={30} width="48" height="140" rx="6" fill="rgba(245,245,245,0.04)" stroke="rgba(245,245,245,0.12)" />
          )}
          {[0, 1, 2, 3].map((i) =>
          <g key={i}>
              <rect x={48 + i * 60} y={42} width="32" height="48" rx="3" fill={i === 1 ? "rgba(255,99,99,0.25)" : "rgba(86,194,255,0.18)"} />
              <rect x={48 + i * 60} y={96} width="22" height="4" fill="rgba(255,255,255,0.4)" />
              <rect x={48 + i * 60} y={104} width="28" height="3" fill="rgba(255,255,255,0.2)" />
              <rect x={48 + i * 60} y={114} width="20" height="3" fill="rgba(255,255,255,0.2)" />
            </g>
          )}
          <text x="160" y="190" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="rgba(255,255,255,0.4)" letterSpacing="0.1em">4 JOURS · 1 APP</text>
        </svg>);

    case "sso":
      return (
        <svg className="case__viz" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">
          <circle cx="160" cy="100" r="34" fill="rgba(255,99,99,0.15)" stroke="rgba(255,99,99,0.5)" />
          <text x="160" y="105" textAnchor="middle" fontFamily="Inter" fontSize="16" fontWeight="600" fill="#fff" letterSpacing="-0.04em">id</text>
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const a = i / 6 * Math.PI * 2 - Math.PI / 2;
            const x = 160 + Math.cos(a) * 70;
            const y = 100 + Math.sin(a) * 70;
            return (
              <g key={i}>
                <line x1="160" y1="100" x2={x} y2={y} stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 3" />
                <circle cx={x} cy={y} r="14" fill="#1b1c1e" stroke="rgba(255,255,255,0.25)" />
                <text x={x} y={y + 3} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" fill="rgba(255,255,255,0.7)">{["A", "B", "C", "D", "E", "+"][i]}</text>
              </g>);

          })}
        </svg>);

    case "ds":
      return (
        <svg className="case__viz" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">
          <g>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) =>
            <rect key={i} x={40 + i * 30} y={32} width="22" height="22" rx="4" fill={i % 3 === 0 ? "#56c2ff" : i % 3 === 1 ? "#ff6363" : "#9c9c9d"} opacity="0.55" />
            )}
            <text x="40" y="24" fontFamily="JetBrains Mono" fontSize="8" fill="rgba(255,255,255,0.5)" letterSpacing="0.1em">GLOBAL TOKENS</text>
          </g>
          <g>
            {[0, 1, 2, 3].map((i) =>
            <rect key={i} x={50 + i * 60} y={92} width="44" height="22" rx="4" fill="rgba(86,194,255,0.18)" stroke="rgba(86,194,255,0.4)" />
            )}
            <text x="40" y="84" fontFamily="JetBrains Mono" fontSize="8" fill="rgba(255,255,255,0.5)" letterSpacing="0.1em">BRAND TOKENS</text>
          </g>
          <g>
            {[0, 1, 2].map((i) =>
            <rect key={i} x={60 + i * 80} y={150} width="64" height="28" rx="6" fill="rgba(255,99,99,0.15)" stroke="rgba(255,99,99,0.4)" />
            )}
            <text x="40" y="142" fontFamily="JetBrains Mono" fontSize="8" fill="rgba(255,255,255,0.5)" letterSpacing="0.1em">COMPONENTS</text>
          </g>
        </svg>);

    case "framework":
      return (
        <svg className="case__viz" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">
          {["PM", "PrD", "DEV", "QA"].map((label, i) =>
          <g key={label}>
              <text x="20" y={50 + i * 32} fontFamily="JetBrains Mono" fontSize="9" fill="rgba(255,99,99,0.7)" letterSpacing="0.1em">{label}</text>
              <line x1="60" y1={46 + i * 32} x2="300" y2={46 + i * 32} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            </g>
          )}
          {[0, 1, 2, 3, 4, 5].map((i) =>
          <line key={`v${i}`} x1={70 + i * 40} y1="30" x2={70 + i * 40} y2="160" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 4" />
          )}
          <rect x="65" y="40" width="36" height="14" rx="7" fill="rgba(86,194,255,0.4)" />
          <rect x="105" y="40" width="36" height="14" rx="7" fill="rgba(86,194,255,0.4)" />
          <rect x="105" y="72" width="76" height="14" rx="7" fill="rgba(255,99,99,0.4)" />
          <rect x="145" y="40" width="36" height="14" rx="7" fill="rgba(86,194,255,0.4)" />
          <rect x="185" y="72" width="76" height="14" rx="7" fill="rgba(255,99,99,0.4)" />
          <rect x="185" y="104" width="76" height="14" rx="7" fill="rgba(86,194,255,0.4)" />
          <rect x="265" y="136" width="36" height="14" rx="7" fill="rgba(89,212,153,0.5)" />
        </svg>);

    case "reworld":
      return (
        <svg className="case__viz" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 80 }).map((_, i) => {
            const palette = ["#56c2ff", "#ff6363", "#9c9c9d", "#523091", "#59d499", "#454647"];
            const fill = palette[i % palette.length];
            const col = i % 16;
            const row = Math.floor(i / 16);
            return (
              <rect
                key={i}
                x={20 + col * 18}
                y={30 + row * 28}
                width="14"
                height="20"
                rx="2"
                fill={fill}
                opacity={0.12 + i % 7 * 0.06} />);


          })}
          <text x="160" y="190" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="rgba(255,255,255,0.5)" letterSpacing="0.15em">80+ MARQUES</text>
        </svg>);

    default:
      return null;
  }
}

/* ------------------------------------------------------------------
   Hero
------------------------------------------------------------------ */
function Hero({ onContact }) {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true"></div>
      <div className="hero__veil" aria-hidden="true"></div>
      <div className="hero__grain" aria-hidden="true"></div>
      <div className="hero__inner">
        <div className="hero__meta">
          <span>Paris</span>
          <span style={{ color: "var(--graphite-400)" }}>·</span>
          <span>Île de France</span>
          <span style={{ color: "var(--graphite-400)" }}>·</span>
          <span>International remote</span>
        </div>
        <h1 className="hero__title display">
          <span className="line"><span style={{ height: "89px" }}>Product Designer.</span></span>
          <span className="line"><span>De l'écran au système qui le produit.</span></span>
        </h1>
        <p className="hero__sub">
          6 ans en product design. Aujourd'hui chez CMA Média (BFM RMC), je conçois pour 17M de visiteurs mensuels, je porte un design system multi-marques, et je structure la place du design dans le framework produit du groupe.
        </p>
        <div className="hero__cta-row">
          <a href="#work" className="btn btn--primary">
            Craft to System
            <Icon.arrowDown className="icon" />
          </a>
          <button className="btn btn--ghost" onClick={onContact}>
            Me contacter
            <Icon.question className="icon" />
          </button>
        </div>
        <div className="hero__strip">
          <div className="hero__strip-label" style={{ fontFamily: "Inter", textTransform: "none", letterSpacing: "0.04em", fontSize: "14px" }}>Tout le background de marques dont mes projets profitent :</div>
          <div className="hero__strip-row hero__logos">
            <img src="./assets/logos/frame-8.svg" alt="BFM" />
            <img src="./assets/logos/air-france.svg" alt="Air France" />
            <img src="./assets/logos/cdiscount.svg" alt="Cdiscount" />
            <img src="./assets/logos/doctissimo.svg" alt="Doctissimo" />
            <img src="./assets/logos/geberit.svg" alt="Geberit" />
            <img src="./assets/logos/verisure.svg" alt="Verisure" />
          </div>
        </div>
      </div>
    </section>);}

/* ------------------------------------------------------------------
   Selected Work
------------------------------------------------------------------ */
function CaseCard({ data, onOpen }) {
  return (
    <article className="case" onClick={() => onOpen(data.id)}>
      <div className="case__visual">
        <span className="case__visual-label">Case · {data.n}</span>
        <span className="case__status" data-status={data.status}>
          <span className="dot" /> {data.status}
        </span>
        <CaseViz id={data.id} />
      </div>
      <div className="case__body">
        <div className="case__meta">
          {data.company} · {data.period} · {data.role}
        </div>
        <h3 className="case__title">{data.title}</h3>
        <p className="case__desc">{data.teaser}</p>
        <span className="case__cta">
          Lire le cas <Icon.arrowUR className="arrow" />
        </span>
      </div>
    </article>);

}

function Work({ onOpen }) {
  const craft = window.CASES.filter((c) => c.volet === "craft");
  const system = window.CASES.filter((c) => c.volet === "system");
  return (
    <section className="section work" id="work">
      <div className="section__inner">
        <div className="section-head reveal">
          <h2 className="section-head__title">
            Selected work
          </h2>
          <span className="section-head__index">— 06 cas / 2 volets</span>
        </div>

        <div className="work__intro reveal">
          <p>Du craft à grande échelle au système qui le rend possible. Six cas, deux volets explicitement séparés, parce que c'est précisément à leur articulation que se joue la maturité d'un produit.</p>
          <p>Cliquez sur un cas pour l'ouvrir en détail — contexte, problème, décisions structurantes, métriques.</p>
        </div>

        <div className="volet">
          <div className="volet__head reveal">
            <span className="volet__num">i.</span>
            <div>
              <div className="volet__label">Volet craft</div>
              <h3 className="volet__title">Concevoir des produits à grande échelle</h3>
            </div>
          </div>
          <div className="case-grid reveal-stagger">
            {craft.map((c) => <CaseCard key={c.id} data={c} onOpen={onOpen} />)}
          </div>
        </div>

        <div className="volet">
          <div className="volet__head reveal">
            <span className="volet__num">ii.</span>
            <div>
              <div className="volet__label">Volet system</div>
              <h3 className="volet__title">Faire évoluer la pratique design</h3>
            </div>
          </div>
          <div className="case-grid reveal-stagger">
            {system.map((c) => <CaseCard key={c.id} data={c} onOpen={onOpen} />)}
          </div>
        </div>
      </div>
    </section>);

}

/* ------------------------------------------------------------------
   Approche
------------------------------------------------------------------ */
const PRINCIPLES = [
{ n: "01", title: "Entrer au bon moment change tout.", body: "Le designer qui arrive à l'étape maquette résout les mauvais problèmes. Le bon endroit, c'est le cadrage, pas le handoff." },
{ n: "02", title: "Un système se joue sur les tokens, pas sur les composants.", body: "L'architecture de tokens propre vaut plus qu'un beau composant. C'est elle qui fait scaler, c'est elle qui casse en prod si elle est faible. Et c'est elle qui décide si une marque garde ou perd son identité dans un DS multi-marques." },
{ n: "03", title: "Un livrable, c'est tous les états.", body: "Edge cases, tablette, dark mode, variantes marque, animations, vides. Un mockup qui n'a que le happy path n'est pas un livrable, c'est un teaser." },
{ n: "04", title: "Un design ne vaut que par l'écosystème qui le porte jusqu'à la prod.", body: "Pression publicitaire, contraintes techniques, implémentation. Le rôle d'un designer mature, c'est de penser le design dans son système de livraison, pas seulement dans son fichier Figma. Une maquette Figma n'a pas de valeur en soi." }];


function Approche() {
  return (
    <section className="section approche" id="approche">
      <div className="section__inner">
        <div className="section-head reveal">
          <h2 className="section-head__title">Mon approche</h2>
        </div>
        <div className="approche__list">
          {PRINCIPLES.map((p) =>
          <div key={p.n} className="principle reveal">
              <div className="principle__num">{p.n}</div>
              <h3 className="principle__title">{p.title}</h3>
              <p className="principle__body">{p.body}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ------------------------------------------------------------------
   À propos
------------------------------------------------------------------ */
const TIMELINE = [
{ d: "Mars 2024 → aujourd'hui", r: "Product Designer · CMA Média / BFM RMC" },
{ d: "Décembre 2021 → février 2024", r: "Product Designer · Reworld Media" },
{ d: "2019 → aujourd'hui", r: "Freelance · Madd (en parallèle continu)" },
{ d: "2019 → 2020", r: "Création & Design · Sup de Pub (Bachelor)" },
{ d: "2017 → 2019", r: "MMI · IUT d'Angoulême (DUT)" }];


function About() {
  return (
    <section className="section about" id="about">
      <div className="section__inner">
        <div className="section-head reveal">
          <h2 className="section-head__title">À propos</h2>
        </div>
        <div className="about__grid">
          <div className="reveal about__intro">
            <h3>Le métier comme outil, pas comme signature</h3>
            <p>J'ai commencé par le graphisme, la publicité, le webdesign à l'époque où il existait encore comme métier propre, avant de glisser vers le product design. Pas par filiation logique : par lassitude d'un monde où la beauté d'un livrable suffisait à valider le travail, indépendamment de ce que ça produisait.</p>
            <p>Mon obsession depuis cette bascule, c'est que le design soit utile. Qu'il réponde à un enjeu business identifié, à une frustration utilisateur réelle, à une contrainte technique respectée. Qu'il vive en prod plutôt que mourir en présentation. Une maquette qui ne tient pas debout dans son écosystème, c'est une maquette qui n'a rien produit.</p>
            <p>Cette logique m'a portée du craft pur (concevoir des écrans à grande échelle) vers le système qui les rend possibles (design system, framework, gouvernance). Pas en abandonnant l'un pour l'autre, mais en assumant les deux casquettes en parallèle, parce que c'est précisément à leur articulation que se joue la maturité d'un produit.</p>
          </div>
          <div className="reveal about__portrait-wrap">
            <div className="about__portrait">
              <img src="./assets/portrait.png" alt="Portrait de Maddlyn Fuzier" />
            </div>
          </div>
          <div className="reveal about__timeline-wrap">
            <div className="timeline">
              <h3 style={{ marginTop: 0, marginBottom: 24 }}>Mon parcours</h3>
              {TIMELINE.map((t, i) =>
              <div key={i} className="timeline__row">
                  <span className="timeline__date">{t.d}</span>
                  <span className="timeline__role">{t.r}</span>
                </div>
              )}
            </div>
          </div>
          <div className="reveal about__madd">
            <h3 style={{ marginTop: 0 }}>Madd, en parallèle</h3>
            <p>Depuis 2019, je porte Madd, mon activité freelance. Elle me sert à adresser des marchés que je ne touche pas en entreprise (marques premium, restauration, retail, packaging) et à diversifier mes terrains d'expérimentation.</p>
            <p>C'est un espace volontairement distinct de mon poste salarié, avec sa propre identité, ses propres clients (Maison Albar, Chalet Boréal, TechSpark, Hysope, entre autres), et son propre site : <a href="https://maddlynfuzier.com" style={{ color: "var(--snow)", borderBottom: "1px solid var(--ember-red)" }}>maddlynfuzier.com</a>.</p>
          </div>
        </div>
      </div>
    </section>);

}

/* ------------------------------------------------------------------
   Stack
------------------------------------------------------------------ */
const STACK = [
{ t: "Penser & structurer", items: ["Claude", "ChatGPT", "Gemini", "Notion"] },
{ t: "Concevoir & prototyper", items: ["Figma", "FigJam", "Figma Make", "Framer", "Claude Design"] },
{ t: "Livrer & automatiser", items: ["Jira", "GitHub", "Claude Code", "n8n"] }];


function Stack() {
  return (
    <section className="section" id="stack">
      <div className="section__inner">
        <div className="section-head reveal">
          <h2 className="section-head__title">Stack</h2>
        </div>
        <p className="reveal" style={{ fontSize: 18, color: "var(--slate-200)", maxWidth: 720, marginBottom: 48, lineHeight: 1.55 }}>
          Les outils qui me servent à concevoir, et ceux qui me servent à faire scaler ce que je conçois.
        </p>
        <div className="stack__grid">
          {STACK.map((g) =>
          <div key={g.t} className="stack__group reveal">
              <h3>{g.t}</h3>
              <ul className="stack__list">
                {g.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
          )}
        </div>
        <div className="reveal" style={{ marginTop: 56, paddingTop: 24, borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, fontSize: 14, color: "var(--fg-dim)" }}>
          <span>Méthode</span>
          <span style={{ color: "var(--fg)" }}>Thiga Design System (formation) • Discovery Discipline • Kitted & Pip Decks (Workshops et Storytelling)</span>
        </div>
      </div>
    </section>);

}

/* ------------------------------------------------------------------
   Contact
------------------------------------------------------------------ */
function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="reveal">
        <h2>Vous êtes encore là ?</h2>
        <p>Si vous êtes arrivés jusqu'ici, c'est que mon profil ou ce que je raconte vous parle. N'hésitez pas à me contacter, je serai ravie d'échanger avec vous.</p>
        <div className="contact__row">
          <a href="https://www.linkedin.com/in/maddlynfuzier" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
            Sur LinkedIn <Icon.linkedin className="icon" />
          </a>
          <a href="mailto:fuzier.maddlyn@gmail.com" className="btn btn--ghost">
            Par mail <Icon.mail className="icon" />
          </a>
          <a href="https://medium.com/@infomaddlyn" target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
            Continuer sur Medium <Icon.arrowUR className="icon" />
          </a>
        </div>
      </div>
    </section>);

}

/* ------------------------------------------------------------------
   Modal — Case detail
------------------------------------------------------------------ */
function CaseModal({ caseId, onClose, onNav }) {
  const data = window.CASES.find((c) => c.id === caseId);
  const idx = window.CASES.findIndex((c) => c.id === caseId);
  useEffect(() => {
    if (caseId) {
      document.body.style.overflow = "hidden";
      const onKey = (e) => {
        if (e.key === "Escape") onClose();
        if (e.key === "ArrowRight" && idx < window.CASES.length - 1) onNav(window.CASES[idx + 1].id);
        if (e.key === "ArrowLeft" && idx > 0) onNav(window.CASES[idx - 1].id);
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [caseId, idx, onClose, onNav]);

  return (
    <div className={`modal ${caseId ? "is-open" : ""}`} onClick={(e) => {if (e.target.classList.contains("modal")) onClose();}}>
      {data &&
      <>
          <button className="modal__close" onClick={onClose} aria-label="Fermer">
            <Icon.close style={{ width: 20, height: 20 }} />
          </button>
          <div className="modal__inner" key={caseId}>
            <div className="modal__meta">
              <span>{data.company}</span>
              <span className="sep">·</span>
              <span>{data.period}</span>
              <span className="sep">·</span>
              <span>{data.status}</span>
              <span className="sep">·</span>
              <span>{data.role}</span>
            </div>
            <h1 className="modal__title">{data.title}</h1>
            <p className="modal__quote">{data.quote}</p>

            {data.metrics &&
          <div className="metrics">
                {data.metrics.map((m, i) =>
            <div key={i} className="metric">
                    <div className="metric__value">{m.value}</div>
                    <div className="metric__label">{m.label}</div>
                  </div>
            )}
              </div>
          }

            {data.sections.map((s, i) =>
          <section key={i} className="modal__section">
                <h3>{s.h}</h3>
                {s.image &&
            <figure className="modal__figure">
                    <img src={s.image} alt={s.imageAlt || s.h} />
                  </figure>
            }
                {s.body && s.body.map((p, j) => <p key={j}>{p}</p>)}
                {s.list &&
            <ul>{s.list.map((it, j) => <li key={j}>{it}</li>)}</ul>
            }
                {s.after && <p>{s.after}</p>}
                {s.sub && s.sub.map((sb, j) =>
            <div key={j} className="modal__sub">
                    <h4>{sb.t}</h4>
                    <p>{sb.b}</p>
                  </div>
            )}
                {s.table &&
            <table className="kv-table">
                    <tbody>
                      {s.table.map((row, j) =>
                <tr key={j}>
                          <td>{row.k}</td>
                          <td>{row.v}</td>
                        </tr>
                )}
                    </tbody>
                  </table>
            }
                {s.balance &&
            <div className="balance">
                    <div className="balance__col">
                      <h5>{s.balance.left.title}</h5>
                      <ul>{s.balance.left.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
                    </div>
                    <div className="balance__col">
                      <h5>{s.balance.right.title}</h5>
                      <ul>{s.balance.right.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
                    </div>
                  </div>
            }
              </section>
          )}

            <div className="modal__nav">
              <button onClick={() => idx > 0 && onNav(window.CASES[idx - 1].id)} disabled={idx === 0}>
                ← Cas précédent
              </button>
              <button onClick={() => idx < window.CASES.length - 1 && onNav(window.CASES[idx + 1].id)} disabled={idx === window.CASES.length - 1}>
                Cas suivant →
              </button>
            </div>
          </div>
        </>
      }
    </div>);

}

/* ------------------------------------------------------------------
   Nav
------------------------------------------------------------------ */
const NAV_LINKS = [
{ id: "work", label: "Projets" },
{ id: "approche", label: "Approche" },
{ id: "about", label: "À propos" },
{ id: "stack", label: "Stack" }];

const NAV_VARIANTS = ["pill", "commandbar", "ticker", "dock", "rail", "spotlight"];

/* ------------------------------------------------------------------
   Search index — sections, cases, principles, stack
------------------------------------------------------------------ */
const SECTION_TEXT = {
  top: {
    label: "Hero",
    section: "Accueil",
    text: "Product Designer. De l'écran au système qui le produit. 6 ans en product design. Aujourd'hui chez CMA Média (BFM RMC), je conçois pour 17M de visiteurs mensuels, je porte un design system multi-marques, et je structure la place du design dans le framework produit du groupe. Paris, Île de France, International remote. BFM, Air France, Cdiscount, Doctissimo, Geberit, Verisure."
  },
  work: {
    label: "Selected work",
    section: "Projets",
    text: "Du craft à grande échelle au système qui le rend possible. Six cas, deux volets : volet craft (concevoir des produits à grande échelle) et volet system (faire évoluer la pratique design)."
  },
  approche: {
    label: "Mon approche",
    section: "Approche",
    text: "Entrer au bon moment change tout. Le designer qui arrive à l'étape maquette résout les mauvais problèmes. Le bon endroit, c'est le cadrage, pas le handoff. Un système se joue sur les tokens, pas sur les composants. L'architecture de tokens propre vaut plus qu'un beau composant. C'est elle qui fait scaler, c'est elle qui casse en prod si elle est faible. Et c'est elle qui décide si une marque garde ou perd son identité dans un DS multi-marques. Un livrable, c'est tous les états. Edge cases, tablette, dark mode, variantes marque, animations, vides. Un mockup qui n'a que le happy path n'est pas un livrable, c'est un teaser. Un design ne vaut que par l'écosystème qui le porte jusqu'à la prod. Pression publicitaire, contraintes techniques, implémentation. Le rôle d'un designer mature, c'est de penser le design dans son système de livraison, pas seulement dans son fichier Figma."
  },
  about: {
    label: "À propos",
    section: "À propos",
    text: "Le métier comme outil, pas comme signature. J'ai commencé par le graphisme, la publicité, le webdesign à l'époque où il existait encore comme métier propre, avant de glisser vers le product design. Mon obsession depuis cette bascule, c'est que le design soit utile. Qu'il réponde à un enjeu business identifié, à une frustration utilisateur réelle, à une contrainte technique respectée. Cette logique m'a portée du craft pur vers le système qui les rend possibles : design system, framework, gouvernance. Mon parcours : Product Designer chez CMA Média / BFM RMC depuis mars 2024. Product Designer chez Reworld Media de décembre 2021 à février 2024. Freelance Madd depuis 2019. Sup de Pub Bachelor 2019-2020. MMI IUT d'Angoulême DUT 2017-2019. Madd, en parallèle : depuis 2019, je porte mon activité freelance pour adresser des marques premium, restauration, retail, packaging — Maison Albar, Chalet Boréal, TechSpark, Hysope."
  },
  stack: {
    label: "Stack",
    section: "Stack",
    text: "Penser et structurer : Claude, ChatGPT, Gemini, Notion. Concevoir et prototyper : Figma, FigJam, Figma Make, Framer, Claude Design. Livrer et automatiser : Jira, GitHub, Claude Code, n8n. Méthode : Thiga Design System (formation), Discovery Discipline, Kitted et Pip Decks (Workshops et Storytelling)."
  },
  contact: {
    label: "Contact",
    section: "Contact",
    text: "Me contacter sur LinkedIn, par mail à fuzier.maddlyn@gmail.com, ou continuer sur Medium."
  }
};

function buildSearchIndex() {
  const items = [];
  Object.entries(SECTION_TEXT).forEach(([id, s]) => {
    items.push({ kind: "section", id, label: s.label, section: s.section, text: s.text });
  });
  (window.CASES || []).forEach((c) => {
    const sectionsText = (c.sections || []).map((s) => {
      const parts = [s.h, s.body];
      if (s.points) parts.push(s.points.join(" · "));
      if (s.metrics) parts.push(s.metrics.map((m) => `${m.k} ${m.v}`).join(" · "));
      if (s.balance) {
        if (s.balance.left) parts.push(s.balance.left.title, s.balance.left.items?.join(" · "));
        if (s.balance.right) parts.push(s.balance.right.title, s.balance.right.items?.join(" · "));
      }
      return parts.filter(Boolean).join(". ");
    }).join(" ");
    const metricsText = (c.metrics || []).map((m) => `${m.k} ${m.v}`).join(" · ");
    items.push({
      kind: "case",
      id: c.id,
      label: c.title,
      section: `Cas · ${c.company} · ${c.period}`,
      text: [c.title, c.teaser, c.quote, c.company, c.role, metricsText, sectionsText].filter(Boolean).join(". ")
    });
  });
  return items;
}

function extractSnippet(text, q, maxLen = 120) {
  if (!text || !q) return null;
  const lc = text.toLowerCase();
  const ql = q.toLowerCase();
  const i = lc.indexOf(ql);
  if (i < 0) return null;
  // Find sentence boundaries (. ! ?)
  const sentenceEnd = /[.!?]/g;
  let start = 0;
  let m;
  while ((m = sentenceEnd.exec(text)) !== null) {
    if (m.index >= i) break;
    start = m.index + 1;
  }
  sentenceEnd.lastIndex = i + ql.length;
  const endMatch = sentenceEnd.exec(text);
  const end = endMatch ? endMatch.index + 1 : text.length;
  let snippet = text.slice(start, end).trim();
  // If too long, center around match
  if (snippet.length > maxLen) {
    const matchInSnippet = snippet.toLowerCase().indexOf(ql);
    const half = Math.floor(maxLen / 2);
    const sStart = Math.max(0, matchInSnippet - half);
    const sEnd = Math.min(snippet.length, matchInSnippet + ql.length + half);
    snippet = (sStart > 0 ? "… " : "") + snippet.slice(sStart, sEnd).trim() + (sEnd < snippet.length ? " …" : "");
  }
  return { snippet, matchLc: ql };
}

function HighlightedSnippet({ snippet, matchLc }) {
  if (!snippet) return null;
  const lc = snippet.toLowerCase();
  const i = lc.indexOf(matchLc);
  if (i < 0) return <span>{snippet}</span>;
  return (
    <span>
      {snippet.slice(0, i)}
      <mark className="cmd-mark">{snippet.slice(i, i + matchLc.length)}</mark>
      {snippet.slice(i + matchLc.length)}
    </span>);
}

function NavPill({ active, stuck, scrollPct }) {
  return (
    <nav className={`nav ${stuck ? "is-stuck" : ""}`}>
      <a href="#top" className="nav__brand">Maddlyn Fuzier</a>
      <div className="nav__links">
        {NAV_LINKS.map((l) =>
        <a key={l.id} href={`#${l.id}`} className={`nav__link ${active === l.id ? "is-active" : ""}`}>
            {l.label}
          </a>
        )}
      </div>
      <a href="#contact" className="nav__cta">
        Contact
        <Icon.arrowUR style={{ width: 12, height: 12 }} />
      </a>
    </nav>);

}

function NavCommandBar({ active, stuck, scrollPct, onOpenCase }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => {
    if (open) {setTimeout(() => inputRef.current?.focus(), 30);setCursor(0);} else
    setQ("");
  }, [open]);

  const navItems = [
  ...NAV_LINKS.map((l, i) => ({ ...l, kind: "section", num: String(i + 1).padStart(2, "0") })),
  { id: "contact", label: "Contact", kind: "action", num: "05" }];

  // Full-text search across portfolio content
  const searchIndex = useMemo(() => buildSearchIndex(), []);
  const trimmedQ = q.trim();
  const filtered = useMemo(() => {
    if (!trimmedQ) {
      return navItems.map((it) => ({ ...it, snippet: null }));
    }
    const ql = trimmedQ.toLowerCase();
    const results = [];
    searchIndex.forEach((entry) => {
      const labelMatch = entry.label.toLowerCase().includes(ql);
      const textMatch = entry.text.toLowerCase().includes(ql);
      if (!labelMatch && !textMatch) return;
      const snip = textMatch ? extractSnippet(entry.text, trimmedQ) : null;
      results.push({
        id: entry.id,
        kind: entry.kind,
        label: entry.label,
        section: entry.section,
        snippet: snip,
        labelMatch
      });
    });
    // Prioritize: label match first, then case results, then sections
    results.sort((a, b) => {
      if (a.labelMatch !== b.labelMatch) return a.labelMatch ? -1 : 1;
      if (a.kind !== b.kind) return a.kind === "case" ? -1 : 1;
      return 0;
    });
    return results;
  }, [trimmedQ, searchIndex]);

  useEffect(() => {setCursor(0);}, [q]);
  useEffect(() => {
    const el = listRef.current?.querySelector(`li[data-idx="${cursor}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [cursor]);
  const go = (item) => {
    if (!item) return;
    setOpen(false);
    requestAnimationFrame(() => {
      if (item.kind === "case") {
        onOpenCase?.(item.id);
      } else {
        document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  };
  const onSearchKey = (e) => {
    if (e.key === "ArrowDown") {e.preventDefault();setCursor((c) => Math.min(c + 1, Math.max(0, filtered.length - 1)));} else
    if (e.key === "ArrowUp") {e.preventDefault();setCursor((c) => Math.max(0, c - 1));} else
    if (e.key === "Enter") {e.preventDefault();if (filtered[cursor]) go(filtered[cursor]);}
  };
  return (
    <>
      <nav className={`nav-cmd ${stuck ? "is-stuck" : ""}`}>
        <button className="nav-cmd__burger" onClick={() => setOpen(true)} aria-label="Ouvrir le menu">
          <span></span><span></span><span></span>
        </button>
        <a href="#top" className="nav-cmd__brand">
          <span className="nav-cmd__mark" aria-hidden="true">M</span>
          <span>Maddlyn Fuzier</span>
        </a>
        <button className="nav-cmd__trigger" onClick={() => setOpen(true)}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
          <span className="nav-cmd__hint">Naviguer</span>
          <span className="nav-cmd__kbd">⌘K</span>
        </button>
        <a href="#contact" className="nav-cmd__cta">
          Contact
          <Icon.arrowUR style={{ width: 12, height: 12 }} />
        </a>
      </nav>
      {open &&
      <div className="cmd-overlay" onClick={() => setOpen(false)}>
          <div className="cmd-panel" onClick={(e) => e.stopPropagation()}>
            <div className="cmd-search">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
              <input
              ref={inputRef}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Rechercher (ex. bfm, design system, product…)"
              onKeyDown={onSearchKey} />
            
              <span className="cmd-kbd">esc</span>
            </div>
            <div className="cmd-section">{trimmedQ ? `Résultats pour « ${trimmedQ} »` : "Aller à"}</div>
            <ul className="cmd-list" ref={listRef}>
              {filtered.map((it, i) =>
            <li
              key={`${it.kind}-${it.id}-${i}`}
              data-idx={i}
              className={`${i === cursor ? "is-cursor" : ""} ${active === it.id ? "is-active" : ""} ${it.snippet ? "has-snippet" : ""}`}
              onMouseEnter={() => setCursor(i)}
              onClick={() => go(it)}>
                  <span className="cmd-num">{it.num || (it.kind === "case" ? "→" : "§")}</span>
                  <div className="cmd-text">
                    <span className="cmd-label">{it.label}</span>
                    {it.snippet &&
                <span className="cmd-snippet">
                        <span className="cmd-snippet__src">{it.section}</span>
                        <HighlightedSnippet snippet={it.snippet.snippet} matchLc={it.snippet.matchLc} />
                      </span>
                }
                  </div>
                  <span className="cmd-meta">{it.kind === "action" ? "Action" : it.kind === "case" ? "Cas" : "Section"}</span>
                </li>
            )}
              {!filtered.length && <li className="cmd-empty">Aucun résultat</li>}
            </ul>
            <div className="cmd-foot">
              <span><kbd>↑↓</kbd> naviguer</span>
              <span><kbd>↵</kbd> aller</span>
              <span><kbd>esc</kbd> fermer</span>
            </div>
          </div>
        </div>
      }
    </>);

}

function NavTicker({ active, stuck, scrollPct }) {
  return (
    <nav className={`nav-ticker ${stuck ? "is-stuck" : ""}`}>
      <div className="nav-ticker__brand">
        <span className="nav-ticker__pip" />
        <span>MF</span>
        <span className="nav-ticker__sep">·</span>
        <span className="nav-ticker__loc">PAR</span>
      </div>
      <div className="nav-ticker__track">
        {NAV_LINKS.map((l, i) => {
          const isActive = active === l.id;
          return (
            <a key={l.id} href={`#${l.id}`} className={`nav-ticker__item ${isActive ? "is-active" : ""}`}>
              <span className="nav-ticker__num">{String(i + 1).padStart(2, "0")}</span>
              <span className="nav-ticker__lbl">{l.label}</span>
              <span className="nav-ticker__delta">{isActive ? "▲ live" : "—"}</span>
            </a>);

        })}
      </div>
      <div className="nav-ticker__right">
        <span className="nav-ticker__pct">{Math.round((scrollPct || 0) * 100).toString().padStart(2, "0")}%</span>
        <a href="#contact" className="nav-ticker__cta">Contact ↗</a>
      </div>
    </nav>);

}

function NavDock({ active, stuck, scrollPct }) {
  const items = [
  ...NAV_LINKS.map((l, i) => ({ ...l, num: String(i + 1).padStart(2, "0") }))];

  const idx = items.findIndex((l) => l.id === active);
  return (
    <nav className={`nav-dock ${stuck ? "is-stuck" : ""}`}>
      <a href="#top" className="nav-dock__brand">M·F</a>
      <div className="nav-dock__group">
        <div
          className="nav-dock__pill"
          style={{ transform: `translateX(${Math.max(0, idx) * 100}%)`, opacity: idx >= 0 ? 1 : 0 }} />
        
        {items.map((l) =>
        <a key={l.id} href={`#${l.id}`} className={`nav-dock__item ${active === l.id ? "is-active" : ""}`}>
            <span className="nav-dock__num">{l.num}</span>
            <span className="nav-dock__lbl">{l.label}</span>
          </a>
        )}
      </div>
      <a href="#contact" className="nav-dock__cta">
        <span>Contact</span>
        <Icon.arrowUR style={{ width: 12, height: 12 }} />
      </a>
    </nav>);

}

function NavRail({ active, stuck, scrollPct }) {
  return (
    <>
      <a href="#top" className="rail-brand">M·F</a>
      <nav className="nav-rail">
        <div className="nav-rail__track">
          <div className="nav-rail__progress" style={{ height: `${(scrollPct || 0) * 100}%` }} />
        </div>
        <ul>
          {NAV_LINKS.map((l, i) =>
          <li key={l.id}>
              <a href={`#${l.id}`} className={active === l.id ? "is-active" : ""}>
                <span className="nav-rail__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="nav-rail__lbl">{l.label}</span>
                <span className="nav-rail__dot" />
              </a>
            </li>
          )}
        </ul>
        <a href="#contact" className="nav-rail__cta">
          Contact
          <Icon.arrowUR style={{ width: 12, height: 12 }} />
        </a>
      </nav>
    </>);

}

function NavSpotlight({ active, stuck, scrollPct }) {
  const [open, setOpen] = useState(false);
  const idx = NAV_LINKS.findIndex((l) => l.id === active);
  return (
    <>
      <a href="#top" className="spot-brand">Maddlyn Fuzier</a>
      <div className={`nav-spot ${open ? "is-open" : ""}`}>
        {open &&
        <div className="nav-spot__menu" onClick={() => setOpen(false)}>
            {NAV_LINKS.map((l, i) => {
            const angle = -90 + i / (NAV_LINKS.length - 1) * -90 - 10;
            const r = 130;
            const rad = angle * Math.PI / 180;
            const x = Math.cos(rad) * r;
            const y = Math.sin(rad) * r;
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`nav-spot__item ${active === l.id ? "is-active" : ""}`}
                style={{ transform: `translate(${x}px, ${y}px)`, transitionDelay: `${i * 40}ms` }}>
                
                  <span className="nav-spot__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="nav-spot__lbl">{l.label}</span>
                </a>);

          })}
            <a
            href="#contact"
            className="nav-spot__item is-cta"
            style={{ transform: `translate(0px, -160px)`, transitionDelay: `${NAV_LINKS.length * 40}ms` }}>
            
              <span className="nav-spot__lbl">Contact ↗</span>
            </a>
          </div>
        }
        <button
          className="nav-spot__trigger"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu">
          
          <svg width="100" height="100" viewBox="0 0 100 100" className="nav-spot__ring">
            <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
            <circle
              cx="50" cy="50" r="46"
              fill="none"
              stroke="var(--ember-red)"
              strokeWidth="1.5"
              strokeDasharray={`${(scrollPct || 0) * 289} 289`}
              transform="rotate(-90 50 50)"
              style={{ transition: "stroke-dasharray 200ms linear" }} />
            
          </svg>
          <span className="nav-spot__center">
            <span className="nav-spot__idx">{idx >= 0 ? String(idx + 1).padStart(2, "0") : "00"}</span>
            <span className="nav-spot__sub">{open ? "Fermer" : "Menu"}</span>
          </span>
        </button>
      </div>
    </>);

}

function Nav({ variant = "pill", onOpenCase }) {
  const [stuck, setStuck] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const active = useScrollSpy(NAV_LINKS.map((l) => l.id), 220);
  useEffect(() => {
    const onScroll = () => {
      setStuck(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const props = { active, stuck, scrollPct };
  switch (variant) {
    case "commandbar":return <NavCommandBar {...props} onOpenCase={onOpenCase} />;
    case "ticker":return <NavTicker {...props} />;
    case "dock":return <NavDock {...props} />;
    case "rail":return <NavRail {...props} />;
    case "spotlight":return <NavSpotlight {...props} />;
    default:return <NavPill {...props} />;
  }
}

/* ------------------------------------------------------------------
   App
------------------------------------------------------------------ */
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [openCase, setOpenCase] = useState(null);
  const isEmbedded = typeof window !== "undefined" && new URLSearchParams(window.location.search).has("embed");
  useReveal();

  const handleOpen = useCallback((id) => setOpenCase(id), []);
  const handleClose = useCallback(() => setOpenCase(null), []);

  // Device preview mode — render an iframe of ourselves at the chosen viewport
  if (!isEmbedded && t.device && t.device !== "desktop") {
    const sizes = {
      mobile: { w: 390, h: 844, label: "iPhone 14 — 390 × 844" },
      tablet: { w: 820, h: 1180, label: "iPad Air — 820 × 1180" },
      laptop: { w: 1280, h: 800, label: "Laptop — 1280 × 800" }
    };
    const d = sizes[t.device] || sizes.mobile;
    return (
      <>
        <div className="device-stage">
          <div className="device-stage__label">{d.label}</div>
          <div className="device-frame" style={{ width: d.w, height: d.h }}>
            <iframe
              key={t.device}
              src={`./Portfolio.html?embed=1`}
              title="Preview"
              style={{ width: d.w, height: d.h, border: 0, display: "block", background: "var(--void-black)" }} />
          </div>
        </div>
        <TweaksPanel>
          <TweakSection label="Responsive preview" />
          <TweakRadio
            label="Device"
            value={t.device}
            options={["mobile", "tablet", "laptop", "desktop"]}
            onChange={(v) => setTweak("device", v)} />
        </TweaksPanel>
      </>);
  }

  return (
    <>
      <Cursor />
      <Nav variant="commandbar" onOpenCase={handleOpen} />
      <main>
        <Hero onContact={() => {window.scrollTo({ top: document.getElementById("contact").offsetTop - 80, behavior: "smooth" });}} />
        <Work onOpen={handleOpen} />
        <Approche />
        <About />
        <Stack />
        <Contact />
      </main>
      <footer className="footer">
        <span>© 2026 Maddlyn Fuzier · Product Designer</span>
        <span>Paris, FR · fuzier.maddlyn@gmail.com</span>
      </footer>
      <CaseModal caseId={openCase} onClose={handleClose} onNav={handleOpen} />
      {!isEmbedded &&
      <TweaksPanel>
        <TweakSection label="Responsive preview" />
        <TweakRadio
          label="Device"
          value={t.device || "desktop"}
          options={["mobile", "tablet", "laptop", "desktop"]}
          onChange={(v) => setTweak("device", v)} />
      </TweaksPanel>
      }
    </>);

}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);