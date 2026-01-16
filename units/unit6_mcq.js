// Unit 6 – Repository, Import/Export & Process View MCQs
window.unit6_mcq = [
  {
    unit: "Unit 6 – Repository & Process",
    question: "The operator used to access stored information in the Repository is:",
    options: [
      "Retrieve Operator",
      "Store Operator",
      "Rename Operator",
      "Filter Examples Operator"
    ],
    correctIndex: 0,
    explanation: "The Retrieve operator loads data, models or results from the Repository."
  },
  {
    unit: "Unit 6 – Repository & Process",
    question: "Contains operators to read data from external formats (files, DB, etc.):",
    options: ["Export", "Repository Access", "Import", "Evaluation"],
    correctIndex: 2,
    explanation: "Import operators read data from CSV, Excel, DB, URLs and other external sources."
  },
  {
    unit: "Unit 6 – Repository & Process",
    question: "Data, processes and results are stored in the:",
    options: ["Process", "Repository", "Program", "RapidMiner Server"],
    correctIndex: 1,
    explanation: "The Repository is RapidMiner’s main storage for data, processes, models and results."
  },
  {
    unit: "Unit 6 – Repository & Process",
    question: "Repository can store:",
    options: ["Data", "Processes", "Results", "All of the above"],
    correctIndex: 3,
    explanation: "Repositories store data, processes, models, results and more."
  },
  {
    unit: "Unit 6 – Repository & Process",
    question: "Ways to get an operator into the Process Panel:",
    options: [
      "Drag-and-drop",
      "Double-click",
      "Right-click → Insert Operator",
      "All of the above"
    ],
    correctIndex: 3,
    explanation: "All three methods can be used to insert operators into the process."
  },
  {
    unit: "Unit 6 – Repository & Process",
    question: "Formats used for importing data into RapidMiner include:",
    options: ["CSV", "Excel", "Binary", "All of the above"],
    correctIndex: 3,
    explanation: "RapidMiner supports CSV, Excel, binary formats and more via import."
  },
  {
    unit: "Unit 6 – Repository & Process",
    question: "Load dataset from local system or DB by clicking:",
    options: ["Import Data", "Export Data", "Merge Data", "None"],
    correctIndex: 0,
    explanation: "The Import Data wizard is the standard way to load new datasets."
  },
  {
    unit: "Unit 6 – Repository & Process",
    question:
      "RapidMiner blends structured and unstructured data to perform __________ analysis.",
    options: ["Descriptive", "Diagnostic", "Predictive", "Prescriptive"],
    correctIndex: 2,
    explanation: "RapidMiner is widely used for predictive analytics."
  },
  {
    unit: "Unit 6 – Repository & Process",
    question:
      "Advanced version of RapidMiner Studio used for improved modeling is:",
    options: ["Turbo Prep", "Auto Model", "RapidMiner Studio", "None"],
    correctIndex: 1,
    explanation: "Auto Model is the advanced automated modeling framework in RapidMiner."
  },
  {
    unit: "Unit 6 – Repository & Process",
    question: "Turbo Prep is designed to make __________ easier.",
    options: ["Data loading", "Data preparation", "Model deployment", "Algorithm tuning"],
    correctIndex: 1,
    explanation: "Turbo Prep focuses on data preparation and cleaning."
  },
  {
    unit: "Unit 6 – Repository & Process",
    question:
      "__________ shows individual steps of an analysis process and their interconnections.",
    options: ["Process View", "Operator View", "Repository View", "None"],
    correctIndex: 0,
    explanation:
      "Process View shows the workflow of operators and how they are connected."
  },
  {
    unit: "Unit 6 – Repository & Process",
    question: "An operator in RapidMiner is defined by:",
    options: [
      "Input description",
      "Output description",
      "The action it performs",
      "All of the above"
    ],
    correctIndex: 3,
    explanation:
      "Operators are fully described by their inputs, outputs and processing action."
  },
  {
    unit: "Unit 6 – Repository & Process",
    question: "How do you delete an operator in RapidMiner?",
    options: [
      "Press DELETE key",
      "Right-click → Delete",
      "Edit → Delete",
      "All of the above"
    ],
    correctIndex: 3,
    explanation:
      "All three methods can be used to delete operators from a process."
  },
  {
    unit: "Unit 6 – Repository & Process",
    question: "__________ rearranges all operators automatically.",
    options: [
      "Execution order",
      "Automatic arrangement",
      "Automatic size",
      "Metadata update"
    ],
    correctIndex: 1,
    explanation:
      "Automatic arrangement re-organizes operators neatly in the process view."
  },
  {
    unit: "Unit 6 – Repository & Process",
    question: "__________ is for adding your own comments to process steps.",
    options: ["Meta-Data View", "Help View", "Comment View", "Problems View"],
    correctIndex: 2,
    explanation:
      "Comment View allows users to document steps and add notes to processes."
  },

  // Extra True/False style MCQs
  {
    unit: "Unit 6 – Repository & Process",
    question: "The Store operator saves data or models to the Repository.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "Store is used to persist data, results or models into a Repository."
  },
  {
    unit: "Unit 6 – Repository & Process",
    question: "Rename operator is used to change attribute names.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation: "The Rename operator changes the names of attributes in a dataset."
  },
  {
    unit: "Unit 6 – Repository & Process",
    question: "Filter Examples operator is used to select specific rows.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation:
      "Filter Examples keeps only those rows (examples) that satisfy given conditions."
  },
  {
    unit: "Unit 6 – Repository & Process",
    question: "Repository types can be local or server-based.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation:
      "RapidMiner supports both local repositories and shared server repositories."
  },
  {
    unit: "Unit 6 – Repository & Process",
    question: "Cross Validation is used for model validation.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation:
      "Cross Validation is a standard operator for validating models on multiple folds."
  }
];
