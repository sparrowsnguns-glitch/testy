/* app.js — Final, corrected, smooth multi-language quiz + WhatsApp */
/* Default language = English; replace entire app.js with this file */

const LANG = {
  en: {
    title: "Maderotherapy Ibiza",
    start: "Start Quiz",
    restart: "Restart Quiz",
    infoText: "Discover your personalized Maderotherapy plan for relaxation, contouring and lymphatic wellness during your Ibiza vacation.",
    progress: "Question",
    of: "of",
    namePlaceholder: "Your name (required)",
    whatsappBtn: "Send via WhatsApp",
    questions: [
      { q: "What matters most to you regarding your body?", a: ["Feel lighter & well", "Firm & defined", "Reduce water retention", "Reduce cellulite / unevenness"] },
      { q: "Which area has your current priority?", a: ["Abdomen & waist", "Buttocks", "Legs", "Arms", "Back"] },
      { q: "How would you describe your current tissue structure?", a: ["Smooth", "Slight unevenness", "Visible cellulite / water retention", "More pronounced unevenness"] },
      { q: "How does your body feel in daily life?", a: ["Light & relaxed", "Heavy / congested", "Swollen"] },
      { q: "Which pace feels right for you?", a: ["Gentle start (1×/week)", "Consistent development (2×/week)", "Intensive focus (3×/week)"] },
      { q: "What motivates you the most to start?", a: ["Holiday / Event", "Feel good in my body", "Health & vitality", "Confidence & transformation"] }
    ],
    results: [
      { title: "Instant Glow", lead: "Perfect for short Ibiza stays.", plan: "1–2 sessions • Light sculpting & drainage." },
      { title: "Contour Essentials", lead: "Foundational sculpting for firmer body shape.", plan: "3–4 sessions • Body contouring & skin tightening." },
      { title: "Body Refinement", lead: "Visible improvement of skin texture & firmness.", plan: "5–6 sessions • Contouring & cellulite reduction." },
      { title: "Sculpt & Smooth", lead: "Targeted shaping & stronger definition.", plan: "8–10 sessions • Firming & deeper work." },
      { title: "Complete Body Reset", lead: "Transformational program for lasting results.", plan: "12–15 sessions • Complete sculpting & long-term improvement." }
    ]
  },
  es: {
    title: "Maderoterapia Ibiza",
    start: "Iniciar cuestionario",
    restart: "Reiniciar cuestionario",
    infoText: "Descubre tu programa personalizado de Maderoterapia para relajación, contorno y bienestar linfático durante tus vacaciones en Ibiza.",
    progress: "Pregunta",
    of: "de",
    namePlaceholder: "Tu nombre (requerido)",
    whatsappBtn: "Enviar por WhatsApp",
    questions: [
      { q: "¿Qué es lo más importante para ti respecto a tu cuerpo?", a: ["Sentirse más ligero", "Tonificar & definir", "Reducir retención de líquidos", "Reducir celulitis / irregularidades"] },
      { q: "¿Qué zona tiene mayor prioridad actualmente?", a: ["Abdomen & cintura", "Glúteos", "Piernas", "Brazos", "Espalda"] },
      { q: "¿Cómo describirías tu estructura tisular actual?", a: ["Suave", "Leve irregularidad", "Celulitis visible / retención de líquidos", "Irregularidades pronunciadas"] },
      { q: "¿Cómo se siente tu cuerpo diariamente?", a: ["Ligero & relajado", "Pesado / congestionado", "Hinchado"] },
      { q: "¿Qué ritmo te parece adecuado?", a: ["Inicio suave (1×/sem)", "Desarrollo constante (2×/sem)", "Enfoque intensivo (3×/sem)"] },
      { q: "¿Qué te motiva más a empezar?", a: ["Vacaciones / Evento", "Sentirse bien", "Salud & vitalidad", "Confianza & transformación"] }
    ],
    results: [
      { title: "Instant Glow", lead: "Perfecto para estancias cortas.", plan: "1–2 sesiones • Modelado ligero & drenaje." },
      { title: "Contour Essentials", lead: "Base para silueta más firme.", plan: "3–4 sesiones • Modelado corporal & reafirmación." },
      { title: "Body Refinement", lead: "Mejora visible de la firmeza de la piel.", plan: "5–6 sesiones • Contorno & reducción de celulitis." },
      { title: "Sculpt & Smooth", lead: "Definición más intensa.", plan: "8–10 sesiones • Firmeza profunda." },
      { title: "Complete Body Reset", lead: "Programa transformador y duradero.", plan: "12–15 sesiones • Modelado completo & mejora prolongada." }
    ]
  },
  de: {
    title: "Maderotherapie Ibiza",
    start: "Quiz starten",
    restart: "Quiz neu starten",
    infoText: "Entdecke dein persönliches Maderotherapie-Programm für Entspannung, Konturierung und Lymph-Wellness während deines Ibiza-Urlaubs.",
    progress: "Frage",
    of: "von",
    namePlaceholder: "Dein Name (erforderlich)",
    whatsappBtn: "Per WhatsApp senden",
    questions: [
      { q: "Was ist dir aktuell am wichtigsten für deinen Körper?", a: ["Wohler & leichter fühlen", "Straffer & definierter werden", "Weniger Wassereinlagerungen / Entstauung", "Unebenheiten / Cellulite reduzieren"] },
      { q: "Welcher Bereich hat aktuell die höchste Priorität?", a: ["Bauch & Taille", "Po", "Beine", "Arme", "Rücken"] },
      { q: "Wie würdest du deine Gewebestruktur beschreiben?", a: ["glatt", "leichte Unebenheiten", "sichtbare Cellulite / Wassereinlagerungen", "stärker ausgeprägte Unebenheiten"] },
      { q: "Wie fühlt sich dein Körper im Alltag an?", a: ["leicht & entspannt", "schwer / gestaut", "geschwollen"] },
      { q: "Welches Tempo passt für dich?", a: ["sanfter Einstieg (1×/Woche)", "konstante Entwicklung (2×/Woche)", "intensiver Fokus (3×/Woche)"] },
      { q: "Was motiviert dich am meisten jetzt zu starten?", a: ["Reise / Event", "Wohlfühlen im eigenen Körper", "Gesundheit & Vitalität", "Selbstbewusstsein & Transformation"] }
    ],
    results: [
      { title: "Instant Glow", lead: "Ideal für 3–7 Tage Aufenthalt.", plan: "1–2 Sitzungen • Leichte Modellage & Entstauung." },
      { title: "Contour Essentials", lead: "Basis-Formung für straffere Silhouette.", plan: "3–4 Sitzungen • Körperformung & Hautstraffung." },
      { title: "Body Refinement", lead: "Sichtbar straffere Hautstruktur.", plan: "5–6 Sitzungen • Kontur & Cellulite-Reduktion." },
      { title: "Sculpt & Smooth", lead: "Gezielte Formgebung & stärkere Definition.", plan: "8–10 Sitzungen • Tiefe Straffung & Definition." },
      { title: "Complete Body Reset", lead: "Transformation mit nachhaltigem Effekt.", plan: "12–15 Sitzungen • Vollständige Modellage & Konturverbesserung." }
    ]
  }
};

/* App state */
let currentLang = "en";
let idx = 0;
let score = 0;

/* DOM refs */
const quizSection = document.getElementById("quizSection");
const quizCard = document.getElementById("quizCard");
const resultSection = document.getElementById("resultSection");
const resultCard = document.getElementById("resultCard");
const startBtn = document.getElementById("startBtn");
const langSelect = document.getElementById("langSelect");
const infoTextEl = document.getElementById("info-text");
const mainTitle = document.getElementById("main-title");
const yearSpan = document.getElementById("year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

/* Ensure English default on load */
window.addEventListener("DOMContentLoaded", () => {
  currentLang = "en";
  langSelect.value = "en";
  applyLanguage();
});

/* Apply language to UI */
function applyLanguage(){
  const langObj = LANG[currentLang];
  if (!langObj) return;
  mainTitle.textContent = langObj.title;
  startBtn.textContent = langObj.start;
  infoTextEl.textContent = langObj.infoText;
}

/* Language change => reset quiz (avoids mismatch) */
langSelect.addEventListener("change", () => {
  currentLang = langSelect.value;
  idx = 0; score = 0;
  quizSection.classList.add("hidden");
  resultSection.classList.add("hidden");
  applyLanguage();
  startBtn.classList.remove("hidden");
  // small scroll to top for mobile
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* Start quiz */
startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  quizSection.classList.remove("hidden");
  idx = 0; score = 0;
  renderQuestion(true);
});

/* Render question with safe transitions */
function renderQuestion(first=false){
  const langObj = LANG[currentLang];
  const qObj = langObj.questions[idx];

  // Guard: if qObj missing, bail
  if (!qObj) {
    console.error("Question not found", idx, currentLang);
    return;
  }

  // animate out
  quizCard.classList.remove("fade-in");
  quizCard.classList.add("fade-out");

  setTimeout(()=>{
    // build choices (clear previous selected classes)
    const choicesHTML = qObj.a.map((a,i)=>`<div class="choice"><button data-index="${i}" type="button" aria-pressed="false">${a}</button></div>`).join("");
    quizCard.innerHTML = `
      <div class="quiz-question">${idx+1}. ${qObj.q}</div>
      <div class="choice-list">${choicesHTML}</div>
      <div class="progress">${langObj.progress} ${idx+1} ${langObj.of} ${langObj.questions.length}</div>
    `;

    // animate in
    quizCard.classList.remove("fade-out");
    quizCard.classList.add("fade-in");

    // attach events
    quizCard.querySelectorAll("button[data-index]").forEach(btn=>{
      btn.addEventListener("click", ()=> {
        // visual selected state
        quizCard.querySelectorAll("button[data-index]").forEach(b=>b.classList.remove("selected"));
        btn.classList.add("selected");

        // small debounce and progress to next question
        setTimeout(()=>{
          // scoring: index+1 weight
          score += parseInt(btn.dataset.index,10) + 1;
          idx++;
          if (idx < langObj.questions.length) {
            renderQuestion();
          } else {
            showResult();
          }
        }, 220); // small delay to show selected state
      });
    });

  }, 260); // matches CSS transitions
}

/* Show result */
function showResult(){
  const langObj = LANG[currentLang];

  // hide question area smoothly
  quizCard.classList.remove("fade-in");
  quizCard.classList.add("fade-out");

  setTimeout(()=>{
    quizSection.classList.add("hidden");
    resultSection.classList.remove("hidden");

    // compute tier
    let tier;
    if (score <= 8) tier = 0;
    else if (score <= 11) tier = 1;
    else if (score <= 15) tier = 2;
    else if (score <= 19) tier = 3;
    else tier = 4;

    const res = langObj.results[tier];

    // render clean result
    resultCard.classList.remove("fade-out");
    resultCard.classList.add("fade-in");
    resultCard.innerHTML = `
      <h2>${res.title}</h2>
      <p class="lead">${res.lead}</p>
      <p class="result-plan"><strong>${res.plan}</strong></p>
      <hr/>
      <div class="form-row">
        <label for="userName" style="display:none">${langObj.namePlaceholder}</label>
        <input id="userName" type="text" placeholder="${langObj.namePlaceholder}" aria-label="${langObj.namePlaceholder}" />
        <div id="nameError" class="error-msg" style="display:none"></div>
      </div>
      <div style="display:flex;gap:0.8rem;flex-direction:column">
        <button id="whatsappBtn" class="btn primary">${langObj.whatsappBtn}</button>
        <button id="restartBtn" class="btn ghost">${langObj.restart}</button>
      </div>
    `;

    // attach listeners
    const whatsappBtn = document.getElementById("whatsappBtn");
    const restartBtn = document.getElementById("restartBtn");
    const userNameInput = document.getElementById("userName");
    const nameError = document.getElementById("nameError");

    restartBtn.addEventListener("click", ()=>{
      idx = 0; score = 0;
      resultSection.classList.add("hidden");
      quizSection.classList.add("hidden");
      startBtn.classList.remove("hidden");
      applyLanguage();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    whatsappBtn.addEventListener("click", ()=>{
      const name = (userNameInput.value || "").trim();
      if (!name) {
        nameError.style.display = "block";
        nameError.textContent = (currentLang === "de") ? "Bitte gib deinen Namen ein." : (currentLang === "es") ? "Por favor, introduce tu nombre." : "Please enter your name.";
        userNameInput.classList.add("input-error");
        userNameInput.focus();
        return;
      }
      nameError.style.display = "none";
      userNameInput.classList.remove("input-error");

      const resText = `${res.title} — ${res.plan}`;
      const msg = `${name} | ${LANG[currentLang].title} quiz result: ${res.title} | ${resText} | Lang:${currentLang.toUpperCase()}`;
      const waNumber = "4915901023189"; // change if needed
      const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
      window.open(waLink, "_blank");
    });

  }, 260);
}
