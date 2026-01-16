// Unit 1 – Data Warehousing long-answer questions
window.unit1_long = [
  {
    unit: "Unit 1 – Data Warehousing",
    question: "Explain the characteristics of a Data Warehouse.",
    keyPoints:
      "A Data Warehouse (DW) is a central repository used for decision making. According to Bill Inmon, it has four main characteristics:\n\n" +
      "1) Subject-Oriented:\n" +
      "- Organized around key subjects such as sales, customers, finance, inventory.\n" +
      "- Helps managers analyze one domain deeply.\n\n" +
      "2) Integrated:\n" +
      "- Data is collected from multiple sources (ERP, CRM, logs, files).\n" +
      "- Data is cleaned, consistent, and standardized.\n" +
      "- Example: date format, currency, naming conventions are made uniform.\n\n" +
      "3) Time-Variant:\n" +
      "- Stores historical data: monthly, yearly data kept for years.\n" +
      "- Analysis becomes trend-based (e.g., 5-year sales growth).\n\n" +
      "4) Non-Volatile:\n" +
      "- Once stored, data is mainly read-only and not frequently updated or deleted.\n" +
      "- Supports stable, repeatable queries.\n\n" +
      "Conclusion: A data warehouse is a historical, integrated, analytical database that supports Business Intelligence and Decision Support Systems."
  },
  {
    unit: "Unit 1 – Data Warehousing",
    question: "Differentiate between OLTP and OLAP.",
    keyPoints:
      "OLTP (On-Line Transaction Processing):\n" +
      "- Supports day-to-day transactions.\n" +
      "- Works on real-time current data.\n" +
      "- Highly normalized tables.\n" +
      "- Small, simple queries; very fast updates and inserts.\n" +
      "- Examples: ATM systems, banking systems, POS systems.\n\n" +
      "OLAP (On-Line Analytical Processing):\n" +
      "- Supports analysis and decision making.\n" +
      "- Uses historical and summarized data.\n" +
      "- Denormalized schemas (star/snowflake).\n" +
      "- Complex, read-heavy queries; slower but optimized for analysis.\n" +
      "- Examples: sales analysis, forecasting, trend analysis.\n\n" +
      "Conclusion: OLTP = operational (transaction) system; OLAP = analytical (decision support) system."
  },
  {
    unit: "Unit 1 – Data Warehousing",
    question: "What is a Data Mart? Explain its types.",
    keyPoints:
      "A Data Mart is a subset of a data warehouse that focuses on a single department such as HR, Finance, Sales or Marketing.\n\n" +
      "Types of Data Marts:\n\n" +
      "1) Dependent Data Mart:\n" +
      "- Gets data from the centralized data warehouse.\n" +
      "- Highly consistent and controlled.\n" +
      "- Easier to maintain common definitions and standards.\n\n" +
      "2) Independent Data Mart:\n" +
      "- Created directly from operational systems without a central warehouse.\n" +
      "- Faster and cheaper to implement initially.\n" +
      "- May lack global consistency between departments.\n\n" +
      "3) Hybrid Data Mart:\n" +
      "- Uses both data warehouse and operational systems as sources.\n" +
      "- Flexible and supports complex analysis.\n" +
      "- Useful when some data is in warehouse and some only in source systems."
  },
  {
    unit: "Unit 1 – Data Warehousing",
    question: "Explain the architecture of a Data Warehouse.",
    keyPoints:
      "A Data Warehouse generally follows a three-tier architecture:\n\n" +
      "1) Bottom Tier – Data Sources:\n" +
      "- Includes ERP, CRM, operational databases, flat files, Excel sheets, etc.\n" +
      "- ETL tools extract, transform and load (clean) the data from these sources.\n\n" +
      "2) Middle Tier – Data Warehouse Server:\n" +
      "- Core of the architecture.\n" +
      "- Contains fact tables, dimension tables, OLAP cubes and metadata.\n" +
      "- Stores integrated, historical and subject-oriented data.\n\n" +
      "3) Top Tier – Front-end / Client Tools:\n" +
      "- BI tools, dashboards, reports, ad-hoc query tools.\n" +
      "- Used by managers and analysts for reporting, analysis and decision making."
  },
  {
    unit: "Unit 1 – Data Warehousing",
    question: "What is Metadata? Explain its importance in a data warehouse.",
    keyPoints:
      "Metadata = 'Data about Data'. It describes what data exists, where it came from, how it is stored, and how it should be used.\n\n" +
      "Types of Metadata:\n\n" +
      "1) Technical Metadata:\n" +
      "- Table names, column names, data types.\n" +
      "- ETL rules, transformations and mappings.\n\n" +
      "2) Business Metadata:\n" +
      "- Business definitions of fields.\n" +
      "- Report descriptions, KPIs, business rules and policies.\n\n" +
      "3) Operational Metadata:\n" +
      "- Load times and refresh schedules.\n" +
      "- Error logs and process status.\n\n" +
      "Importance of Metadata:\n" +
      "- Ensures users understand the meaning and source of data.\n" +
      "- Helps troubleshoot ETL and data quality issues.\n" +
      "- Supports auditing, lineage tracking and data governance.\n" +
      "- Improves confidence and trust in the data warehouse."
  }
];
