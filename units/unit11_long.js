// Unit 11 – Classification Methods 10-mark Questions
window.unit11_long = [
  {
    unit: "Unit 11 – Classification Methods",
    question: "Explain Bayesian Classification with Bayes’ Theorem and its advantages.",
    keyPoints:
      "Bayesian Classification uses probability theory to predict class membership based on Bayes' theorem.\n\n" +
      "Bayes' Theorem:\n" +
      "- P(H|X) = [P(X|H) * P(H)] / P(X)\n" +
      "  H = hypothesis (class), X = evidence (input).\n" +
      "- P(H|X): posterior probability of class given data.\n" +
      "- P(X|H): likelihood of data under that class.\n" +
      "- P(H): prior probability of the class.\n" +
      "- P(X): probability of the evidence.\n\n" +
      "Naive Bayes Classifier:\n" +
      "- Assumes attributes are conditionally independent given the class.\n" +
      "- Posterior ∝ P(Class) * Π P(Xi | Class) for each attribute Xi.\n\n" +
      "Advantages:\n" +
      "- Very fast to train and predict.\n" +
      "- Works well with large datasets and high-dimensional data.\n" +
      "- Performs well even with relatively small training sets.\n" +
      "- Very effective for text classification (e.g., spam detection).\n\n" +
      "Disadvantages:\n" +
      "- Strong independence assumption between attributes.\n" +
      "- Not suitable when features are highly correlated.\n\n" +
      "Applications:\n" +
      "- Email spam filtering, document categorization, medical diagnosis."
  },
  {
    unit: "Unit 11 – Classification Methods",
    question:
      "Explain Decision Tree classifier. Describe its components, construction and advantages.",
    keyPoints:
      "A Decision Tree is a flow-chart-like model used for classification and regression.\n\n" +
      "Components:\n" +
      "1) Root Node: represents the entire dataset.\n" +
      "2) Internal Nodes: each tests an attribute.\n" +
      "3) Branches: outcomes of attribute tests.\n" +
      "4) Leaf Nodes: terminal nodes giving class labels.\n\n" +
      "Construction Steps:\n" +
      "1) Attribute Selection:\n" +
      "- Use measures such as Information Gain, Gain Ratio, or Gini Index.\n" +
      "2) Splitting:\n" +
      "- Split the dataset into subsets based on the selected attribute's values.\n" +
      "3) Recursion:\n" +
      "- Repeat attribute selection and splitting on each subset.\n" +
      "- Stop when all samples are of the same class, no attributes remain, or node size is too small.\n" +
      "4) Pruning:\n" +
      "- Remove branches that add little predictive power.\n" +
      "- Reduces overfitting and improves generalization.\n\n" +
      "Advantages:\n" +
      "- Easy to understand and visualize.\n" +
      "- Can handle both numerical and categorical data.\n" +
      "- Requires little data preparation (no normalization needed).\n\n" +
      "Disadvantages:\n" +
      "- Prone to overfitting if not pruned.\n" +
      "- Small changes in data can produce a very different tree.\n" +
      "- Biased towards attributes with many distinct values."
  },
  {
    unit: "Unit 11 – Classification Methods",
    question: "Explain k-NN (k-Nearest Neighbors) algorithm.",
    keyPoints:
      "k-NN is a lazy learning, instance-based algorithm used for classification and regression.\n\n" +
      "Steps of k-NN:\n" +
      "1) Choose k:\n" +
      "- Select the number of neighbors (often odd, such as 3, 5, 7).\n\n" +
      "2) Compute Distances:\n" +
      "- For a new query point, compute distance to all training points.\n" +
      "- Common metrics: Euclidean, Manhattan, Minkowski, etc.\n\n" +
      "3) Find k Nearest Neighbors:\n" +
      "- Select k samples with smallest distance.\n\n" +
      "4) Classification:\n" +
      "- Use majority voting among the k neighbors' labels.\n\n" +
      "5) Regression:\n" +
      "- Predict the average (or weighted average) of neighbors' target values.\n\n" +
      "Advantages:\n" +
      "- Simple and intuitive.\n" +
      "- No explicit training phase, just stores data.\n" +
      "- Can model complex decision boundaries.\n\n" +
      "Disadvantages:\n" +
      "- Prediction can be slow for large datasets (must compute many distances).\n" +
      "- Sensitive to irrelevant features and different scales → needs normalization.\n" +
      "- Choice of k and distance metric strongly affects performance.\n\n" +
      "Applications:\n" +
      "- Recommendation systems, pattern recognition, medical diagnosis."
  },
  {
    unit: "Unit 11 – Classification Methods",
    question: "Explain Rule-Based Classifier with examples.",
    keyPoints:
      "Rule-Based Classification uses a set of IF–THEN rules to assign class labels.\n\n" +
      "Form of a Rule:\n" +
      "- IF condition THEN class.\n" +
      "- Example: IF Income > 50000 AND Age < 30 THEN Class = 'Premium Customer'.\n\n" +
      "Knowledge Representation:\n" +
      "- System consists of a set of rules stored in a rule base.\n" +
      "- Classification is done by matching data against rule conditions.\n\n" +
      "Advantages:\n" +
      "- Human-readable and easy to interpret.\n" +
      "- Easy to modify or add rules (good for expert systems).\n\n" +
      "Disadvantages:\n" +
      "- Hard to choose the best rule set when many rules exist.\n" +
      "- Conflicts can occur when multiple rules fire for same case.\n" +
      "- Performance may degrade with very large rule bases.\n\n" +
      "Rule Generation Methods:\n" +
      "- Extract rules from decision trees.\n" +
      "- Sequential covering algorithms.\n" +
      "- Association rule–based methods."
  },
  {
    unit: "Unit 11 – Classification Methods",
    question:
      "Explain Information Gain and Entropy used in Decision Trees.",
    keyPoints:
      "Entropy and Information Gain are measures used to select the best attribute to split a node in decision trees.\n\n" +
      "Entropy:\n" +
      "- Measures impurity or disorder in a dataset.\n" +
      "- For a set S with classes having probabilities pi:\n" +
      "  Entropy(S) = − Σ pi * log2(pi).\n" +
      "- If all samples belong to one class → Entropy = 0 (pure).\n" +
      "- If classes are evenly mixed → Entropy is high (up to 1 for two classes).\n\n" +
      "Information Gain:\n" +
      "- Reduction in entropy achieved by splitting on an attribute A.\n" +
      "- Gain(S, A) = Entropy(S) − Σ (|Sv| / |S|) * Entropy(Sv),\n" +
      "  where Sv are subsets after splitting S on attribute A.\n" +
      "- Attribute with highest information gain is chosen as split attribute.\n\n" +
      "Example (conceptual):\n" +
      "- If attribute 'Outlook' splits the data almost perfectly into pure subsets, it has high information gain.\n\n" +
      "Conclusion:\n" +
      "- Entropy quantifies impurity; information gain measures how much an attribute improves purity when splitting."
  }
];
