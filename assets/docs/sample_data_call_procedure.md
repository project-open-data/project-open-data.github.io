---
layout: default
title: Sample Procedure for a data call
permalink: /assets/docs/sample_data_call_procedure/
filename: sample_data_call_procedure.md
---

## Background 

Many agencies have an incomplete inventory of their data assets.  Open data teams often find that a distributed data call is a good means of filling in the gaps.  Below is a model for this.  

There are two principle models for this - one where you direct each participant to populate a spreadsheet and the other where you direct them to input new entries into a system such as CKAN.  The below focuses on the first model.  

## Steps 

1.  The central coordinator should consolidate your current inventory in an authoritative copy.  It's important to maintain version control from this point forward.  
2.  Parse the current inventory into sections based on your organization's components (e.g. by agency or bureau).  
3.  Require each component to provide one or more empowered data representatives.  
4.  Provide each representative with instructions (draft memo below) and their appropriate section of the current data inventory.  
5.  Each representative should then confirm the entries and their metadata in the current inventory, then ask the question of what datasets from their component are unaccounted for in this inventory.  
6. The representatives should systematically add new rows for existing datasets that had been recorded in the inventory.  
  *  As appropriate, the representatives should coordinate with other staff in order to include all required metadata for each entry as well as as much optional metadata as possible.  
  *  The representatives themselves may need to coordinate a data call within their component in order to scale this process to the full expanse of their component's data offerings.  
  *  If needed, the representative may need to systematically browse their component's web presence in order to find the myriad datasets that are offered but had not been accounted for in the inventory.  
7. The representative is responsible for returning to the central coordinator an updated spreadsheet that includes the original inventory but then expands on it.  The column structure should remain the same so that the central coordinator can easily re-assemble the organization's inventory.  
8. The central coordinator should carefully combine the updated inventories, ensuring that each spreadsheet's columns have remained consistant and that each spreadsheet contains not just additions but the original inventory material as well.  
9. Upon completion, the central coordinator should certify the expanded inventory as the new authoritative copy.   


## Draft memo

You should be receiving a spreadsheet that contains the datasets that we currently have on record for your component.  You'll notice that the column headers in the spreadsheet represent the required, required-if-applicable, and optional metadata fields.  It is important that each row represent one dataset and that each dataset have as complete of a metadata record as possible, with as many fields filled in as possible and as accurately as possible.  

In your spreadsheet, columns A-I represent required fields; columns J-R are required fields if they are applicable to the dataset; and columns S-AB are recommended but optional.  Further guidance for each metadata field can be found at http://project-open-data.github.io/schema/.  

Before doing anything else, please review what is currently in the spreadsheet and confirm that it is still accurate. You may need to check with your component's data stewards but this is the best opportunity to update any erroneous or out of date entries.  

Most agency components publish or maintain many more datasets than are accounted for in the current inventory.  This effort seeks to correct that.  Your goal should be to add as many unaccounted for datasets to this spreadsheet, but given the potential size of this task, you may need to proceed systematically.  

First begin by establishing the major sources of your component's data that are not represented in the current inventory.  One means of finding unaccounted for datasets is to browse various sections of your component's web presence, be those pages on public websites or on your intranet.  You'll oftentimes find partial data catalogs that way.  Otherwise, you may need to survey your component's data stewards to enlist their help.  If you deputize more representatives from those sources to populate the spreadsheet, it's important that you maintain control and consistency over the process.   

Be sure to add to what you had as your initial data inventory instead of starting from scratch.  It's also important to maintain the spreadsheet columns as you originally received them since the your agency's central coordinator will be combining your final product with that of the other components.  

Include all datasets, including those which are for internal use only.  Use the accessLevel metadata field to articulate whether the dataset is public, restricted public, or private.  The catalog entries for datasets that are public or restricted public will be visible to the public at Data.gov and our agency's data hub, but the catalog entries that are marked private will only be visible to agency staff and OMB.  

For more details, consult the Implementation Guidance issued by OMB in August, 2013, specifically sections 2A and 2B: [http://project-open-data.github.io/implementation-guide#ii-policy-requirements](http://project-open-data.github.io/implementation-guide#ii-policy-requirements).  


