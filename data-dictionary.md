---
published: true
permalink: /dictionary/
layout: hero
filename: data-dictionary.md
title: DATA Act Data Dictionary
---

<h1>The DATA Act Schema Data Dictionary</h1>
<h2>Background</h2>

<p>The purpose of this data dictionary is to provide assistance in understanding the data elements within the DATA Act Schema.</p>

<p>The DATA Act directs the Office of Management and Budget (OMB) and the U.S. Treasury Department (Treasury) to establish government-wide data standards for federal funds and entities receiving such funds. The DATA Act Schema will help to ensure that information is consistent and comparable and ultimately make data more accessible, reusable, and provide the necessary linkages between financial events. By making federal spending data accessible, searchable, reusable and more reliable, the public can understand how government spending impacts their communities. The DATA Act Schema will also reduce the need for massive system changes across federal agencies to collect information and allow agencies to focus on managing data.</p>

<p>The DATA Act data dictionary will be revised periodically and is expected to evolve over time to reflect the content within the DATA Act Schema.</p>

<p>To provide feedback on the data dictionary, please see our <a href="https://github.com/fedspendingtransparency/fedspendingtransparency.github.io/issues/123" title="provide data dictionary feedback">related issue</a>.</p>

<h2>DATA Act Schema Data Dictionary</h2>


<div class="panel panel-default">
	<div class="panel panel-body">
		<table class="table table-striped">
			<thead>
				<tr>
					<th>DAIMS Package Container</th>
					<th>DATA Act Field Name</th>
					<th>DAIMS Semantic Standard Label</th>
				</tr>
			</thead>
      {% for element in site.data.elements %}<tr>
				<td>{{ element.DAIMSPackageContainer }}</td>
				<td>
					{{ element.DATAActFieldName }}
				</td>
				<td><a href="#C{{ forloop.index | plus:1 }}">{{ element.DAIMSSemanticLabel }}</a></td>
			</tr>{% endfor %}
		</table>
	</div>
</div>
<h3 class="lead">DATA Act Element Catalog</h3>
<div class="panel panel-default">
	<div class="panel panel-body">
    {% for element in site.data.elements %}<div class="panel panel-default">
			<div class="panel panel-body">
				<table class="table table-striped" style="width: 100%">
					<thead>
						<tr>
							<th style="width: 20%">DATA Act Field Name</th>
							<th style="width: 80%">{{ element.DATAActFieldName }}<a id="C{{ forloop.index | plus:1 }}"></a></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<strong>DAIMS Package Container</strong>
							</td>
							<td>{{ element.DAIMSPackageContainer }}</td>
						</tr>
						<tr>
							<td>
								<strong>DAIMS Semantic Standard Label</strong>
							</td>
							<td>{{ element.DAIMSSemanticLabel }}</td>
						</tr>
						<tr>
							<td>
								<strong>Reference Field Number</strong>
							</td>
							<td>{{ element.referenceFieldNumber }}</td>
						</tr>
						<tr>
							<td>
								<strong>Definition or Description</strong>
							</td>
							<td>{{ element.definition }}</td>
						</tr>
						<tr>
							<td>
								<strong>Example(s)</strong>
							</td>
							<td>{% for example in element.example %}{{ example }}<br/>
              {% endfor %}</td>
						</tr>
						<tr>
							<td>
								<strong>Data Type</strong>
							</td>
							<td>{{ element.dataType }}</td>
						</tr>
						<tr>
							<td>
								<strong>Field Length</strong>
							</td>
							<td>{{ element.fieldLength }}</td>
						</tr>
						<tr>
							<td>
								<strong>Required</strong>
							</td>
							<td>{{ element.required }}</td>
						</tr>
						<tr>
							<td>
								<strong>Business Line(s)</strong>
							</td>
							<td>{{ element.businessLine }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>{% endfor %}
	</div>
</div>
