// Unit 2 – Data Mining & KDD long-answer questions
window.unit2_long = [
  {
    unit: "Unit 2 – Data Mining & KDD",
    question: "Explain the steps in the KDD (Knowledge Discovery in Databases) process.",
    keyPoints:
      "The KDD process converts raw data into useful knowledge. It consists of the following major steps:\n\n" +
      "1) Data Selection:\n" +
      "- Choosing relevant data from multiple sources such as files, databases and logs.\n\n" +
      "2) Data Preprocessing / Cleaning:\n" +
      "- Removes missing values.\n" +
      "- Eliminates noise and outliers.\n" +
      "- Fixes inconsistencies in formats and values.\n" +
      "- This step improves data quality.\n\n" +
      "3) Data Transformation / Integration:\n" +
      "- Normalizes, aggregates and encodes data.\n" +
      "- Integrates data from different sources.\n" +
      "- Converts data into a suitable format for mining.\n\n" +
      "4) Data Mining (Core step):\n" +
      "- Applies algorithms to extract patterns and models.\n" +
      "- Techniques include classification, clustering, association and regression.\n\n" +
      "5) Interpretation / Evaluation:\n" +
      "- Evaluates discovered patterns for usefulness and validity.\n" +
      "- Presents results using graphs, charts and reports.\n" +
      "- Converts patterns into understandable knowledge for users.\n\n" +
      "Conclusion: KDD is a complete process where data mining is only one step in the overall knowledge discovery cycle."
  },
  {
    unit: "Unit 2 – Data Mining & KDD",
    question: "What is Data Mining? Describe different types of data mining tasks.",
    keyPoints:
      "Data Mining is the process of discovering meaningful patterns, trends and knowledge from large amounts of data.\n\n" +
      "Major Data Mining Tasks:\n\n" +
      "1) Classification (Supervised):\n" +
      "- Predicts category labels for data objects.\n" +
      "- Example: Spam vs. Non-spam email classification.\n\n" +
      "2) Regression (Supervised):\n" +
      "- Predicts continuous numeric values.\n" +
      "- Example: Predicting house prices or temperature.\n\n" +
      "3) Clustering (Unsupervised):\n" +
      "- Groups similar objects into clusters.\n" +
      "- No predefined class labels.\n" +
      "- Example: Customer segmentation.\n\n" +
      "4) Association Rule Mining:\n" +
      "- Finds correlations and relationships between items.\n" +
      "- Example: “If a customer buys bread, they also buy butter.”\n\n" +
      "5) Outlier / Anomaly Detection:\n" +
      "- Identifies unusual or suspicious records.\n" +
      "- Example: Detecting fraud in credit card transactions.\n\n" +
      "6) Summarization:\n" +
      "- Provides compact descriptions of data.\n" +
      "- Example: Data cubes, summary reports.\n\n" +
      "Conclusion: Data mining supports many tasks such as prediction, grouping, correlation analysis and summarization."
  },
  {
    unit: "Unit 2 – Data Mining & KDD",
    question: "Compare supervised and unsupervised learning with examples.",
    keyPoints:
      "Supervised vs. Unsupervised Learning:\n\n" +
      "Supervised Learning:\n" +
      "- Training data has known output labels.\n" +
      "- Learns a mapping from input features to output labels.\n" +
      "- Used for prediction.\n" +
      "- Examples:\n" +
      "  * Classification: Email spam detection (Spam / Not spam).\n" +
      "  * Regression: Predicting temperature for tomorrow.\n\n" +
      "Unsupervised Learning:\n" +
      "- Training data has no labels.\n" +
      "- The goal is to find hidden patterns or structure.\n" +
      "- Used for grouping and pattern discovery.\n" +
      "- Examples:\n" +
      "  * Clustering: Customer segmentation based on buying behavior.\n" +
      "  * Association: Market basket analysis (items bought together).\n\n" +
      "Conclusion: Supervised learning uses labeled data for prediction, while unsupervised learning works with unlabeled data to discover patterns."
  },
  {
    unit: "Unit 2 – Data Mining & KDD",
    question: "Explain Data Cleaning and Data Integration. Why are they important?",
    keyPoints:
      "Data Cleaning:\n" +
      "- Process of correcting or removing dirty data.\n" +
      "- Deals with missing values, duplicate records, noise and inconsistent formats.\n" +
      "- Example: Filling missing ages, removing duplicate customers.\n" +
      "Importance of Data Cleaning:\n" +
      "- Improves accuracy of models.\n" +
      "- Reduces errors in mining results.\n" +
      "- Ensures reliable decision-making and reporting.\n\n" +
      "Data Integration:\n" +
      "- Combining data from multiple sources such as databases, files, sensors or web data into a unified view.\n" +
      "- Removes redundancy and merges overlapping information.\n" +
      "- Often used when building a data warehouse.\n" +
      "Importance of Data Integration:\n" +
      "- Provides a single, consistent view of data.\n" +
      "- Makes analysis easier and more complete.\n" +
      "- Essential for KDD and data warehousing projects.\n\n" +
      "Conclusion: Without proper cleaning and integration, data mining results can be misleading or incorrect."
  },
  {
    unit: "Unit 2 – Data Mining & KDD",
    question: "Explain Association Rule Mining with an example.",
    keyPoints:
      "Association rule mining finds interesting relationships between items in large datasets.\n\n" +
      "Key Measures:\n" +
      "1) Support:\n" +
      "- The proportion of transactions that contain both A and B.\n" +
      "- Example: Support(A → B) = P(A ∪ B).\n\n" +
      "2) Confidence:\n" +
      "- The conditional probability that B is bought when A is bought.\n" +
      "- Example: Confidence(A → B) = P(B | A).\n\n" +
      "Example – Market Basket Analysis:\n" +
      "- Suppose:\n" +
      "  * 70% of customers buy Milk.\n" +
      "  * 50% buy Bread.\n" +
      "  * 40% buy both Milk and Bread.\n" +
      "- Association rule: Milk → Bread.\n" +
      "  * Support = 0.40 (40% of all transactions contain both).\n" +
      "  * Confidence = 0.40 / 0.70 ≈ 57%.\n" +
      "- This means: About 57% of the customers who buy milk also buy bread.\n\n" +
      "Conclusion: Association rule mining helps retailers and analysts discover item combinations and cross-selling opportunities."
  }
];
