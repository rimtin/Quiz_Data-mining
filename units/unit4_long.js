// Unit 4 – Data Mining Process & Tools 10-mark Questions
window.unit4_long = [
  {
    unit: "Unit 4 – DM Process & Tools",
    question: "Explain the Data Mining process in detail.",
    keyPoints:
      "Data Mining is a systematic process used to extract useful patterns from large datasets.\n\n" +
      "1) Data Cleaning:\n" +
      "- Removes noise, missing values, outliers and inconsistencies.\n" +
      "- Improves data quality for accurate mining results.\n\n" +
      "2) Data Integration:\n" +
      "- Combines data from multiple sources (ERP, CRM, files, logs).\n" +
      "- Creates a single unified view of data.\n\n" +
      "3) Data Selection:\n" +
      "- Chooses relevant data for the mining task.\n" +
      "- Example: For sales analysis select store, date, product, customer data.\n\n" +
      "4) Data Transformation:\n" +
      "- Converts data into a suitable format.\n" +
      "- Operations: normalization, aggregation, encoding, smoothing.\n\n" +
      "5) Data Mining (Core step):\n" +
      "- Applies intelligent algorithms to discover patterns.\n" +
      "- Techniques: classification, clustering, association, regression, outlier detection.\n\n" +
      "6) Pattern Evaluation:\n" +
      "- Identifies interesting and useful patterns.\n" +
      "- Uses measures like support, confidence, lift, accuracy.\n\n" +
      "7) Knowledge Presentation:\n" +
      "- Presents results using charts, BI dashboards and reports.\n" +
      "- Helps users understand and use the discovered knowledge.\n\n" +
      "Conclusion: Data mining is a complete end-to-end process, not just running algorithms."
  },
  {
    unit: "Unit 4 – DM Process & Tools",
    question:
      "What are the different types of Data Mining functionalities? Explain with examples.",
    keyPoints:
      "There are five major data mining functionalities:\n\n" +
      "1) Classification (Supervised):\n" +
      "- Predicts class labels.\n" +
      "- Example: Spam vs. Non-spam email classification.\n\n" +
      "2) Regression (Supervised):\n" +
      "- Predicts continuous numeric values.\n" +
      "- Example: Predicting house price or temperature.\n\n" +
      "3) Clustering (Unsupervised):\n" +
      "- Groups similar objects into clusters.\n" +
      "- Example: Customer segmentation based on buying behavior.\n\n" +
      "4) Association Rule Mining:\n" +
      "- Finds co-occurrence relationships between items.\n" +
      "- Example: People who buy chips also buy cold drinks.\n\n" +
      "5) Summarization:\n" +
      "- Produces compact descriptions of data.\n" +
      "- Example: Data cubes and summary reports.\n\n" +
      "Conclusion: Different tasks support prediction, grouping, correlation discovery and summarizing large data."
  },
  {
    unit: "Unit 4 – DM Process & Tools",
    question: "Explain the major issues in Data Mining.",
    keyPoints:
      "Important issues in data mining include:\n\n" +
      "1) Performance Issues:\n" +
      "- Very large datasets lead to long run times and high memory usage.\n" +
      "- Algorithms must be efficient and scalable.\n\n" +
      "2) Diverse Data Types:\n" +
      "- Data may be text, multimedia, spatial, temporal or graph-based.\n" +
      "- Special algorithms are needed for each type.\n\n" +
      "3) Mining Methodology Issues:\n" +
      "- Handling high-dimensional data, noisy data and missing values.\n" +
      "- Achieving good accuracy, interpretability and scalability.\n\n" +
      "4) User Interaction Issues:\n" +
      "- Interfaces should be easy to use.\n" +
      "- Visualizing complex patterns is difficult.\n" +
      "- Users may not understand technical measures.\n\n" +
      "5) Privacy and Security Issues:\n" +
      "- Mining on sensitive data (health, finance) raises privacy concerns.\n" +
      "- Requires anonymization and strong access control.\n\n" +
      "Conclusion: Successful data mining must address performance, methodology, usability and privacy together."
  },
  {
    unit: "Unit 4 – DM Process & Tools",
    question: "What are Data Mining tools? Explain any two in detail.",
    keyPoints:
      "Data mining tools provide implementations of algorithms and help visualize results.\n\n" +
      "1) WEKA:\n" +
      "- Open-source Java-based toolkit.\n" +
      "- Offers classification, clustering, association rule mining and visualization.\n" +
      "- GUI makes it easy for students and researchers to experiment.\n\n" +
      "2) RapidMiner:\n" +
      "- Commercial tool with a drag-and-drop workflow interface.\n" +
      "- Supports predictive analytics, data preparation and modeling.\n" +
      "- Features like AutoModel and TurboPrep make building models easier.\n\n" +
      "Other tools (brief):\n" +
      "- SAS Enterprise Miner: Strong for statistical modeling in enterprises.\n" +
      "- Orange: Python-based visual data mining suite.\n\n" +
      "Conclusion: Tools like Weka and RapidMiner simplify data mining by providing ready-made algorithms and visual workflows."
  },
  {
    unit: "Unit 4 – DM Process & Tools",
    question:
      "Explain Column-Oriented Storage and Partitioning in databases for data mining.",
    keyPoints:
      "Column-Oriented Storage:\n" +
      "- Stores data column-by-column instead of row-by-row.\n" +
      "- Example: All values of the Salary column stored together.\n" +
      "- Benefits: very fast for analytical queries that scan only a few columns.\n" +
      "- Enables high compression and faster aggregation (SUM, AVG, MIN, MAX).\n" +
      "- Common in OLAP and big data systems (e.g., columnar warehouses).\n\n" +
      "Partitioning:\n" +
      "- Divides a large table or database into smaller, more manageable pieces.\n" +
      "- Types: range partitioning, hash partitioning, list partitioning, etc.\n" +
      "- Each partition can be stored on different disks or servers.\n" +
      "- Benefits: faster query performance, easier backup and maintenance, and better scalability for large data warehouses.\n\n" +
      "Conclusion: Column-oriented storage speeds up analytical queries, while partitioning improves performance and manageability for very large databases."
  }
];
