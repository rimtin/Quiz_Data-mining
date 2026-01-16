// Unit 3 – Data Warehouse & OLAP MCQs
window.unit3_mcq = [
  {
    unit: "Unit 3 – DW & OLAP",
    question: "OLTP stands for:",
    options: [
      "On Line Transactional Processing",
      "On Link Transaction Programming",
      "On Line Transnational Processing",
      "On Line Transactional Program"
    ],
    correctIndex: 0,
    explanation: "OLTP = On Line Transactional Processing, used for real-time transactions."
  },
  {
    unit: "Unit 3 – DW & OLAP",
    question: "ROLAP stands for:",
    options: [
      "Relational Online Transition Processing",
      "Relative Online Transaction Processing",
      "Relational Online Analytical Processing",
      "Relational Online Transactional Program"
    ],
    correctIndex: 2,
    explanation: "ROLAP = Relational Online Analytical Processing; OLAP on relational DB."
  },
  {
    unit: "Unit 3 – DW & OLAP",
    question: "Data from operational environment enters which area first?",
    options: [
      "Current detail data",
      "Older detail data",
      "Lightly summarized data",
      "Highly summarized data"
    ],
    correctIndex: 0,
    explanation:
      "New operational data is first stored as Current Detail Data before summarization."
  },
  {
    unit: "Unit 3 – DW & OLAP",
    question: "_________ are designed to overcome relational model limitations.",
    options: [
      "Operational database",
      "Relational database",
      "Multidimensional database (MDDB)",
      "Data repository"
    ],
    correctIndex: 2,
    explanation:
      "MDDBs allow multidimensional views (cubes), overcoming relational model limitations."
  },
  {
    unit: "Unit 3 – DW & OLAP",
    question: "Data warehouse contains ______ data seldom found in OLTP.",
    options: ["Informational", "Normalized", "Denormalized", "Summary"],
    correctIndex: 2,
    explanation:
      "DW stores denormalized data for fast analysis, unlike normalized OLTP systems."
  },
  {
    unit: "Unit 3 – DW & OLAP",
    question: "______ are numeric measurements representing business activities.",
    options: ["Dimensions", "Schemas", "Facts", "Tables"],
    correctIndex: 2,
    explanation:
      "Facts = numeric values such as sales, profit, revenue stored in fact tables."
  },
  {
    unit: "Unit 3 – DW & OLAP",
    question: "______ describes the data in data warehouse.",
    options: ["Relational data", "Operational data", "Informational data", "Metadata"],
    correctIndex: 3,
    explanation: "Metadata = data about data (structure, meaning, source)."
  },
  {
    unit: "Unit 3 – DW & OLAP",
    question: "Dimensionality refers to:",
    options: [
      "Cardinality of key values",
      "Data describing transactions",
      "Detail level of fact table",
      "Detail level of dimension table"
    ],
    correctIndex: 3,
    explanation:
      "Dimensionality reflects the granularity and detail in dimension tables."
  },
  {
    unit: "Unit 3 – DW & OLAP",
    question: "BI & Data Warehousing is used for:",
    options: ["Forecasting", "Data Mining", "Product sales analysis", "All"],
    correctIndex: 3,
    explanation:
      "BI + DW support forecasting, mining, reporting, dashboards and analytics."
  },
  {
    unit: "Unit 3 – DW & OLAP",
    question: "Data warehouse is a tool used in:",
    options: ["ERP systems", "Decision Support Systems", "OLTP Systems", "AI"],
    correctIndex: 1,
    explanation:
      "DW is core to DSS (Decision Support Systems) used by management."
  },
  {
    unit: "Unit 3 – DW & OLAP",
    question: "An operational system is:",
    options: [
      "Run business real-time with historical data",
      "Run business real-time with current data",
      "Support decision-making with current data",
      "Support decision-making with historical data"
    ],
    correctIndex: 1,
    explanation:
      "Operational systems use current data and support real-time operations."
  },
  {
    unit: "Unit 3 – DW & OLAP",
    question: "Decision Support Systems are:",
    options: [
      "IBM relational DBMS",
      "Interactive systems for solving unstructured problems",
      "Node and branch diagrams",
      "None"
    ],
    correctIndex: 1,
    explanation:
      "DSS support unstructured decision-making using analysis models & BI tools."
  },
  {
    unit: "Unit 3 – DW & OLAP",
    question: "________ stores data using familiar RDBMS technology.",
    options: [
      "Operational DB",
      "MOLAP Cube",
      "Relational Data Warehouse",
      "MDDB"
    ],
    correctIndex: 2,
    explanation: "Relational DW stores data in relational tables using SQL."
  },
  {
    unit: "Unit 3 – DW & OLAP",
    question: "A feature of DW data:",
    options: ["Data often deleted", "Mostly transactions", "Data rarely deleted", "Few records"],
    correctIndex: 2,
    explanation:
      "DW stores historical data for long-term analysis, hence rarely deleted."
  },
  {
    unit: "Unit 3 – DW & OLAP",
    question: "In three-tier architecture:",
    options: [
      "Data marts update periodically from warehouse",
      "Data marts receive data directly from OLTP",
      "Data marts are small tables",
      "Data mart becomes warehouse after size increases"
    ],
    correctIndex: 0,
    explanation:
      "Data marts periodically refresh from the central data warehouse."
  }
];
