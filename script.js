"use strict";

/*
  difficulty: "easy" | "medium" | "hard"
  explain: kort begrunnelse som vises etter du svarer
*/

const allQuestions = [
  // ===================== EASY (20) =====================
  {
    q: "Hva er en server?",
    a: ["En PC som gir tjenester til andre", "En type kabel", "Et passord", "En nettleser"],
    correct: 0, difficulty: "easy",
    explain: "En server leverer tjenester (f.eks. filer, nettsider, innlogging) til klienter på nettverket."
  },
  {
    q: "Hva er en klient?",
    a: ["En enhet som bruker tjenester fra en server", "En brannmur", "En backup", "En switch"],
    correct: 0, difficulty: "easy",
    explain: "Klienten er brukerenheten som ber om og bruker tjenester fra en server."
  },
  {
    q: "Hva er en IP-adresse?",
    a: ["Et passord", "En unik adresse for en enhet på nettverket", "En type virus", "Et program"],
    correct: 1, difficulty: "easy",
    explain: "IP-adressen identifiserer en enhet på nettverket, så data finner riktig mottaker."
  },
  {
    q: "Hva brukes DNS til?",
    a: ["Oversette domenenavn til IP-adresser", "Lagre bilder", "Kjøle CPU", "Stoppe strømbrudd"],
    correct: 0, difficulty: "easy",
    explain: "DNS gjør at 'vg.no' blir til en IP-adresse som maskiner faktisk kan kontakte."
  },
  {
    q: "Hva er en router sitt hovedmål?",
    a: ["Sende data mellom nettverk", "Lage nettsider", "Lagre passord", "Skru av PC-er"],
    correct: 0, difficulty: "easy",
    explain: "Routeren ruter trafikk mellom nettverk, typisk LAN ↔ internett."
  },
  {
    q: "Hva gjør en switch vanligvis?",
    a: ["Kobler enheter i samme nettverk (LAN)", "Kobler til strøm", "Krypterer filer", "Tar backup"],
    correct: 0, difficulty: "easy",
    explain: "Switch kobler enheter i samme lokale nettverk og sender trafikk til riktig port."
  },
  {
    q: "Hva betyr backup?",
    a: ["Kopi av data i tilfelle tap", "Å slette filer", "Å oppdatere skjermkort", "Å logge inn"],
    correct: 0, difficulty: "easy",
    explain: "Backup er en kopi du kan gjenopprette fra hvis noe går galt (feil, angrep, uhell)."
  },
  {
    q: "Hva betyr gjenoppretting (restore)?",
    a: ["Legge tilbake data fra backup", "Slette loggfiler", "Starte PC på nytt", "Bytte passord"],
    correct: 0, difficulty: "easy",
    explain: "Restore betyr å hente data tilbake fra en backup til en fungerende tilstand."
  },
  {
    q: "Hva er et operativsystem?",
    a: ["Programvare som styrer maskinen", "En nettside", "En kabeltype", "En appbutikk"],
    correct: 0, difficulty: "easy",
    explain: "OS styrer maskinvare og ressurser, og lar programmer kjøre (Windows, Linux osv.)."
  },
  {
    q: "Hva er en oppdatering (patch)?",
    a: ["En feilretting/sikkerhetsretting", "En ny mus", "En type nettverk", "En backup"],
    correct: 0, difficulty: "easy",
    explain: "Patch fikser feil og tetter sikkerhetshull, så du ikke blir gratis demo for hackere."
  },
  {
    q: "Hva er phishing?",
    a: ["Svindel som prøver å lure deg til å gi fra deg info", "En nettverkskabel", "En backup-type", "Et antivirus"],
    correct: 0, difficulty: "easy",
    explain: "Phishing er falske meldinger/nettsider som prøver å stjele passord eller annen info."
  },
  {
    q: "Hva er et sterkt passord best på?",
    a: ["Å være vanskelig å gjette", "Å være kort", "Å være det samme overalt", "Å stå på lapp på skjermen"],
    correct: 0, difficulty: "easy",
    explain: "Sterke passord er lange, unike og vanskelig å gjette eller brute-force."
  },
  {
    q: "Hva betyr LAN?",
    a: ["Lokalt nettverk", "Langsomt nett", "Lagring av noter", "Liten antivirus-nøkkel"],
    correct: 0, difficulty: "easy",
    explain: "LAN er nettverket i et begrenset område, som hjemme, skole eller kontor."
  },
  {
    q: "Hva betyr WAN?",
    a: ["Større nettverk over avstand", "Trådløst LAN", "Windows App Network", "Web Access Node"],
    correct: 0, difficulty: "easy",
    explain: "WAN er nettverk over større avstander, som kobler sammen flere LAN."
  },
  {
    q: "Hva brukes antivirus til?",
    a: ["Oppdage og stoppe skadevare", "Gjøre PC raskere automatisk", "Lage nettsider", "Koble til Wi-Fi"],
    correct: 0, difficulty: "easy",
    explain: "Antivirus/endpoint security oppdager og blokkerer malware og mistenkelig aktivitet."
  },
  {
    q: "Hva er en brannmur (firewall)?",
    a: ["Filtrerer nettverkstrafikk", "En type skjerm", "Et passord", "En serverrolle"],
    correct: 0, difficulty: "easy",
    explain: "Brannmur tillater/blokkerer trafikk basert på regler (inn/ut, porter, IP, protokoller)."
  },
  {
    q: "Hva er to-faktor autentisering (2FA)?",
    a: ["Ekstra bekreftelse i tillegg til passord", "To passord i samme felt", "To nettverk samtidig", "To backup-filer"],
    correct: 0, difficulty: "easy",
    explain: "2FA krever noe du vet (passord) + noe du har (kode/app), som gjør kapring vanskeligere."
  },
  {
    q: "Hva er en bruker-konto?",
    a: ["En identitet i et system", "En IP-adresse", "En nettverkskabel", "En type loggfil"],
    correct: 0, difficulty: "easy",
    explain: "En konto representerer en bruker og bestemmer rettigheter, innstillinger og tilgang."
  },
  {
    q: "Hva betyr “restart”?",
    a: ["Starte på nytt", "Slette alt", "Kryptere disk", "Oppgradere RAM"],
    correct: 0, difficulty: "easy",
    explain: "Restart starter systemet på nytt, ofte for å rydde opp i prosesser eller fullføre oppdateringer."
  },
  {
    q: "Hva er et nettverk?",
    a: ["En måte å koble enheter sammen", "En type harddisk", "Et operativsystem", "En app"],
    correct: 0, difficulty: "easy",
    explain: "Et nettverk lar enheter kommunisere og dele ressurser som internett, printere og filer."
  },

  // ===================== MEDIUM (20) =====================
  {
    q: "Hva er autentisering?",
    a: ["Hvem du er", "Hva du får gjøre", "Hvor fort nettet er", "Hvor stor disken er"],
    correct: 0, difficulty: "medium",
    explain: "Autentisering bekrefter identiteten din (brukernavn/passord, 2FA, sertifikat)."
  },
  {
    q: "Hva er autorisasjon?",
    a: ["Hva du får lov til å gjøre", "Hvem du er", "Hvor du bor", "Hvor mye RAM du har"],
    correct: 0, difficulty: "medium",
    explain: "Autorisasjon handler om rettigheter (lese, skrive, admin)."
  },
  {
    q: "Hva er virtualisering?",
    a: ["Flere virtuelle maskiner på én fysisk maskin", "Trådløst nettverk", "Kryptering av e-post", "Backup i skyen"],
    correct: 0, difficulty: "medium",
    explain: "Virtualisering lar deg kjøre flere OS/VM-er på samme fysiske maskinvare (host)."
  },
  {
    q: "Hva er en virtuell maskin (VM)?",
    a: ["Et simulert operativsystem på en host", "En fysisk PC", "En router", "En kabel"],
    correct: 0, difficulty: "medium",
    explain: "VM er en 'virtuell PC' som kjører inne i en hypervisor på en host-maskin."
  },
  {
    q: "Hva betyr “uptime”?",
    a: ["Hvor lenge et system er tilgjengelig", "Hvor lenge PC-en står på pause", "Hvor fort CPU er", "Hvor ofte man logger inn"],
    correct: 0, difficulty: "medium",
    explain: "Uptime måler tilgjengelighet/stabilitet. Høy uptime = lite nedetid."
  },
  {
    q: "Hva er “downtime”?",
    a: ["Tid systemet er nede/ikke tilgjengelig", "Tid du ikke gamer", "Tid for backup", "Tid for oppdatering av skjerm"],
    correct: 0, difficulty: "medium",
    explain: "Downtime er perioden en tjeneste ikke fungerer for brukerne."
  },
  {
    q: "Hvorfor tar man backup regelmessig?",
    a: ["For å kunne gjenopprette data ved tap/angrep", "For å få raskere Wi-Fi", "For å unngå passord", "For å slippe antivirus"],
    correct: 0, difficulty: "medium",
    explain: "Backup beskytter mot datatap fra ransomware, feil, sletting og maskinvareproblemer."
  },
  {
    q: "Hva er logging i IT-drift?",
    a: ["Registrering av hendelser i system", "Å tegne nettverkskart", "Å slette brukere", "Å oppgradere CPU"],
    correct: 0, difficulty: "medium",
    explain: "Logger viser hva som skjedde, når det skjedde, og ofte hvorfor. Veldig nyttig ved feilsøking."
  },
  {
    q: "Hva brukes monitoring til?",
    a: ["Overvåke status og varsle ved feil", "Komprimere filer", "Kryptere passord", "Lage brukere"],
    correct: 0, difficulty: "medium",
    explain: "Monitoring følger med på CPU, RAM, disk, tjenester og gir varsler før alt brenner."
  },
  {
    q: "Hva er patching?",
    a: ["Installere oppdateringer/feilrettinger", "Bytte PC", "Slette logger", "Lage nye passord"],
    correct: 0, difficulty: "medium",
    explain: "Patching tetter sårbarheter og fikser feil. Uten patching blir systemet et mål."
  },
  {
    q: "Hva er tilgangsstyring?",
    a: ["Styre rettigheter og tilgang til ressurser", "Styre strømforbruk", "Styre skjermlys", "Styre nettleser-historikk"],
    correct: 0, difficulty: "medium",
    explain: "Tilgangsstyring sørger for at bare riktige brukere får riktig tilgang."
  },
  {
    q: "Hva er minsteprinsipp (least privilege)?",
    a: ["Gi bare tilgang som trengs, ikke mer", "Gi alle admin", "Gi tilgang først, spør senere", "Gi tilgang kun til printeren"],
    correct: 0, difficulty: "medium",
    explain: "Minst mulig tilgang reduserer skade hvis en konto kompromitteres."
  },
  {
    q: "Hva er forskjellen på HTTP og HTTPS?",
    a: ["HTTPS er kryptert (TLS), HTTP er ikke", "HTTP er raskere alltid", "HTTPS funker ikke på mobil", "HTTP har passord innebygd"],
    correct: 0, difficulty: "medium",
    explain: "HTTPS beskytter data underveis med kryptering og sertifikat, HTTP gjør ikke det."
  },
  {
    q: "Hva er en port i nettverk?",
    a: ["Et nummer for hvilken tjeneste trafikken skal til", "En fysisk USB-port", "En type kabel", "En IP-adresse"],
    correct: 0, difficulty: "medium",
    explain: "Porter styrer hvilken tjeneste trafikk går til (f.eks. 80/443 for web)."
  },
  {
    q: "Hva er DHCP?",
    a: ["Tjeneste som deler ut IP-adresser automatisk", "Tjeneste som krypterer e-post", "Brannmurtype", "Backup-robot"],
    correct: 0, difficulty: "medium",
    explain: "DHCP gir enheter IP, gateway og DNS automatisk, så du slipper å sette det manuelt."
  },
  {
    q: "Hva betyr 'deploy'?",
    a: ["Publisere en løsning til drift/produksjon", "Slette prosjekt", "Lage design", "Kjøre antivirus"],
    correct: 0, difficulty: "medium",
    explain: "Deploy betyr å legge en løsning ut så brukere kan bruke den (produksjonsmiljø)."
  },
  {
    q: "Hva er versjonskontroll (Git) nyttig for?",
    a: ["Holde orden på endringer i filer og historikk", "Lagre passord trygt", "Gjøre PC raskere", "Stoppe spam"],
    correct: 0, difficulty: "medium",
    explain: "Git lar deg se historikk, angre endringer og samarbeide uten å ødelegge alt."
  },
  {
    q: "Hva er en “incident” i IT-drift?",
    a: ["En hendelse/feil som påvirker tjeneste", "En planlagt oppdatering", "En designendring", "En ny bruker"],
    correct: 0, difficulty: "medium",
    explain: "Incident er en uønsket hendelse som påvirker brukere eller tjenester (feil, nedetid, osv.)."
  },
  {
    q: "Hva er dokumentasjon viktig for?",
    a: ["At andre kan drifte/feilsøke systemet senere", "At PC blir raskere", "At passord blir kortere", "At internett blir billigere"],
    correct: 0, difficulty: "medium",
    explain: "Dokumentasjon gjør drift mulig over tid. Ellers er alt bare 'hvorfor funker det ikke?'"
  },
  {
    q: "Hva er kryptering?",
    a: ["Å gjøre data uleselig uten nøkkel", "Å slette data", "Å kopiere data", "Å zippe data"],
    correct: 0, difficulty: "medium",
    explain: "Kryptering beskytter data ved å gjøre den uleselig uten riktig nøkkel."
  },

  // ===================== HARD (20) =====================
  {
    q: "Hva er forskjellen på LAN og WAN?",
    a: ["LAN er lokalt, WAN dekker større områder", "LAN er alltid trådløst", "WAN finnes bare på skole", "LAN er det samme som internett"],
    correct: 0, difficulty: "hard",
    explain: "LAN = lokalt nett, WAN = nett over større avstander som kobler flere LAN."
  },
  {
    q: "Hva er NAT vanligvis brukt til?",
    a: ["Oversette private IP-er til offentlig IP", "Kryptere nett", "Slette logger", "Koble switcher sammen"],
    correct: 0, difficulty: "hard",
    explain: "NAT lar mange enheter dele én offentlig IP ved å oversette adresser."
  },
  {
    q: "Hva er en VLAN?",
    a: ["Logisk nettverk som deler opp et fysisk nett", "En type kabel", "En backup-metode", "En nettsideprotokoll"],
    correct: 0, difficulty: "hard",
    explain: "VLAN segmenterer nettverket logisk, selv om alt går på samme fysiske switch."
  },
  {
    q: "Hva er fordelen med VLAN?",
    a: ["Segmentering: bedre sikkerhet og kontroll", "Raskere CPU", "Mindre RAM-bruk", "Bedre skjermoppløsning"],
    correct: 0, difficulty: "hard",
    explain: "Segmentering begrenser hvem som kan snakke med hvem, og hindrer spredning av problemer/angrep."
  },
  {
    q: "Hva er en ACL i nettverkssammenheng?",
    a: ["Regler som styrer hva som får passere", "Et antivirus", "En database", "En kabelstandard"],
    correct: 0, difficulty: "hard",
    explain: "ACL (Access Control List) er regler for trafikk eller tilgang, ofte basert på IP/porter."
  },
  {
    q: "Hva er IDS/IPS?",
    a: ["System for å oppdage/stoppe angrep", "Backup-system", "En type switch", "En nettleser"],
    correct: 0, difficulty: "hard",
    explain: "IDS oppdager trusler, IPS kan også blokkere dem automatisk."
  },
  {
    q: "Hva betyr prinsippet CIA i sikkerhet?",
    a: ["Konfidensialitet, Integritet, Tilgjengelighet", "CPU, Internett, Antivirus", "Control, Identity, Access", "Cloud, IP, Admin"],
    correct: 0, difficulty: "hard",
    explain: "CIA-triaden beskriver hva sikkerhet skal beskytte: hemmelighet, korrekthet og tilgjengelighet."
  },
  {
    q: "Hva er integritet i datasikkerhet?",
    a: ["At data ikke endres uautorisert", "At data er kryptert", "At data er slettet", "At data ligger i skyen"],
    correct: 0, difficulty: "hard",
    explain: "Integritet handler om at data er korrekt og ikke manipulert."
  },
  {
    q: "Hva er tilgjengelighet (availability)?",
    a: ["At systemet er oppe og tilgjengelig for bruk", "At du har admin", "At passordet er langt", "At PC er ny"],
    correct: 0, difficulty: "hard",
    explain: "Tilgjengelighet betyr at tjenester fungerer når brukerne trenger dem."
  },
  {
    q: "Hva er en “snapshot” (VM)?",
    a: ["Et øyeblikksbilde av VM-tilstand du kan rulle tilbake til", "En backup av hele internett", "En ny IP", "En loggfil"],
    correct: 0, difficulty: "hard",
    explain: "Snapshot lar deg rulle VM tilbake raskt, men er ikke en full backup-strategi."
  },
  {
    q: "Hva er forskjell på backup og snapshot?",
    a: ["Backup er for gjenoppretting over tid; snapshot er kortsiktig tilstand", "De er helt like", "Snapshot er alltid bedre", "Backup brukes bare på mobil"],
    correct: 0, difficulty: "hard",
    explain: "Backup lagres trygt og kan flyttes; snapshot er mer som 'undo' på samme lagring."
  },
  {
    q: "Hva er en RPO (Recovery Point Objective)?",
    a: ["Hvor mye data du tåler å miste (i tid)", "Hvor raskt nettverket er", "Hvor lenge CPU varer", "Hvor ofte du bytter passord"],
    correct: 0, difficulty: "hard",
    explain: "RPO sier hvor langt tilbake du må kunne gjenopprette (f.eks. 1 time data-tap maks)."
  },
  {
    q: "Hva er en RTO (Recovery Time Objective)?",
    a: ["Hvor raskt du må få tjenesten opp igjen", "Hvor mye data du kan miste", "Hvor lenge en patch tar", "Hvor stort nettverket er"],
    correct: 0, difficulty: "hard",
    explain: "RTO er maks nedetid du kan akseptere før tjenesten må være oppe igjen."
  },
  {
    q: "Hva er “principle of least privilege” brukt til?",
    a: ["Redusere skade ved kompromittering", "Øke FPS", "Slippe logging", "Gjøre backup raskere"],
    correct: 0, difficulty: "hard",
    explain: "Hvis en konto blir hacket, begrenser minst-tilgang hvor mye skade som kan gjøres."
  },
  {
    q: "Hva er MFA, og hvorfor hjelper det?",
    a: ["Flere faktorer gjør konto vanskeligere å kapre", "Det gjør passord kortere", "Det fjerner behovet for brukere", "Det øker internett-hastighet"],
    correct: 0, difficulty: "hard",
    explain: "MFA gjør at passord alene ikke er nok, så konto er vanskeligere å overta."
  },
  {
    q: "Hva er “defense in depth”?",
    a: ["Flere lag med sikkerhet, ikke bare én kontroll", "Kun brannmur", "Kun antivirus", "Kun passord"],
    correct: 0, difficulty: "hard",
    explain: "Flere sikkerhetslag betyr at hvis én kontroll feiler, står andre igjen."
  },
  {
    q: "Hva er en “zero trust”-tankegang?",
    a: ["Stol ikke automatisk på noe, verifiser alltid", "Stol på alle internt", "Stol på Wi-Fi", "Stol på admin"],
    correct: 0, difficulty: "hard",
    explain: "Zero trust antar at alt kan være kompromittert, så du må verifisere hele tiden."
  },
  {
    q: "Hva er “hardening”?",
    a: ["Sikre system ved å slå av unødvendige tjenester og stramme inn", "Oppgradere skjermkort", "Lage ny bruker", "Slette backup"],
    correct: 0, difficulty: "hard",
    explain: "Hardening reduserer angrepsflate ved å fjerne unødvendig funksjonalitet og låse ned."
  },
  {
    q: "Hva er en “baseline” i drift/sikkerhet?",
    a: ["Standardkonfig som systemer skal følge", "En type kabel", "En IP-range", "En loggfil"],
    correct: 0, difficulty: "hard",
    explain: "Baseline er en kjent 'god' standardkonfig som gjør det lettere å oppdage avvik."
  },
  {
    q: "Hvorfor er segmentering viktig i nettverk?",
    a: ["Begrenser spredning av angrep og gir bedre kontroll", "Gjør PC raskere", "Gjør passord kortere", "Fjerner behovet for backup"],
    correct: 0, difficulty: "hard",
    explain: "Segmentering gjør at problemer ikke sprer seg fritt mellom alle enheter og tjenester."
  }
];

// ---------------- DOM ----------------
const menuEl = document.getElementById("menu");
const quizEl = document.getElementById("quizApp");
const startBtn = document.getElementById("startBtn");
const questionCountSelect = document.getElementById("questionCount");
const difficultySelect = document.getElementById("difficulty");
const menuInfo = document.getElementById("menuInfo");

const meta = document.getElementById("meta");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next");
const restartBtn = document.getElementById("restart");
const progressEl = document.getElementById("progress");

// ---------------- STATE ----------------
let quiz = [];
let index = 0;
let score = 0;
let locked = false;
let currentChoices = [];

// ---------------- HELPERS ----------------
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function setMeta() {
  meta.innerHTML = `
    <div>Spørsmål: ${index + 1}/${quiz.length}</div>
    <div>Poeng: ${score}</div>
  `;
}

// ---------------- QUIZ FLOW ----------------
function startQuiz() {
  const requestedCount = Number(questionCountSelect.value);
  const difficulty = difficultySelect.value;

  let filtered = [...allQuestions];
  if (difficulty !== "all") filtered = filtered.filter(q => q.difficulty === difficulty);

  const available = filtered.length;
  const actualCount = Math.min(requestedCount, available);

  // Info i meny (skal normalt være tom, siden vi har 20 per nivå)
  if (menuInfo) {
    menuInfo.textContent = (actualCount < requestedCount)
      ? `Du valgte ${requestedCount}, men det finnes bare ${available} spørsmål i "${difficulty}". Starter med ${actualCount}.`
      : "";
  }

  shuffle(filtered);
  quiz = filtered.slice(0, actualCount);

  index = 0;
  score = 0;

  menuEl.classList.add("hidden");
  quizEl.classList.remove("hidden");

  renderQuestion();
}

function renderQuestion() {
  locked = false;
  nextBtn.disabled = true;

  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";

  const item = quiz[index];
  questionEl.textContent = item.q;

  currentChoices = item.a.map((text, i) => ({
    text,
    isCorrect: i === item.correct
  }));

  shuffle(currentChoices);
  answersEl.innerHTML = "";

  currentChoices.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.textContent = choice.text;
    btn.onclick = () => pickAnswer(i);
    answersEl.appendChild(btn);
  });

  setMeta();
  progressEl.style.width = `${(index / quiz.length) * 100}%`;
  nextBtn.textContent = "Neste";
}

function pickAnswer(i) {
  if (locked) return;
  locked = true;

  const item = quiz[index];
  const buttons = [...answersEl.querySelectorAll("button")];
  buttons.forEach(b => b.disabled = true);

  const picked = currentChoices[i];
  const correctIndex = currentChoices.findIndex(c => c.isCorrect);
  const correctText = (correctIndex !== -1) ? currentChoices[correctIndex].text : item.a[item.correct];
  const explainText = item.explain ? item.explain : "Ingen begrunnelse satt (fordi noen ikke gadd å skrive den).";

  if (picked.isCorrect) {
    score++;
    buttons[i].classList.add("correct");
    feedbackEl.textContent = `Riktig. ✅ Begrunnelse: ${explainText}`;
    feedbackEl.classList.add("good");
  } else {
    buttons[i].classList.add("wrong");
    if (correctIndex !== -1) buttons[correctIndex].classList.add("correct");

    feedbackEl.textContent = `Feil. ❌ Riktig svar: ${correctText}. Begrunnelse: ${explainText}`;
    feedbackEl.classList.add("bad");
  }

  nextBtn.disabled = false;
  progressEl.style.width = `${((index + 1) / quiz.length) * 100}%`;
  setMeta();
  nextBtn.textContent = (index === quiz.length - 1) ? "Se resultat" : "Neste";
}

function showResult() {
  questionEl.textContent = `Ferdig! Du fikk ${score}/${quiz.length} poeng.`;
  answersEl.innerHTML = "";
  nextBtn.disabled = true;
  progressEl.style.width = "100%";

  feedbackEl.className = "feedback";
  if (score === quiz.length) {
    feedbackEl.textContent = "Perfekt. Du er nå den som alle spør om Wi-Fi. Gratulerer og beklager.";
    feedbackEl.classList.add("good");
  } else if (score >= Math.ceil(quiz.length * 0.7)) {
    feedbackEl.textContent = "Solid. Du lærer faktisk noe her. Skummelt.";
    feedbackEl.classList.add("good");
  } else {
    feedbackEl.textContent = "Det går fint. Drift handler mest om å feilsøke, og du øver tydeligvis.";
    feedbackEl.classList.add("bad");
  }
}

// ---------------- EVENTS ----------------
nextBtn.onclick = () => {
  if (index < quiz.length - 1) {
    index++;
    renderQuestion();
  } else {
    showResult();
  }
};

restartBtn.onclick = () => {
  quizEl.classList.add("hidden");
  menuEl.classList.remove("hidden");
};

startBtn.onclick = startQuiz;

// ----------- Dynamic year in footer -----------
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
