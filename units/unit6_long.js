// Unit 6 – Repository, Import/Export & Process View 10-mark Questions
window.unit6_long = [
  {
    unit: "Unit 6 – Repository & Process",
    question: "What is a Repository in RapidMiner? Explain its types and uses.",
    keyPoints:
      "A Repository is a storage location in RapidMiner used to save and manage data, processes, models and results.\n\n" +
      "Types of Repositories:\n" +
      "1) Local Repository:\n" +
      "- Stored on the local machine.\n" +
      "- Default for beginners and single-user setups.\n\n" +
      "2) RapidMiner Server Repository:\n" +
      "- Stored on a shared server.\n" +
      "- Enables teamwork and collaboration across multiple users and machines.\n\n" +
      "Uses of Repository:\n" +
      "- Storing raw and preprocessed datasets.\n" +
      "- Storing reusable processes (workflows).\n" +
      "- Storing results, reports and evaluation metrics.\n" +
      "- Storing trained models for later deployment.\n\n" +
      "Conclusion: The Repository acts as a central project hub, keeping all data mining assets organized and reusable."
  },
  {
    unit: "Unit 6 – Repository & Process",
    question: "Explain the Import and Export mechanisms in RapidMiner.",
    keyPoints:
      "IMPORTING DATA:\n" +
      "1) Import Data Wizard:\n" +
      "- Supports formats like CSV, Excel, JSON, HTML, XML, databases.\n" +
      "- Allows previewing data before loading.\n" +
      "- Detects attribute types and basic formatting.\n\n" +
      "2) Import Operators:\n" +
      "- Read CSV, Read Excel, Read Database, Read URL, etc.\n" +
      "- Provide detailed control over parsing and encoding.\n\n" +
      "EXPORTING DATA:\n" +
      "- Export operators like Write CSV, Write Excel, Write Database, Write Model.\n" +
      "- Used to save cleaned datasets, models and results.\n\n" +
      "Uses:\n" +
      "- Make results available to other tools.\n" +
      "- Deploy models and data into production systems.\n\n" +
      "Conclusion: Flexible import/export functions make RapidMiner compatible with many external systems and file formats."
  },
  {
    unit: "Unit 6 – Repository & Process",
    question:
      "Explain the functions of Retrieve, Store and Filter Examples operators.",
    keyPoints:
      "1) Retrieve Operator:\n" +
      "- Loads objects (data, models, results) from the Repository.\n" +
      "- Often the first operator in a process.\n\n" +
      "2) Store Operator:\n" +
      "- Saves data, models or results into a Repository location.\n" +
      "- Essential for deployment and reusing trained models.\n\n" +
      "3) Filter Examples Operator:\n" +
      "- Filters rows (examples) based on conditions.\n" +
      "- Conditions can be on attributes (e.g., Age > 18, Country = 'India').\n" +
      "- Useful for preprocessing, focusing on subsets and segmenting data.\n\n" +
      "Conclusion: Retrieve, Store and Filter Examples are fundamental operators for loading, saving and selecting data."
  },
  {
    unit: "Unit 6 – Repository & Process",
    question: "Explain Process View and Operator View in RapidMiner.",
    keyPoints:
      "1) Process View:\n" +
      "- Central design area displaying the workflow.\n" +
      "- Shows operators as blocks and connections as arrows.\n" +
      "- Helps visualize the flow of data and the sequence of operations.\n" +
      "- Supports zooming, automatic arrangement and execution order.\n\n" +
      "2) Operator View:\n" +
      "- Shows detailed information about the selected operator.\n" +
      "- Includes its inputs, outputs, parameters, description and warnings.\n" +
      "- Allows configuration of parameter values.\n\n" +
      "Conclusion: Process View gives the big picture of the workflow, while Operator View provides detailed configuration for each step."
  },
  {
    unit: "Unit 6 – Repository & Process",
    question:
      "Explain the steps in building a complete data analysis process in RapidMiner.",
    keyPoints:
      "Steps to build a complete data analysis process:\n\n" +
      "1) Load Data:\n" +
      "- Use Import Data or Retrieve operator.\n" +
      "- Load from CSV, Excel, database or repository.\n\n" +
      "2) Preprocess Data:\n" +
      "- Replace Missing Values, Normalize, Rename, Filter Examples, Select Attributes.\n\n" +
      "3) Build Model:\n" +
      "- Choose and apply a modeling operator (Decision Tree, SVM, k-NN, etc.).\n\n" +
      "4) Validate Model:\n" +
      "- Use Cross Validation or Split Validation to measure performance.\n\n" +
      "5) Evaluate Results:\n" +
      "- Examine accuracy, precision, recall, ROC curves and confusion matrix.\n\n" +
      "6) Store and Export:\n" +
      "- Store the trained model using Store operator.\n" +
      "- Export cleaned data or results if needed.\n\n" +
      "Conclusion: RapidMiner provides a complete pipeline from data loading to model deployment in a graphical, operator-based workflow."
  }
];
