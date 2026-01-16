// Unit 13 – Unsupervised Learning & Clustering in WEKA MCQs
window.unit13_mcq = [
  {
    unit: "Unit 13 – Unsupervised Learning & Clustering",
    question: "Unsupervised learning refers to tasks that find:",
    options: [
      "Predefined labels",
      "Hidden patterns",
      "Reinforced actions",
      "Known outputs"
    ],
    correctIndex: 1,
    explanation:
      "Unsupervised learning discovers hidden patterns or structures in unlabeled data."
  },
  {
    unit: "Unit 13 – Unsupervised Learning & Clustering",
    question: "Clustering is an example of:",
    options: [
      "Supervised learning",
      "Unsupervised learning",
      "Reinforcement learning",
      "None of these"
    ],
    correctIndex: 1,
    explanation:
      "Clustering groups unlabeled data into clusters → unsupervised learning."
  },
  {
    unit: "Unit 13 – Unsupervised Learning & Clustering",
    question: "K-means clustering in WEKA is found under the tab:",
    options: ["Classify", "Associate", "Cluster", "Preprocess"],
    correctIndex: 2,
    explanation:
      "Clustering algorithms in WEKA are under the Cluster tab."
  },
  {
    unit: "Unit 13 – Unsupervised Learning & Clustering",
    question: "Parameters for K-means include:",
    options: [
      "Distance measure",
      "Number of clusters (k)",
      "Max iterations",
      "All of these"
    ],
    correctIndex: 3,
    explanation:
      "K-means needs K, a distance measure, max iterations, and sometimes a random seed."
  },
  {
    unit: "Unit 13 – Unsupervised Learning & Clustering",
    question: "Which is a clustering algorithm in WEKA?",
    options: ["J48", "Naive Bayes", "SimpleKMeans", "Apriori"],
    correctIndex: 2,
    explanation:
      "SimpleKMeans is WEKA's K-means implementation under Cluster tab."
  },
  {
    unit: "Unit 13 – Unsupervised Learning & Clustering",
    question: "EM algorithm stands for:",
    options: [
      "Expectation Minimization",
      "Expectation Maximization",
      "Error Minimization",
      "Enhanced Modeling"
    ],
    correctIndex: 1,
    explanation:
      "EM stands for Expectation Maximization."
  },
  {
    unit: "Unit 13 – Unsupervised Learning & Clustering",
    question: "Which is TRUE about EM?",
    options: [
      "Requires number of clusters",
      "Automatically selects best number of clusters",
      "Works only with nominal data",
      "None of these"
    ],
    correctIndex: 1,
    explanation:
      "In WEKA, EM can automatically estimate a good number of clusters."
  },
  {
    unit: "Unit 13 – Unsupervised Learning & Clustering",
    question: "Output of clustering is:",
    options: [
      "Class label",
      "Cluster index",
      "Prediction probability",
      "Support value"
    ],
    correctIndex: 1,
    explanation:
      "Clustering assigns each instance to a cluster (cluster index)."
  },
  {
    unit: "Unit 13 – Unsupervised Learning & Clustering",
    question: "Clustering is used to find:",
    options: [
      "Groups of similar records",
      "Groups of different labels",
      "Missing values",
      "Decision boundaries"
    ],
    correctIndex: 0,
    explanation:
      "Goal of clustering is to find groups of similar records/points."
  },
  {
    unit: "Unit 13 – Unsupervised Learning & Clustering",
    question: "In WEKA, to visualize clusters you click:",
    options: [
      "Visualize tab",
      "Classify",
      "Cluster → Visualize cluster assignments",
      "Plot tree"
    ],
    correctIndex: 2,
    explanation:
      "After clustering, WEKA shows a 'Visualize cluster assignments' button."
  },
  {
    unit: "Unit 13 – Unsupervised Learning & Clustering",
    question: "K-means uses which distance by default in WEKA?",
    options: ["Euclidean", "Manhattan", "Minkowski", "Cosine"],
    correctIndex: 0,
    explanation:
      "SimpleKMeans in WEKA uses Euclidean distance by default."
  },
  {
    unit: "Unit 13 – Unsupervised Learning & Clustering",
    question: "EM clustering is based on:",
    options: [
      "Probability distribution",
      "Binary rules",
      "Entropy only",
      "Flat partitioning only"
    ],
    correctIndex: 0,
    explanation:
      "EM assumes data is generated from a mixture of probability distributions."
  },
  {
    unit: "Unit 13 – Unsupervised Learning & Clustering",
    question: "Clustering is also called:",
    options: ["Classification", "Segmentation", "Association", "Aggregation"],
    correctIndex: 1,
    explanation:
      "In marketing, clustering is often called customer segmentation."
  },
  {
    unit: "Unit 13 – Unsupervised Learning & Clustering",
    question: "In clustering, the output variable is:",
    options: ["Known", "Unknown", "Numeric", "Boolean"],
    correctIndex: 1,
    explanation:
      "There is no labeled output in unsupervised learning; the output is unknown beforehand."
  },
  {
    unit: "Unit 13 – Unsupervised Learning & Clustering",
    question: "Which algorithm performs soft clustering?",
    options: ["K-means", "EM", "Apriori", "J48"],
    correctIndex: 1,
    explanation:
      "EM gives each point a probability for each cluster → soft clustering."
  }
];
