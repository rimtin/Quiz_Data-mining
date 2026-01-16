// Unit 8 – Duplicates, Missing Values & Association Rules 10-mark Questions
window.unit8_long = [
  {
    unit: "Unit 8 – Duplicates & Missing Values",
    question: "Explain the Remove Duplicates operator. How does it work?",
    keyPoints:
      "Remove Duplicates is used to eliminate repeated rows (examples) from a dataset.\n\n" +
      "Working:\n" +
      "1) Attribute Selection:\n" +
      "- Default mode: All attributes are used to detect duplicates.\n" +
      "- Subset mode: Only selected attributes are checked.\n\n" +
      "2) Internal Comparison:\n" +
      "- Compares examples using selected attributes.\n" +
      "- Uses efficient matching (e.g. hashing) to detect identical rows.\n\n" +
      "3) Output:\n" +
      "- Returns a cleaned ExampleSet with duplicates removed.\n" +
      "- Reduces dataset size and improves model accuracy.\n\n" +
      "Use Cases:\n" +
      "- Removing duplicate customer records.\n" +
      "- Cleaning sensor logs with repeated timestamps.\n" +
      "- Cleaning transaction logs with repeated entries.\n\n" +
      "Conclusion: Remove Duplicates improves data integrity and prevents biased learning."
  },
  {
    unit: "Unit 8 – Duplicates & Missing Values",
    question: "Explain missing value handling methods in RapidMiner.",
    keyPoints:
      "Missing values can reduce model performance and cause errors. RapidMiner provides several ways to handle them.\n\n" +
      "1) Replace Missing Values:\n" +
      "- Simple strategies: mean, median, zero, minimum, maximum or a constant.\n" +
      "- Easy and fast, good for numeric and nominal attributes.\n\n" +
      "2) Impute Missing Values:\n" +
      "- Uses machine learning models to predict missing values.\n" +
      "- Example models: Decision Tree, k-NN, Regression, Naive Bayes.\n" +
      "- Trains on complete data and then predicts missing entries.\n\n" +
      "3) Remove Missing Values:\n" +
      "- Deletes rows or attributes containing missing values.\n" +
      "- Used when the percentage of missing values is very high.\n\n" +
      "4) Hide Missing Values:\n" +
      "- Temporarily ignores missing data for some operations.\n" +
      "- Typically used for visualization or quick exploration.\n\n" +
      "Conclusion: Correct missing value handling improves stability, accuracy and reliability of data mining models."
  },
  {
    unit: "Unit 8 – Duplicates & Missing Values",
    question:
      "What is attribute filtering? Explain different attribute_filter_type options.",
    keyPoints:
      "Attribute filtering selects a subset of attributes based on specific criteria.\n\n" +
      "Main attribute_filter_type options:\n" +
      "1) value_type:\n" +
      "- Selects attributes by type (numeric, nominal, binominal, etc.).\n\n" +
      "2) subset:\n" +
      "- User manually selects multiple attributes to keep.\n" +
      "- Useful when only a known set of features is needed.\n\n" +
      "3) all:\n" +
      "- Selects all attributes (default, no filtering).\n\n" +
      "4) block_type:\n" +
      "- Selects attributes group-wise, based on blocks or semantic groups.\n\n" +
      "5) no_missing_values:\n" +
      "- Selects attributes that have no missing values.\n" +
      "- Automatically avoids attributes with many nulls.\n\n" +
      "Importance:\n" +
      "- Reduces dimensionality and noise.\n" +
      "- Removes irrelevant attributes.\n" +
      "- Improves algorithm speed and performance."
  },
  {
    unit: "Unit 8 – Duplicates & Missing Values",
    question:
      "Explain Association Rule Learning with Support and Confidence.",
    keyPoints:
      "Association rule learning discovers interesting relationships between items in large datasets (e.g. market baskets).\n\n" +
      "Key Measures:\n" +
      "1) Support:\n" +
      "- Support(X → Y) = P(X ∪ Y).\n" +
      "- Fraction of transactions that contain both X and Y.\n\n" +
      "2) Confidence:\n" +
      "- Confidence(X → Y) = P(Y | X).\n" +
      "- Probability that Y is bought when X is bought.\n\n" +
      "Example:\n" +
      "- 100 transactions, 30 contain bread, 20 contain bread and milk together.\n" +
      "- Support(bread → milk) = 20/100 = 0.20.\n" +
      "- Confidence(bread → milk) = 20/30 ≈ 0.66.\n" +
      "- Interpretation: 66% of customers who buy bread also buy milk.\n\n" +
      "Common Algorithms:\n" +
      "- Apriori, FP-Growth, Eclat.\n\n" +
      "Conclusion: Association rules help retailers and analysts understand co-purchasing behavior."
  },
  {
    unit: "Unit 8 – Duplicates & Missing Values",
    question: "Explain Imputation and its importance in Data Mining.",
    keyPoints:
      "Imputation is the process of filling missing data using statistical or machine learning methods.\n\n" +
      "Methods:\n" +
      "1) Statistical Imputation:\n" +
      "- Mean, median or mode substitution.\n" +
      "- Regression-based imputation.\n" +
      "- Hot-deck / cold-deck imputation (using similar records).\n\n" +
      "2) ML-based Imputation:\n" +
      "- Use models like Decision Trees, Random Forest, k-NN, Naive Bayes.\n" +
      "- Train the model on complete cases, then predict missing values.\n\n" +
      "Importance:\n" +
      "- Avoids deleting large portions of data.\n" +
      "- Reduces bias that can occur if missing data is ignored.\n" +
      "- Improves model accuracy and stability.\n" +
      "- Ensures algorithms that cannot handle missing values (e.g. SVM, k-NN) can be used.\n\n" +
      "Conclusion: Imputation is a crucial step in real-world data mining pipelines where missing values are common."
  }
];
