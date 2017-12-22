---
published: true
permalink: /dictionary-v1.2/
layout: hero
filename: dictionary-v1.2.md
title: DATA Act Information Model Schema Data Dictionary v1.2
---
<div class="article-wrap">
<h1> DATA Act Information Model Schema Data Dictionary v1.2 </h1>
<p>

<i>Released December 22, 2017: </i>December 22, 2017: Treasury released the DATA Act Information Model Schema (DAIMS) v1.2. DAIMS v1.2 is a minor update of the schema and will be implemented with the submission of fiscal year 2018 quarter 3 data. Find out more information about DAIMS v1.2 beyond the Data Dictionary at [DAIMS v1.2]({{site.baseurl}}/DAIMS-v1.2/).
</p>
<h2 style="margin-top:50px">Background</h2>
<p>The DATA Act Information Model Schema (DAIMS; DATA Act Schema) provides an overall view of the hundreds of distinct data elements used to tell the story of how federal dollars are spent. The purpose of the data dictionary is to provide assistance in understanding the data elements within the DATA Act Schema.</p>

<p>The DATA Act directs the Office of Management and Budget (OMB) and the U.S. Treasury Department (Treasury) to establish government-wide data standards for federal funds and entities receiving such funds. The DAIMS will help to ensure that information is consistent and comparable and ultimately make data more accessible, reusable, and provide the necessary linkages between financial events. By making federal spending data accessible, searchable, reusable, and more reliable, the public can understand government spending. The DATA Act Schema will also reduce the need for massive system changes across federal agencies to collect information and allow agencies to focus on managing data.</p>

<h2>DAIMS Data Dictionary (v1.2)</h2>
<h4> Column Headings</h4>
<p><strong>File</strong>&mdash; Agencies report data in certain files based on their detail content.
  <ul style="margin-bottom:0;">
    <li>File A – Appropriations Account Detail</li>
    <li>File B – Object Class and Program Activity Detail</li>
    <li>File C – Award and Financial Detail</li>
    <li>File FABS – Financial Assistance Broker Submission Detail</li>
    <li>File D1 – Award and Awardee Attributes (Procurement)</li>
    <li>File D2 – Award and Awardee Attributes (Financial Assistance)</li>
    <li>File E – Additional Awardee Attributes</li>
    <li>File F – Sub-award Attributes</li>
  </ul>
</p>
<p>
  <strong>Data Element Label</strong> &mdash; The name of an element in the DATA Act Schema.
</p>
<p>
  <strong>Definition</strong> &mdash; The business definition for the element.
</p>
<p>
  <strong>Use</strong> &mdash; Describes the use of this element, as in whether it is required to be submitted, derived, or extracted.    
<ul style="margin-bottom:0;">
  <li>Required – Element must be present.</li>
  <li>Optional – Element may be included but is not required.</li>
  <li>Conditional per Validation Rule – Element may be needed based on a validation rule.</li>
  <li>Conditional per Award Type – Element may be needed based on the type of award.</li>
  <li>Derived – Element content is obtained from the content of another element. For example, ZIP code is used to derive city and state.</li>
  <li>Extracted – Element is pulled from another source.</li>
</ul>
</p>
<p>
  <strong>Grouping</strong> &mdash; Related elements are grouped.
</p>
</div>
<p></p>
<table id="dictTable" class="tablesorter table-bordered table-striped mb-40" style="word-wrap:break-word; table-layout:fixed;">
  <thead>
    <tr>
      <th>File</th>
      <th>Data Element Label</th>
      <th style="width:40%;">Definition</th>
      <th>Use</th>
      <th>Grouping</th>
    </tr>
  </thead>
  {% for element in site.data.elementsv1_2%}
  <tr>
    <td>{{ element.File }}</td>
    <td>{{ element.DataElementLabel }}</td>
    <!--<td><a href="#C{{ forloop.index | plus:1 }}">{{ element.DAIMSSemanticLabel }}</a></td>-->
    <td>{{ element.Definition }}</td>
    <td>{{ element.Use }}</td>
    <td>{{element.Grouping}}</td>
  </tr>
  {% endfor %}
</table>
