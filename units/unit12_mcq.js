// Unit 12 – WEKA Explorer & Classification MCQs
window.unit12_mcq = [
  {
    unit: "Unit 12 – WEKA & Explorer",
    question: "In WEKA Explorer, which tab is used to open a data file?",
    options: ["Preprocess", "Cluster", "Select Attributes", "Classify"],
    correctIndex: 0,
    explanation:
      "Datasets are loaded from the Preprocess tab using the 'Open file' button."
  },
  {
    unit: "Unit 12 – WEKA & Explorer",
    question: "Which tab is used to build a Naive Bayes model?",
    options: ["Preprocess", "Cluster", "Select Attributes", "Classify"],
    correctIndex: 3,
    explanation:
      "All supervised models (NaiveBayes, J48, etc.) are built under the Classify tab."
  },
  {
    unit: "Unit 12 – WEKA & Explorer",
    question: "To build a classifier, which button must be clicked?",
    options: ["Build", "Start", "Create", "Run"],
    correctIndex: 1,
    explanation:
      "After choosing classifier & test option, you click Start to train and evaluate."
  },
  {
    unit: "Unit 12 – WEKA & Explorer",
    question: "Under Classify, to select Naive Bayes you click:",
    options: [
      "Choose Classifier",
      "Select Classifier",
      "Create Classifier",
      "Build Classifier"
    ],
    correctIndex: 0,
    explanation:
      "You use the 'Choose' button to select bayes → NaiveBayes."
  },
  {
    unit: "Unit 12 – WEKA & Explorer",
    question: "Test options available under Classify include:",
    options: [
      "Use Training Set",
      "Supplied Test Set",
      "Cross-Validation",
      "All of the above"
    ],
    correctIndex: 3,
    explanation:
      "WEKA supports all three plus Percentage Split as evaluation options."
  },
  {
    unit: "Unit 12 – WEKA & Explorer",
    question:
      "_________ work by learning answers to a hierarchy of IF/ELSE questions.",
    options: ["Decision Trees", "k-NN", "Naive Bayes", "Perceptron"],
    correctIndex: 0,
    explanation:
      "Decision trees are structured as nested IF/ELSE tests."
  },
  {
    unit: "Unit 12 – WEKA & Explorer",
    question: "Correct sequence to load a dataset in WEKA Explorer:",
    options: [
      "Open WEKA GUI → Explorer → Open file",
      "Explorer → Open file → Open WEKA GUI",
      "Open file → Explorer → Open WEKA GUI",
      "Open WEKA GUI → Open file → Explorer"
    ],
    correctIndex: 0,
    explanation:
      "You start WEKA GUI, choose Explorer, then use Open file in the Preprocess tab."
  },
  {
    unit: "Unit 12 – WEKA & Explorer",
    question: "To implement a decision tree in WEKA, select:",
    options: ["Tree", "Trees", "Decision Tree", "All Tree"],
    correctIndex: 1,
    explanation:
      "Decision tree algorithms like J48 are under the 'trees' group in the Choose menu."
  },
  {
    unit: "Unit 12 – WEKA & Explorer",
    question:
      "In decision trees, ________ is used to calculate homogeneity for choosing splits.",
    options: ["Information Gain", "Number of attributes", "Entropy only", "Kappa"],
    correctIndex: 0,
    explanation:
      "Information Gain (computed from entropy) measures how well an attribute separates classes."
  },
  {
    unit: "Unit 12 – WEKA & Explorer",
    question:
      "Decision tree selects the split resulting in the most _______ sub-nodes.",
    options: ["Homogeneous", "Heterogeneous", "Mixed", "Random"],
    correctIndex: 0,
    explanation:
      "A good split makes child nodes as pure (homogeneous) as possible."
  },
  {
    unit: "Unit 12 – WEKA & Explorer",
    question: "Why do analysis tools pre-compute summaries?",
    options: [
      "Maintain consistency",
      "Authentication",
      "For quick query response",
      "Data access control"
    ],
    correctIndex: 2,
    explanation:
      "Pre-computed summaries speed up queries and visualizations."
  },
  {
    unit: "Unit 12 – WEKA & Explorer",
    question: "Classification is:",
    options: [
      "A measure of accuracy",
      "Subdivision of a set",
      "Assigning a class label",
      "None of these"
    ],
    correctIndex: 2,
    explanation:
      "Classification assigns class labels to new data based on a model."
  },
  {
    unit: "Unit 12 – WEKA & Explorer",
    question:
      "Inferring a model from labeled training data is called ________ learning.",
    options: ["Unsupervised", "Supervised", "Reinforcement", "Semi-supervised"],
    correctIndex: 1,
    explanation:
      "Because you have labels, it is supervised learning."
  },
  {
    unit: "Unit 12 – WEKA & Explorer",
    question: "___________ classify data based on class labels.",
    options: [
      "Classification algorithms",
      "Clustering algorithms",
      "Both",
      "None"
    ],
    correctIndex: 0,
    explanation:
      "Classification algorithms use labeled data; clustering does not."
  },
  {
    unit: "Unit 12 – WEKA & Explorer",
    question:
      "________ is a mining technique used to extract information from Web documents.",
    options: ["Text Mining", "Data Mining", "Web Mining", "None"],
    correctIndex: 2,
    explanation:
      "Web mining focuses specifically on web content, structure and usage."
  }
];
