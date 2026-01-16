// Unit 5 – RapidMiner 10-Mark Questions
window.unit5_long = [
  {
    unit: "Unit 5 – RapidMiner",
    question: "Explain the various perspectives in RapidMiner.",
    keyPoints:
      "RapidMiner provides multiple work environments called 'perspectives':\n\n" +
      "1) Welcome Perspective:\n" +
      "- First screen seen after launch.\n" +
      "- Contains sample processes, tutorials, recent files.\n\n" +
      "2) Design Perspective (MOST IMPORTANT):\n" +
      "- Used to create workflows using drag-and-drop operators.\n" +
      "- Build data pipelines, models, preprocessing, validation.\n\n" +
      "3) Results Perspective:\n" +
      "- Shows output of the process.\n" +
      "- Includes tables, charts, model accuracy, confusion matrix.\n\n" +
      "4) Turbo Prep:\n" +
      "- Interactive tool for cleaning & preparing data.\n" +
      "- Apply filtering, transformations, join, merge operations.\n\n" +
      "5) Auto Model:\n" +
      "- Automated ML engine.\n" +
      "- Selects algorithms, tunes parameters, evaluates models.\n\n" +
      "Conclusion: Perspectives divide tasks logically, making the workflow efficient and organized."
  },
  {
    unit: "Unit 5 – RapidMiner",
    question: "What is Auto Model in RapidMiner? Explain its functions.",
    keyPoints:
      "Auto Model automates machine learning inside RapidMiner.\n\n" +
      "Functions:\n" +
      "1) Automatic Model Selection:\n" +
      "- Suggests best algorithms (Decision Tree, Random Forest, SVM, Naive Bayes).\n\n" +
      "2) Data Preprocessing:\n" +
      "- Cleans missing values, scales data, handles outliers.\n\n" +
      "3) Feature Engineering:\n" +
      "- Creates new attributes.\n" +
      "- Removes irrelevant features.\n\n" +
      "4) Hyperparameter Tuning:\n" +
      "- Automatically tunes algorithm parameters for accuracy.\n\n" +
      "5) Model Evaluation:\n" +
      "- Shows accuracy, RMSE, ROC, confusion matrix.\n\n" +
      "Benefits:\n" +
      "- Beginner-friendly, fast, accurate, reduces manual coding."
  },
  {
    unit: "Unit 5 – RapidMiner",
    question: "Explain Turbo Prep in RapidMiner. What are its uses?",
    keyPoints:
      "Turbo Prep is RapidMiner’s visual tool for data cleaning and preparation.\n\n" +
      "Uses:\n" +
      "1) Data Cleaning:\n" +
      "- Removes missing data, fixes formatting, identifies outliers.\n\n" +
      "2) Data Transformation:\n" +
      "- Normalization, encoding, aggregation, filtering.\n\n" +
      "3) Combining Data:\n" +
      "- Merge, join, append multiple datasets.\n\n" +
      "4) Real-time Preview:\n" +
      "- Shows changes instantly.\n" +
      "- Undo/redo without re-running the process.\n\n" +
      "5) Export:\n" +
      "- Export cleaned data to CSV, Excel, databases.\n\n" +
      "Conclusion: Turbo Prep simplifies data preparation before modeling."
  },
  {
    unit: "Unit 5 – RapidMiner",
    question: "What are Operators in RapidMiner? Explain categories.",
    keyPoints:
      "Operators are the building blocks for processes in RapidMiner.\n\n" +
      "Categories:\n\n" +
      "1) Data Access:\n" +
      "- Read CSV, Excel, DB, URLs.\n" +
      "- Retrieve operator loads data from repository.\n\n" +
      "2) Transformation / Blending:\n" +
      "- Filter examples.\n" +
      "- Select attributes.\n" +
      "- Normalize, aggregate, replace missing values.\n\n" +
      "3) Modelling:\n" +
      "- Decision Tree, SVM, Logistic Regression, K-Means.\n\n" +
      "4) Validation:\n" +
      "- Cross-validation, holdout split, performance metrics.\n\n" +
      "5) Export:\n" +
      "- Write data, models, and results to files and repositories.\n\n" +
      "Conclusion: Operators define and execute every step of a workflow."
  },
  {
    unit: "Unit 5 – RapidMiner",
    question: "Explain the workflow of creating a predictive model in RapidMiner.",
    keyPoints:
      "Steps to create a predictive model:\n\n" +
      "1) Load Dataset:\n" +
      "- Using Retrieve operator or Import Data.\n\n" +
      "2) Clean & Prepare Data:\n" +
      "- Replace missing values, normalize, encode categorical variables.\n" +
      "- Select relevant features.\n\n" +
      "3) Apply ML Algorithm:\n" +
      "- Drag a model (Decision Tree, SVM, Random Forest).\n" +
      "- Connect it to prepared data.\n\n" +
      "4) Validation:\n" +
      "- Use Cross Validation operator to measure accuracy.\n\n" +
      "5) Analyze Results:\n" +
      "- Check accuracy, confusion matrix, ROC in Results Perspective.\n\n" +
      "6) Deployment:\n" +
      "- Save the model with Store operator for future predictions.\n\n" +
      "Conclusion: RapidMiner provides a structured workflow from loading data to deploying a final model."
  }
];
