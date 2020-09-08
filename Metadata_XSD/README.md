Notes:

The following files can be found in this folder:
1. POD_v1_1.xsd 
    * This is an xml representation of the (federal) Project Open Data v1.1 json schema
 
 2. dataGovSample.xml
     * This is the content from the sample file (for the 'extended' POD fields)
        https://project-open-data.cio.gov/v1.1/examples/catalog-sample-extended.json
        expressed in xml valid to POD_v1_1.xsd

3. POD_v1_1.xsl
     * This is an xsl stylesheet that converts xml valid to POD_v1_1.xsd to json.
     * This stylesheet was developed using xml that reproduced the information found in
        the file https://project-open-data.cio.gov/v1.1/examples/catalog-sample-extended.json.
     * It is possible that there are xml files that could be valid to the POD_v1_1.xsd for 
       which this stylesheet makes an incomplete or incorrect conversion.
       
 4. dataGovSample.json
     * This is the json file created from dataGovSample.xml using POD_v1_1.xsl.   
        
5. nistSample.xml
     * This is a file containing two records that are present in NIST's data.gov json
     
 6. nistSample.json
     * This is the json file created from nistSample.xml using POD_v1_1.xsl. 
        
 
 
As of 26 June 2015:

1. The files dataGovSample.xml and nistSample.xml are valid to POD_v1_1.xsd.  
 
2. The files dataGovSample.json and nistSample.json were created from their
    similarly named xml files using POD_v1_1.xsl. 
        
3. The files dataGovSample.json and nistSample.json were validated against the 
    Federal v1.1 schema using the Project Open Data Dashboard.

Note about testing the xml to json conversion:
      * The xsl stysheet is declared as version="2.0"  and has been mostly run 
        using Saxon 9x in the Oxygen environment.   
      * The stylesheet has been  successfully tested (although not extensively) using 
         a declaration of version="1.0" and run under Saxon 6.5.5 in Oxygen.  No testing 
        has been done with other parsers and/or transformation engines.
        
        