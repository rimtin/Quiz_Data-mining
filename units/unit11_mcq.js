// Unit 11 – Bayesian, Decision Trees, k-NN, Rule-based MCQs
window.unit11_mcq = [
  {
    unit: "Unit 11 – Classification Methods",
    question: "Bayesian classifiers are __________ classifiers.",
    options: [
      "Probabilistic classifiers",
      "Rule-based classifiers",
      "Distance-based classifiers",
      "Tree-based classifiers"
    ],
    correctIndex: 0,
    explanation:
      "Bayesian classifiers use probability theory, so they are probabilistic classifiers."
  },
  {
    unit: "Unit 11 – Classification Methods",
    question: "Bayesian classification is based on __________ theorem.",
    options: [
      "Bayes' theorem",
      "Central Limit theorem",
      "Regression theorem",
      "None of these"
    ],
    correctIndex: 0,
    explanation:
      "Bayesian classification directly applies Bayes' theorem."
  },
  {
    unit: "Unit 11 – Classification Methods",
    question:
      "Learning of the model is __________ if each training sample’s class is known.",
    options: ["Supervised", "Unsupervised", "Reinforcement", "None"],
    correctIndex: 0,
    explanation:
      "When class labels are given, the learning is supervised."
  },
  {
    unit: "Unit 11 – Classification Methods",
    question: "A __________ is a flow-chart–like tree structure.",
    options: ["Rule", "Decision Tree", "Graph", "Network"],
    correctIndex: 1,
    explanation:
      "A decision tree has a flow-chart structure of tests and outcomes."
  },
  {
    unit: "Unit 11 – Classification Methods",
    question:
      "The __________ measure is commonly used to select the test attribute at each node in a decision tree.",
    options: ["Distance", "Information Gain", "Cost", "Entropy only"],
    correctIndex: 1,
    explanation:
      "Information Gain (based on entropy) is used to choose the best splitting attribute."
  },
  {
    unit: "Unit 11 – Classification Methods",
    question: "Which of the following is true about classification?",
    options: [
      "It is a measure of accuracy",
      "It is a subdivision of a set",
      "It is the task of assigning class labels",
      "None of these"
    ],
    correctIndex: 2,
    explanation:
      "Classification assigns class labels to data based on a trained model."
  },
  {
    unit: "Unit 11 – Classification Methods",
    question:
      "Classification of Data Mining Systems consists of contributions from:",
    options: [
      "Database Technology",
      "Machine Learning",
      "Information Science",
      "All of the above"
    ],
    correctIndex: 3,
    explanation:
      "Data mining systems draw ideas from DB tech, ML, and information science."
  },
  {
    unit: "Unit 11 – Classification Methods",
    question: "Rule-based system consists of IF–THEN rules.",
    options: ["True", "False"],
    correctIndex: 0,
    explanation:
      "Rule-based systems represent knowledge as IF–THEN rules."
  },
  {
    unit: "Unit 11 – Classification Methods",
    question:
      "Rule-based systems represent knowledge in terms of:",
    options: ["Raw text", "A bunch of rules", "Summaries", "Collections"],
    correctIndex: 1,
    explanation:
      "Knowledge is represented as a set of IF–THEN rules."
  },
  {
    unit: "Unit 11 – Classification Methods",
    question:
      "Which distance metric CANNOT be used in k-NN?",
    options: ["Manhattan", "Minkowski", "Tanimoto", "All can be used"],
    correctIndex: 3,
    explanation:
      "k-NN can use many distance metrics; all listed can be used."
  },
  {
    unit: "Unit 11 – Classification Methods",
    question: "k-NN algorithm can be used for:",
    options: ["Classification", "Regression", "Both", "None"],
    correctIndex: 2,
    explanation:
      "k-NN can perform both classification and regression."
  },
  {
    unit: "Unit 11 – Classification Methods",
    question: "Increasing k in k-NN generally causes:",
    options: [
      "Bias to increase",
      "Bias to decrease",
      "No change",
      "Cannot say"
    ],
    correctIndex: 0,
    explanation:
      "Larger k smooths decision boundaries → higher bias, lower variance."
  },
  {
    unit: "Unit 11 – Classification Methods",
    question:
      "A __________ is a decision support tool that uses a tree-like structure of decisions and possible outcomes.",
    options: ["Decision tree", "Neural network", "Graph", "Regression model"],
    correctIndex: 0,
    explanation:
      "Decision trees are classical decision support tools with a tree structure."
  },
  {
    unit: "Unit 11 – Classification Methods",
    question: "What is a Decision Tree?",
    options: [
      "A flow-chart",
      "Node = attribute test, branch = outcome, leaf = class label",
      "Both A and B",
      "None of these"
    ],
    correctIndex: 2,
    explanation:
      "A decision tree is a flow-chart where internal nodes test attributes and leaves give class labels."
  },
  {
    unit: "Unit 11 – Classification Methods",
    question: "Decision nodes in a decision tree are usually represented by:",
    options: ["Disks", "Squares", "Circles", "Triangles"],
    correctIndex: 2,
    explanation:
      "Decision nodes are typically drawn as circles (or sometimes rectangles); here answer is circles."
  }
];
