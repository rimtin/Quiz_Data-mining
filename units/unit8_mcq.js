// Unit 8 – Duplicates, Missing Values & Association Rules MCQs
window.unit8_mcq = [
  {
    unit: "Unit 8 – Duplicates & Missing Values",
    question:
      "Which operator removes duplicate examples from an ExampleSet?",
    options: [
      "Remove Duplicates",
      "Duplicate Removal",
      "Delete Duplicate",
      "Erase Duplicate"
    ],
    correctIndex: 0,
    explanation:
      "The Remove Duplicates operator removes repeated rows based on selected attributes."
  },
  {
    unit: "Unit 8 – Duplicates & Missing Values",
    question: "Default option to remove duplicate values is:",
    options: ["Subset", "Single", "All", "block_type"],
    correctIndex: 2,
    explanation:
      "By default, duplicate removal checks all attributes to identify identical rows."
  },
  {
    unit: "Unit 8 – Duplicates & Missing Values",
    question:
      "Which option allows selecting multiple attributes for duplicate removal?",
    options: ["Subset", "Single", "All", "block_type"],
    correctIndex: 0,
    explanation:
      "The subset option lets you choose a group of attributes to define duplicates."
  },
  {
    unit: "Unit 8 – Duplicates & Missing Values",
    question:
      "Which operator has no impact on the type or role of an attribute?",
    options: ["Retrieve", "Store", "Rename", "Filter"],
    correctIndex: 0,
    explanation:
      "Retrieve just loads data from the Repository; it doesn’t change attribute roles or types."
  },
  {
    unit: "Unit 8 – Duplicates & Missing Values",
    question: "To change the role of an attribute, you use:",
    options: ["Get Role", "Set Role", "Change Role", "Update Role"],
    correctIndex: 1,
    explanation:
      "Set Role assigns roles like label, id, prediction to attributes."
  },
  {
    unit: "Unit 8 – Duplicates & Missing Values",
    question: "Which operator replaces missing values?",
    options: [
      "Replace Missing Values",
      "Impute Missing Values",
      "Remove Missing Values",
      "Hide Missing Values"
    ],
    correctIndex: 0,
    explanation:
      "Replace Missing Values fills gaps using simple strategies like mean, median or constants."
  },
  {
    unit: "Unit 8 – Duplicates & Missing Values",
    question:
      "Which operator estimates missing values using a trained model?",
    options: [
      "Replace Missing Values",
      "Impute Missing Values",
      "Remove Missing Values",
      "Hide Missing Values"
    ],
    correctIndex: 1,
    explanation:
      "Impute Missing Values uses a learning model to predict missing entries more intelligently."
  },
  {
    unit: "Unit 8 – Duplicates & Missing Values",
    question:
      "Which attribute_filter_type allows selection of multiple attributes?",
    options: ["value_type", "subset", "all", "block_type"],
    correctIndex: 1,
    explanation:
      "The subset filter type lets the user manually pick several attributes at once."
  },
  {
    unit: "Unit 8 – Duplicates & Missing Values",
    question:
      "Which option selects all attributes that do NOT contain missing values?",
    options: [
      "numeric_value_filter",
      "regular_expression",
      "no_missing_values",
      "none"
    ],
    correctIndex: 2,
    explanation:
      "no_missing_values chooses attributes that are fully complete with no NULLs."
  },
  {
    unit: "Unit 8 – Duplicates & Missing Values",
    question:
      "Missing data can ______ classification accuracy and bias results.",
    options: ["Reduce", "Increase", "Maintain", "Eliminate"],
    correctIndex: 0,
    explanation:
      "Unresolved missing data usually reduces accuracy and may introduce bias."
  },
  {
    unit: "Unit 8 – Duplicates & Missing Values",
    question:
      "__________ is a rule-based machine learning method for discovering relations.",
    options: [
      "Association rule learning",
      "Market analysis",
      "Rule learning",
      "None"
    ],
    correctIndex: 0,
    explanation:
      "Association rule learning discovers relationships like 'if X then Y' in transaction data."
  },
  {
    unit: "Unit 8 – Duplicates & Missing Values",
    question:
      "The probability that a transaction contains X ∪ Y is called:",
    options: ["Support", "Confidence", "Both", "None"],
    correctIndex: 0,
    explanation:
      "Support measures how frequently X and Y occur together in the dataset."
  },
  {
    unit: "Unit 8 – Duplicates & Missing Values",
    question:
      "The conditional probability that a transaction with X also contains Y is:",
    options: ["Support", "Confidence", "Both", "None"],
    correctIndex: 1,
    explanation:
      "Confidence measures P(Y | X): how often Y appears when X appears."
  },
  {
    unit: "Unit 8 – Duplicates & Missing Values",
    question:
      "Which algorithm is used to find probable associations in transaction data?",
    options: ["Decision Tree", "k-NN", "Apriori", "All of these"],
    correctIndex: 2,
    explanation:
      "Apriori is a classic algorithm for mining frequent itemsets and association rules."
  },
  {
    unit: "Unit 8 – Duplicates & Missing Values",
    question:
      "In WEKA, Apriori can be selected under which tab?",
    options: ["Classify", "Cluster", "Associate", "Select Attribute"],
    correctIndex: 2,
    explanation:
      "Association algorithms like Apriori are under the Associate tab in WEKA."
  }
];
