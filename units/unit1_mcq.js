// Unit 1 – Data Warehousing MCQs
window.unit1_mcq = [
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
