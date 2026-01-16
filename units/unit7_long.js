// Unit 7 – Data Cleaning & Preprocessing 10-mark Questions
window.unit7_long = [
  {
    unit: "Unit 7 – Data Cleaning & Preprocessing",
    question: "What is Data Cleaning? Explain its techniques.",
    keyPoints:
      "Data Cleaning is the process of detecting and correcting errors, missing values, inconsistencies and noise in data.\n\n" +
      "Main Techniques:\n" +
      "1) Handling Missing Values:\n" +
      "- Replace with mean or median.\n" +
      "- Replace with most frequent value.\n" +
      "- Predict missing values using models (regression etc.).\n" +
      "- In extreme cases, remove records/attributes.\n\n" +
      "2) Smoothing (Noise Reduction):\n" +
      "- Binning (equal-width or equal-frequency).\n" +
      "- Regression-based smoothing.\n" +
      "- Moving averages.\n\n" +
      "3) Detecting Outliers:\n" +
      "- Z-score, boxplot methods.\n" +
      "- Clustering-based outlier detection.\n\n" +
      "4) Handling Inconsistent Data:\n" +
      "- Standardize date, code and unit formats.\n" +
      "- Resolve duplicates and conflicting records.\n\n" +
      "5) Data Type and Format Correction:\n" +
      "- Convert strings to numeric where needed.\n" +
      "- Fix invalid formats (e.g., wrong date style).\n\n" +
      "Conclusion: Good data cleaning improves accuracy, reliability and quality of any data mining result."
  },
  {
    unit: "Unit 7 – Data Cleaning & Preprocessing",
    question: "Explain Data Pre-processing and its importance.",
    keyPoints:
      "Data Pre-processing transforms raw data into a clean and useful form before applying mining algorithms.\n\n" +
      "Importance:\n" +
      "- Increases accuracy of models.\n" +
      "- Removes noise and errors.\n" +
      "- Reduces complexity and runtime.\n" +
      "- Helps extract meaningful patterns.\n\n" +
      "Stages of Pre-processing:\n" +
      "1) Data Cleaning:\n" +
      "- Handles missing values, noise, duplicates and inconsistencies.\n\n" +
      "2) Data Integration:\n" +
      "- Combines data from multiple sources into a unified dataset.\n\n" +
      "3) Data Transformation:\n" +
      "- Normalization, aggregation, encoding, scaling, smoothing.\n\n" +
      "4) Data Reduction:\n" +
      "- Dimensionality reduction, numerosity reduction, compression and sampling.\n\n" +
      "Conclusion: Because real-world data is messy, pre-processing is a crucial first step in any data mining project."
  },
  {
    unit: "Unit 7 – Data Cleaning & Preprocessing",
    question: "Explain Data Reduction and its techniques.",
    keyPoints:
      "Data Reduction aims to reduce the volume of data while preserving important information.\n\n" +
      "Techniques:\n" +
      "1) Dimensionality Reduction:\n" +
      "- Removes irrelevant or redundant attributes.\n" +
      "- Methods: Principal Component Analysis (PCA), attribute selection.\n\n" +
      "2) Numerosity Reduction:\n" +
      "- Replaces detailed data with smaller representations.\n" +
      "- Methods: histograms, clustering, sampling.\n\n" +
      "3) Data Compression:\n" +
      "- Uses encoding schemes.\n" +
      "- Lossless or lossy compression depending on need.\n\n" +
      "4) Wavelet Transform:\n" +
      "- Used for signals, images and time-series.\n" +
      "- Removes noise and reduces data size.\n\n" +
      "5) Data Cube Aggregation:\n" +
      "- Aggregates lower-level data to higher-level summaries (e.g., daily → monthly → yearly).\n\n" +
      "Conclusion: Data reduction improves performance, reduces storage and speeds up mining algorithms."
  },
  {
    unit: "Unit 7 – Data Cleaning & Preprocessing",
    question: "Explain Binning methods with examples.",
    keyPoints:
      "Binning is a smoothing technique to handle noisy numeric data by grouping values into bins.\n\n" +
      "Main Binning Methods:\n" +
      "1) Smoothing by Bin Means:\n" +
      "- Replace each value in a bin with the bin's mean.\n" +
      "- Example: {8, 9, 11} → mean = 9 → becomes {9, 9, 9}.\n\n" +
      "2) Smoothing by Bin Medians:\n" +
      "- Replace each value with the bin's median.\n" +
      "- Example: {4, 7, 8} → median = 7 → becomes {7, 7, 7}.\n\n" +
      "3) Smoothing by Bin Boundaries:\n" +
      "- Replace values by nearest boundary (min or max) of bin.\n" +
      "- Example: bin boundaries 5 and 10; value 7 → 5, value 9 → 10.\n\n" +
      "Uses:\n" +
      "- Reduces noise in numeric attributes.\n" +
      "- Prepares data for further analysis and modeling."
  },
  {
    unit: "Unit 7 – Data Cleaning & Preprocessing",
    question: "Explain Data Transformation and its various methods.",
    keyPoints:
      "Data Transformation converts data into suitable forms for mining.\n\n" +
      "Methods:\n" +
      "1) Normalization:\n" +
      "- Scales data to a smaller range (e.g., 0–1).\n" +
      "- Methods: min–max, z-score, decimal scaling.\n\n" +
      "2) Aggregation:\n" +
      "- Summarizes data (e.g., daily → weekly → monthly sales).\n\n" +
      "3) Encoding (Feature Engineering):\n" +
      "- Converts categorical attributes to numeric.\n" +
      "- Methods: one-hot encoding, label encoding.\n\n" +
      "4) Smoothing:\n" +
      "- Reduces noise using binning, regression, moving averages.\n\n" +
      "5) Discretization:\n" +
      "- Converts continuous attributes into intervals.\n" +
      "- Useful for algorithms like decision trees.\n\n" +
      "6) Attribute Construction:\n" +
      "- Creates new attributes from existing ones.\n" +
      "- Example: BMI = weight / (height²).\n\n" +
      "Conclusion: Proper transformation improves model performance and makes data more suitable for mining algorithms."
  }
];
