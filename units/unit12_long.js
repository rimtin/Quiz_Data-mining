// Unit 12 – WEKA Explorer & Tools 10-mark Questions
window.unit12_long = [
  {
    unit: "Unit 12 – WEKA & Explorer",
    question: "Explain the WEKA Explorer interface and its main tabs.",
    keyPoints:
      "WEKA Explorer is the main graphical interface for data mining in WEKA.\n\n" +
      "Main Tabs:\n" +
      "1) Preprocess:\n" +
      "- Load data from ARFF, CSV, etc.\n" +
      "- Remove or keep selected attributes.\n" +
      "- Apply filters such as normalization, discretization and sampling.\n" +
      "- Inspect attribute statistics and class distribution.\n\n" +
      "2) Classify:\n" +
      "- Build supervised models (NaiveBayes, J48, SVM, k-NN, etc.).\n" +
      "- Choose classifier and evaluation method (training set, test set, cross-validation, percentage split).\n" +
      "- View results: accuracy, confusion matrix, precision/recall, ROC.\n\n" +
      "3) Cluster:\n" +
      "- Apply clustering algorithms like k-Means, EM.\n" +
      "- Assign cluster IDs to instances.\n" +
      "- Evaluate cluster quality and distributions.\n\n" +
      "4) Associate:\n" +
      "- Generate association rules using algorithms like Apriori.\n" +
      "- View rules with support and confidence.\n\n" +
      "5) Select attributes:\n" +
      "- Perform feature selection.\n" +
      "- Use attribute evaluators and search methods to rank or select subsets.\n" +
      "- Reduce dimensionality before modeling.\n\n" +
      "6) Visualize:\n" +
      "- Visualize attributes and class using scatter plots.\n" +
      "- Explore relationships and potential class boundaries.\n\n" +
      "Conclusion: Explorer provides a complete workflow from data loading to modeling and visualization in a user-friendly way."
  },
  {
    unit: "Unit 12 – WEKA & Explorer",
    question: "Explain the steps of building a Naive Bayes classifier in WEKA.",
    keyPoints:
      "Steps to build a Naive Bayes classifier in WEKA Explorer:\n\n" +
      "1) Load Data:\n" +
      "- Open WEKA → choose Explorer.\n" +
      "- Go to Preprocess tab and click 'Open file'.\n" +
      "- Select the dataset (ARFF/CSV) and load it.\n\n" +
      "2) Select Class Attribute:\n" +
      "- In the Preprocess tab, choose which attribute is the target class.\n\n" +
      "3) Go to Classify Tab:\n" +
      "- Click the Classify tab.\n" +
      "- Click 'Choose' → bayes → NaiveBayes.\n\n" +
      "4) Select Evaluation Method:\n" +
      "- Use Training Set, Supplied Test Set, Cross-validation (e.g., 10-fold), or Percentage Split.\n\n" +
      "5) Click 'Start':\n" +
      "- WEKA trains the Naive Bayes model and evaluates it according to the chosen test option.\n\n" +
      "6) Analyze Results:\n" +
      "- Check accuracy, error metrics and confusion matrix.\n" +
      "- Look at class-wise precision and recall.\n" +
      "- Optionally view ROC curve for probabilistic outputs.\n\n" +
      "Conclusion: Naive Bayes in WEKA is quick to set up and gives strong baseline results, especially for text classification tasks."
  },
  {
    unit: "Unit 12 – WEKA & Explorer",
    question: "Explain Decision Tree (J48) implementation in WEKA.",
    keyPoints:
      "J48 is WEKA’s implementation of the C4.5 decision tree algorithm.\n\n" +
      "Steps:\n" +
      "1) Load Dataset:\n" +
      "- Use the Preprocess tab to open and inspect the dataset.\n\n" +
      "2) Select Class Attribute:\n" +
      "- Set the target label column as the class attribute.\n\n" +
      "3) Choose Decision Tree Algorithm:\n" +
      "- Go to Classify tab.\n" +
      "- Click 'Choose' → trees → J48.\n\n" +
      "4) Select Test Option:\n" +
      "- Commonly use 10-fold cross-validation for stable accuracy.\n" +
      "- Alternatively, use training set, supplied test set or percentage split.\n\n" +
      "5) Click 'Start':\n" +
      "- WEKA builds the J48 tree and evaluates it.\n\n" +
      "6) View Output:\n" +
      "- Printed tree structure with attribute tests and leaf classes.\n" +
      "- Number of leaves and size of the tree.\n" +
      "- Accuracy, error rates, confusion matrix.\n\n" +
      "7) Visualize Tree:\n" +
      "- Right-click the result entry and choose 'Visualize tree'.\n" +
      "- See splits graphically and understand decision logic.\n\n" +
      "Advantages:\n" +
      "- Easy to interpret and explain.\n" +
      "- Handles both numeric and nominal attributes.\n" +
      "- Good starting point for many classification tasks."
  },
  {
    unit: "Unit 12 – WEKA & Explorer",
    question: "Explain the different test options under the WEKA Classify tab.",
    keyPoints:
      "WEKA Classify tab provides several evaluation options for classifiers.\n\n" +
      "1) Use Training Set:\n" +
      "- Train and test on the same data.\n" +
      "- Usually gives high accuracy but may overfit and not generalize.\n\n" +
      "2) Supplied Test Set:\n" +
      "- Train on the loaded dataset.\n" +
      "- Test on a separate file (external test set) that you supply.\n" +
      "- Good for realistic evaluation with unseen data.\n\n" +
      "3) Cross-Validation (k-fold):\n" +
      "- Default is 10-fold cross-validation.\n" +
      "- Splits data into k folds: train on k−1 folds, test on the remaining fold.\n" +
      "- Repeats this process k times and averages results.\n" +
      "- Provides a robust estimate of performance.\n\n" +
      "4) Percentage Split:\n" +
      "- Randomly splits data into training and test sets (e.g., 70% train, 30% test).\n" +
      "- Simple and quick for experiments.\n\n" +
      "Conclusion:\n" +
      "- Cross-validation is generally preferred for stable and unbiased performance estimation."
  },
  {
    unit: "Unit 12 – WEKA & Explorer",
    question:
      "Explain how to visualize the results in WEKA and interpret them.",
    keyPoints:
      "WEKA offers several visualization options to understand model performance.\n\n" +
      "1) Visualize Tab:\n" +
      "- Shows scatter plots of attributes against class.\n" +
      "- Helps identify separability and patterns.\n\n" +
      "2) Result List (Classify Tab):\n" +
      "- After training, each run appears in the result list.\n" +
      "- Right-click → Visualize classifier errors to see where predictions went wrong.\n\n" +
      "3) Confusion Matrix:\n" +
      "- Table of correct and incorrect predictions per class.\n" +
      "- High diagonal values indicate good performance.\n\n" +
      "4) Performance Metrics:\n" +
      "- Accuracy: overall percentage of correct predictions.\n" +
      "- Precision, Recall and F-measure for each class.\n" +
      "- Kappa statistic: agreement beyond chance.\n\n" +
      "5) ROC Curve and AUC:\n" +
      "- For probabilistic classifiers, WEKA can plot ROC curve.\n" +
      "- Area Under Curve (AUC) close to 1 indicates strong separability.\n\n" +
      "Interpretation:\n" +
      "- Use confusion matrix to see which classes are confused.\n" +
      "- Use precision/recall for imbalanced data.\n" +
      "- Use ROC/AUC to compare classifiers.\n\n" +
      "Conclusion: Visualization in WEKA turns raw numbers into intuitive plots that help you judge and improve models."
  }
];
