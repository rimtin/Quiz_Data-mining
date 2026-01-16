// Unit 3 – Data Warehouse & OLAP 10-mark Questions
window.unit3_long = [
  {
    unit: "Unit 3 – DW & OLAP",
    question: "Explain the architecture of a Data Warehouse.",
    keyPoints:
      "A Data Warehouse Architecture is typically three-tiered:\n\n" +
      "1) Bottom Tier – Data Sources + ETL:\n" +
      "- Operational DBs, ERP, CRM.\n" +
      "- External files, logs.\n" +
      "- ETL extracts, cleans, transforms and loads raw data.\n\n" +
      "2) Middle Tier – Warehouse Storage:\n" +
      "- Fact tables (quantitative).\n" +
      "- Dimension tables (descriptive attributes).\n" +
      "- OLAP cubes.\n" +
      "- Metadata repository.\n" +
      "- Storage types: ROLAP (SQL), MOLAP (cubes), HOLAP (hybrid).\n\n" +
      "3) Top Tier – Front-end Tools:\n" +
      "- Dashboards, reports, BI analysis.\n" +
      "- Tools: Tableau, Power BI.\n\n" +
      "Conclusion: The architecture ensures scalability, organized data, and fast analytics."
  },
  {
    unit: "Unit 3 – DW & OLAP",
    question: "What is OLAP? Explain OLAP operations with examples.",
    keyPoints:
      "OLAP (Online Analytical Processing) supports multidimensional analysis.\n\n" +
      "Main OLAP Operations:\n\n" +
      "1) Roll-up:\n" +
      "- Aggregation (City → State → Country).\n\n" +
      "2) Drill-down:\n" +
      "- Going into details (Year → Month → Day).\n\n" +
      "3) Slice:\n" +
      "- Selecting one dimension (Sales for 2024).\n\n" +
      "4) Dice:\n" +
      "- Selecting multiple dimensions (2024 + Shoes + North India).\n\n" +
      "5) Pivot:\n" +
      "- Rotating cube/table to view data differently.\n\n" +
      "Conclusion: OLAP enables flexible, fast, multidimensional analysis for decision-making."
  },
  {
    unit: "Unit 3 – DW & OLAP",
    question: "Explain Fact Table and Dimension Table with examples.",
    keyPoints:
      "Fact Table:\n" +
      "- Stores numeric measurements: Sales, Revenue, Quantity.\n" +
      "- Contains foreign keys to dimensions.\n" +
      "- Example: Sales_Fact(Date_Key, Product_Key, Store_Key, Quantity, Revenue).\n\n" +
      "Dimension Table:\n" +
      "- Stores descriptive attributes.\n" +
      "- Example: Product_Dim(Product_Key, Name, Category, Brand).\n\n" +
      "Differences:\n" +
      "Fact = numeric, large, many rows, FK's.\n" +
      "Dimension = descriptive, smaller, PK's."
  },
  {
    unit: "Unit 3 – DW & OLAP",
    question: "What is ROLAP, MOLAP and HOLAP? Compare them.",
    keyPoints:
      "1) ROLAP:\n" +
      "- Uses relational DB.\n" +
      "- Scalable but slower for complex queries.\n\n" +
      "2) MOLAP:\n" +
      "- Uses multidimensional cubes.\n" +
      "- Fastest performance; limited scalability.\n\n" +
      "3) HOLAP:\n" +
      "- Hybrid of ROLAP + MOLAP.\n" +
      "- Balances performance and scale.\n\n" +
      "Comparison:\n" +
      "ROLAP = SQL storage | MOLAP = cube storage | HOLAP = hybrid.\n" +
      "ROLAP = high scale | MOLAP = high speed | HOLAP = balanced."
  },
  {
    unit: "Unit 3 – DW & OLAP",
    question: "Explain Star Schema and Snowflake Schema.",
    keyPoints:
      "1) Star Schema:\n" +
      "- Central fact table.\n" +
      "- Surrounding denormalized dimensions.\n" +
      "- Fast queries.\n" +
      "Example layout:\n" +
      "Customer — Fact — Product\n\n" +
      "2) Snowflake Schema:\n" +
      "- Normalized dimensions (multiple tables).\n" +
      "- Slower due to joins.\n" +
      "- Saves storage.\n\n" +
      "Comparison:\n" +
      "Star = denormalized, simple, fast.\n" +
      "Snowflake = normalized, complex, slower."
  }
];
