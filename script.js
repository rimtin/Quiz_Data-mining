// ======================================================
//  BUILD MASTER QUESTION ARRAYS FROM UNIT FILES
//  (unit files live in /units and attach data to window.*)
// ======================================================

const mcqQuestions = [
  ...(window.unit1_mcq || []),
  ...(window.unit2_mcq || [])
  // 👉 later: ...(window.unit3_mcq || []), etc.
];

const longQuestions = [
  ...(window.unit1_long || []),
  ...(window.unit2_long || [])
  // 👉 later: ...(window.unit3_long || []), etc.
];

// ======================================================
//  STATE
// ======================================================

let currentMcqIndex = 0;
let currentLongIndex = 0;
let mcqScore = 0;
let mcqAttempts = 0;

let currentChapter = "all";
let filteredMcqIndices = [];
let filteredLongIndices = [];

// Quick Test mode
let isQuickTest = false;
let quickOrder = [];
let quickTotal = 0;
let quickPosition = 0;
const QUICK_TEST_LENGTH = 10;

// ======================================================
//  ELEMENT REFERENCES
// ======================================================

const btnMcqMode = document.getElementById("btn-mcq");
const btnLongMode = document.getElementById("btn-long");

const mcqSection = document.getElementById("mcq-section");
const longSection = document.getElementById("long-section");

const mcqUnitEl = document.getElementById("mcq-unit");
const mcqCounterEl = document.getElementById("mcq-counter");
const mcqQuestionEl = document.getElementById("mcq-question");
const mcqOptionsEl = document.getElementById("mcq-options");
const mcqResultEl = document.getElementById("mcq-result");
const mcqScoreEl = document.getElementById("mcq-score");
const mcqAttemptsEl = document.getElementById("mcq-attempts");

const btnNextMcq = document.getElementById("btn-next-mcq");

const longUnitEl = document.getElementById("long-unit");
const longCounterEl = document.getElementById("long-counter");
const longQuestionEl = document.getElementById("long-question");
const longAnswerEl = document.getElementById("long-answer");
const btnShowModel = document.getElementById("btn-show-model");
const btnNextLong = document.getElementById("btn-next-long");
const modelBoxEl = document.getElementById("model-box");
const modelAnswerEl = document.getElementById("model-answer");

const chapterSelect = document.getElementById("chapter-select");
const btnQuickTest = document.getElementById("btn-quick-test");

const themeToggleBtn = document.getElementById("theme-toggle");

// ======================================================
//  THEME (LIGHT / DARK)
// ======================================================

function applyTheme(theme) {
  const body = document.body;
  if (theme === "dark") {
    body.classList.add("dark");
    themeToggleBtn.textContent = "☀️";
  } else {
    body.classList.remove("dark");
    themeToggleBtn.textContent = "🌙";
  }
  localStorage.setItem("quiz-theme", theme);
}

const savedTheme = localStorage.getItem("quiz-theme") || "light";
applyTheme(savedTheme);

themeToggleBtn.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
  applyTheme(newTheme);
});

// ======================================================
//  MODE SWITCH (MCQ / LONG)
// ======================================================

btnMcqMode.addEventListener("click", () => {
  btnMcqMode.classList.add("active");
  btnLongMode.classList.remove("active");
  mcqSection.classList.remove("hidden");
  longSection.classList.add("hidden");
});

btnLongMode.addEventListener("click", () => {
  btnLongMode.classList.add("active");
  btnMcqMode.classList.remove("active");
  longSection.classList.remove("hidden");
  mcqSection.classList.add("hidden");
});

// ======================================================
//  CHAPTER HANDLING
// ======================================================

function getAllChapters() {
  const set = new Set();
  mcqQuestions.forEach((q) => set.add(q.unit));
  longQuestions.forEach((q) => set.add(q.unit));
  return Array.from(set);
}

function populateChapterSelect() {
  const chapters = getAllChapters().sort();
  chapters.forEach((ch) => {
    const opt = document.createElement("option");
    opt.value = ch;
    opt.textContent = ch;
    chapterSelect.appendChild(opt);
  });
}

chapterSelect.addEventListener("change", () => {
  currentChapter = chapterSelect.value;
  isQuickTest = false;
  updateFilteredIndices();
  resetScore();
  loadMcqQuestionFromFilter();
  if (longQuestions.length > 0) {
    loadLongQuestionFromFilter();
  }
});

function updateFilteredIndices() {
  if (currentChapter === "all") {
    filteredMcqIndices = mcqQuestions.map((_, i) => i);
    filteredLongIndices = longQuestions.map((_, i) => i);
  } else {
    filteredMcqIndices = mcqQuestions
      .map((q, i) => (q.unit === currentChapter ? i : -1))
      .filter((i) => i !== -1);

    filteredLongIndices = longQuestions
      .map((q, i) => (q.unit === currentChapter ? i : -1))
      .filter((i) => i !== -1);
  }

  if (filteredMcqIndices.length === 0) {
    filteredMcqIndices = mcqQuestions.map((_, i) => i);
  }
  if (filteredLongIndices.length === 0) {
    filteredLongIndices = longQuestions.map((_, i) => i);
  }
}

// ======================================================
//  MCQ LOGIC (AUTO-CHECK ON CLICK)
// ======================================================

function loadMcqQuestion(index) {
  const q = mcqQuestions[index];
  mcqUnitEl.textContent = isQuickTest ? "Quick Test – Mixed" : q.unit;

  if (isQuickTest) {
    mcqCounterEl.textContent = `Q ${quickPosition + 1} of ${quickTotal}`;
  } else {
    const pos = filteredMcqIndices.indexOf(index) + 1;
    mcqCounterEl.textContent = `Q ${pos} of ${filteredMcqIndices.length}`;
  }

  mcqQuestionEl.textContent = q.question;

  // reset UI
  mcqOptionsEl.innerHTML = "";
  mcqResultEl.textContent = "";
  mcqResultEl.className = "result-text";

  q.options.forEach((opt, i) => {
    const label = document.createElement("label");
    label.className = "option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "mcqOption";
    input.value = i;

    const span = document.createElement("span");
    span.textContent = opt;

    label.appendChild(input);
    label.appendChild(span);
    mcqOptionsEl.appendChild(label);

    // auto-check when option clicked
    label.addEventListener("click", () => handleMcqSelection(i));
  });
}

function handleMcqSelection(selectedIndex) {
  const q = mcqQuestions[currentMcqIndex];
  mcqAttempts++;

  const optionLabels = mcqOptionsEl.querySelectorAll(".option");

  // lock and color options
  optionLabels.forEach((label, i) => {
    label.style.pointerEvents = "none";

    if (i === q.correctIndex) {
      label.style.background = "#d1fae5"; // green-ish
      label.style.borderColor = "#16a34a";
    } else if (i === selectedIndex) {
      label.style.background = "#fee2e2"; // red-ish
      label.style.borderColor = "#b91c1c";
    }
  });

  if (selectedIndex === q.correctIndex) {
    mcqScore++;
    mcqResultEl.textContent = "Correct ✅  " + q.explanation;
    mcqResultEl.className = "result-text correct";
  } else {
    mcqResultEl.textContent =
      "Wrong ❌  Correct answer: " +
      q.options[q.correctIndex] +
      ". " +
      q.explanation;
    mcqResultEl.className = "result-text wrong";
  }

  mcqScoreEl.textContent = mcqScore;
  mcqAttemptsEl.textContent = mcqAttempts;
}

function loadMcqQuestionFromFilter() {
  if (filteredMcqIndices.length === 0) return;
  const randomIndex =
    filteredMcqIndices[Math.floor(Math.random() * filteredMcqIndices.length)];
  currentMcqIndex = randomIndex;
  loadMcqQuestion(currentMcqIndex);
}

btnNextMcq.addEventListener("click", () => {
  if (isQuickTest) {
    quickPosition++;
    if (quickPosition >= quickTotal) {
      mcqResultEl.textContent =
        "🎉 Quick Test finished! You scored " +
        mcqScore +
        " out of " +
        quickTotal +
        ".";
      mcqResultEl.className = "result-text correct";
      isQuickTest = false;
      return;
    }
    currentMcqIndex = quickOrder[quickPosition];
    loadMcqQuestion(currentMcqIndex);
  } else {
    loadMcqQuestionFromFilter();
  }
});

// ======================================================
//  QUICK TEST (RANDOM FROM ALL MCQs)
// ======================================================

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

btnQuickTest.addEventListener("click", () => {
  if (mcqQuestions.length === 0) return;

  isQuickTest = true;
  resetScore();

  quickOrder = shuffleArray(mcqQuestions.map((_, i) => i));
  quickTotal = Math.min(QUICK_TEST_LENGTH, quickOrder.length);
  quickPosition = 0;

  currentMcqIndex = quickOrder[0];
  loadMcqQuestion(currentMcqIndex);

  mcqResultEl.textContent =
    "Quick Test started! Answer each question and then tap Next Question.";
  mcqResultEl.className = "result-text";
});

// ======================================================
//  LONG ANSWER LOGIC
// ======================================================

function loadLongQuestion(index) {
  const q = longQuestions[index];
  longUnitEl.textContent = q.unit;

  const pos = filteredLongIndices.indexOf(index) + 1;
  longCounterEl.textContent = `Q ${pos} of ${filteredLongIndices.length}`;

  longQuestionEl.textContent = q.question;
  longAnswerEl.value = "";
  modelBoxEl.classList.add("hidden");
  modelAnswerEl.textContent = "";
}

function loadLongQuestionFromFilter() {
  if (filteredLongIndices.length === 0) return;
  const randomIndex =
    filteredLongIndices[Math.floor(Math.random() * filteredLongIndices.length)];
  currentLongIndex = randomIndex;
  loadLongQuestion(currentLongIndex);
}

btnShowModel.addEventListener("click", () => {
  const q = longQuestions[currentLongIndex];
  modelBoxEl.classList.remove("hidden");
  modelAnswerEl.textContent = q.keyPoints;
});

btnNextLong.addEventListener("click", () => {
  loadLongQuestionFromFilter();
});

// ======================================================
//  HELPERS & INIT
// ======================================================

function resetScore() {
  mcqScore = 0;
  mcqAttempts = 0;
  mcqScoreEl.textContent = mcqScore;
  mcqAttemptsEl.textContent = mcqAttempts;
  mcqResultEl.textContent = "";
  mcqResultEl.className = "result-text";
}

function init() {
  if (mcqQuestions.length === 0) {
    console.warn("No MCQ questions loaded – check unit JS includes.");
  }

  populateChapterSelect();
  currentChapter = "all";
  updateFilteredIndices();
  resetScore();

  if (mcqQuestions.length > 0) {
    loadMcqQuestionFromFilter();
  }
  if (longQuestions.length > 0) {
    loadLongQuestionFromFilter();
  }
}

init();
