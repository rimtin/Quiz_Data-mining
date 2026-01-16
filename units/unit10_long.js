// Unit 10 – Clustering & Outliers 10-mark Questions
window.unit10_long = [
  {
    unit: "Unit 10 – Clustering & Outliers",
    question: "Explain K-Means Clustering algorithm with steps.",
    keyPoints:
      "K-means is a partition-based, unsupervised clustering algorithm that divides data into K clusters.\n\n" +
      "Steps of K-Means:\n" +
      "1) Choose K:\n" +
      "- Decide the number of clusters (e.g., K = 3).\n\n" +
      "2) Initialize Centroids:\n" +
      "- Randomly pick K data points as initial centroids.\n\n" +
      "3) Assignment Step:\n" +
      "- Assign each data point to the nearest centroid based on a distance metric (usually Euclidean).\n\n" +
      "4) Update Step:\n" +
      "- For each cluster, recompute the centroid as the mean of all points in that cluster.\n\n" +
      "5) Repeat:\n" +
      "- Repeat assignment and update until centroids no longer change significantly or a maximum number of iterations is reached.\n\n" +
      "Advantages:\n" +
      "- Simple and easy to implement.\n" +
      "- Efficient on large numeric datasets.\n\n" +
      "Disadvantages:\n" +
      "- Requires K in advance.\n" +
      "- Sensitive to outliers and initial centroids.\n" +
      "- Works best with spherical clusters.\n\n" +
      "Applications:\n" +
      "- Image segmentation, customer segmentation, document clustering."
  },
  {
    unit: "Unit 10 – Clustering & Outliers",
    question: "Explain K-Medoids (PAM) and compare it with K-Means.",
    keyPoints:
      "K-Medoids (PAM – Partitioning Around Medoids) is similar to K-means but uses actual data points as cluster centers.\n\n" +
      "Steps of PAM:\n" +
      "1) Select K Medoids:\n" +
      "- Choose K representative objects (medoids) from the dataset.\n\n" +
      "2) Assign Points:\n" +
      "- Assign each data point to the nearest medoid.\n\n" +
      "3) Swap and Improve:\n" +
      "- Try swapping a medoid with a non-medoid point.\n" +
      "- If the total clustering cost decreases, keep the swap.\n" +
      "- Repeat until no further improvement.\n\n" +
      "Comparison (K-Means vs K-Medoids):\n" +
      "- Centers: K-means uses means; K-medoids uses actual data points.\n" +
      "- Outliers: K-means is more sensitive to outliers; K-medoids is more robust.\n" +
      "- Speed: K-means is faster; K-medoids is slower but more stable.\n" +
      "- Distance: K-means typically uses Euclidean distance; K-medoids can use any distance metric.\n\n" +
      "Conclusion: K-medoids is more robust but computationally more expensive than K-means."
  },
  {
    unit: "Unit 10 – Clustering & Outliers",
    question: "Explain Hierarchical Clustering with types and dendrogram.",
    keyPoints:
      "Hierarchical clustering builds a hierarchy of clusters represented by a dendrogram.\n\n" +
      "Types:\n" +
      "1) Agglomerative (Bottom-Up):\n" +
      "- Start with each point as its own cluster.\n" +
      "- Iteratively merge the two closest clusters.\n" +
      "- Continue until all points are in one cluster.\n\n" +
      "2) Divisive (Top-Down):\n" +
      "- Start with one large cluster containing all points.\n" +
      "- Recursively split clusters into smaller clusters.\n\n" +
      "Dendrogram:\n" +
      "- A tree diagram showing cluster merges or splits.\n" +
      "- The height of a merge represents distance between clusters.\n" +
      "- By cutting the tree at a chosen height, we obtain a desired number of clusters.\n\n" +
      "Advantages:\n" +
      "- No need to pre-specify number of clusters.\n" +
      "- Produces a rich hierarchical structure.\n\n" +
      "Disadvantages:\n" +
      "- Computationally expensive for large datasets.\n" +
      "- Once merged or split, decisions cannot be undone.\n\n" +
      "Applications:\n" +
      "- Gene expression analysis, document clustering, image grouping."
  },
  {
    unit: "Unit 10 – Clustering & Outliers",
    question: "Explain CLARA and CLARANS algorithms.",
    keyPoints:
      "CLARA and CLARANS are extensions of PAM designed for larger datasets.\n\n" +
      "1) CLARA (Clustering LARge Applications):\n" +
      "- Draws multiple random samples from the dataset.\n" +
      "- Applies PAM on each sample to find medoids.\n" +
      "- Chooses the clustering with the best cost.\n" +
      "- Faster than PAM on large data but depends on sample quality.\n\n" +
      "2) CLARANS (Clustering Large Applications based on Randomized Search):\n" +
      "- Uses randomized search in the space of possible medoid sets.\n" +
      "- For each current solution, randomly explores a subset of neighbors.\n" +
      "- Moves to a new solution if it improves clustering cost.\n" +
      "- Balances quality and performance for large datasets.\n\n" +
      "Summary:\n" +
      "- PAM: accurate but for small datasets.\n" +
      "- CLARA: sampling-based, good for medium-sized data.\n" +
      "- CLARANS: randomized search, better for very large data."
  },
  {
    unit: "Unit 10 – Clustering & Outliers",
    question: "Explain Outliers and methods to detect them.",
    keyPoints:
      "Outliers are extreme or unusual values that deviate significantly from the majority of the data.\n\n" +
      "Why Outliers Matter:\n" +
      "- Can reduce model accuracy.\n" +
      "- May indicate errors, fraud, or rare important events.\n\n" +
      "Methods of Outlier Detection:\n" +
      "1) Statistical Methods:\n" +
      "- Z-score: values with |Z| > 3 often treated as outliers.\n" +
      "- Boxplot / IQR rule: values below Q1 − 1.5×IQR or above Q3 + 1.5×IQR.\n\n" +
      "2) Distance-Based Methods:\n" +
      "- k-NN distance: points far from their k nearest neighbors are outliers.\n\n" +
      "3) Clustering-Based Methods:\n" +
      "- Small, far-away clusters are considered outliers.\n" +
      "- In DBSCAN, points labeled as noise are outliers.\n\n" +
      "4) Density-Based Methods:\n" +
      "- Local Outlier Factor (LOF): compares local density of a point to neighbors.\n" +
      "- Low-density points have high LOF and are likely outliers.\n\n" +
      "5) Machine Learning Methods:\n" +
      "- Isolation Forest, autoencoders and other anomaly detection models.\n\n" +
      "Conclusion: Proper handling of outliers is essential to build reliable and robust data mining models."
  }
];
