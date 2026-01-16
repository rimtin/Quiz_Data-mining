// Unit 9 – Frequent Pattern Mining (Apriori & FP-Growth) MCQs
window.unit9_mcq = [
  {
    unit: "Unit 9 – Frequent Pattern Mining",
    question: "A collection of one or more items is called:",
    options: ["Itemset", "Support", "Confidence", "Support Count"],
    correctIndex: 0,
    explanation:
      "An itemset is simply a set of items, for example {Milk, Bread}."
  },
  {
    unit: "Unit 9 – Frequent Pattern Mining",
    question: "The frequency of occurrence of an itemset is called:",
    options: ["Support", "Confidence", "Support Count", "Rules"],
    correctIndex: 2,
    explanation:
      "Support count is the number of transactions containing that itemset."
  },
  {
    unit: "Unit 9 – Frequent Pattern Mining",
    question:
      "An itemset whose support is greater than or equal to the minimum threshold is called:",
    options: ["Itemset", "Frequent Itemset", "Infrequent Itemset", "Threshold Set"],
    correctIndex: 1,
    explanation:
      "If an itemset’s support ≥ min_support, it is a frequent itemset."
  },
  {
    unit: "Unit 9 – Frequent Pattern Mining",
    question: "FP-Growth algorithm does what?",
    options: [
      "Mines patterns with pruning rules (low support)",
      "Mines patterns with high support",
      "Mines patterns by constructing FP-tree",
      "Mines patterns by constructing itemsets"
    ],
    correctIndex: 2,
    explanation:
      "FP-Growth builds an FP-tree and then mines frequent patterns from that tree."
  },
  {
    unit: "Unit 9 – Frequent Pattern Mining",
    question: "Support(A) means:",
    options: [
      "Number of transactions containing A",
      "Transactions not containing A",
      "Transactions containing A ÷ Total transactions",
      "Transactions not containing A ÷ Total"
    ],
    correctIndex: 2,
    explanation:
      "Support(A) is the fraction of transactions that contain A (support count / total)."
  },
  {
    unit: "Unit 9 – Frequent Pattern Mining",
    question:
      "Direct application of frequent itemset mining is found in:",
    options: [
      "Social Network Analysis",
      "Market Basket Analysis",
      "Outlier Detection",
      "Intrusion Detection"
    ],
    correctIndex: 1,
    explanation:
      "Market Basket Analysis is the classic application (which items are bought together)."
  },
  {
    unit: "Unit 9 – Frequent Pattern Mining",
    question: "Which is NOT true about FP-Growth?",
    options: [
      "No candidate generation",
      "FP-tree may not fit memory",
      "FP-tree is expensive to build",
      "Expands original DB to build trees"
    ],
    correctIndex: 3,
    explanation:
      "FP-Growth compresses the original DB into a tree; it does not expand it."
  },
  {
    unit: "Unit 9 – Frequent Pattern Mining",
    question: "A rule is considered interesting when it:",
    options: [
      "Only satisfies minimum support",
      "Only satisfies minimum confidence",
      "Satisfies both minimum support and minimum confidence",
      "Needs other measures"
    ],
    correctIndex: 2,
    explanation:
      "Standard interesting rules must satisfy both min_support and min_confidence."
  },
  {
    unit: "Unit 9 – Frequent Pattern Mining",
    question:
      "Relationship between candidate and frequent itemsets in Apriori:",
    options: [
      "Candidate itemset is always frequent",
      "Frequent itemset must be a candidate",
      "No relation",
      "Weak relation"
    ],
    correctIndex: 1,
    explanation:
      "Apriori generates candidate itemsets; all frequent itemsets come from this candidate set."
  },
  {
    unit: "Unit 9 – Frequent Pattern Mining",
    question: "Which algorithm usually requires fewer database scans?",
    options: ["Apriori", "FP-Growth", "Naive Bayes", "Decision Trees"],
    correctIndex: 1,
    explanation:
      "FP-Growth typically scans the database only twice; Apriori needs multiple passes."
  },
  {
    unit: "Unit 9 – Frequent Pattern Mining",
    question: "Association rule mining is:",
    options: [
      "Same as frequent itemset mining",
      "Using frequent itemsets to create strong rules",
      "Correlation analysis only",
      "Finding itemsets for future trends only"
    ],
    correctIndex: 1,
    explanation:
      "First we mine frequent itemsets; then we use them to generate strong association rules."
  },
  {
    unit: "Unit 9 – Frequent Pattern Mining",
    question:
      "Apriori generates ______ before scanning the database for frequency:",
    options: [
      "Primary itemsets",
      "Candidate itemsets",
      "Secondary itemsets",
      "Superkeys"
    ],
    correctIndex: 1,
    explanation:
      "Apriori generates candidate itemsets Ck and then scans the DB to filter them into Lk."
  },
  {
    unit: "Unit 9 – Frequent Pattern Mining",
    question:
      "Best method to find interactions among attributes (like which values co-occur):",
    options: ["Decision Trees", "Association Rules", "K-Means", "Genetic learning"],
    correctIndex: 1,
    explanation:
      "Association rules directly capture co-occurrence patterns among attributes."
  },
  {
    unit: "Unit 9 – Frequent Pattern Mining",
    question: "Which is NOT a frequent pattern mining algorithm?",
    options: ["Apriori", "FP-Growth", "Decision Trees", "Eclat"],
    correctIndex: 2,
    explanation:
      "Decision Trees are for classification, not for frequent pattern mining."
  }
];
