# Mapping from FGDC to Data.json

- Spec for Common Core Metadata (Data.json) - http://project-open-data.github.io/schema/
- Spec for Federal Government Data Committee (ISO 19115 for North America) - http://www.fgdc.gov/metadata/documents/MetadataQuickGuide.pdf

### Required Fields

| Field | Data.json | FGDC  |
| :------ | :------ | :----- |
|  Title  |  title  |   Title  |
|  Description  |  description  |   Abstract  |
|  Tags  |  keyword  |   Theme_Keyword, Place_Keyword, Stratum_Keyword, Temporal_Keyword  |
|  Last Update  |  modified  |   Publication_Date  |
|  Publisher  |  publisher  |   Originator  |
|  Contact Name  |  person  |   Point_of_Contact or Metadata_Contact |
|  Contact Email  |  mbox  |  |
|  Unique Identifier  |  identifier  |    |
|  Public Access Level  |  accessLevel  |   |

### Required-if-Applicable Fields

| Field | Data.json | FGDC  |
| :------ | :------ | :----- |
|  Data Dictionary  |  dataDictionary  |    |
|  Download URL  |  accessURL  |     |
|  Endpoint  |  webService  |     |
|  Format |  format  |     |
|  License  |  license  |   Access_Constraints, Use_Constraints  |
|  Spatial  |  spatial  |   Horizontal_Coordinate_System_Definition  |
|  Temporal  |  temporal  |   Time_Period_of_Content  |
