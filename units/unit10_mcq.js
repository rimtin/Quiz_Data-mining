// Unit 10 – Clustering & Outliers MCQs
window.unit10_mcq = [
  {
    unit: "Unit 10 – Clustering & Outliers",
    question: "K-means clustering needs:",
    options: [
      "Defined distance metric",
      "Number of clusters",
      "Initial guess of centroids",
      "All of these"
    ],
    correctIndex: 3,
    explanation:
      "K-means requires a distance metric, value of K and initial centroids."
  },
  {
    unit: "Unit 10 – Clustering & Outliers",
    question: "K-means and K-medoids are examples of:",
    options: [
      "Hierarchical clustering",
      "Partition clustering",
      "Probabilistic clustering",
      "None"
    ],
    correctIndex: 1,
    explanation:
      "Both K-means and K-medoids partition the data into K clusters."
  },
  {
    unit: "Unit 10 – Clustering & Outliers",
    question: "CLARANS stands for:",
    options: [
      "Clustering Large Applications based on Randomized Search",
      "Clustering Long Applications based on Randomized Search",
      "Clustering Large Accounts based on Randomized Search",
      "Customize Large Applications based on Randomized Search"
    ],
    correctIndex: 0,
    explanation:
      "CLARANS = Clustering Large Applications based on Randomized Search."
  },
  {
    unit: "Unit 10 – Clustering & Outliers",
    question: "CLARANS combines sampling techniques with:",
    options: ["K-means", "CLARA", "PAM (Partitioning Around Medoids)", "All"],
    correctIndex: 2,
    explanation:
      "CLARANS is based on PAM concepts but uses randomized search."
  },
  {
    unit: "Unit 10 – Clustering & Outliers",
    question: "K-medoids is more robust than:",
    options: ["K-means", "CLARA", "PAM", "CLARANS"],
    correctIndex: 0,
    explanation:
      "K-medoids uses actual data points as centers, making it more robust to outliers than K-means."
  },
  {
    unit: "Unit 10 – Clustering & Outliers",
    question: "Output of hierarchical clustering is:",
    options: [
      "Final cluster centroids",
      "A tree showing closeness (dendrogram)",
      "Point assignments only",
      "None"
    ],
    correctIndex: 1,
    explanation:
      "Hierarchical clustering produces a dendrogram (a tree of merges/splits)."
  },
  {
    unit: "Unit 10 – Clustering & Outliers",
    question: "Clustering that requires merging is:",
    options: ["Partitional", "Hierarchical", "Naive Bayes", "None"],
    correctIndex: 1,
    explanation:
      "Agglomerative hierarchical clustering merges smaller clusters step by step."
  },
  {
    unit: "Unit 10 – Clustering & Outliers",
    question:
      "Maximum number of data points allowed in a CF tree's leaf node is determined by:",
    options: ["n_clusters", "branching_factor", "threshold", "All"],
    correctIndex: 1,
    explanation:
      "The branching_factor controls how many children/entries a node can have."
  },
  {
    unit: "Unit 10 – Clustering & Outliers",
    question: "Outlier in dataset {68, 6, 74, 70, 82} is:",
    options: ["6", "82", "68", "70"],
    correctIndex: 0,
    explanation:
      "Most values are around 68–82; 6 is far away and is an outlier."
  },
  {
    unit: "Unit 10 – Clustering & Outliers",
    question: "True statement about outliers:",
    options: [
      "Should not be present in training data",
      "Should be removed always",
      "Depends on nature of the problem",
      "Should be in test but not training data"
    ],
    correctIndex: 2,
    explanation:
      "Sometimes outliers are noise, sometimes they are important (fraud, rare events)."
  },
  {
    unit: "Unit 10 – Clustering & Outliers",
    question: "Outlier means:",
    options: ["Missing value", "Mean value", "Extreme value", "Categorical variable"],
    correctIndex: 2,
    explanation:
      "Outliers are extreme values that do not follow the general pattern."
  },
  {
    unit: "Unit 10 – Clustering & Outliers",
    question: "Extreme values that occur infrequently are called:",
    options: ["Outliers", "Rare values", "Dimensionality reduction", "All"],
    correctIndex: 0,
    explanation:
      "By definition, outliers are rare extreme values in the dataset."
  },
  {
    unit: "Unit 10 – Clustering & Outliers",
    question: "K-means is NOT deterministic because:",
    options: [
      "Uses probability",
      "Depends on random initialization",
      "Changes output each time",
      "Both b & c"
    ],
    correctIndex: 3,
    explanation:
      "Random initial centroids can lead to different solutions each run."
  },
  {
    unit: "Unit 10 – Clustering & Outliers",
    question: "Which clustering method builds a tree step by step?",
    options: ["K-means", "Hierarchical", "Naive Bayes", "All"],
    correctIndex: 1,
    explanation:
      "Hierarchical clustering builds a tree (dendrogram) by merging or splitting."
  },
  {
    unit: "Unit 10 – Clustering & Outliers",
    question: "K-means requires:",
    options: [
      "Distance metric",
      "Number of clusters",
      "Initial centroids",
      "All of these"
    ],
    correctIndex: 3,
    explanation:
      "To run K-means you must choose K, a distance measure and initial cluster centers."
  }
];
