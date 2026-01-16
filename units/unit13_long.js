// Unit 13 – Unsupervised Learning & Clustering 10-mark Questions
window.unit13_long = [
  {
    unit: "Unit 13 – Unsupervised Learning & Clustering",
    question:
      "Define Unsupervised Learning. Explain its importance with examples.",
    keyPoints:
      "Unsupervised learning is a machine learning approach where models work on unlabeled data and try to discover hidden patterns, groups or structures.\n\n" +
      "Importance:\n" +
      "1) No labeled data required:\n" +
      "- Useful when labeling is expensive, time-consuming or impossible.\n\n" +
      "2) Discovers hidden patterns:\n" +
      "- Reveals natural groupings such as customer segments or behavior patterns.\n\n" +
      "3) Dimensionality reduction:\n" +
      "- Techniques like PCA reduce the number of attributes while preserving information.\n\n" +
      "4) Helps supervised learning:\n" +
      "- Clusters and structure found by unsupervised learning can guide feature engineering or labeling.\n\n" +
      "Examples:\n" +
      "- Customer segmentation in marketing.\n" +
      "- Grouping similar documents or news articles.\n" +
      "- Image compression and feature extraction.\n" +
      "- Anomaly or outlier detection in fraud and network logs.\n\n" +
      "Conclusion: Unsupervised learning is crucial in real-world situations where we only have raw data without class labels."
  },
  {
    unit: "Unit 13 – Unsupervised Learning & Clustering",
    question: "Explain K-Means clustering in WEKA with steps.",
    keyPoints:
      "K-Means is a partition-based clustering algorithm that divides data into K clusters.\n\n" +
      "Steps in WEKA:\n" +
      "1) Load Dataset:\n" +
      "- Open WEKA → Explorer.\n" +
      "- In the Preprocess tab, click 'Open file' and load the dataset.\n\n" +
      "2) Go to Cluster Tab:\n" +
      "- Click the Cluster tab.\n" +
      "- Click 'Choose' → SimpleKMeans.\n\n" +
      "3) Configure Parameters:\n" +
      "- Set number of clusters (K).\n" +
      "- Select distance function (usually Euclidean).\n" +
      "- Set maximum iterations and random seed if needed.\n\n" +
      "4) Select Cluster Mode:\n" +
      "- Commonly 'Use training set'.\n" +
      "- Class attribute (if present) is usually ignored for pure clustering.\n\n" +
      "5) Click 'Start':\n" +
      "- WEKA runs K-Means and outputs clustering result.\n\n" +
      "6) Analyze Results:\n" +
      "- Cluster centroids (mean values of attributes).\n" +
      "- Cluster sizes.\n" +
      "- Within-cluster error / sum of squared errors.\n\n" +
      "7) Visualize Clusters:\n" +
      "- Use 'Visualize cluster assignments' to see colored clusters in scatterplots.\n\n" +
      "Advantages:\n" +
      "- Simple, fast and works well on large numeric datasets.\n\n" +
      "Disadvantages:\n" +
      "- Sensitive to outliers and initial centroids.\n" +
      "- Requires K in advance.\n" +
      "- Works best with roughly spherical clusters."
  },
  {
    unit: "Unit 13 – Unsupervised Learning & Clustering",
    question:
      "Explain Expectation-Maximization (EM) clustering and how it works in WEKA.",
    keyPoints:
      "EM clustering is a probabilistic soft clustering algorithm where each data point has a probability of belonging to each cluster.\n\n" +
      "Basic Steps of EM:\n" +
      "1) Initialization:\n" +
      "- Start with initial guesses for cluster parameters (means, variances, mixing weights).\n\n" +
      "2) E-Step (Expectation):\n" +
      "- Compute the probability that each data point belongs to each cluster using current parameters.\n\n" +
      "3) M-Step (Maximization):\n" +
      "- Update cluster parameters using these probabilities (weighted means and variances).\n\n" +
      "4) Repeat:\n" +
      "- Alternate E and M steps until the log-likelihood converges or max iterations is reached.\n\n" +
      "EM in WEKA:\n" +
      "- Go to Cluster tab → 'Choose' → EM.\n" +
      "- Set the number of clusters or leave it as 0 to let WEKA estimate a good number.\n" +
      "- Click 'Start' to run EM clustering.\n" +
      "- WEKA outputs cluster probabilities, log-likelihood and cluster sizes.\n\n" +
      "Advantages:\n" +
      "- Can automatically determine number of clusters.\n" +
      "- Handles overlapping clusters (soft assignments).\n" +
      "- Based on probabilistic models.\n\n" +
      "Disadvantages:\n" +
      "- More computationally expensive than K-Means.\n" +
      "- Sensitive to initialization and local optima."
  },
  {
    unit: "Unit 13 – Unsupervised Learning & Clustering",
    question: "Compare K-Means and EM clustering.",
    keyPoints:
      "Comparison of K-Means and EM clustering:\n\n" +
      "Type of Clustering:\n" +
      "- K-Means: Hard clustering (each point belongs to exactly one cluster).\n" +
      "- EM: Soft clustering (each point has a probability for each cluster).\n\n" +
      "Model Assumption:\n" +
      "- K-Means: Minimizes sum of squared distances to centroids using Euclidean distance.\n" +
      "- EM: Assumes data is generated from a mixture of probability distributions (often Gaussian).\n\n" +
      "Number of Clusters:\n" +
      "- K-Means: K must be specified by user.\n" +
      "- EM: Can estimate the number of clusters automatically in WEKA.\n\n" +
      "Output:\n" +
      "- K-Means: Cluster index and centroids.\n" +
      "- EM: Cluster probabilities, parameters of distributions, and log-likelihood.\n\n" +
      "Speed:\n" +
      "- K-Means: Generally faster.\n" +
      "- EM: Slower due to repeated probability and parameter updates.\n\n" +
      "Handling Overlap:\n" +
      "- K-Means: Poor at overlapping clusters.\n" +
      "- EM: Good at modeling overlapping/soft boundaries.\n\n" +
      "Conclusion: K-Means is simple and fast, EM is more flexible and probabilistic but computationally heavier."
  },
  {
    unit: "Unit 13 – Unsupervised Learning & Clustering",
    question:
      "Explain cluster visualization and interpretation in WEKA.",
    keyPoints:
      "Cluster visualization in WEKA helps understand how instances are grouped.\n\n" +
      "1) Visualizing Clusters:\n" +
      "- After running K-Means or EM, WEKA shows a result entry in the Cluster tab.\n" +
      "- Click 'Visualize cluster assignments' to open a scatterplot.\n" +
      "- Different clusters are shown in different colors or shapes.\n" +
      "- You can choose which attributes to plot on X and Y axes.\n\n" +
      "2) Interpreting Clusters:\n" +
      "- Look for tight, well-separated groups of points.\n" +
      "- Large distance between clusters indicates strong separation.\n" +
      "- Isolated points may indicate outliers.\n\n" +
      "3) Understanding Output Statistics:\n" +
      "- Cluster sizes: how many instances in each cluster.\n" +
      "- Centroids (for K-Means) or distribution parameters (for EM).\n" +
      "- Within-cluster error or log-likelihood.\n\n" +
      "4) Applications:\n" +
      "- Market segmentation (similar customers grouped together).\n" +
      "- Fraud and anomaly detection (unusual patterns appear as separate or small clusters).\n" +
      "- Document and behavior analysis.\n\n" +
      "Conclusion: Visualization plus statistics (sizes, centroids, errors) help you judge whether clustering results are meaningful."
  }
];
