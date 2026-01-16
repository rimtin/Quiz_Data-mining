// ===================== QUESTION BANKS =====================

// MCQs – Unit 1 Data Warehousing (you can keep adding more units)
const mcqQuestions = [
  {
    unit: "Unit 1 – Data Warehousing",
    question: "OLTP stands for:",
    options: [
      "On-Line Transactional Processing",
      "On Link Transactional Processing",
      "On-Line Transnational Process",
      "On-Line Transactional Program"
    ],
    correctIndex: 0,
    explanation:
      "OLTP stands for On-Line Transactional Processing. It handles day-to-day transaction data."
  },
  {
    unit: "Unit 1 – Data Warehousing",
    question: "A data warehouse is:",
    options: [
      "Discovery phase of KDD",
      "Selecting right data",
      "Subject-oriented, integrated, time-variant, non-volatile data",
      "None of the above"
    ],
    correctIndex: 2,
    explanation:
      "According to Bill Inmon, a data warehouse is subject-oriented, integrated, time-variant and non-volatile."
  },
  {
    unit: "Unit 1 – Data Warehousing",
    question: "A data warehouse is:",
    options: [
      "Updated by end-users",
      "Contains numerous naming conventions",
      "Organized around subject areas",
      "Contains only current data"
    ],
    correctIndex: 2,
    explanation:
      "A data warehouse is organized around major subject areas like sales, customers, inventory, etc."
  },
  {
    unit: "Unit 1 – Data Warehousing",
    question: "The data warehouse is normally:",
    options: [
      "The same as the operational database",
      "A backup of the OLTP system",
      "A separate, read-only, fact-based database",
      "A temporary staging area"
    ],
    correctIndex: 2,
    explanation:
      "Data warehouse is usually a separate, read-only database designed for analysis and decision support."
  },
  {
    unit: "Unit 1 – Data Warehousing",
    question:
      "A ________ is a physical database that receives all its information from the data warehouse.",
    options: ["Data Mart", "OLTP System", "Operational Data Store", "Metadata Repository"],
    correctIndex: 0,
    explanation:
      "A data mart is a subset of the data warehouse, focused on a specific business area."
  },
  {
    unit: "Unit 1 – Data Warehousing",
    question:
      "Data warehouse contains ______ data seldom found in operational systems.",
    options: ["Informational", "Normalized", "Denormalized", "Summary only"],
    correctIndex: 2,
    explanation:
      "Data warehouses commonly store denormalized data to speed up analytical queries."
  },
  {
    unit: "Unit 1 – Data Warehousing",
    question:
      "_______ are numeric measurements that represent business activities.",
    options: ["Dimensions", "Schemas", "Facts", "Tables"],
    correctIndex: 2,
    explanation:
      "Facts are numeric measures such as sales amount, quantity sold, profit, etc."
  },
  {
    unit: "Unit 1 – Data Warehousing",
    question: "_______ describes the data in the warehouse.",
    options: ["Relational Data", "Operational Data", "Informational Data", "Metadata"],
    correctIndex: 3,
    explanation:
      "Metadata is 'data about data' and describes structure, meaning, and usage of data in the warehouse."
  },
  {
    unit: "Unit 1 – Data Warehousing",
    question: "Dimensionality refers to:",
    options: [
      "Cardinality of keys",
      "Data describing transactions",
      "Detail of the fact table",
      "Detail of the dimension table"
    ],
    correctIndex: 3,
    explanation:
      "Dimensionality refers to how detailed the dimension tables are (levels such as year, month, day, etc.)."
  },
  {
    unit: "Unit 1 – Data Warehousing",
    question: "BI & Data Warehousing is used for:",
    options: ["Forecasting", "Data Mining", "Sales Analysis", "All of the above"],
    correctIndex: 3,
    explanation:
      "Business Intelligence and Data Warehousing support forecasting, data mining, sales analysis and many other analytics."
  },
  {
    unit: "Unit 1 – Data Warehousing",
    question: "Data warehouse is a tool used in ________.",
    options: [
      "Online Transaction Processing",
      "Decision Support Systems",
      "Real-time control systems",
      "Backup and recovery"
    ],
    correctIndex: 1,
    explanation:
      "Data warehouses are a core component of Decision Support Systems (DSS)."
  },
  {
    unit: "Unit 1 – Data Warehousing",
    question: "An operational system is:",
    options: [
      "Used to run business in real time with historical data",
      "Used to run business in real time with current data",
      "Used to support decisions with current data",
      "Used to support decisions with historical data"
    ],
    correctIndex: 1,
    explanation:
      "Operational (OLTP) systems support day-to-day business operations using current data."
  },
  {
    unit: "Unit 1 – Data Warehousing",
    question: "Decision Support Systems (DSS) are:",
    options: [
      "IBM RDBMS",
      "Interactive systems for solving unstructured problems",
      "Node/branch diagrams only",
      "None of the above"
    ],
    correctIndex: 1,
    explanation:
      "DSS are interactive computer systems that help users solve semi-structured or unstructured decision problems."
  },
  {
    unit: "Unit 1 – Data Warehousing",
    question: "Relational DBMS store data based on:",
    options: [
      "Dimensional modeling only",
      "Hierarchical file structures",
      "Traditional relational (table-based) technology",
      "Unstructured text documents only"
    ],
    correctIndex: 2,
    explanation:
      "RDBMS store data in tables (rows and columns) using the relational model."
  },
  {
    unit: "Unit 1 – Data Warehousing",
    question: "Which applies to data in a data warehouse?",
    options: [
      "Data often deleted",
      "Mostly transactions",
      "Data rarely deleted",
      "Very few records processed"
    ],
    correctIndex: 2,
    explanation:
      "Data in a warehouse is mostly historical and is rarely deleted; it is kept for long-term analysis."
  }
];

// 10-marks style questions
const longQuestions = [
  {
    unit: "Unit 1 – Data Warehousing",
    question: "Explain the characteristics of a Data Warehouse.",
    keyPoints:
      "• Subject-oriented: Organized around key subjects such as sales, customers, finance, inventory, etc. Helps managers analyze one domain deeply.\n" +
      "• Integrated: Data collected from multiple sources (ERP, CRM, logs, files) and made consistent. Example: common date format, currency and naming conventions.\n" +
      "• Time-variant: Stores historical data (months/years). Supports trend analysis such as 5-year sales growth.\n" +
      "• Non-volatile: Data is mainly read-only; it is not frequently updated or deleted, which supports stable, repeatable queries.\n" +
      "Conclusion: A data warehouse is a central, historical, integrated and stable repository that supports Business Intelligence and Decision Support Systems."
  }
  // 👉 Later you can add more long-answer questions here
];

// ===================== STATE =====================

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

// ===================== ELEMENTS =====================

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

const btnCheckMcq = document.getElementById("btn-check-mcq");
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

// ===================== THEME (LIGHT / DARK) =====================

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

// ===================== MODE SWITCH (MCQ / LONG) =====================

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

// ===================== CHAPTER HANDLING =====================

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
  loadLongQuestionFromFilter();
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

// ===================== MCQ LOGIC =====================

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
  });
}

function loadMcqQuestionFromFilter() {
  const randomIndex =
    filteredMcqIndices[Math.floor(Math.random() * filteredMcqIndices.length)];
  currentMcqIndex = randomIndex;
  loadMcqQuestion(currentMcqIndex);
}

btnCheckMcq.addEventListener("click", () => {
  const q = mcqQuestions[currentMcqIndex];
  const selected = document.querySelector('input[name="mcqOption"]:checked');

  if (!selected) {
    mcqResultEl.textContent = "Please select an answer.";
    mcqResultEl.className = "result-text wrong";
    return;
  }

  const selectedIndex = parseInt(selected.value, 10);
  mcqAttempts++;

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
});

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

// ===================== QUICK TEST =====================

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

btnQuickTest.addEventListener("click", () => {
  isQuickTest = true;
  resetScore();

  quickOrder = shuffleArray(mcqQuestions.map((_, i) => i));
  quickTotal = Math.min(QUICK_TEST_LENGTH, quickOrder.length);
  quickPosition = 0;

  currentMcqIndex = quickOrder[0];
  loadMcqQuestion(currentMcqIndex);

  mcqResultEl.textContent =
    "Quick Test started! Answer all questions and check your final score.";
  mcqResultEl.className = "result-text";
});

// ===================== LONG ANSWER LOGIC =====================

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

// ===================== HELPERS & INIT =====================

function resetScore() {
  mcqScore = 0;
  mcqAttempts = 0;
  mcqScoreEl.textContent = mcqScore;
  mcqAttemptsEl.textContent = mcqAttempts;
  mcqResultEl.textContent = "";
  mcqResultEl.className = "result-text";
}

function init() {
  populateChapterSelect();
  currentChapter = "all";
  updateFilteredIndices();
  resetScore();
  loadMcqQuestionFromFilter();
  loadLongQuestionFromFilter();
}

init();
