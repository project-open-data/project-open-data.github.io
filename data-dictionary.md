---
published: true
permalink: /dictionary/
layout: hero
filename: data-dictionary.md
title: DATA Act Data Dictionary
---
<h1>Data Act Element Listing</h1>
<h4 class="lead">DATA Act Fields</h4>

<div class="panel panel-default">
	<div class="panel panel-body">
		<table class="table table-striped">
			<thead>
				<tr>
					<th>Schema Reporting Structure</th>
					<th>Cardinality</th>
					<th>DATA Act Field Name</th>
					<th>DATA Act Element Name</th>
				</tr>
			</thead>
      {% for element in site.data.elements %}<tr>
				<td>{{ element.schemaReportingStructure }}</td>
				<td>{{ element.cardinality }}</td>
				<td>
					<a href="#C{{ forloop.index | plus:1 }}">{{ element.dataActFieldName }}</a>
				</td>
				<td>{{ element.dataActElementName }}</td>
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
							<th style="width: 80%">{{ element.dataActFieldName }}<a id="C{{ forloop.index | plus:1 }}"></a></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<strong>Schema Reporting Structure</strong>
							</td>
							<td>{{ element.schemaReportingStructure }}</td>
						</tr>
						<tr>
							<td>
								<strong>DATA Act Element Name</strong>
							</td>
							<td>{{ element.dataActElementName }}</td>
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
							<td>{% for example in element.examples %}{{ example }}<br/>
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
								<strong>Cardinality</strong>
							</td>
							<td>{{ element.cardinality }}</td>
						</tr>
						<tr>
							<td>
								<strong>Business Line(s)</strong>
							</td>
							<td>{{ element.businessLine }}</td>
						</tr>
						<tr>
							<td>
								<strong>Domain Values, Derivations or Validations</strong>
							</td>
							<td>{{ element.domainValuesDerivationsOrValidations }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>{% endfor %}
	</div>
</div>
