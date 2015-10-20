---
published: true
permalink: /dictionary/
layout: hero
filename: data-dictionary.md
title: DATA Act Data Dictionary
---

<html>
	<head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><title>DATA Act Element Listing</title><link href="{{ site.baseurl }}/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css">
</head>
	<body>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="{{ site.baseurl }}/assets/js/bootstrap.min.js"></script>
		<h1>The DATA Act Schema Data Dictionary</h1>
		<h2>Background</h2>

		<p>The purpose of this data dictionary is to provide assistance in understanding the data elements within the DATA Act Schema.</p>

		<p>The DATA Act directs the Office of Management and Budget (OMB) and the U.S. Treasury Department (Treasury) to establish government-wide data standards for federal funds and entities receiving such funds. The DATA Act Schema will help to ensure that information is consistent and comparable and ultimately make data more accessible, reusable, and provide the necessary linkages between financial events. By making federal spending data accessible, searchable, reusable and more reliable, the public can understand how government spending impacts their communities. The DATA Act Schema will also reduce the need for massive system changes across federal agencies to collect information and allow agencies to focus on managing data.</p>

		<p>The DATA Act data dictionary will be revised periodically and is expected to evolve over time to reflect the content within the DATA Act Schema.</p>

		<p>To provide feedback on the data dictionary, please see our <a href="https://github.com/fedspendingtransparency/fedspendingtransparency.github.io/issues/101" title="provide data dictionary feedback">related issue</a>.</p>

		<h2>DATA Act Schema Data Dictionary</h2>

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
					<tr>
						<td>Appropriations Account</td>
						<td>(1..1)</td>
						<td>
							<a href="#C2">(represented by 21(A-F))</a>
						</td>
						<td>Appropriations Account</td>
					</tr>
					<tr>
						<td>Appropriations Account</td>
						<td>(1..1)</td>
						<td>
							<a href="#C3">BudgetAuthorityAppropriatedAmount</a>
						</td>
						<td>Budget Authority Appropriated</td>
					</tr>
					<tr>
						<td>Appropriations Account</td>
						<td>(1..1)</td>
						<td>
							<a href="#C4">UnobligatedBalance</a>
						</td>
						<td>Unobligated Balance</td>
					</tr>
					<tr>
						<td>Appropriations Account</td>
						<td>(1..1)</td>
						<td>
							<a href="#C5">OtherBudgetaryResourcesAmount</a>
						</td>
						<td>Other Budgetary Resources</td>
					</tr>
					<tr>
						<td>Appropriations Account</td>
						<td>(1..1)</td>
						<td>
							<a href="#C6">AllocationTransferAgencyIdentifier</a>
						</td>
						<td>Treasury Account Symbol</td>
					</tr>
					<tr>
						<td>Appropriations Account</td>
						<td>(1..1)</td>
						<td>
							<a href="#C7">AgencyIdentifier</a>
						</td>
						<td>Treasury Account Symbol</td>
					</tr>
					<tr>
						<td>Appropriations Account</td>
						<td>(1..1)</td>
						<td>
							<a href="#C8">BeginningPeriodOfAvailability</a>
						</td>
						<td>Treasury Account Symbol</td>
					</tr>
					<tr>
						<td>Appropriations Account</td>
						<td>(1..1)</td>
						<td>
							<a href="#C9">EndingPeriodOfAvailability</a>
						</td>
						<td>Treasury Account Symbol</td>
					</tr>
					<tr>
						<td>Appropriations Account</td>
						<td>(1..1)</td>
						<td>
							<a href="#C10">AvailabilityTypeCode</a>
						</td>
						<td>Treasury Account Symbol</td>
					</tr>
					<tr>
						<td>Appropriations Account</td>
						<td>(1..1)</td>
						<td>
							<a href="#C11">MainAccountCode</a>
						</td>
						<td>Treasury Account Symbol</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C12">AwardeeOrRecipientUniqueIdentifier</a>
						</td>
						<td>Awardee/Recipient Unique Identifier</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C13">NonFederalFundingAmount</a>
						</td>
						<td>Non-Federal Funding Amount</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C14">TotalFundingAmount</a>
						</td>
						<td>Current Total Funding Obligation Amount on Award</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C15">PotentialTotalValueAwardAmount</a>
						</td>
						<td>Potential Total Value of Award</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C16">NAICS_Code</a>
						</td>
						<td>North American Industrial Classification System (NAICS) Code</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C17">NAICS_Description</a>
						</td>
						<td>North American Industrial Classification System (NAICS) Description</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C18">CFDA_Number</a>
						</td>
						<td>Catalog of Federal Domestic Assistance (CFDA) Number</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C19">CFDA_Title</a>
						</td>
						<td>Catalog of Federal Domestic Assistance (CFDA) Title</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C20">AwardDescription</a>
						</td>
						<td>Award Description</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C21">AwardModAmendmentNumber</a>
						</td>
						<td>Award Modification/Amendment Number</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C22">PlaceOfPerfCongressionalDistrict</a>
						</td>
						<td>Primary Place of Performance Congressional District</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C23">PlaceOfPerfCountryCode</a>
						</td>
						<td>Primary Place of Performance Country Code</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C24">PlaceOfPerfCountryName</a>
						</td>
						<td>Primary Place of Performance Country Name</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C25">RecordType</a>
						</td>
						<td>Record Type</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C26">BusinessTypes</a>
						</td>
						<td>Business Types</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C27">FundingAgencyName</a>
						</td>
						<td>Funding Agency Name</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C28">FundingAgencyCode</a>
						</td>
						<td>Funding Agency Code</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C29">FundingSubTierAgencyName</a>
						</td>
						<td>Funding Sub Tier Agency Name</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C30">FundingSubTierAgencyCode</a>
						</td>
						<td>Funding Sub Tier Agency Code</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C31">FundingOfficeName</a>
						</td>
						<td>Funding Office Name</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C32">FundingOfficeCode</a>
						</td>
						<td>Funding Office Code</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C33">AwardingAgencyName</a>
						</td>
						<td>Awarding Agency Name</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C34">AwardingAgencyCode </a>
						</td>
						<td>Awarding Agency Code</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C35">AwardingSubTierAgencyName</a>
						</td>
						<td>Awarding Sub Tier  Agency Name</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C36">AwardingSubTierAgencyCode</a>
						</td>
						<td>Awarding Sub Tier  Agency Code</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C37">AwardingOfficeName</a>
						</td>
						<td>Awarding Office Name</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C38">AwardingOfficeCode</a>
						</td>
						<td>Awarding Office Code</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C39">A76Action</a>
						</td>
						<td>A-76 (FAIR Act) Action</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C40">DodClaimantProgCode</a>
						</td>
						<td>DoD Claimant Program Code</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C41">ClingerCohenCompliance</a>
						</td>
						<td>Clinger-Cohen Act Planning Compliance</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C42">CommercialItemAcquisProcedures</a>
						</td>
						<td>Commercial Item Acquisition Procedures</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C43">CommercialItemTestProg</a>
						</td>
						<td>Commercial Item Test Program</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C44">CompetativeProcedures</a>
						</td>
						<td>Other than Full and Open Competition</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C45">ConsolidatedContract</a>
						</td>
						<td>Consolidated Contract</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C46">ContigencyHumanitarianPeacekeeping</a>
						</td>
						<td>Contingency, Humanitarian, or Peacekeeping Operation</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C47">ContractBundling</a>
						</td>
						<td>Contract Bundling</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C48">ContractFinancing</a>
						</td>
						<td>Contract Financing</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C49">CoDeterminationBusSize</a>
						</td>
						<td>Contracting Officer's Determination of Business Size</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C50">CostAcctStandardsClause</a>
						</td>
						<td>Cost Accounting Standards Clause</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C51">CostOrPricingData</a>
						</td>
						<td>Cost or Pricing Data</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C52">CountryOfOrigin</a>
						</td>
						<td>Country of Product or Service Origin</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C53">DavisBaconAct</a>
						</td>
						<td>Davis Bacon Act</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C54">DivisionName</a>
						</td>
						<td>Division Name</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C55">DivisionNumber</a>
						</td>
						<td>Division Number</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C56">EmergingSmallBusiness</a>
						</td>
						<td>Emerging Small Business</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C57">EvaluatedPreference</a>
						</td>
						<td>Evaluated Preference</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C58">ExtentCompeted</a>
						</td>
						<td>Extent Competed</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C59">VendorFaxNumber</a>
						</td>
						<td>Vendor Fax Number</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C60">8aProgramParticipant</a>
						</td>
						<td>8(a) Program Participant</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C61">ForeignFunding</a>
						</td>
						<td>Foreign Funding</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C62">HubZoneFirm</a>
						</td>
						<td>Historically Underutilized Business Zone (HUBZone) Firm</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C63">IdvAgencyId</a>
						</td>
						<td>Referenced IDV Agency Identifier</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C64">InfoTechCommercialItemCategory</a>
						</td>
						<td>Information Technology Commercial Item Category</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C65">VeterinaryHospital</a>
						</td>
						<td>Veterinary Hospital</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C66">UndefinitizedAction</a>
						</td>
						<td>Undefinitized Action</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C67">MajorProgram</a>
						</td>
						<td>Major Program</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C68">MultpleOrSingleAwardIdv</a>
						</td>
						<td>Multiple or Single Award IDV</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C69">MultiYearContract</a>
						</td>
						<td>Multi Year Contract</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C70">NationalInterestAction</a>
						</td>
						<td>Pational Interest Action</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C71">NumberOfOffersReceived</a>
						</td>
						<td>Number of Offers Received</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C72">OtherStatutoryAuthority</a>
						</td>
						<td>Other Statutory Authority</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C73">PerformanceBasedServiceAcquisition</a>
						</td>
						<td>Performance-Based Service Acquisition</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C74">PlaceOfManufacture</a>
						</td>
						<td>Place of Manufacture</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C75">PriceEvaluationAdjPrefPctDiff</a>
						</td>
						<td>Price Evaluation Adjustment/Preference Percent Difference</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C76">ProductOrServiceCode</a>
						</td>
						<td>Product or Service Code</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C77">ProgramAcronym</a>
						</td>
						<td>Program Acronym</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C78">ProductOrServiceDescription</a>
						</td>
						<td>Product Service Code Description</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C79">ReasonForNotCompleted</a>
						</td>
						<td>Reason for Not Complete Work</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C80">RecoveryActTas</a>
						</td>
						<td>Treasury Account Symbol for American Reinvestment and Recovery Act (ARRA)</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C81">ReceivesContracts</a>
						</td>
						<td>Receives Contracts</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C82">ReceivesGrants</a>
						</td>
						<td>Receives Grants</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C83">RecoveredMaterialClauses</a>
						</td>
						<td>Recovered Materials/Sustainability</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C84">SmallBusinessResearch</a>
						</td>
						<td>Small Business Innovation Research or Small Technology Transfer Research</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C85">SeaTranportation</a>
						</td>
						<td>Sea Transportation</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C86">ServiceContractAct</a>
						</td>
						<td>Service Contract Act</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C87">SmallBusCompetativenessDemonstration</a>
						</td>
						<td>Small Business Competitiveness Demonstration Program</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C88">SolicitationIdentifier</a>
						</td>
						<td>Solicitation Identifier</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C89">SolicitationProcedures</a>
						</td>
						<td>Solicitation Procedures</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C90">StatutoryExemptionTypeFairOpportunity</a>
						</td>
						<td>Type of Statutory Exception to Fair Opportunity Act</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C91">SubcontractingPlan</a>
						</td>
						<td>Subcontracting Plan</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C92">SystemEquipmentCode</a>
						</td>
						<td>System Equipment Code</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C93">TypeOfIdc</a>
						</td>
						<td>Type of IDC</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C94">TypeOfSetAside</a>
						</td>
						<td>Type Set Aside</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C95">EpaDesignatedProduct</a>
						</td>
						<td>EPA-Designated Product(s)</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C96">WalshHealey</a>
						</td>
						<td>Walsh Healey Act</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C97">AccountTitle</a>
						</td>
						<td>Account Title</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C98">DunsConfidenceCode</a>
						</td>
						<td>DUNS Confidence Code</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C99">Uri</a>
						</td>
						<td>URI</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C100">SaiNumber</a>
						</td>
						<td>State Award Identification Number</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C101">TransactionNumber</a>
						</td>
						<td>Transaction Number</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C102">WebSiteUrl</a>
						</td>
						<td>Web Site URL</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C103">WhoCanUse</a>
						</td>
						<td>Who Can Use</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C104">MaximumOrderLimit</a>
						</td>
						<td>Maximum Order Limit</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C105">FeeForUseOfService</a>
						</td>
						<td>Fee for Use of Service</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C106">FixedFeeValue</a>
						</td>
						<td>Fixed Fee Value</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C107">FeeRangeLowerValue</a>
						</td>
						<td>Fee Range Lower Value</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C108">FeeRangeUpperValue</a>
						</td>
						<td>Fee Range Upper Value</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C109">OrderingProcedure</a>
						</td>
						<td>Ordering Procedure</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C110">FeePaidForUseOfIdv</a>
						</td>
						<td>Fee Paid for Use of IDV</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(1,1)</td>
						<td>
							<a href="#C111">FederalActionObligation</a>
						</td>
						<td>Funding Action Obligation</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C112">AmountofAward</a>
						</td>
						<td>Funding Action Obligation</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C113">OrginalSubsidyCost</a>
						</td>
						<td>Funding Action Obligation</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C114">CurrentTotalValueAwardAmount</a>
						</td>
						<td>Current Total Value of Award</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C115">FaceValueLoanGuarantee</a>
						</td>
						<td>Current Total Value of Award</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C116">TypeOfContractPricing</a>
						</td>
						<td>Type of Transaction Code</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C117">idvType</a>
						</td>
						<td>Type of Transaction Code</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C118">ContractAwardType</a>
						</td>
						<td>Type of Transaction Code</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C119">AssistanceType</a>
						</td>
						<td>Type of Transaction Code</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C120">FederalPrimeAward</a>
						</td>
						<td>Type of Transaction Code</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C121">ParentAwardIDprefix</a>
						</td>
						<td>Parent Award Identification (ID) Number

Definition (if more than one field): The identifier of the procurement award under which the specific award is issued, such as a Federal Supply Schedule. This data element currently applies to procurement actions only.</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C122">ParentAwardYear</a>
						</td>
						<td>Parent Award Identification (ID) Number

Definition (if more than one field): The identifier of the procurement award under which the specific award is issued, such as a Federal Supply Schedule. This data element currently applies to procurement actions only.</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C123">ParentAwardType</a>
						</td>
						<td>Parent Award Identification (ID) Number

Definition (if more than one field): The identifier of the procurement award under which the specific award is issued, such as a Federal Supply Schedule. This data element currently applies to procurement actions only.</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C124">ParentAwardNumber</a>
						</td>
						<td>Parent Award Identification (ID) Number

Definition (if more than one field): The identifier of the procurement award under which the specific award is issued, such as a Federal Supply Schedule. This data element currently applies to procurement actions only.</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C125">ActionDateDay</a>
						</td>
						<td>Action Date</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C126">ActionDateMonth</a>
						</td>
						<td>Action Date</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C127">ActionDateYear</a>
						</td>
						<td>Action Date</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C128">PeriodOfPerfStartDay</a>
						</td>
						<td>Period of Performance Start Date</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C129">PeriodOfPerfStartMonth</a>
						</td>
						<td>Period of Performance Start Date</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C130">PeriodOfPerfStartYear</a>
						</td>
						<td>Period of Performance Start Date</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C131">PeriodOfPerfCurrentEndDay</a>
						</td>
						<td>Period of Performance Current End Date</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C132">PerioOfPerfCurrentEndMonth</a>
						</td>
						<td>Period of Performance Current End Date</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C133">PeriodOfPerfCurrentEndYear</a>
						</td>
						<td>Period of Performance Current End Date</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C134">PeriodOfPerfPotentialEndDay</a>
						</td>
						<td>Period of Performance Potential End Date</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C135">PeriodOfPerfPotentialEndMonth</a>
						</td>
						<td>Period of Performance Potential End Date</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C136">PeriodOfPerfPotentialEndYear</a>
						</td>
						<td>Period of Performance Potential End Date</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C137">OrderingPeriodEndDay</a>
						</td>
						<td>Ordering Period End Date</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C138">OrderingPeriodEndMonth</a>
						</td>
						<td>Ordering Period End Date</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C139">OrderingPeriodEndYear</a>
						</td>
						<td>Ordering Period End Date</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C140">PlaceOfPerfStreetLine1</a>
						</td>
						<td>Primary Place of Performance Address</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C141">PlaceOfPerfState</a>
						</td>
						<td>Primary Place of Performance Address</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C142">PlaceOfPerfCountyName</a>
						</td>
						<td>Primary Place of Performance Address</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C143">PlaceOfPerfPostalCode</a>
						</td>
						<td>Primary Place of Performance Address</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C144">piidPrefix</a>
						</td>
						<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C145">piidAwardYear</a>
						</td>
						<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C146">piidAwardType</a>
						</td>
						<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C147">piidAwardNumber</a>
						</td>
						<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C148">fainAwardNumber</a>
						</td>
						<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1) </td>
						<td>
							<a href="#C149">TypeOfAction</a>
						</td>
						<td>Type of Action</td>
					</tr>
					<tr>
						<td>Award Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C150">ReasonForModification</a>
						</td>
						<td>Type of Action</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C151">AwardeeOrRecipient LegalEntityName</a>
						</td>
						<td>Awardee/Recipient Legal Entity Name</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C152">AwardeeOrRecipientUniqueIdentifier</a>
						</td>
						<td>Awardee/Recipient Unique Identifier</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C153">UltimateParentUniqueIdentifier</a>
						</td>
						<td>Ultimate Parent Unique Identifier</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C154">UltimateParentLegalEntityName</a>
						</td>
						<td>Ultimate Parent Legal Entity Name</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C155">LegalEntityCongresionalDistrict</a>
						</td>
						<td>Legal Entity Congressional District</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C156">LegalEntityCountryCode</a>
						</td>
						<td>Legal Entity Country Code</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C157">LegalEntityCountryName</a>
						</td>
						<td>Legal Entity Country Name</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C158">BusinessTypes</a>
						</td>
						<td>Business Types</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C159">AmericanIndianOwned</a>
						</td>
						<td>American Indian Owned Business</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C160">AsianPacOwned</a>
						</td>
						<td>Asian-Pacific American Owned Business</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C161">BlackOwned</a>
						</td>
						<td>Black American Owned Business</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C162">SamException</a>
						</td>
						<td>SAM Exception</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C163">EducationalInstitution</a>
						</td>
						<td>Educational Institution</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C164">FedBizOpps</a>
						</td>
						<td>FedBizOpps</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C165">FederalGovernemntOrg</a>
						</td>
						<td>U.S. Federal Government</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C166">GfeGfp</a>
						</td>
						<td>Government Furnished Equipment (GFE) and Government Furnished Property (GFP)</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C167">HispanicOwned</a>
						</td>
						<td>Hispanic American Owned Business</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C168">HistoricallyBlackCollegeOrUniversity</a>
						</td>
						<td>Historically Black College or University</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C169">Hospital</a>
						</td>
						<td>Hospital Flag</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C170">InteragencyContractAuth</a>
						</td>
						<td>Interagency Contracting Authority</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C171">LandGrantCollege1862</a>
						</td>
						<td>1862 Land Grant College</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C172">LandGrantCollege1890</a>
						</td>
						<td>1890 Land Grant College</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C173">LandGrantCollege1994</a>
						</td>
						<td>1994 Land Grant College</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C174">AirportAuthority</a>
						</td>
						<td>Airport Authority</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C175">AlaskanNativeOwned</a>
						</td>
						<td>Alaskan Native Owned Corporation or Firm</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C176">ArchitectureAndEngineering</a>
						</td>
						<td>Architecture and Engineering Firm</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C177">CityLocalGovernment</a>
						</td>
						<td>City Local Government</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C178">CommunityDevCorpOwned</a>
						</td>
						<td>Community Developed Corporation Owned Firm</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C179">CommunityDevCorp</a>
						</td>
						<td>Community Development Corporation</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C180">ConstructionFirm</a>
						</td>
						<td>Construction Firm</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C181">CorporateEntityNotTaxExempt</a>
						</td>
						<td>Corporate Entity, Not Tax Exempt</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C182">CorporateEntityTaxExampt</a>
						</td>
						<td>Corporate Entity, Tax Exempt</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C183">CouncilOfGovernments</a>
						</td>
						<td>Council of Governments</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C184">CountyLocalGovernment</a>
						</td>
						<td>County Local Government</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C185">DomesticShelter</a>
						</td>
						<td>Domestic Shelter</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C186">DotCertifiedDisadvantagedBusEnterprise</a>
						</td>
						<td>DoT Certified Disadvantaged Business Enterprise</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C187">WomanOwnedSmallBusiness</a>
						</td>
						<td>Woman Owned Business</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C188">FederalGovernmentAgency</a>
						</td>
						<td>Federal Agency</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C189">FederallyFundedResearchAndDevCorp</a>
						</td>
						<td>Federally Funded Research and Development Corp</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C190">ForeignGovernment</a>
						</td>
						<td>Foreign Government</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C191">ForeignOwnedAndLocated</a>
						</td>
						<td>Foreign Owned and Located</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C192">ForProfitOrg</a>
						</td>
						<td>For Profit Organization</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C193">Foundation</a>
						</td>
						<td>Foundation</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C194">HispanicServicingInstitution</a>
						</td>
						<td>Hispanic Servicing Institution</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C195">HousingAuthorities</a>
						</td>
						<td>Housing Authorities Public/Tribal</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C196">IndianTribe</a>
						</td>
						<td>Indian Tribe (Federally Recognized)</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C197">InterMunicipalLocalGovernment</a>
						</td>
						<td>Inter-Municipal Local Government</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C198">InternationalOrg</a>
						</td>
						<td>International Organization</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C199">InterstateEntity</a>
						</td>
						<td>Interstate Entity</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C200">JointVentureWomanOwnedSmallBusiness</a>
						</td>
						<td>SBA Certified 8(a) Joint Venture</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C201">LaborSuplusAreaFirm</a>
						</td>
						<td>Labor Surplus Area Firm</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C202">LimitedLiabilityCorporation</a>
						</td>
						<td>Limited Liability Corporation</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C203">LocalGovernmentOwned</a>
						</td>
						<td>Local Government Owned</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C204">ManufacturerOfGoods</a>
						</td>
						<td>Manufacturer of Goods</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C205">MunicipalityLocalGovernemnt</a>
						</td>
						<td>Municipality Local Government</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C206">NativeHawaiinOwned</a>
						</td>
						<td>Native Hawaiian Owned Organization or Firm</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C207">OtherBusOrOrg</a>
						</td>
						<td>Other Business or Organization</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C208">OtherMinorityOwned</a>
						</td>
						<td>Other Minority Owned Business</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C209">OtherNotForProfitOrg</a>
						</td>
						<td>Other Not For Profit Organization</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C210">PartnershipOrLimitedLiabilityCorp</a>
						</td>
						<td>Partnership or Limited Liability Partnership</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C211">PlanningCommision</a>
						</td>
						<td>Planning Commission</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C212">PortAuthority</a>
						</td>
						<td>Port Authority</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C213">PrivateUniversityOrCollege</a>
						</td>
						<td>Private University or College</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C214">SmallDisadvantaged</a>
						</td>
						<td>Small Disadvantaged Business</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C215">SchoolDistrictLocalGovernment</a>
						</td>
						<td>School District Local Government</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C216">SchoolOfForestry</a>
						</td>
						<td>School of Forestry</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C217">ServiceProvider</a>
						</td>
						<td>Service Provider</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C218">SmallAgriculturalCooperative</a>
						</td>
						<td>Small Agricultural Cooperative</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C219">SoleProprietorship</a>
						</td>
						<td>Sole Proprietorship</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C220">StateInstitutionOfHigherLearning</a>
						</td>
						<td>State Controlled Institution of Higher Learning</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C221">SubchapterSCorporation</a>
						</td>
						<td>Subchapter S Corporation</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C222">TownshipLocalGovernment</a>
						</td>
						<td>Township Local Government</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C223">TransitAuthority</a>
						</td>
						<td>Transit Authority</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C224">TribalCollege</a>
						</td>
						<td>Tribal College</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C225">TriballyOwned</a>
						</td>
						<td>Tribally Owned Firm</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C226">VeterinaryCollege</a>
						</td>
						<td>Veterinary College</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C227">LocalAreaSetAside</a>
						</td>
						<td>Local Area Set Aside</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C228">LocalGovernment</a>
						</td>
						<td>U.S. Local Government</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C229">PurchaseCardPayMethod</a>
						</td>
						<td>Purchase Card as Payment Method</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C230">MinorityInstitution</a>
						</td>
						<td>Minority Institution</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C231">MinorityOwned</a>
						</td>
						<td>Minority Owned Business</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C232">NativeOwned</a>
						</td>
						<td>Native American Owned Business</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C233">NonProfitOrganization</a>
						</td>
						<td>Non-profit Organization</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C234">NumberOfActions</a>
						</td>
						<td>Number of Actions</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C235">AnnualRevenue</a>
						</td>
						<td>Annual Revenue</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C236">NumberOfEmployees</a>
						</td>
						<td>Number of Employees</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C237">VendorPhoneNumber</a>
						</td>
						<td>Vendor Phone Number</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C238">ReceivesContractsAndGrants</a>
						</td>
						<td>Receives Contracts and Grants</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C239">SubcontinentAsianOwned</a>
						</td>
						<td>Subcontinent Asian (Asian- Indian) American Owned Business</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C240">SelfCertifiedSmallDisadvantagedBusiness</a>
						</td>
						<td>Self-Certified Small Disadvantaged Business</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C241">ShelteredWorkshop</a>
						</td>
						<td>Sheltered Workshop</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C242">ServiceDisabledVeteranOwned</a>
						</td>
						<td>Service Disabled Veteran Owned Business</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C243">StateGovernment</a>
						</td>
						<td>U.S. State Government</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C244">TribalGovernment</a>
						</td>
						<td>U.S. Tribal Government</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C245">VendorAlternativeName</a>
						</td>
						<td>Vendor Alternative Name</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C246">VenderAlternativeCode</a>
						</td>
						<td>Vendor Alternative Code</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C247">VendorDoingBusinessAsName</a>
						</td>
						<td>Vendor Doing As Business Name</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C248">VendorLegalOrgName</a>
						</td>
						<td>Vendor Legal Organization Name</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C249">VeteranOwned</a>
						</td>
						<td>Veteran Owned Business</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C250">WomanOwned</a>
						</td>
						<td>Woman Owned Business</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C251">HighCompOfficer1Amount</a>
						</td>
						<td>Highly Compensated Officer Total Compensation</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C252">HighCompOfficer2Amount</a>
						</td>
						<td>Highly Compensated Officer Total Compensation</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C253">HighCompOfficer3Amount</a>
						</td>
						<td>Highly Compensated Officer Total Compensation</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C254">HighCompOfficer4Amount</a>
						</td>
						<td>Highly Compensated Officer Total Compensation</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C255">HighCompOfficer5Amount</a>
						</td>
						<td>Highly Compensated Officer Total Compensation</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C256">LegalEntityAddressStreet1</a>
						</td>
						<td>Legal Entity Address</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C257">LegalEntityAddressStreet2</a>
						</td>
						<td>Legal Entity Address</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C258">LegalEntitylCityName</a>
						</td>
						<td>Legal Entity Address</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C259">LegalEntityStateCode</a>
						</td>
						<td>Legal Entity Address</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C260">LegalEntityZip</a>
						</td>
						<td>Legal Entity Address</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C261">LegalEntityZip+4</a>
						</td>
						<td>Legal Entity Address</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C262">LegalEntityPostalCode</a>
						</td>
						<td>Legal Entity Address</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C263">HighCompOfficer1FirstName</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C264">HighCompOfficer1MiddleInitial</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C265">HighCompOfficer1LastName</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>Same as 9(A)(i).</td>
						<td>
							<a href="#C266">HighCompOfficer2FirstName</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>Same as 9(A)(ii).</td>
						<td>
							<a href="#C267">HighCompOfficer2MiddleInitial</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>Same as 9(A)(iii).</td>
						<td>
							<a href="#C268">HighCompOfficer2LastName</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>Same as 9(A)(i).</td>
						<td>
							<a href="#C269">HighCompOfficer3FirstName</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>Same as 9(A)(ii).</td>
						<td>
							<a href="#C270">HighCompOfficer3MiddleInitial</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>Same as 9(A)(iii).</td>
						<td>
							<a href="#C271">HighCompOfficer3LastName</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>Same as 9(A)(i).</td>
						<td>
							<a href="#C272">HighCompOfficer4FirstName</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>Same as 9(A)(ii).</td>
						<td>
							<a href="#C273">HighCompOfficer4MiddleInitial</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>Same as 9(A)(iii).</td>
						<td>
							<a href="#C274">HighCompOfficer4LastName</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>Same as 9(A)(i).</td>
						<td>
							<a href="#C275">HighCompOfficer5FirstName</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>Same as 9(A)(ii).</td>
						<td>
							<a href="#C276">HighCompOfficer5MiddleInitial</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Awardee Attributes</td>
						<td>Same as 9(A)(iii).</td>
						<td>
							<a href="#C277">HighCompOfficer5LastName</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Award-Financial Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C278">AwardModAmendmentNumber</a>
						</td>
						<td>Award Modification/Amendment Number</td>
					</tr>
					<tr>
						<td>Award-Financial Attributes</td>
						<td>(1..unbounded)</td>
						<td>
							<a href="#C279">ObjectClass</a>
						</td>
						<td>Object Class</td>
					</tr>
					<tr>
						<td>Award-Financial Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C280">(represented by 21(A-F))</a>
						</td>
						<td>Appropriations Account</td>
					</tr>
					<tr>
						<td>Award-Financial Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C281">AllocationTransferAgencyIdentifier</a>
						</td>
						<td>Treasury Account Symbol</td>
					</tr>
					<tr>
						<td>Award-Financial Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C282">AgencyIdentifier</a>
						</td>
						<td>Treasury Account Symbol</td>
					</tr>
					<tr>
						<td>Award-Financial Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C283">BeginningPeriodOfAvailability</a>
						</td>
						<td>Treasury Account Symbol</td>
					</tr>
					<tr>
						<td>Award-Financial Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C284">EndingPeriodOfAvailability</a>
						</td>
						<td>Treasury Account Symbol</td>
					</tr>
					<tr>
						<td>Award-Financial Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C285">AvailabilityTypeCode</a>
						</td>
						<td>Treasury Account Symbol</td>
					</tr>
					<tr>
						<td>Award-Financial Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C286">MainAccountCode</a>
						</td>
						<td>Treasury Account Symbol</td>
					</tr>
					<tr>
						<td>Award-Financial Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C287">piidPrefix</a>
						</td>
						<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
					</tr>
					<tr>
						<td>Award-Financial Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C288">piidAwardYear</a>
						</td>
						<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
					</tr>
					<tr>
						<td>Award-Financial Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C289">piidAwardType</a>
						</td>
						<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
					</tr>
					<tr>
						<td>Award-Financial Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C290">piidAwardNumber</a>
						</td>
						<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
					</tr>
					<tr>
						<td>Award-Financial Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C291">fainAwardNumber</a>
						</td>
						<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
					</tr>
					<tr>
						<td>Award-Financial Attributes</td>
						<td>(1..unbounded)</td>
						<td>
							<a href="#C292">TransactionObligatedAmount

(Broken out by each unique combination of TAS, object class, program activity, award, and award modification / amendment.)</a>
						</td>
						<td>Obligation</td>
					</tr>
					<tr>
						<td>Program Activity - Object Class</td>
						<td>(1..unbounded)</td>
						<td>
							<a href="#C293">ObjectClass</a>
						</td>
						<td>Object Class</td>
					</tr>
					<tr>
						<td>Program Activity - Object Class</td>
						<td>(1..1)</td>
						<td>
							<a href="#C294">(represented by 21(A-F))</a>
						</td>
						<td>Appropriations Account</td>
					</tr>
					<tr>
						<td>Program Activity - Object Class</td>
						<td>(1..unbounded)</td>
						<td>
							<a href="#C295">OutlayAmount</a>
						</td>
						<td>Outlay</td>
					</tr>
					<tr>
						<td>Program Activity - Object Class</td>
						<td>(1..1)</td>
						<td>
							<a href="#C296">AllocationTransferAgencyIdentifier</a>
						</td>
						<td>Treasury Account Symbol</td>
					</tr>
					<tr>
						<td>Program Activity - Object Class</td>
						<td>(1..1)</td>
						<td>
							<a href="#C297">AgencyIdentifier</a>
						</td>
						<td>Treasury Account Symbol</td>
					</tr>
					<tr>
						<td>Program Activity - Object Class</td>
						<td>(1..1)</td>
						<td>
							<a href="#C298">BeginningPeriodOfAvailability</a>
						</td>
						<td>Treasury Account Symbol</td>
					</tr>
					<tr>
						<td>Program Activity - Object Class</td>
						<td>(1..1)</td>
						<td>
							<a href="#C299">EndingPeriodOfAvailability</a>
						</td>
						<td>Treasury Account Symbol</td>
					</tr>
					<tr>
						<td>Program Activity - Object Class</td>
						<td>(1..1)</td>
						<td>
							<a href="#C300">AvailabilityTypeCode</a>
						</td>
						<td>Treasury Account Symbol</td>
					</tr>
					<tr>
						<td>Program Activity - Object Class</td>
						<td>(1..1)</td>
						<td>
							<a href="#C301">MainAccountCode</a>
						</td>
						<td>Treasury Account Symbol</td>
					</tr>
					<tr>
						<td>Program Activity - Object Class</td>
						<td>(1..unbounded)</td>
						<td>
							<a href="#C302">ObligatedAmount

(Broken out by each unique combination of TAS, object class, and program activity)</a>
						</td>
						<td>Obligation</td>
					</tr>
					<tr>
						<td>Program Activity - Object Class</td>
						<td>(1..unbounded)</td>
						<td>
							<a href="#C303">ProgramActivityName</a>
						</td>
						<td>Program Activity</td>
					</tr>
					<tr>
						<td>Program Activity - Object Class</td>
						<td>(1..unbounded)</td>
						<td>
							<a href="#C304">ProgramActivityCode</a>
						</td>
						<td>Program Activity</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C305">AwardeeOrRecipient LegalEntityName</a>
						</td>
						<td>Awardee/Recipient Legal Entity Name</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C306">AwardeeOrRecipientUniqueIdentifier</a>
						</td>
						<td>Awardee/Recipient Unique Identifier</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C307">UltimateParentUniqueIdentifier</a>
						</td>
						<td>Ultimate Parent Unique Identifier</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C308">UltimateParentLegalEntityName</a>
						</td>
						<td>Ultimate Parent Legal Entity Name</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C309">LegalEntityCongresionalDistrict</a>
						</td>
						<td>Legal Entity Congressional District</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C310">LegalEntityCountryCode</a>
						</td>
						<td>Legal Entity Country Code</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C311">LegalEntityCountryName</a>
						</td>
						<td>Legal Entity Country Name</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C312">TotalFundingAmount</a>
						</td>
						<td>Current Total Funding Obligation Amount on Award</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C313">NAICS_Code</a>
						</td>
						<td>North American Industrial Classification System (NAICS) Code</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C314">NAICS_Description</a>
						</td>
						<td>North American Industrial Classification System (NAICS) Description</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C315">CFDA_Number</a>
						</td>
						<td>Catalog of Federal Domestic Assistance (CFDA) Number</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C316">CFDA_Title</a>
						</td>
						<td>Catalog of Federal Domestic Assistance (CFDA) Title</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C317">AwardDescription</a>
						</td>
						<td>Award Description</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C318">PlaceOfPerfCongressionalDistrict</a>
						</td>
						<td>Primary Place of Performance Congressional District</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C319">PlaceOfPerfCountryCode</a>
						</td>
						<td>Primary Place of Performance Country Code</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C320">PlaceOfPerfCountryName</a>
						</td>
						<td>Primary Place of Performance Country Name</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C321">AwardingAgencyName</a>
						</td>
						<td>Awarding Agency Name</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C322">AwardingAgencyCode </a>
						</td>
						<td>Awarding Agency Code</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C323">AccountTitle</a>
						</td>
						<td>Account Title</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..unbounded)</td>
						<td>
							<a href="#C324">PrimeAwardAgencyId</a>
						</td>
						<td>Prime Award Agency Identifier</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..unbounded)</td>
						<td>
							<a href="#C325">PrimeAwardDateSubmitted</a>
						</td>
						<td>Prime Award Date Submitted</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..unbounded)</td>
						<td>
							<a href="#C326">PrimeAwardPrincipalPlaceStreetAddress</a>
						</td>
						<td>Prime Award Principal Place of Performance Street Address</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..unbounded)</td>
						<td>
							<a href="#C327">PrimeAwardReportId</a>
						</td>
						<td>Prime Award Report Identifier</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..unbounded)</td>
						<td>
							<a href="#C328">AwardReportMonth</a>
						</td>
						<td>Prime / Sub Award Report Month</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..unbounded)</td>
						<td>
							<a href="#C329">PrimeAwardReportType</a>
						</td>
						<td>Prime Award Report Type</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..unbounded)</td>
						<td>
							<a href="#C330">AwardReportYear</a>
						</td>
						<td>Prime / Sub Award Report Year</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..unbounded)</td>
						<td>
							<a href="#C331">ArraModelQuestion1</a>
						</td>
						<td>Prime / Sub Awardee American Recovery Act (ARRA) Model Question 1</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..unbounded)</td>
						<td>
							<a href="#C332">ArraModelQuestion2</a>
						</td>
						<td>Prime Sub / Awardee American Recovery Act (ARRA) Model Question 2</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..unbounded)</td>
						<td>
							<a href="#C333">SubawardNumber</a>
						</td>
						<td>Subaward Number</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..unbounded)</td>
						<td>
							<a href="#C334">SubawardeeBusinessType</a>
						</td>
						<td>Subawardee Business Type</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C335">HighCompOfficer1Amount</a>
						</td>
						<td>Highly Compensated Officer Total Compensation</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C336">HighCompOfficer2Amount</a>
						</td>
						<td>Highly Compensated Officer Total Compensation</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C337">HighCompOfficer3Amount</a>
						</td>
						<td>Highly Compensated Officer Total Compensation</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C338">HighCompOfficer4Amount</a>
						</td>
						<td>Highly Compensated Officer Total Compensation</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C339">HighCompOfficer5Amount</a>
						</td>
						<td>Highly Compensated Officer Total Compensation</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C340">TypeOfContractPricing</a>
						</td>
						<td>Type of Transaction Code</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C341">ActionDateDay</a>
						</td>
						<td>Action Date</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C342">ActionDateMonth</a>
						</td>
						<td>Action Date</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C343">ActionDateYear</a>
						</td>
						<td>Action Date</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C344">PlaceOfPerfStreetLine1</a>
						</td>
						<td>Primary Place of Performance Address</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C345">PlaceOfPerfState</a>
						</td>
						<td>Primary Place of Performance Address</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C346">PlaceOfPerfCountyName</a>
						</td>
						<td>Primary Place of Performance Address</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C347">PlaceOfPerfPostalCode</a>
						</td>
						<td>Primary Place of Performance Address</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C348">piidPrefix</a>
						</td>
						<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C349">piidAwardYear</a>
						</td>
						<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C350">piidAwardType</a>
						</td>
						<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C351">piidAwardNumber</a>
						</td>
						<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C352">fainAwardNumber</a>
						</td>
						<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C353">LegalEntityAddressStreet1</a>
						</td>
						<td>Legal Entity Address</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C354">LegalEntityAddressStreet2</a>
						</td>
						<td>Legal Entity Address</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C355">LegalEntitylCityName</a>
						</td>
						<td>Legal Entity Address</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C356">LegalEntityStateCode</a>
						</td>
						<td>Legal Entity Address</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C357">LegalEntityZip</a>
						</td>
						<td>Legal Entity Address</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C358">LegalEntityZip+4</a>
						</td>
						<td>Legal Entity Address</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(0..1)</td>
						<td>
							<a href="#C359">LegalEntityPostalCode</a>
						</td>
						<td>Legal Entity Address</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C360">HighCompOfficer1FirstName</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C361">HighCompOfficer1MiddleInitial</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>(1..1)</td>
						<td>
							<a href="#C362">HighCompOfficer1LastName</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>Same as 9(A)(i).</td>
						<td>
							<a href="#C363">HighCompOfficer2FirstName</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>Same as 9(A)(ii).</td>
						<td>
							<a href="#C364">HighCompOfficer2MiddleInitial</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>Same as 9(A)(iii).</td>
						<td>
							<a href="#C365">HighCompOfficer2LastName</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>Same as 9(A)(i).</td>
						<td>
							<a href="#C366">HighCompOfficer3FirstName</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>Same as 9(A)(ii).</td>
						<td>
							<a href="#C367">HighCompOfficer3MiddleInitial</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>Same as 9(A)(iii).</td>
						<td>
							<a href="#C368">HighCompOfficer3LastName</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>Same as 9(A)(i).</td>
						<td>
							<a href="#C369">HighCompOfficer4FirstName</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>Same as 9(A)(ii).</td>
						<td>
							<a href="#C370">HighCompOfficer4MiddleInitial</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>Same as 9(A)(iii).</td>
						<td>
							<a href="#C371">HighCompOfficer4LastName</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>Same as 9(A)(i).</td>
						<td>
							<a href="#C372">HighCompOfficer5FirstName</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>Same as 9(A)(ii).</td>
						<td>
							<a href="#C373">HighCompOfficer5MiddleInitial</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
					<tr>
						<td>Subaward Attributes</td>
						<td>Same as 9(A)(iii).</td>
						<td>
							<a href="#C374">HighCompOfficer5LastName</a>
						</td>
						<td>Highly Compensated Officer Name</td>
					</tr>
				</table>
			</div>
		</div>
		<h3 class="lead">DATA Act Element Catalog</h3>
		<div class="panel panel-default">
			<div class="panel panel-body">
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">(represented by 21(A-F))<a id="C2"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Appropriations Account</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Appropriations Account</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>51</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The basic unit of an appropriation generally reflecting each unnumbered paragraph in an appropriation act. An appropriation account typically encompasses a number of activities or projects and may be subject to restrictions or conditions applicable to only the account, the appropriation act, titles within an appropriation act, other appropriation acts, or the government as a whole.

An appropriations account is represented by a TAFS created by Treasury in consultation with OMB.
(defined in OMB Circular A-11)</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 014 075 2014 2015 1552
Ex2: 012 X 5531</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td></td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>0</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>This data element will not be required to be reported, since it is a concatenation (and therefore duplicative) of the TAS components.

It is presented on this Guidance as informational only, so that we can tie back to the original count of 83/57 data elements identified for standardization. </td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">BudgetAuthorityAppropriatedAmount<a id="C3"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Appropriations Account</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Budget Authority Appropriated</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>52</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>A provision of law (not necessarily in an appropriations act) authorizing an account to incur obligations and to make outlays for a given purpose. Usually, but not always, an appropriation provides budget authority.
(defined in OMB Circular A-11)</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 3500
Ex2: 5000000
Ex3: 0</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>25</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Value for given TAS must correspond with GTAS value.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">UnobligatedBalance<a id="C4"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Appropriations Account</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Unobligated Balance</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>54</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Unobligated balance means the cumulative amount of budget authority that remains available for obligation under law in unexpired accounts at a point in time. The term “expired balances available for adjustment only” refers to unobligated amounts in expired accounts.
 Additional detail is provided in Circular A‐11.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 3500
Ex2: 5000000
Ex3: 1</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>25</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Value for given TAS must correspond with GTAS value.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">OtherBudgetaryResourcesAmount<a id="C5"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Appropriations Account</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Other Budgetary Resources</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>55</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>New borrowing authority, contract authority, and spending authority from offsetting collections provided by Congress in an appropriations act or other legislation, or unobligated balances of budgetary resources made available in previous legislation, to incur obligations and to make outlays.
(defined in OMB Circular A-11)</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 3500
Ex2: 5000000
Ex3: 0</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>25</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Value for given TAS must correspond with GTAS value.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AllocationTransferAgencyIdentifier<a id="C6"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Appropriations Account</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Treasury Account Symbol</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>21(A)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The allocation agency identifies the department or agency that is receiving funds through an allocation (non-expenditure) transfer.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 014
Ex2: (blank)</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>3</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from GWA Central Accounting and Reporting System (CARS).</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AgencyIdentifier<a id="C7"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Appropriations Account</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Treasury Account Symbol</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>21(B)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The agency code identifies the department or agency that is responsible for the account.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 075
Ex2: 012</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>3</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from GWA Central Accounting and Reporting System (CARS).</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">BeginningPeriodOfAvailability<a id="C8"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Appropriations Account</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Treasury Account Symbol</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>21(C)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>In annual and multi-year funds, the beginning period of availability identifies the first year of availability under law that an appropriation account may incur new obligations.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 2014
Ex2: (blank)</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from GWA Central Accounting and Reporting System (CARS).</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">EndingPeriodOfAvailability<a id="C9"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Appropriations Account</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Treasury Account Symbol</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>21(D)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>In annual and multi-year funds, the end period of availability identifies the last year of funds availability under law that an appropriation account may incur new obligations.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 2015
Ex2: (blank)</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from GWA Central Accounting and Reporting System (CARS).</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AvailabilityTypeCode<a id="C10"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Appropriations Account</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Treasury Account Symbol</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>21(E)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>In appropriations accounts, the availability type code identifies an unlimited period to incur new obligations; this is denoted by the letter "X"</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1:  (blank)
Ex2:  X</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from GWA Central Accounting and Reporting System (CARS).</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">MainAccountCode<a id="C11"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Appropriations Account</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Treasury Account Symbol</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>21(F)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The main account code identifies the account in statute.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1552
Ex2: 5531</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from GWA Central Accounting and Reporting System (CARS).</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AwardeeOrRecipientUniqueIdentifier<a id="C12"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Awardee/Recipient Unique Identifier</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The unique identification number for an awardee or recipient. Currently the identifier is the 9-digit number assigned by D&amp;B referred to as the DUNS® number.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 009256819
Ex2: 081466849</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>9</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>9-digit number assigned by D&amp;B referred to as the DUNS number. DUNS exists in SAM and FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">NonFederalFundingAmount<a id="C13"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Non-Federal Funding Amount</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>12</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The amount of the award funded by non-Federal source(s), in dollars. Program Income (as defined in 2 CFR § 200.80) is not included until such time that Program Income is generated and credited to the agreement.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 3500
Ex2: 112345.32
Ex3: -5000
Ex4: 0
Ex5: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>20</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>  </td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">TotalFundingAmount<a id="C14"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Current Total Funding Obligation Amount on Award</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>13</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The sum of the Amount of Award and the Non-Federal Funding Amount.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 3500
Ex2: 112345.32
Ex3: 0
Ex4: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>20</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>  </td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PotentialTotalValueAwardAmount<a id="C15"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Potential Total Value of Award</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>15</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Total amount that could be obligated on a contract, if the base and all options are exercised.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 3500
Ex2: 112345.32
Ex3: 0
Ex4: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>20</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry in FPDS for procurement.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">NAICS_Code<a id="C16"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>North American Industrial Classification System (NAICS) Code</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>17</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The identifier that represents the North American Industrial Classification System Code assigned to the solicitation and resulting award identifying the industry in which the contract requirements are normally performed.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 541330
Ex2: 110000
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>6</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>2012 NAICS Code List
Code exists in FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">NAICS_Description<a id="C17"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>North American Industrial Classification System (NAICS) Description</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>18</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The title associated with the NAICS Code.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: Engineering
Ex2: Agriculture, Forestry, Fishing and Hunting
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>150</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>2012 NAICS Code List
Code exists in FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">CFDA_Number<a id="C18"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Catalog of Federal Domestic Assistance (CFDA) Number</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>19</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The number assigned to a Federal area of work in the Catalog of Federal Domestic Assistance.
</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 84.047X
Ex2: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>7</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>CFDA Code List</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">CFDA_Title<a id="C19"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Catalog of Federal Domestic Assistance (CFDA) Title</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>20</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The title of the area of work under which the Federal award was funded in the Catalog of Federal Domestic Assistance.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: TRIO_Upward Bound
Ex2: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>100</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>CFDA Code List</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AwardDescription<a id="C20"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Award Description</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>22</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>A brief description of the purpose of the award.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>IPEDS WEB DATA COLLECTION</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4000</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry in FPDS-NG for procurement.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AwardModAmendmentNumber<a id="C21"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Award Modification/Amendment Number</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>23</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The identifier of an action being reported that indicates the specific subsequent change to the initial award.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 6</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>25</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Procurement: A modification / amendment number of zero (“0”) indicates the initial award. </td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PlaceOfPerfCongressionalDistrict<a id="C22"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Primary Place of Performance Congressional District</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>31</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td> U.S. Congressional district where the predominant performance of the award will be accomplished.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 5
Ex2: 51
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Derived using a commercial mapping tool based on the ZIP+4 code of the recipient address provided.  Valid entry in FPDS-NG for procurement.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PlaceOfPerfCountryCode<a id="C23"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Primary Place of Performance Country Code</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>32</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Country code where the predominant performance of the award will be accomplished.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: USA
Ex2: IND</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>3</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from the ISO 3166-1 Alpha-3 GENC Profile, less the codes listed for those territories and possessions of the United States already identified as “states.” Valid entry in FPDS-NG for procurement.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PlaceOfPerfCountryName<a id="C24"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Primary Place of Performance Country Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>33</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Name of the country represented by the country code where the predominant performance of the award will be accomplished.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: United States
Ex2: India</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>100</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Derived from ISO 3166-1 Alpha-3 GENC Profile. Valid entry in FPDS-NG for procurement.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">RecordType<a id="C25"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Record Type</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>35</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Code indicating whether an action is an individual transaction or aggregated.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1
Ex2: 2
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>1 - County-level aggregate reporting (for payments to individuals and other amounts identifiable by a geographical unit)
2- Normal transaction-level (action-by-action) reporting. These are non-aggregate records.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">BusinessTypes<a id="C26"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Business Types</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>37</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Procurement awards: Organization Type / Business Type
(Entity information 3.3.1): Business types selected by an entity as applicable for Federal awards.

Financial assistance awards: Two-position numeric code which depicts the type of recipient or borrower.
Government codes:
00 = State government
01 = county government
02 = city or township government
04 = special district government
05 = independent school district
06 = State controlled institution of higher education Nonprofit agencies:
11 = Indian tribe
12 = other nonprofit
Private:
20 = private higher education
21 = individual
22 = profit organization
23 = small business
25 = all other</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1
Ex2: 25</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Financial assistance valid codes:
00 = State government
01 = county government
02 = city or township government
04 = special district government
05 = independent school district
06 = State controlled institution of higher education Nonprofit agencies:
11 = Indian tribe
12 = other nonprofit
Private:
20 = private higher education
21 = individual
22 = profit organization
23 = small business
25 = all other

Procurement: Valid Code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">FundingAgencyName<a id="C27"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Funding Agency Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>38</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Name of the department or establishment of the Government that provided the preponderance of the funds for an award and/or individual transactions related to an award. </td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: Department of Education
Ex2: Department of Health and Human Services</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>50</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Derived from the Agency Code.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">FundingAgencyCode<a id="C28"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Funding Agency Code</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>39</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The 3-digit CGAC agency code of the department or establishment of the Government that provided the preponderance of the funds for an award and/or individual transactions related to an award.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 091
Ex2: 075</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>3</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid 3-digit CGAC Code, per GWA Central Accounting and Reporting (CARS) System.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">FundingSubTierAgencyName<a id="C29"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Funding Sub Tier Agency Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>40</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Name of the level 2 organization that provided the preponderance of the funds obligated by this transaction.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1:  Centers for Disease Control
 </td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>25</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid name from FPDS-NG for procurement.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">FundingSubTierAgencyCode<a id="C30"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Funding Sub Tier Agency Code</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>41</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Identifier of the level 2 organization that provided the preponderance of the funds obligated by this transaction. </td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1:  7509</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG for procurement.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">FundingOfficeName<a id="C31"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Funding Office Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>42</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Name of the level n organization that provided the preponderance of the funds obligated by this transaction.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: Office of the Undersecretary
Ex2: Office of Postsecondary Education</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>25</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from the FPDS-NG for procurement.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">FundingOfficeCode<a id="C32"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Funding Office Code</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>43</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Identifier of the level n organization that provided the preponderance of the funds obligated by this transaction.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 001
Ex2: AA1</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>3</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from the FPDS-NG for procurement.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AwardingAgencyName<a id="C33"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Awarding Agency Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>44</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The name associated with a department or establishment of the Government as used in the Treasury Appropriation Fund Symbol (TAFS) Account.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: Department of Education
Ex2: Department of Agriculture</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>50</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Derived from the Agency Code</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AwardingAgencyCode <a id="C34"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Awarding Agency Code</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>45</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>A department or establishment of the Government as used in the Treasury Appropriation Fund Symbol (TAFS) Account.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 091
Ex2: 075</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>3</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid 3-digit CGAC Code, per GWA Central Accounting and Reporting (CARS) System.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AwardingSubTierAgencyName<a id="C35"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Awarding Sub Tier  Agency Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>46</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Name of the level 2 organization that awarded, executed or is otherwise responsible for the transaction. </td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1:  Centers for Disease Control</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>25</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid name from FPDS-NG for procurement.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AwardingSubTierAgencyCode<a id="C36"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Awarding Sub Tier  Agency Code</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>47</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td> Identifier of the level 2 organization that awarded, executed or is otherwise responsible for the transaction. </td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1:  7509</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG for procurement.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AwardingOfficeName<a id="C37"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Awarding Office Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>48</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td> Name of the level n organization that awarded, executed or is otherwise responsible for the transaction. </td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: Office of the Undersecretary
Ex2: Office of Postsecondary Education</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>25</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid name from the FPDS-NG for procurement.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AwardingOfficeCode<a id="C38"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Awarding Office Code</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>49</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Identifier of the level n organization that awarded, executed or is otherwise responsible for the transaction.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 001
Ex2: AA1</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>3</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from the FPDS-NG for procurement.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">A76Action<a id="C39"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>A-76 (FAIR Act) Action</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>58</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the contract action resulted from an A- 76/Fair Act competitive sourcing process.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">DodClaimantProgCode<a id="C40"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>DoD Claimant Program Code</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>62</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>A claimant program number designates a grouping of supplies, construction, or other services. This data field may have a code from the DoD Procurement Coding Manual Section III, DoD Claimant Program Number.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td></td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>3</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ClingerCohenCompliance<a id="C41"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Clinger-Cohen Act Planning Compliance</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>63</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates the funding office has certified that the information technology purchase meets the planning requirements in 40 USC 1422 and 1423.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">CommercialItemAcquisProcedures<a id="C42"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Commercial Item Acquisition Procedures</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>64</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the solicitation used the special requirements for the acquisition of commercial items intended to more closely resemble those customarily used in the commercial marketplace as defined by FAR Part 12.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">CommercialItemTestProg<a id="C43"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Commercial Item Test Program</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>65</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the solicitation used Commercial Item Acquisition Procedures (FAR Part 12) and Simplified Acquisition Procedures (FAR Part 13.5) for acquisitions above  the  Simplified  Acquisition  Threshold  and  below $6,500,000</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">CompetativeProcedures<a id="C44"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Other than Full and Open Competition</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>67</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td> The designator for competitive solicitation procedures available pursuant to FAR 6.1 and 6.2, a code that represents the competitive nature of the contract and  designator for solicitation procedures other than full and open competition pursuant to FAR 6.3.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: NDO - Non-Competitive Delivery Order
Ex2: Small Technology Transfer Research
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>3</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ConsolidatedContract<a id="C45"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Consolidated Contract</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>68</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the contract is a consolidated contract. This is only required if the Funding Agency or the contracting agency is a DoD Agency. Data field exists in XML schema version 1.2 and later only.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ContigencyHumanitarianPeacekeeping<a id="C46"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Contingency, Humanitarian, or Peacekeeping Operation</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>69</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates contract actions that exceed $200,000 and support a contingency operation, a humanitarian operation, or a peacekeeping operation.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ContractBundling<a id="C47"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Contract Bundling</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>70</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates that the value of the contract, including all options, is expected to exceed $5M as a result of consolidating separate small contracts into</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ContractFinancing<a id="C48"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Contract Financing</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>71</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Type of financing used to effect payment (progress payments, advance payments, etc.)</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">CoDeterminationBusSize<a id="C49"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Contracting Officer's Determination of Business Size</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>72</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The Contracting Officer's determination of whether the selected contractor meets the small business size standard for award to a small business for the NAICS code that is applicable to the contract.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">CostAcctStandardsClause<a id="C50"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Cost Accounting Standards Clause</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>73</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the contract includes a Cost Accounting Standards clause.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">CostOrPricingData<a id="C51"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Cost or Pricing Data</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>74</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether cost or pricing data was obtained, not obtained, or waived for DoD assigned contracts.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">CountryOfOrigin<a id="C52"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Country of Product or Service Origin</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>75</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Identifies the country of origin of the product.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: USA
Ex2: IND</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>3</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">DavisBaconAct<a id="C53"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Davis Bacon Act</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>76</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the transaction is subject to the Davis-Bacon Act (concerning the payment of prevailing wages on public works projects).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">DivisionName<a id="C54"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Division Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>77</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Vendor's name of their business division</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: NBC Acquisition Services Division
Ex2: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>100</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">DivisionNumber<a id="C55"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Division Number</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>78</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Vendor's name of their business division code</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 18H
Ex2: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>100</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">EmergingSmallBusiness<a id="C56"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Emerging Small Business</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>80</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether vendor is an Emerging Small Business.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">EvaluatedPreference<a id="C57"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Evaluated Preference</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>81</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The type of preference determined for the contract action, reported when a contract was made pursuant to the socioeconomic program price evaluation preferences -- FAR 19.11 and FAR 19.13. Data field exists only in XML schema version 1.2 and later.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: NONE
Ex2: SPS
Ex3: HSD
Ex4: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>6</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ExtentCompeted<a id="C58"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Extent Competed</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>82</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>A code that represents how the contract was competed.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: A
Ex2: CDO
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>3</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">VendorFaxNumber<a id="C59"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Vendor Fax Number</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>83</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The fax number of the contractor.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 301-555-1212
Ex2: 1-888-555-1212
Ex3: 011-49-555-1212</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>13</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">8aProgramParticipant<a id="C60"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>8(a) Program Participant</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>86</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is an 8(a) Program Participant Organization.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ForeignFunding<a id="C61"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Foreign Funding</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>87</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates that a foreign government, international organization, or foreign military organization bears some of the cost</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HubZoneFirm<a id="C62"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Historically Underutilized Business Zone (HUBZone) Firm</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>92</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Historically Underutilized Business Zone (HUBZone) Firm.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">IdvAgencyId<a id="C63"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Referenced IDV Agency Identifier</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>93</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>This is a code for an agency, but it does not necessarily represent the agency that issued the contract. Instead, it serves as part of the unique identification for Federal Procurement Data System IDV records. For awards records, it partially identifies a linked IDV record.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">InfoTechCommercialItemCategory<a id="C64"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Information Technology Commercial Item Category</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>94</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>A code that designates the commercial availability of an information technology product or service.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">VeterinaryHospital<a id="C65"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Veterinary Hospital</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>152</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is Veterinary Hospital</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">UndefinitizedAction<a id="C66"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Undefinitized Action</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>153</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the award is an Undefinitized Action.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">MajorProgram<a id="C67"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Major Program</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>156</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The agency determined code for a major program within the agency. For an Indefinite Delivery Vehicle, this may be the name of a GWAC (e.g., ITOPS or COMMITS).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: ITOPS
Ex2: COMMITS
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>100</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">MultpleOrSingleAwardIdv<a id="C68"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Multiple or Single Award IDV</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>160</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the contract is one of many that resulted from a single solicitation, all of the contracts are for the same or similar items, and contracting officers are required to compare their requirements with the offerings under more than one contract or are required to acquire the requirement competitively among the awardees. BPA "Multiple or Single Award IDV" value does not pull the "Multiple or Single Award IDV" value of the referenced FSS to the BPA. The "Multiple or Single Award IDV" value shall be required and selected by the user for all BPA bases created.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">MultiYearContract<a id="C69"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Multi Year Contract</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>161</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether this is a multi-year contract, a contract for the purchase of supplies or services for more than 1, but not more than 5, program years. Such contracts are issued under specific congressional</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">NationalInterestAction<a id="C70"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Pational Interest Action</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>163</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>A code that represents the national interest for which the contract is created.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: NONE
Ex2: H05K
Ex3: W081
Ex4: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">NumberOfOffersReceived<a id="C71"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Number of Offers Received</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>168</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The number of actual offers/bids received in response to the solicitation.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0
Ex2: 1
Ex3: 999
Ex4: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>3</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">OtherStatutoryAuthority<a id="C72"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Other Statutory Authority</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>169</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the transaction is subject to other statutory authority (i.e., legislation other than the Economy Act).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PerformanceBasedServiceAcquisition<a id="C73"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Performance-Based Service Acquisition</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>170</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the contract is a Performance-Based Service Acquisition (PBSA) as defined by FAR 37.601. A PBSA describes the requirements in terms of results rather than the methods of performance of the work and has other detailed requirements.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PlaceOfManufacture<a id="C74"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Place of Manufacture</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>172</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Represents whether the end products procured by the contract are manufactured inside or outside the U.S. in accordance with the Buy American Act (see FAR 25.1) and any exceptions or reasons for waivers employed.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: A
Ex2: L
Ex3: (blank)</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PriceEvaluationAdjPrefPctDiff<a id="C75"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Price Evaluation Adjustment/Preference Percent Difference</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>173</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates the percent difference between the award price and the lowest priced offer from a responsive, responsible non-HUBZone or non-SDB.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [minimum]
Ex2: 20 [maximum]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ProductOrServiceCode<a id="C76"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Product or Service Code</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>174</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The code that best identifies the product or service procured. If more than one code applies, then the code that represents most of the ultimate contract value is reported.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: B502
Ex2: C111
Ex3: D301
Ex4: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ProgramAcronym<a id="C77"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Program Acronym</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>175</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The short name or title used for a GWAC or other contracting program. Examples include COMMITS, ITOPS, SEWP.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: COMMITS
Ex2: ITOPS
Ex3: SEWP
Ex4: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>25</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ProductOrServiceDescription<a id="C78"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Product Service Code Description</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>176</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The major category that the Federal Procurement Data System Product or Service Code for the record falls within (see page 12 of http://www.fpdsng.com/downloads/service_product_codes.p</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: Special Studies and Analyses - Not R&amp;D
Ex2: Social Services
Ex3: Salvage Services
Ex4: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>100</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ReasonForNotCompleted<a id="C79"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Reason for Not Complete Work</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>177</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>A code for the reason the contract was not competed -- i.e., solicitation procedures other than full and open competition pursuant to FAR 6.3.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: UT - Utilities
Ex2: IA - International Agreement
Ex3: 8aN - Non-Competitive
Ex4: JWD - Directed to JWOD Nonprofit
Ex5: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">RecoveryActTas<a id="C80"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Treasury Account Symbol for American Reinvestment and Recovery Act (ARRA)</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>178</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Identifies whether the Treasury Account Symbol is for the American Reinvestment and Recovery Act of 2009 (ARRA).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ReceivesContracts<a id="C81"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Receives Contracts</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>179</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor receives contracts</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ReceivesGrants<a id="C82"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Receives Grants</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>181</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor receives Grants.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">RecoveredMaterialClauses<a id="C83"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Recovered Materials/Sustainability</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>182</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether Recovered Material Certification and/or Estimate of Percentage of Recovered Material Content for EPA-Designated Products clauses were included in the contract.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">SmallBusinessResearch<a id="C84"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Small Business Innovation Research or Small Technology Transfer Research</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>183</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>A code used when the contract was awarded as part of a Small Business Innovation Research or Small Technology Transfer Research Program. Data field exists only in XML schema version 1.2 and later.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: O - Other
Ex2: S - Small Business
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>3</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">SeaTranportation<a id="C85"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Sea Transportation</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>186</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the contractor anticipates that some of the supplies may be transported by sea.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ServiceContractAct<a id="C86"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Service Contract Act</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>187</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the transaction is subject to the Service Contract Act (concerning payment of prevailing wage rates and fringe benefits to service employees).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">SmallBusCompetativenessDemonstration<a id="C87"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Small Business Competitiveness Demonstration Program</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>189</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the contract was awarded to a U.S. business concern as a result of a solicitation issued on or after Jan 1, 1989 as part of the Small Business Competitiveness Program (FAR Part 19.10).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">SolicitationIdentifier<a id="C88"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Solicitation Identifier</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>190</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Identifier used to link transactions to solicitation information.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: O
Ex2: P
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>25</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">SolicitationProcedures<a id="C89"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Solicitation Procedures</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>191</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>A code for the type of solicitation procedures used. Data field exists only in XML schema version 1.2 and later.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: MAFO - Multiple Award Fair Opportunity
Ex2: SSS - Single Source Solicited
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>5</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">StatutoryExemptionTypeFairOpportunity<a id="C90"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Type of Statutory Exception to Fair Opportunity Act</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>194</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>A code indicating a statutory exception to Fair Opportunity, used awarding a non competitive task order or delivery order exceeding $2500.00 against an IDIQ contract.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: No Exception
Ex2: Fair Opportunity Given
Ex3: Other Statutory Authority
Ex4: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">SubcontractingPlan<a id="C91"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Subcontracting Plan</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>195</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether a Subcontracting Plan was included in the contract.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">SystemEquipmentCode<a id="C92"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>System Equipment Code</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>196</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Two codes that identify the program and weapons system or equipment purchased by a DoD agency. The first character is a number 1-4 that identifies the DoD component. The last 3 characters identify that component's program, system, or equipment.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1ABC
Ex2: 2ABC
Ex3: 3ABC
Ex4: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">TypeOfIdc<a id="C93"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Type of IDC</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>198</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Identifies whether the IDC or Multi- Agency Contract is Indefinite Delivery/Requirements, Indefinite Delivery/Indefinite Quantity, or Indefinite Delivery/Definite Quantity.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">TypeOfSetAside<a id="C94"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Type Set Aside</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>199</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>A code for the type of set aside determined for the contract action. Data field exists only in XML schema version 1.2 and later.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: No Set Aside Used
Ex2: SBA Small Business Set Aside
Ex3: VSB Very Small Business Set Aside
Ex4: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>10</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">EpaDesignatedProduct<a id="C95"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>EPA-Designated Product(s)</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>200</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether EPA approved products with a minimum recovered material content were used, or whether an exception was made.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">WalshHealey<a id="C96"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Walsh Healey Act</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>206</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the transaction is subject to the Walsh-Healy Act (passed in 1936, establishing overtime as hours worked in excess of 40 hours per week).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AccountTitle<a id="C97"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Account Title</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>208</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The description of the Program Source.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: Agricultural Research_Basic and Applied Research
Ex2: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>100</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">DunsConfidenceCode<a id="C98"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>DUNS Confidence Code</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>209</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Optional data field to enter the D&amp;B Confidence Code received for validated DUNS data (As provided to agencies by Dun &amp; Bradstreet when obtaining DUNS). </td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 3
Ex2: 10
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">Uri<a id="C99"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>URI</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>210</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>An agency defined identifier that is unique for every reported action.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 12-34-56-78-90-AS-DF-AB-XZ-YW
Ex2: 123456789ASDF
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>50</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">SaiNumber<a id="C100"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>State Award Identification Number</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>211</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>A number assigned by state (as opposed to federal) review agencies to the award during the grant application process.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 12-34-56-78-90-AS-DF-AB-XZ-YW
Ex2: 123456789ASDF
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>50</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">TransactionNumber<a id="C101"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Transaction Number</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>224</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Tie Breaker for legal, unique transactions that would otherwise have the same
key.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 123456
Ex2: 123
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>6</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">WebSiteUrl<a id="C102"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Web Site URL</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>225</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Enter the web site URL where users may go to get more information on the
contract or program.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: www.fpds.gov
Ex2: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>100</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">WhoCanUse<a id="C103"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Who Can Use</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>226</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>For the initial award of an IDV, enter one of the specified code words. Certain
code words require a list of agencies that may order from the IDV.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: My Agency Only
Ex2: Any Agency
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>255</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">MaximumOrderLimit<a id="C104"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Maximum Order Limit</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>227</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Maximum dollar amount that can be applied to a single order against the
Indefinite Delivery Vehicle.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0.00
Ex2: 10000
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>20</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">FeeForUseOfService<a id="C105"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Fee for Use of Service</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>228</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>List of administrative fees charged for using an Indefinite Delivery Vehicle other than Federal Supply Schedule (FSS) Vehicle. The fees can be one of the following format: 1) Fixed, 2) Range - Varies by amount, and 3) Range - Varies by Other Factor.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: FIX
Ex2: RVA
Ex3: RVO
Ex4: NO
Ex5: [blank]
</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>3</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">FixedFeeValue<a id="C106"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Fixed Fee Value</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>229</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The value if "Fixed Fee" is chosen for Fee for Use of Service (5D).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0.01 [minimum]
Ex2: 100.00 [maximum]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">FeeRangeLowerValue<a id="C107"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Fee Range Lower Value</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>230</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The lower value if "Range" (RVA, RVO) is chosen for Fee for Use of Service(5D).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1234
Ex2: 1
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">FeeRangeUpperValue<a id="C108"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Fee Range Upper Value</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>231</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The upper value if "Range" (RVA, RVO) is chosen for Fee for Use of Service (5D).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1234
Ex2: 1
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">OrderingProcedure<a id="C109"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Ordering Procedure</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>232</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>For the initial load of the IDV, describe ordering procedures, unless included in the government website listed in the "Web Site URL" data element (5A).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: FIX Fixed
Ex2: RVA Range – Varies by Amount
Ex3: RVO Range – Varies by Other Factor    
Ex4: NO  Fee
Ex5: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1000</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">FeePaidForUseOfIdv<a id="C110"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Fee Paid for Use of IDV</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>233</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Enter the fee paid (if any ) to the IDV Awarding Agency as a consequence of placing the order.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0
Ex2: 12345
Ex3: 12345.14
Ex4: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>20</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">FederalActionObligation<a id="C111"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Funding Action Obligation</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>11(A)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Amount of Federal government’s obligation, de-obligation, or liability, in dollars, for an award transaction.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 500
Ex2: 112345.32
Ex3: -5000
Ex4: 0</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>20</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1,1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry in FPDS for procurement.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AmountofAward<a id="C112"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Funding Action Obligation</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>11(B)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The cumulative amount obligated by the Federal government for an award, which is calculated by USAspending.gov.  For procurement and financial assistance awards except loans, this is the the sum of Federal Action Obligations.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 3500
Ex2: 112345.32
Ex3: 5000
Ex4: 0</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>20</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry in FPDS for procurement.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">OrginalSubsidyCost<a id="C113"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Funding Action Obligation</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>11(C)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>For loans or loan guarantees, the award amount is the Original Subsidy Cost.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 3500
Ex2: 112345.32
Ex3: -5000</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>20</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>  </td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">CurrentTotalValueAwardAmount<a id="C114"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Current Total Value of Award</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>14(A)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Total amount obligated to date on a contract, including the base and exercised options.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 3500
Ex2: 112345.32
Ex3: 0
Ex4: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>20</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry in FPDS for procurement.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">FaceValueLoanGuarantee<a id="C115"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Current Total Value of Award</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>14(B)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The face value of the direct loan or loan guarantee.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0
Ex2: 12345
Ex3: 12345.14
Ex4: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>0</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>  </td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">TypeOfContractPricing<a id="C116"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Type of Transaction Code</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>16(A)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The type of contract as defined in FAR Part 16 that applies to this procurement.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: A
Ex2: 3
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG:
A Fixed Price Redetermination
B Fixed Price Level of Effort
J Firm Fixed Price
K Fixed Price with Economic Price Adjustment
L Fixed Price Incentive
M Fixed Price Award Fee
R Cost Plus Award Fee
S Cost No Fee
T Cost Sharing
U Cost Plus Fixed Fee
V Cost Plus Incentive Fee
Y Time and Materials
Z Labor Hours
1 Order Dependent (this applies to IDVs only.  IDV allows pricing arrangements to be determined separately for each order)
2 Combination – (this applies to awards only.  Applies to awards where two or more of the above apply.)  Note:  this value is not valid for awards after September 30, 2009.
3 Other (This applies to Awards only.  Applies to Awards where none of the above apply).  Note:  this value is not valid for awards after Sept 30, 2009.
</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">idvType<a id="C117"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Type of Transaction Code</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>16(B)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The type of Indefinite Delivery Vehicle being (IDV) loaded by this transaction. IDV Types include Government-Wide Acquisition Contract (GWAC), Multi-Agency Contract, Other Indefinite Delivery Contract (IDC), Federal Supply Schedule (FSS), Basic Ordering Agreement (BOA), and Blanket Purchase Agreements (BPA).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: A
Ex2: E
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG:
A GWAC – Government-Wide Agency Contract approved by OMB
B IDC – Indefinite delivery contract
C FSS – GSA or VA Federal Supply Schedule
D BOA – Basic Ordering Agreement
E BPA – Blanket Purchase Agreement
</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ContractAwardType<a id="C118"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Type of Transaction Code</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>16(C)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The type of award being entered by this transaction. Types of awards include Purchase Orders (PO), Delivery Orders (DO), BPA Calls and Definitive
Contracts.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: A
Ex2: D
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG:
A BPA Call – call against a blanket purchase agreement
B Purchase order
C Delivery Order – delivery order or task order under an Indefinite Delivery Vehicle
D Definitive contract
</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AssistanceType<a id="C119"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Type of Transaction Code</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>16(D)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Type of Assistance: The type of assistance provided by the award.
(From FAADS user guide)
02 = block grant (A)
03 = formula grant (A)
04 = project grant (B)
05 = cooperative agreement (B)
06 = direct payment for specified use, as a subsidy or other non-reimbursable direct financial aid (C)
07 = direct loan (E)
08 = guaranteed/insured loan (F)
09 = insurance (G)
10 = direct payment with unrestricted use (retirement, pension, veterans benefits, etc.) (D)
11 = other reimbursable, contingent, intangible, or indirect financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 4
Ex2: 11
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Financial Assistance valid codes:
02 = block grant (A)
03 = formula grant (A)
04 = project grant (B)
05 = cooperative agreement (B)
06 = direct payment for specified use, as a subsidy or other non-reimbursable direct financial aid (C)
07 = direct loan (E)
08 = guaranteed/insured loan (F)
09 = insurance (G)
10 = direct payment with unrestricted use (retirement, pension, veterans benefits, etc.) (D)
11 = other reimbursable, contingent, intangible, or indirect financial assistance</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">FederalPrimeAward<a id="C120"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Type of Transaction Code</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>16(E)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The required FFATA award types related to financial assistance and contracts and are defined as follows:  
• Grant
• Loan
• Cooperative agreement
• Other form of financial assistance
• Procurement (which includes purchase order, delivery order, task order)
This categorization is determined to be procurement if the award is reported through FPDS. If the award is reported through the ASP using the FAADS+ format, the Type of Assistance field below is used.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: G
Ex2: L
Ex3: C
Ex4: O
Ex5: P
Ex6: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Financial Assistance valid codes:
• Grant
• Loan
• Cooperative agreement
• Other form of financial assistance
• Procurement (which includes purchase order, delivery order, task order) </td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ParentAwardIDprefix<a id="C121"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Parent Award Identification (ID) Number

Definition (if more than one field): The identifier of the procurement award under which the specific award is issued, such as a Federal Supply Schedule. This data element currently applies to procurement actions only.</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>24(A)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The prefix of the parent ID indicates the Activity Address Code which is the department/agency and office issuing the instrument.  Use the AAC assigned to the program/funding office providing  the predominance of funding for the contract action as the program/funding office code.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: GS551
Ex2: DOL345
Ex3: (blank)</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>6</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry in FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ParentAwardYear<a id="C122"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Parent Award Identification (ID) Number

Definition (if more than one field): The identifier of the procurement award under which the specific award is issued, such as a Federal Supply Schedule. This data element currently applies to procurement actions only.</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>24(B)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The last two digits of the fiscal year in which the procurement instrument  is issued or awarded. This is the date the action is signed, not the effective date if the effective date is different.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 14
Ex2: (blank)</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry in FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ParentAwardType<a id="C123"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Parent Award Identification (ID) Number

Definition (if more than one field): The identifier of the procurement award under which the specific award is issued, such as a Federal Supply Schedule. This data element currently applies to procurement actions only.</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>24(C)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The type of instrument by entering one upper case letter in position nine of the PIID. Departments and independent agencies may assign those letters identified for department use in accordance with their agency policy; however, any use must be applied to the entire department or agency.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: A
Ex2: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry in FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ParentAwardNumber<a id="C124"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Parent Award Identification (ID) Number

Definition (if more than one field): The identifier of the procurement award under which the specific award is issued, such as a Federal Supply Schedule. This data element currently applies to procurement actions only.</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>24(D)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The number assigned by the issuing agency in these positions. Agencies may choose a minimum of four characters up to a maximum of eight characters to be used, but the same number of characters must be used agency-wide. If a number less than the maximum is used, do not use leading or trailing zeroes to make it equal the maximum in any system or data transmission. A separate series of numbers may be used for any type of instrument listed in paragraph (a)(3) of this section. An agency may reserve blocks of numbers or alpha-numeric numbers for use by its various components.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1234
Ex1: OPE123
Ex2: OPE12345
Ex4: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>8</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry in FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ActionDateDay<a id="C125"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Action Date</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>25(A)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The calendar day of the date the action being reported was issued / signed by the government or a binding agreement was reached.  </td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1
Ex2: 31</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry in FPDS-NG for procurement</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ActionDateMonth<a id="C126"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Action Date</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>25(B)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The calendar month of the date the action being reported was issued / signed by the government or a binding agreement was reached.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1
Ex2: 12</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry in FPDS-NG for procurement</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ActionDateYear<a id="C127"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Action Date</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>25(C)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The calendar year of the date the action being reported was issued / signed by the government or a binding agreement was reached.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 2014</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry in FPDS-NG for procurement</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PeriodOfPerfStartDay<a id="C128"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Period of Performance Start Date</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>26(A)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The calendar day of the date on which, for the award referred to by the action being reported, awardee effort begins or the award is otherwise effective. </td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1
Ex2: 31</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry in FPDS-NG for procurement</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PeriodOfPerfStartMonth<a id="C129"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Period of Performance Start Date</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>26(B)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The calendar month of the date on which, for the award referred to by the action being reported, awardee effort begins or the award is otherwise effective. </td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1
Ex2: 12</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry in FPDS-NG for procurement</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PeriodOfPerfStartYear<a id="C130"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Period of Performance Start Date</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>26(C)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The calendar year of the date on which, for the award referred to by the action being reported, awardee effort begins or the award is otherwise effective. </td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 2014</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry in FPDS-NG for procurement</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PeriodOfPerfCurrentEndDay<a id="C131"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Period of Performance Current End Date</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>27(A)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The calendar day of the current date on which, for the award referred to by the action being reported, awardee effort completes or the award is otherwise ended.  Administrative actions related to this award may continue to occur after this date.  This date does not apply to procurement indefinite delivery vehicles under which definitive orders may be awarded.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1
Ex2: 31</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry in FPDS-NG for procurement</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PerioOfPerfCurrentEndMonth<a id="C132"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Period of Performance Current End Date</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>27(B)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The calendar month of the current date on which, for the award referred to by the action being reported, awardee effort completes or the award is otherwise ended.  Administrative actions related to this award may continue to occur after this date.  This date does not apply to procurement indefinite delivery vehicles under which definitive orders may be awarded.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1
Ex2: 12</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid endry in FPDS-NG for procurement</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PeriodOfPerfCurrentEndYear<a id="C133"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Period of Performance Current End Date</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>27(C)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The calendar year of the current date on which, for the award referred to by the action being reported, awardee effort completes or the award is otherwise ended.  Administrative actions related to this award may continue to occur after this date.  This date does not apply to procurement indefinite delivery vehicles under which definitive orders may be awarded.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 2014</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry in FPDS-NG for procurement</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PeriodOfPerfPotentialEndDay<a id="C134"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Period of Performance Potential End Date</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>28(A)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The calendar day of the date on which, for the award referred to by the action being reported if all potential pre-determined or pre-negotiated options were exercised, awardee effort completes or the award is otherwise ended.  Administrative actions related to this award may continue to occur after this date.  This date does not apply to procurement indefinite delivery vehicles under which definitive orders may be awarded.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1
Ex2: 31</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry in FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PeriodOfPerfPotentialEndMonth<a id="C135"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Period of Performance Potential End Date</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>28(B)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The calendar month of the date on which, for the award referred to by the action being reported if all potential pre-determined or pre-negotiated options were exercised, awardee effort completes or the award is otherwise ended.  Administrative actions related to this award may continue to occur after this date.  This date does not apply to procurement indefinite delivery vehicles under which definitive orders may be awarded.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1
Ex2: 12</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry in FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PeriodOfPerfPotentialEndYear<a id="C136"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Period of Performance Potential End Date</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>28(C)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The calendar year of the date on which, for the award referred to by the action being reported if all potential pre-determined or pre-negotiated options were exercised, awardee effort completes or the award is otherwise ended.  Administrative actions related to this award may continue to occur after this date.  This date does not apply to procurement indefinite delivery vehicles under which definitive orders may be awarded.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 2014</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry in FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">OrderingPeriodEndDay<a id="C137"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Ordering Period End Date</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>29(A)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The calendar day of the date on which, for the award referred to by the action being reported, no additional orders referring to it may be placed.  This date applies only to procurement indefinite delivery vehicles (such as indefinite delivery contracts or blanket purchase agreements).  Administrative actions related to this award may continue to occur after this date.  The period of performance end dates for procurement orders issued under the indefinite delivery vehicle may extend beyond this date.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1
Ex2: 31</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry in FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">OrderingPeriodEndMonth<a id="C138"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Ordering Period End Date</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>29(B)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The calendar month of the date on which, for the award referred to by the action being reported, no additional orders referring to it may be placed.  This date applies only to procurement indefinite delivery vehicles (such as indefinite delivery contracts or blanket purchase agreements).  Administrative actions related to this award may continue to occur after this date.  The period of performance end dates for procurement orders issued under the indefinite delivery vehicle may extend beyond this date.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1
Ex2: 12</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry in FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">OrderingPeriodEndYear<a id="C139"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Ordering Period End Date</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>29(C)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The calendar year of the date on which, for the award referred to by the action being reported, no additional orders referring to it may be placed.  This date applies only to procurement indefinite delivery vehicles (such as indefinite delivery contracts or blanket purchase agreements).  Administrative actions related to this award may continue to occur after this date.  The period of performance end dates for procurement orders issued under the indefinite delivery vehicle may extend beyond this date.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 2014</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry in FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PlaceOfPerfStreetLine1<a id="C140"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Primary Place of Performance Address</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>30(A)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Street Address where the predominant performance of the award will be accomplished.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1234 Monroe St. S.</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>150</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>  </td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PlaceOfPerfState<a id="C141"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Primary Place of Performance Address</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>30(D)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>State where the predominant performance of the award will be accomplished.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: MN
Ex2: DC
Ex3: PR
Ex4: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Names consistent with the USPS code. Valid entry in FPDS-NG for procurement.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PlaceOfPerfCountyName<a id="C142"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Primary Place of Performance Address</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>30(E)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>County where the predominant performance of the award will be accomplished.  </td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: Hennepin
Ex2: (blank)</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>40</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Names consistent with the USPS code. Valid entry in FPDS-NG for procurement.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PlaceOfPerfPostalCode<a id="C143"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Primary Place of Performance Address</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>30(G)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Postal service code where the predominant performance of the award will be accomplished, when not located in the United States. This is an optional data element, and used instead of the ZIP+4 Code for non-US addresses</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 400-000
Ex2: 10</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>50</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>This is an optional data element, and used instead of the ZIP+4 Code for non-US addresses.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">piidPrefix<a id="C144"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>34(A)(i)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The prefix of the prime award indicating the Activity Address Code which is the department/agency and office issuing the instrument.  Use the AAC assigned to the program/funding office providing  the predominance of funding for the contract action as the program/funding office code.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: GS551
Ex2: DOL345
Ex3: (blank)</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>6</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">piidAwardYear<a id="C145"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>34(A)(ii)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The last two digits of the fiscal year in which the procurement instrument  is issued or awarded. This is the date the action is signed, not the effective date if the effective date is different.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 14
Ex2: (blank)</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">piidAwardType<a id="C146"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>34(A)(iii)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The type of instrument by entering one upper case letter in position nine of the PIID. Departments and independent agencies may assign those letters identified for department use in accordance with their agency policy; however, any use must be applied to the entire department or agency.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: A
Ex2: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">piidAwardNumber<a id="C147"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>34(A)(iv)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The number assigned by the issuing agency in these positions. Agencies may choose a minimum of four characters up to a maximum of eight characters to be used, but the same number of characters must be used agency-wide. If a number less than the maximum is used, do not use leading or trailing zeroes to make it equal the maximum in any system or data transmission. A separate series of numbers may be used for any type of instrument listed in paragraph (a)(3) of this section. An agency may reserve blocks of numbers or alpha-numeric numbers for use by its various components.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1234
Ex1: OPE123
Ex2: OPE12345</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>8</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">fainAwardNumber<a id="C148"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>34(B)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The Federal Award Identification Number (FAIN) is the unique ID within the Federal agency for each financial assistance award.  Once an agency assigns a FAIN and reports it to USAspending.gov, the Federal agency may not- with limited exceptions ­ modify the FAIN during the life of the award. Further, once a Federal agency assigns a FAIN, that Federal agency must ensure that the FAIN is clearly identified in all Federal award documents. As a term and condition of the award, Federal agencies must require that all recipients document the assigned FAIN on each subaward under the Federal award. </td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 123456798
Ex1: OPE123
Ex2: 071OPE12345</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>50</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>  </td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">TypeOfAction<a id="C149"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Type of Action</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>36(A)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Identifies the type of change to the award as follows:
'B' - Continuation (funding in succeeding budget period which stemmed form prior agreement to fund amount of the current action)
'C' - Revision (any change in Federal Government's financial obligation or contingent liability in existing assistance transaction amount of the change in funding; or any change in Recipient Name, Recipient Address, Project Period or Project Scope
'D' - Funding adjustment to completed project</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: A
Ex2: D
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1) </td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>  </td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Financial Assistance valid codes:
A = New assistance award
B = Continuation (funding in succeeding budget period that stemmed from a prior agreement to fund amount of the current action)
C = Revision (any change in Federal government’s financial obligation or contingent liability in existing assistance transaction amount of the change in funding; or any change in Recipient Name, Recipient Address, Project Period, or Project Scope)
D = Funding adjustment to completed project

</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ReasonForModification<a id="C150"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Type of Action</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>36(B)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The type of modification to an award or IDV performed by this transaction.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: A
Ex2: X
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>  </td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>
A modification / amendment number of zero (“0”) indicates the initial award. Valid entry from FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AwardeeOrRecipient LegalEntityName<a id="C151"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Awardee/Recipient Legal Entity Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The name of the awardee or recipient that relates to the unique identifier. For U.S. based companies, this name is what the business ordinarily files in formation documents with individual states (when required).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: The Boeing Company
Ex2: Microsoft Corporation</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>120</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Derived from 9-digit number assigned by D&amp;B referred to as the DUNS number. DUNS exists in SAM and FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AwardeeOrRecipientUniqueIdentifier<a id="C152"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Awardee/Recipient Unique Identifier</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The unique identification number for an awardee or recipient. Currently the identifier is the 9-digit number assigned by D&amp;B referred to as the DUNS® number.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 009256819
Ex2: 081466849</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>9</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>9-digit number assigned by D&amp;B referred to as the DUNS number. DUNS exists in SAM and FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">UltimateParentUniqueIdentifier<a id="C153"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Ultimate Parent Unique Identifier</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>3</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The unique identification number for the ultimate parent of an awardee or recipient. Currently the identifier is the 9-digit number maintained by D&amp;B as the global parent DUNS® number.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 009256819
Ex2: 081466849</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>9</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>9-digit number maintained by D&amp;B as the global parent DUNS number. DUNS exists in SAM and FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">UltimateParentLegalEntityName<a id="C154"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Ultimate Parent Legal Entity Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The name of the ultimate parent of the awardee or recipient. Currently the name is from the global parent DUNS® number.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: The Boeing Company
Ex2: Microsoft Corporation</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>120</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Derived from DUNS. DUNS exists in SAM and FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">LegalEntityCongresionalDistrict<a id="C155"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Legal Entity Congressional District</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>6</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td> The congressional district in which the awardee or recipient is located. This is not a required data element for non-U.S. addresses.
 </td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 5
Ex2: 51
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>The congressional district is derived using a commercial mapping tool based on the ZIP+4 code provided. This is not a required data element for non-US addresses.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">LegalEntityCountryCode<a id="C156"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Legal Entity Country Code</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>7</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Code for the country in which the awardee or recipient is located, using the ISO 3166-1 Alpha-3 GENC Profile, and not the codes listed for those territories and possessions of the United States already identified as “states.”</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: USA
Ex2: IND</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>3</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>ISO 3166-1 Alpha-3 GENC Profile. Exists in SAM and FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">LegalEntityCountryName<a id="C157"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Legal Entity Country Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>8</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The name corresponding to the Country Code.
</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: United States
Ex2: India</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>100</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>ISO 3166-1 Alpha-3 GENC Profile. Exists in SAM and FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">BusinessTypes<a id="C158"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Business Types</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>37</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Procurement awards: Organization Type / Business Type
(Entity information 3.3.1): Business types selected by an entity as applicable for Federal awards.

Financial assistance awards: Two-position numeric code which depicts the type of recipient or borrower.
Government codes:
00 = State government
01 = county government
02 = city or township government
04 = special district government
05 = independent school district
06 = State controlled institution of higher education Nonprofit agencies:
11 = Indian tribe
12 = other nonprofit
Private:
20 = private higher education
21 = individual
22 = profit organization
23 = small business
25 = all other</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1
Ex2: 25</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Financial assistance valid codes:
00 = State government
01 = county government
02 = city or township government
04 = special district government
05 = independent school district
06 = State controlled institution of higher education Nonprofit agencies:
11 = Indian tribe
12 = other nonprofit
Private:
20 = private higher education
21 = individual
22 = profit organization
23 = small business
25 = all other

Procurement: Valid Code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AmericanIndianOwned<a id="C159"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>American Indian Owned Business</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>59</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is an Asian-Pacific American Owned Business.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AsianPacOwned<a id="C160"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Asian-Pacific American Owned Business</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>60</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is an Asian-Pacific American Owned Business.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">BlackOwned<a id="C161"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Black American Owned Business</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>61</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Black American Owned Business.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">SamException<a id="C162"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>SAM Exception</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>66</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The reason a vendor/contractor not registered in the mandated SAM system may be used in a purchase.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1
Ex2: 2
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">EducationalInstitution<a id="C163"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Educational Institution</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>79</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is an Educational Institution.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">FedBizOpps<a id="C164"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>FedBizOpps</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>84</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the synopsis requirements of FAR Subpart 5.2. have been observed.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">FederalGovernemntOrg<a id="C165"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>U.S. Federal Government</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>85</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Federal Government Organization.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">GfeGfp<a id="C166"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Government Furnished Equipment (GFE) and Government Furnished Property (GFP)</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>88</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether Government Furnished Equipment (GFE) or Government Furnished Property (GFP) used for the contract, pursuant to FAR 45.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HispanicOwned<a id="C167"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Hispanic American Owned Business</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>89</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Hispanic American Owned Business.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HistoricallyBlackCollegeOrUniversity<a id="C168"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Historically Black College or University</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>90</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Historically Black College or University.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">Hospital<a id="C169"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Hospital Flag</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>91</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Hospital.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">InteragencyContractAuth<a id="C170"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Interagency Contracting Authority</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>95</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the transaction is an Economy Act or Statutory Authority</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">LandGrantCollege1862<a id="C171"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>1862 Land Grant College</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>96</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a 1862 Land Grant College.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">LandGrantCollege1890<a id="C172"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>1890 Land Grant College</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>97</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a 1890 Land Grant College.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">LandGrantCollege1994<a id="C173"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>1994 Land Grant College</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>98</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a 1994 Land Grant College.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AirportAuthority<a id="C174"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Airport Authority</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>99</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is an Airport Authority.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AlaskanNativeOwned<a id="C175"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Alaskan Native Owned Corporation or Firm</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>100</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is Alaskan Native Owned Corporation or Firm</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ArchitectureAndEngineering<a id="C176"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Architecture and Engineering Firm</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>101</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Architecture And Engineering.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">CityLocalGovernment<a id="C177"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>City Local Government</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>102</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a City Local Government.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">CommunityDevCorpOwned<a id="C178"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Community Developed Corporation Owned Firm</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>103</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Community Developed Corporation Owned Firm.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">CommunityDevCorp<a id="C179"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Community Development Corporation</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>104</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Community Development Corporation.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ConstructionFirm<a id="C180"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Construction Firm</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>105</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Construction Firm.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">CorporateEntityNotTaxExempt<a id="C181"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Corporate Entity, Not Tax Exempt</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>106</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Corporate Entity Not Tax Exempt.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">CorporateEntityTaxExampt<a id="C182"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Corporate Entity, Tax Exempt</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>107</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is Corporate Entity, Tax Exempt</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">CouncilOfGovernments<a id="C183"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Council of Governments</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>108</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Council of Governments.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">CountyLocalGovernment<a id="C184"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>County Local Government</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>109</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a County Local Government.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">DomesticShelter<a id="C185"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Domestic Shelter</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>110</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Domestic Shelter.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">DotCertifiedDisadvantagedBusEnterprise<a id="C186"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>DoT Certified Disadvantaged Business Enterprise</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>111</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is DoT Certified Disadvantaged Business Enterprise.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">WomanOwnedSmallBusiness<a id="C187"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Woman Owned Business</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>112</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>This code is reported for a Women Owned Small Business Set-Aside made pursuant to FAR 19.15. This code is only valid for actions signed on or after 04/01/2011.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">FederalGovernmentAgency<a id="C188"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Federal Agency</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>113</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Federal Government Agency.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">FederallyFundedResearchAndDevCorp<a id="C189"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Federally Funded Research and Development Corp</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>114</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Federally Funded Research and Development Corporation.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ForeignGovernment<a id="C190"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Foreign Government</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>115</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Foreign Government.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ForeignOwnedAndLocated<a id="C191"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Foreign Owned and Located</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>116</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is Foreign Owned and Located.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ForProfitOrg<a id="C192"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>For Profit Organization</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>117</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is  a Profit Organization or not</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">Foundation<a id="C193"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Foundation</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>118</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is Foundation</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HispanicServicingInstitution<a id="C194"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Hispanic Servicing Institution</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>119</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is Hispanic Servicing Institution</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HousingAuthorities<a id="C195"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Housing Authorities Public/Tribal</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>120</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Housing Authorities Public/Tribal.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">IndianTribe<a id="C196"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Indian Tribe (Federally Recognized)</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>121</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is an Indian Tribe</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">InterMunicipalLocalGovernment<a id="C197"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Inter-Municipal Local Government</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>122</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Inter Municipal Local Government.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">InternationalOrg<a id="C198"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>International Organization</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>123</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a International Organization.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">InterstateEntity<a id="C199"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Interstate Entity</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>124</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Interstate Entity.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">JointVentureWomanOwnedSmallBusiness<a id="C200"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>SBA Certified 8(a) Joint Venture</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>125</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>This code is reported for a Women Owned Small Business Set-Aside made pursuant to FAR 19.15. This code is only valid for actions signed on or after 04/01/2011.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">LaborSuplusAreaFirm<a id="C201"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Labor Surplus Area Firm</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>126</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Labor Surplus Area Firm.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">LimitedLiabilityCorporation<a id="C202"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Limited Liability Corporation</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>127</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Limited Liability Corporation.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">LocalGovernmentOwned<a id="C203"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Local Government Owned</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>128</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Local Government Owned.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ManufacturerOfGoods<a id="C204"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Manufacturer of Goods</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>129</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is Manufacturer of Goods.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">MunicipalityLocalGovernemnt<a id="C205"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Municipality Local Government</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>130</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Municipality Local Government.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">NativeHawaiinOwned<a id="C206"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Native Hawaiian Owned Organization or Firm</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>131</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Native Hawaiian Owned Organization Or Firm.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">OtherBusOrOrg<a id="C207"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Other Business or Organization</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>132</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is Other Business Or Organization.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">OtherMinorityOwned<a id="C208"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Other Minority Owned Business</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>133</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Other Minority Owned.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">OtherNotForProfitOrg<a id="C209"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Other Not For Profit Organization</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>134</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Other Not For Profit Organization.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PartnershipOrLimitedLiabilityCorp<a id="C210"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Partnership or Limited Liability Partnership</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>135</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Partnership Or Limited Liability Partnership.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PlanningCommision<a id="C211"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Planning Commission</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>136</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Planning Commission.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PortAuthority<a id="C212"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Port Authority</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>137</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Port Authority.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PrivateUniversityOrCollege<a id="C213"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Private University or College</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>138</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is Private University or College</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">SmallDisadvantaged<a id="C214"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Small Disadvantaged Business</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>139</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Small Disadvantaged Business Organization</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">SchoolDistrictLocalGovernment<a id="C215"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>School District Local Government</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>140</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a School District Local Government.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">SchoolOfForestry<a id="C216"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>School of Forestry</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>141</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is School of Forestry.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ServiceProvider<a id="C217"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Service Provider</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>142</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Service Provider.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">SmallAgriculturalCooperative<a id="C218"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Small Agricultural Cooperative</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>143</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Small Agricultural Cooperative.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">SoleProprietorship<a id="C219"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Sole Proprietorship</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>144</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Sole Proprietorship.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">StateInstitutionOfHigherLearning<a id="C220"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>State Controlled Institution of Higher Learning</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>145</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is State Controlled Institution of Higher Learning.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">SubchapterSCorporation<a id="C221"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Subchapter S Corporation</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>146</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Subchapter S Corporation.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">TownshipLocalGovernment<a id="C222"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Township Local Government</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>147</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Township Local Government.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">TransitAuthority<a id="C223"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Transit Authority</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>148</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Transit Authority.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">TribalCollege<a id="C224"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Tribal College</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>149</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is Tribal College.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">TriballyOwned<a id="C225"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Tribally Owned Firm</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>150</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Tribally Owned Firm.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">VeterinaryCollege<a id="C226"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Veterinary College</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>151</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Veterinary College.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">LocalAreaSetAside<a id="C227"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Local Area Set Aside</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>154</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>When awarding emergency response contracts during the term of a major disaster or emergency declaration by the President of the United States under the authority of the Robert T. Stafford Disaster Relief and Emergency Assistance Act (42 U.S.C. 5121, et seq.), preference shall be given, to the extent feasible and practicable, to local firms. Preference may be given through a local area set-aside.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">LocalGovernment<a id="C228"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>U.S. Local Government</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>155</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Local Government Organization.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PurchaseCardPayMethod<a id="C229"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Purchase Card as Payment Method</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>157</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the method of payment is the Purchase Card. Agencies may issue formal contract documents and make payment using the Purchase Card. It is also permitted that agencies may report Purchase Card purchases.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">MinorityInstitution<a id="C230"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Minority Institution</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>158</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Minority Institution.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">MinorityOwned<a id="C231"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Minority Owned Business</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>159</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Minority Owned Business.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">NativeOwned<a id="C232"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Native American Owned Business</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>162</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Native American Owned Business.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">NonProfitOrganization<a id="C233"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Non-profit Organization</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>164</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Nonprofit Organization.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">NumberOfActions<a id="C234"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Number of Actions</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>165</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The number of actions that involved contract modifications for additional supplies or services. Can be reported for new contracts or contract modification transactions.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>3</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AnnualRevenue<a id="C235"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Annual Revenue</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>166</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The contractor's annual gross revenue, taken from an average of the last three years. Usually obtained from the CCR (Central Contractor Registry).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0
Ex2: 12345
Ex3: 12345.14
Ex4: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>15</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">NumberOfEmployees<a id="C236"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Number of Employees</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>167</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The contractor's business size in terms of number of employees. Usually obtained from the CCR (Central Contractor Registry).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1
Ex2: 1234567
Ex3: (blank)</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>15</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">VendorPhoneNumber<a id="C237"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Vendor Phone Number</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>171</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The phone number of the contractor.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 301-555-1212
Ex2: 1-888-555-1212
Ex3: 011-49-555-1212
Ex4: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>30</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ReceivesContractsAndGrants<a id="C238"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Receives Contracts and Grants</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>180</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor receives Contracts and Grants.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">SubcontinentAsianOwned<a id="C239"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Subcontinent Asian (Asian- Indian) American Owned Business</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>184</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Subcontinent Asian (Asian-Indian) American Owned Business.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">SelfCertifiedSmallDisadvantagedBusiness<a id="C240"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Self-Certified Small Disadvantaged Business</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>185</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Self-Certified Small Disadvantaged Business Organization.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ShelteredWorkshop<a id="C241"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Sheltered Workshop</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>188</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Sheltered Workshop (JWOD Provider) Organization.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ServiceDisabledVeteranOwned<a id="C242"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Service Disabled Veteran Owned Business</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>192</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Service-Related Disabled Veteran Owned Business.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">StateGovernment<a id="C243"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>U.S. State Government</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>193</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a State Government Organization.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">TribalGovernment<a id="C244"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>U.S. Tribal Government</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>197</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Tribal Government Organization.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">VendorAlternativeName<a id="C245"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Vendor Alternative Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>201</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Alternate name for vendor.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: Booz Allen
Ex2: BAH
Ex3: Booz</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>120</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">VenderAlternativeCode<a id="C246"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Vendor Alternative Code</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>202</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Alternate site code for vendor.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: Site R</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>120</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">VendorDoingBusinessAsName<a id="C247"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Vendor Doing As Business Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>203</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The doing as business name of the contractor address.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: BoozAllenHamilton</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>120</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">VendorLegalOrgName<a id="C248"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Vendor Legal Organization Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>204</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Vendor legal name.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: Booz Allen Hamilton Holding Corporation</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>120</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">VeteranOwned<a id="C249"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Veteran Owned Business</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>205</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Veteran Owned Business.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">WomanOwned<a id="C250"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Woman Owned Business</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>207</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Indicates whether the vendor is a Woman Owned Business.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer1Amount<a id="C251"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Total Compensation</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>10(A)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The cash and noncash dollar value earned by the one of the five most highly compensated “Executives” during the awardee's preceding fiscal year and includes the following (for more information see 17 CFR 229.402c2): salary and bonuses, awards of stock, stock options, and stock appreciation rights, earnings for services under non-equity incentive plans, change in pension value, above-market earnings on deferred compensation which is not tax qualified, and other compensation.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1000000
Ex2: 1000000.15
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>38</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer2Amount<a id="C252"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Total Compensation</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>10(B)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as exec_comp_1</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1000000
Ex2: 1000000.15
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>38</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer3Amount<a id="C253"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Total Compensation</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>10(C)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as exec_comp_1</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1000000
Ex2: 1000000.15
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>38</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer4Amount<a id="C254"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Total Compensation</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>10(D)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as exec_comp_1</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1000000
Ex2: 1000000.15
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>38</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer5Amount<a id="C255"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Total Compensation</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>10(E)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as exec_comp_1</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1000000
Ex2: 1000000.15
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>38</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">LegalEntityAddressStreet1<a id="C256"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Legal Entity Address</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>5(A)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>First line of awardee or recipient’s legal business address.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1234 Monroe St. S.</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>150</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Derived from DUNS. DUNS exists in SAM and FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">LegalEntityAddressStreet2<a id="C257"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Legal Entity Address</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>5(B)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Second line of awardee or recipient’s legal business address.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: P.O. Box 12345
Ex2: ATTN: Jane Doe</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>150</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Derived from DUNS. DUNS exists in SAM and FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">LegalEntitylCityName<a id="C258"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Legal Entity Address</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>5(C)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Name of the city in which the awardee or recipient’s legal business address is located.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: Minneapolis
Ex2: Mumbai</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>40</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Derived from DUNS. Based on International Committee for Information Technology Standards (INCITS) 38, “Codes for the Identification of the States and Equivalent Areas within the United States, Puerto Rice, and the Insular Areas.”  DUNS exists in SAM and FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">LegalEntityStateCode<a id="C259"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Legal Entity Address</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>5(D)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>United States Postal Service (USPS) two-letter abbreviation for the state or territory in which the awardee or recipient’s legal business address is located. Identify States, the District of Columbia, territories (i.e., American Samoa, Guam, Northern Mariana Islands, Puerto Rico, U.S. Virgin Islands) and associated states (i.e., Republic of the Marshall Islands, the Federated States of Micronesia, and Palau) by their USPS two-letter abbreviation for the purposes of reporting. Report legal business address located in the Puerto Rico, Northern Mariana Islands, American Samoa, Guam, and U.S. Virgin Islands using USPS assigned state codes.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: MN
Ex2: DC
Ex3: PR</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Derived from DUNS. DUNS exists in SAM and FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">LegalEntityZip<a id="C260"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Legal Entity Address</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>5(E)(i)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>USPS zoning code associated with the awardee or recipient’s legal business address. This is not a required data element for non-US addresses. (First five digits)</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 55401
Ex2: 1234</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>5</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Derived from DUNS. Not valid for non-US address. DUNS exists in SAM and FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">LegalEntityZip+4<a id="C261"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Legal Entity Address</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>5(E)(ii)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>USPS zoning code associated with the awardee or recipient’s legal business address. This is not a required data element for non-US addresses. (Last four digits)</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 5769
Ex2 765</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Derived from DUNS. Not valid for non-US address. DUNS exists in SAM and FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">LegalEntityPostalCode<a id="C262"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Legal Entity Address</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>5(F)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Postal service code for awardee or recipient not located in the United States. This is an optional data element, and used instead of the ZIP+4 Code for non-US addresses.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 400-000
Ex2: 10</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>50</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>This is an optional data element, and used instead of the ZIP+4 Code for non-US addresses.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer1FirstName<a id="C263"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(A)(i)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The first name of an individual identified as one of the five most highly compensated "Executives." "Executive" means officers, managing partners, or any other employees in management positions.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: Jane
Ex2: Andrés</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>35</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer1MiddleInitial<a id="C264"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(A)(ii)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The middle initial of an individual identified as one of the five most highly compensated "Executives." "Executive" means officers, managing partners, or any other employees in management positions.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: A
Ex2: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer1LastName<a id="C265"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(A)(iii)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The last name of an individual identified as one of the five most highly compensated "Executives." "Executive" means officers, managing partners, or any other employees in management positions.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: Doe
Ex2: Manuel López Obrador</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>35</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer2FirstName<a id="C266"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(B)(i)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer2MiddleInitial<a id="C267"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(B)(ii)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer2LastName<a id="C268"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(B)(iii)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer3FirstName<a id="C269"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(C)(i)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer3MiddleInitial<a id="C270"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(C)(ii)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer3LastName<a id="C271"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(C)(iii)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer4FirstName<a id="C272"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(D)(i)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer4MiddleInitial<a id="C273"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(D)(ii)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer4LastName<a id="C274"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(D)(iii)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer5FirstName<a id="C275"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(E)(i)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer5MiddleInitial<a id="C276"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(E)(ii)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer5LastName<a id="C277"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Awardee Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(E)(iii)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AwardModAmendmentNumber<a id="C278"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award-Financial Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Award Modification/Amendment Number</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>23</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The identifier of an action being reported that indicates the specific subsequent change to the initial award.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 6</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>25</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Procurement: A modification / amendment number of zero (“0”) indicates the initial award. </td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ObjectClass<a id="C279"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award-Financial Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Object Class</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>50</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Categories in a classification system that presents obligations by the items or services purchased by the Federal Government. Each specific object class is defined in OMB Circular A-11 § 83.6.
(defined in OMB Circular A-11)</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 11.0
Ex2: 25.4</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..unbounded)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Must be valid 3-digit object class as defined in OMB Circular A-11 Section 83.6.  A 4-digit code includes a 1-digit prefix that distinguishes direct, reimbursable, and allocation obligations. Do not include decimal points when reporting in the Schema.  The Examples provided here are presented as they are displayed in the OMB Circular, which is intended to improve readability.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">(represented by 21(A-F))<a id="C280"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award-Financial Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Appropriations Account</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>51</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The basic unit of an appropriation generally reflecting each unnumbered paragraph in an appropriation act. An appropriation account typically encompasses a number of activities or projects and may be subject to restrictions or conditions applicable to only the account, the appropriation act, titles within an appropriation act, other appropriation acts, or the government as a whole.

An appropriations account is represented by a TAFS created by Treasury in consultation with OMB.
(defined in OMB Circular A-11)</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 014 075 2014 2015 1552
Ex2: 012 X 5531</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td></td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>0</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>This data element will not be required to be reported, since it is a concatenation (and therefore duplicative) of the TAS components.

It is presented on this Guidance as informational only, so that we can tie back to the original count of 83/57 data elements identified for standardization. </td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AllocationTransferAgencyIdentifier<a id="C281"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award-Financial Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Treasury Account Symbol</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>21(A)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The allocation agency identifies the department or agency that is receiving funds through an allocation (non-expenditure) transfer.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 014
Ex2: (blank)</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>3</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from GWA Central Accounting and Reporting System (CARS).</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AgencyIdentifier<a id="C282"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award-Financial Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Treasury Account Symbol</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>21(B)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The agency code identifies the department or agency that is responsible for the account.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 075
Ex2: 012</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>3</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from GWA Central Accounting and Reporting System (CARS).</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">BeginningPeriodOfAvailability<a id="C283"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award-Financial Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Treasury Account Symbol</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>21(C)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>In annual and multi-year funds, the beginning period of availability identifies the first year of availability under law that an appropriation account may incur new obligations.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 2014
Ex2: (blank)</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from GWA Central Accounting and Reporting System (CARS).</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">EndingPeriodOfAvailability<a id="C284"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award-Financial Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Treasury Account Symbol</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>21(D)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>In annual and multi-year funds, the end period of availability identifies the last year of funds availability under law that an appropriation account may incur new obligations.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 2015
Ex2: (blank)</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from GWA Central Accounting and Reporting System (CARS).</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AvailabilityTypeCode<a id="C285"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award-Financial Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Treasury Account Symbol</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>21(E)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>In appropriations accounts, the availability type code identifies an unlimited period to incur new obligations; this is denoted by the letter "X"</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1:  (blank)
Ex2:  X</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from GWA Central Accounting and Reporting System (CARS).</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">MainAccountCode<a id="C286"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award-Financial Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Treasury Account Symbol</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>21(F)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The main account code identifies the account in statute.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1552
Ex2: 5531</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from GWA Central Accounting and Reporting System (CARS).</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">piidPrefix<a id="C287"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award-Financial Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>34(A)(i)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The prefix of the prime award indicating the Activity Address Code which is the department/agency and office issuing the instrument.  Use the AAC assigned to the program/funding office providing  the predominance of funding for the contract action as the program/funding office code.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: GS551
Ex2: DOL345
Ex3: (blank)</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>6</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">piidAwardYear<a id="C288"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award-Financial Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>34(A)(ii)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The last two digits of the fiscal year in which the procurement instrument  is issued or awarded. This is the date the action is signed, not the effective date if the effective date is different.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 14
Ex2: (blank)</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">piidAwardType<a id="C289"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award-Financial Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>34(A)(iii)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The type of instrument by entering one upper case letter in position nine of the PIID. Departments and independent agencies may assign those letters identified for department use in accordance with their agency policy; however, any use must be applied to the entire department or agency.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: A
Ex2: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">piidAwardNumber<a id="C290"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award-Financial Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>34(A)(iv)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The number assigned by the issuing agency in these positions. Agencies may choose a minimum of four characters up to a maximum of eight characters to be used, but the same number of characters must be used agency-wide. If a number less than the maximum is used, do not use leading or trailing zeroes to make it equal the maximum in any system or data transmission. A separate series of numbers may be used for any type of instrument listed in paragraph (a)(3) of this section. An agency may reserve blocks of numbers or alpha-numeric numbers for use by its various components.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1234
Ex1: OPE123
Ex2: OPE12345</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>8</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">fainAwardNumber<a id="C291"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award-Financial Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>34(B)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The Federal Award Identification Number (FAIN) is the unique ID within the Federal agency for each financial assistance award.  Once an agency assigns a FAIN and reports it to USAspending.gov, the Federal agency may not- with limited exceptions ­ modify the FAIN during the life of the award. Further, once a Federal agency assigns a FAIN, that Federal agency must ensure that the FAIN is clearly identified in all Federal award documents. As a term and condition of the award, Federal agencies must require that all recipients document the assigned FAIN on each subaward under the Federal award. </td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 123456798
Ex1: OPE123
Ex2: 071OPE12345</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>50</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>  </td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">TransactionObligatedAmount

(Broken out by each unique combination of TAS, object class, program activity, award, and award modification / amendment.)<a id="C292"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Award-Financial Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Obligation</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>53(B)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as 53(A)</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 3500
Ex2: 5000000
Ex3: 0</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>25</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..unbounded)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td></td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ObjectClass<a id="C293"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Program Activity - Object Class</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Object Class</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>50</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Categories in a classification system that presents obligations by the items or services purchased by the Federal Government. Each specific object class is defined in OMB Circular A-11 § 83.6.
(defined in OMB Circular A-11)</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 11.0
Ex2: 25.4</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..unbounded)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Must be valid 3-digit object class as defined in OMB Circular A-11 Section 83.6.  A 4-digit code includes a 1-digit prefix that distinguishes direct, reimbursable, and allocation obligations. Do not include decimal points when reporting in the Schema.  The Examples provided here are presented as they are displayed in the OMB Circular, which is intended to improve readability.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">(represented by 21(A-F))<a id="C294"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Program Activity - Object Class</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Appropriations Account</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>51</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The basic unit of an appropriation generally reflecting each unnumbered paragraph in an appropriation act. An appropriation account typically encompasses a number of activities or projects and may be subject to restrictions or conditions applicable to only the account, the appropriation act, titles within an appropriation act, other appropriation acts, or the government as a whole.

An appropriations account is represented by a TAFS created by Treasury in consultation with OMB.
(defined in OMB Circular A-11)</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 014 075 2014 2015 1552
Ex2: 012 X 5531</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td></td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>0</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>This data element will not be required to be reported, since it is a concatenation (and therefore duplicative) of the TAS components.

It is presented on this Guidance as informational only, so that we can tie back to the original count of 83/57 data elements identified for standardization. </td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">OutlayAmount<a id="C295"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Program Activity - Object Class</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Outlay</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>57</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Payments made to liquidate an obligation (other than the repayment of debt principal or other disbursements that are “means of financing” transactions). Outlays generally are equal to cash disbursements but also are recorded for cash-equivalent transactions, such as the issuance of debentures to pay insurance claims, and in a few cases are recorded on an accrual basis such as interest on public issues of the public debt. Outlays are the measure of Government spending.
(defined in OMB Circular A-11)</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 3500
Ex2: 5000000
Ex3: 0</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>25</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..unbounded)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Value for given TAS must correspond with GTAS value.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AllocationTransferAgencyIdentifier<a id="C296"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Program Activity - Object Class</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Treasury Account Symbol</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>21(A)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The allocation agency identifies the department or agency that is receiving funds through an allocation (non-expenditure) transfer.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 014
Ex2: (blank)</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>3</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from GWA Central Accounting and Reporting System (CARS).</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AgencyIdentifier<a id="C297"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Program Activity - Object Class</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Treasury Account Symbol</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>21(B)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The agency code identifies the department or agency that is responsible for the account.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 075
Ex2: 012</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>3</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from GWA Central Accounting and Reporting System (CARS).</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">BeginningPeriodOfAvailability<a id="C298"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Program Activity - Object Class</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Treasury Account Symbol</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>21(C)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>In annual and multi-year funds, the beginning period of availability identifies the first year of availability under law that an appropriation account may incur new obligations.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 2014
Ex2: (blank)</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from GWA Central Accounting and Reporting System (CARS).</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">EndingPeriodOfAvailability<a id="C299"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Program Activity - Object Class</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Treasury Account Symbol</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>21(D)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>In annual and multi-year funds, the end period of availability identifies the last year of funds availability under law that an appropriation account may incur new obligations.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 2015
Ex2: (blank)</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from GWA Central Accounting and Reporting System (CARS).</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AvailabilityTypeCode<a id="C300"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Program Activity - Object Class</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Treasury Account Symbol</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>21(E)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>In appropriations accounts, the availability type code identifies an unlimited period to incur new obligations; this is denoted by the letter "X"</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1:  (blank)
Ex2:  X</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from GWA Central Accounting and Reporting System (CARS).</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">MainAccountCode<a id="C301"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Program Activity - Object Class</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Treasury Account Symbol</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>21(F)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The main account code identifies the account in statute.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1552
Ex2: 5531</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from GWA Central Accounting and Reporting System (CARS).</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ObligatedAmount

(Broken out by each unique combination of TAS, object class, and program activity)<a id="C302"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Program Activity - Object Class</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Obligation</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>53(A)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Obligation means a legally binding agreement that will result in outlays, immediately or in the future. When you place an order, sign a contract, award a grant, purchase a service, or take other actions that require the Government to make payments to the public or from one Government account to another, you incur an obligation. It is a violation of the Antideficiency Act (31 U.S.C. § 1341(a)) to involve the Federal Government in a contract or obligation for payment of money before an appropriation is made, unless authorized by law. This means you cannot incur obligations in a vacuum; you incur an obligation against budget authority in a Treasury account that belongs to your agency. It is a violation of the Antideficiency Act to incur an obligation in an amount greater than the amount available in the Treasury account that is available. This means that the account must have budget authority sufficient to cover the total of such obligations at the time the obligation is incurred. In addition, the obligation you incur must conform to other applicable provisions of law, and you must be able to support the amounts reported by the documentary evidence required by 31 U.S.C. § 1501. Moreover, you are required to maintain certifications and records showing that the amounts have been obligated (31 U.S.C. § 1108). The following subsections provide additional guidance on when to record obligations for the different types of goods and services or the amount.

Additional detail is provided in Circular A‐11.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 3500
Ex2: 5000000
Ex3: 0</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>25</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..unbounded)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ProgramActivityName<a id="C303"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Program Activity - Object Class</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Program Activity</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>56(A)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Name of a specific activity or project as listed in the program and financing schedules of the annual budget of the United States Government.  Defined in Section 82 of OMB Circular A-11.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1:  School improvement grants</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>164</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..unbounded)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Must be a valid project name for the corresponding TAS/TAFS as defined in Section 82 of OMB Circular A-11.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ProgramActivityCode<a id="C304"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Program Activity - Object Class</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Program Activity</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>56(B)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Code of a specific activity or project as listed in the program and financing schedules of the annual budget of the United States Government.  Defined in Section 82 of OMB Circular A-11.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1:  0002</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..unbounded)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>budget/accounting</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Must be a valid project code for the corresponding TAS/TAFS as defined in Section 82 of OMB Circular A-11.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AwardeeOrRecipient LegalEntityName<a id="C305"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Awardee/Recipient Legal Entity Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The name of the awardee or recipient that relates to the unique identifier. For U.S. based companies, this name is what the business ordinarily files in formation documents with individual states (when required).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: The Boeing Company
Ex2: Microsoft Corporation</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>120</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Derived from 9-digit number assigned by D&amp;B referred to as the DUNS number. DUNS exists in SAM and FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AwardeeOrRecipientUniqueIdentifier<a id="C306"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Awardee/Recipient Unique Identifier</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The unique identification number for an awardee or recipient. Currently the identifier is the 9-digit number assigned by D&amp;B referred to as the DUNS® number.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 009256819
Ex2: 081466849</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>9</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>9-digit number assigned by D&amp;B referred to as the DUNS number. DUNS exists in SAM and FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">UltimateParentUniqueIdentifier<a id="C307"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Ultimate Parent Unique Identifier</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>3</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The unique identification number for the ultimate parent of an awardee or recipient. Currently the identifier is the 9-digit number maintained by D&amp;B as the global parent DUNS® number.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 009256819
Ex2: 081466849</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>9</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>9-digit number maintained by D&amp;B as the global parent DUNS number. DUNS exists in SAM and FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">UltimateParentLegalEntityName<a id="C308"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Ultimate Parent Legal Entity Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The name of the ultimate parent of the awardee or recipient. Currently the name is from the global parent DUNS® number.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: The Boeing Company
Ex2: Microsoft Corporation</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>120</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Derived from DUNS. DUNS exists in SAM and FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">LegalEntityCongresionalDistrict<a id="C309"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Legal Entity Congressional District</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>6</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td> The congressional district in which the awardee or recipient is located. This is not a required data element for non-U.S. addresses.
 </td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 5
Ex2: 51
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>The congressional district is derived using a commercial mapping tool based on the ZIP+4 code provided. This is not a required data element for non-US addresses.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">LegalEntityCountryCode<a id="C310"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Legal Entity Country Code</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>7</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Code for the country in which the awardee or recipient is located, using the ISO 3166-1 Alpha-3 GENC Profile, and not the codes listed for those territories and possessions of the United States already identified as “states.”</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: USA
Ex2: IND</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>3</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>ISO 3166-1 Alpha-3 GENC Profile. Exists in SAM and FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">LegalEntityCountryName<a id="C311"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Legal Entity Country Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>8</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The name corresponding to the Country Code.
</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: United States
Ex2: India</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>100</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>ISO 3166-1 Alpha-3 GENC Profile. Exists in SAM and FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">TotalFundingAmount<a id="C312"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Current Total Funding Obligation Amount on Award</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>13</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The sum of the Amount of Award and the Non-Federal Funding Amount.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 3500
Ex2: 112345.32
Ex3: 0
Ex4: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>20</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>  </td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">NAICS_Code<a id="C313"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>North American Industrial Classification System (NAICS) Code</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>17</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The identifier that represents the North American Industrial Classification System Code assigned to the solicitation and resulting award identifying the industry in which the contract requirements are normally performed.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 541330
Ex2: 110000
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>6</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>2012 NAICS Code List
Code exists in FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">NAICS_Description<a id="C314"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>North American Industrial Classification System (NAICS) Description</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>18</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The title associated with the NAICS Code.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: Engineering
Ex2: Agriculture, Forestry, Fishing and Hunting
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>150</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>2012 NAICS Code List
Code exists in FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">CFDA_Number<a id="C315"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Catalog of Federal Domestic Assistance (CFDA) Number</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>19</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The number assigned to a Federal area of work in the Catalog of Federal Domestic Assistance.
</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 84.047X
Ex2: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>7</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>CFDA Code List</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">CFDA_Title<a id="C316"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Catalog of Federal Domestic Assistance (CFDA) Title</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>20</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The title of the area of work under which the Federal award was funded in the Catalog of Federal Domestic Assistance.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: TRIO_Upward Bound
Ex2: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>100</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>CFDA Code List</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AwardDescription<a id="C317"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Award Description</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>22</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>A brief description of the purpose of the award.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>IPEDS WEB DATA COLLECTION</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4000</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry in FPDS-NG for procurement.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PlaceOfPerfCongressionalDistrict<a id="C318"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Primary Place of Performance Congressional District</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>31</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td> U.S. Congressional district where the predominant performance of the award will be accomplished.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 5
Ex2: 51
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Derived using a commercial mapping tool based on the ZIP+4 code of the recipient address provided.  Valid entry in FPDS-NG for procurement.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PlaceOfPerfCountryCode<a id="C319"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Primary Place of Performance Country Code</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>32</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Country code where the predominant performance of the award will be accomplished.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: USA
Ex2: IND</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>3</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from the ISO 3166-1 Alpha-3 GENC Profile, less the codes listed for those territories and possessions of the United States already identified as “states.” Valid entry in FPDS-NG for procurement.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PlaceOfPerfCountryName<a id="C320"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Primary Place of Performance Country Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>33</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Name of the country represented by the country code where the predominant performance of the award will be accomplished.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: United States
Ex2: India</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>100</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Derived from ISO 3166-1 Alpha-3 GENC Profile. Valid entry in FPDS-NG for procurement.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AwardingAgencyName<a id="C321"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Awarding Agency Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>44</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The name associated with a department or establishment of the Government as used in the Treasury Appropriation Fund Symbol (TAFS) Account.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: Department of Education
Ex2: Department of Agriculture</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>50</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Derived from the Agency Code</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AwardingAgencyCode <a id="C322"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Awarding Agency Code</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>45</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>A department or establishment of the Government as used in the Treasury Appropriation Fund Symbol (TAFS) Account.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 091
Ex2: 075</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>3</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid 3-digit CGAC Code, per GWA Central Accounting and Reporting (CARS) System.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AccountTitle<a id="C323"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Account Title</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>208</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The description of the Program Source.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: Agricultural Research_Basic and Applied Research
Ex2: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>100</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PrimeAwardAgencyId<a id="C324"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Prime Award Agency Identifier</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>213</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Identifier used to link agency in FPDS-NG to award information.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1200
Ex2: 1100
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>50</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..unbounded)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PrimeAwardDateSubmitted<a id="C325"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Prime Award Date Submitted</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>214</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The date when FFATA Subaward Reporting System (FSRS) Report was submitted for the prime award.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 07/17/2017
Ex2: Jul 17, 2017
Ex3: 20170717
Ex4: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>25</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..unbounded)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PrimeAwardPrincipalPlaceStreetAddress<a id="C326"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Prime Award Principal Place of Performance Street Address</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>215</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The street address of the principal place where the work was / is performed.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 111 Main Street
Ex2: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>150</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..unbounded)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PrimeAwardReportId<a id="C327"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Prime Award Report Identifier</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>216</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The unique identifying record id.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: TEST1001KS1420
Ex2: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>50</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..unbounded)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AwardReportMonth<a id="C328"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Prime / Sub Award Report Month</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>217</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The FFATA Subaward Reporting System (FSRS) Report Period Month for the prime award or subaward.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: Oct
Ex2: October
Ex3: 10
Ex4: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>25</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..unbounded)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PrimeAwardReportType<a id="C329"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Prime Award Report Type</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>218</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The FFATA Subaward Reporting System (FSRS) Type of Report for the prime award.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: Purchase Orders (PO)
Ex2: Delivery Orders (DO)
Ex3: BPA Calls
Ex4: Stand-Alone Contracts (SAC)
Ex5: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>50</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..unbounded)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">AwardReportYear<a id="C330"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Prime / Sub Award Report Year</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>219</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The FFATA Subaward Reporting System (FSRS) Report Period Year for the prime award or subaward.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 2015
Ex2: 15
Ex3: [Blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..unbounded)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ArraModelQuestion1<a id="C331"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Prime / Sub Awardee American Recovery Act (ARRA) Model Question 1</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>220</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>True or false flag in response to FFATA question for the prime awardee: In your business or organization’s previous fiscal year, did your business or organization (including parent organization, all branches, and all affiliates worldwide) receive (1) 80 percent or more of your annual gross revenues in U.S. federal contracts, subcontracts, loans, grants, subgrants, and/or cooperative agreements; and (2) $25,000,000 or more in annual gross revenues from U.S. federal contracts, subcontracts, loans, grants, subgrants, and/or cooperative agreements?</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..unbounded)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ArraModelQuestion2<a id="C332"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Prime Sub / Awardee American Recovery Act (ARRA) Model Question 2</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>221</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>True or false flag in response to FFATA question for the prime awardee: Does the public have access to information about the compensation of the senior executives in your business or organization (including parent organization, all branches, and all affiliates worldwide) through periodic reports filed under section 13(a) or 15(d) of the Securities Exchange Act of 1934 (15 U.S.C. 78m (a), 78o (d)) or section 6104 of the Internal Revenue Code of 1986?</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 0 [no]
Ex2: 1 [yes]
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Boolean</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..unbounded)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">SubawardNumber<a id="C333"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Subaward Number</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>222</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>An identifying number assigned by the prime awardee organization to facilitate the tracking of its sub-contracts.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: xxxxxxxxxxxx
Ex2: x1x1x1x1x1x1
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>50</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..unbounded)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">SubawardeeBusinessType<a id="C334"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Subawardee Business Type</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>223</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Comma separated list representing sub-contractor business types pulled from FPDS-NG (Federal Procurement Data System - Next Generation) or Central Contract Registration (CCR).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: Plan Not Included - No Subcontracting
Ex2: Plan Not Required
Ex3: Plan Required - Incentive Not Included
Ex4: Plan Required - Incentive Included
Ex5: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>50</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..unbounded)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer1Amount<a id="C335"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Total Compensation</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>10(A)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The cash and noncash dollar value earned by the one of the five most highly compensated “Executives” during the awardee's preceding fiscal year and includes the following (for more information see 17 CFR 229.402c2): salary and bonuses, awards of stock, stock options, and stock appreciation rights, earnings for services under non-equity incentive plans, change in pension value, above-market earnings on deferred compensation which is not tax qualified, and other compensation.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1000000
Ex2: 1000000.15
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>38</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer2Amount<a id="C336"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Total Compensation</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>10(B)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as exec_comp_1</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1000000
Ex2: 1000000.15
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>38</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer3Amount<a id="C337"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Total Compensation</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>10(C)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as exec_comp_1</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1000000
Ex2: 1000000.15
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>38</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer4Amount<a id="C338"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Total Compensation</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>10(D)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as exec_comp_1</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1000000
Ex2: 1000000.15
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>38</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer5Amount<a id="C339"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Total Compensation</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>10(E)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as exec_comp_1</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1000000
Ex2: 1000000.15
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Numeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>38</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">TypeOfContractPricing<a id="C340"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Type of Transaction Code</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>16(A)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The type of contract as defined in FAR Part 16 that applies to this procurement.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: A
Ex2: 3
Ex3: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid code from FPDS-NG:
A Fixed Price Redetermination
B Fixed Price Level of Effort
J Firm Fixed Price
K Fixed Price with Economic Price Adjustment
L Fixed Price Incentive
M Fixed Price Award Fee
R Cost Plus Award Fee
S Cost No Fee
T Cost Sharing
U Cost Plus Fixed Fee
V Cost Plus Incentive Fee
Y Time and Materials
Z Labor Hours
1 Order Dependent (this applies to IDVs only.  IDV allows pricing arrangements to be determined separately for each order)
2 Combination – (this applies to awards only.  Applies to awards where two or more of the above apply.)  Note:  this value is not valid for awards after September 30, 2009.
3 Other (This applies to Awards only.  Applies to Awards where none of the above apply).  Note:  this value is not valid for awards after Sept 30, 2009.
</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ActionDateDay<a id="C341"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Action Date</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>25(A)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The calendar day of the date the action being reported was issued / signed by the government or a binding agreement was reached.  </td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1
Ex2: 31</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry in FPDS-NG for procurement</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ActionDateMonth<a id="C342"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Action Date</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>25(B)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The calendar month of the date the action being reported was issued / signed by the government or a binding agreement was reached.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1
Ex2: 12</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry in FPDS-NG for procurement</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">ActionDateYear<a id="C343"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Action Date</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>25(C)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The calendar year of the date the action being reported was issued / signed by the government or a binding agreement was reached.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 2014</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry in FPDS-NG for procurement</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PlaceOfPerfStreetLine1<a id="C344"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Primary Place of Performance Address</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>30(A)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Street Address where the predominant performance of the award will be accomplished.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1234 Monroe St. S.</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>150</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>  </td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PlaceOfPerfState<a id="C345"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Primary Place of Performance Address</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>30(D)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>State where the predominant performance of the award will be accomplished.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: MN
Ex2: DC
Ex3: PR
Ex4: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Names consistent with the USPS code. Valid entry in FPDS-NG for procurement.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PlaceOfPerfCountyName<a id="C346"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Primary Place of Performance Address</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>30(E)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>County where the predominant performance of the award will be accomplished.  </td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: Hennepin
Ex2: (blank)</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>40</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Names consistent with the USPS code. Valid entry in FPDS-NG for procurement.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">PlaceOfPerfPostalCode<a id="C347"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Primary Place of Performance Address</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>30(G)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Postal service code where the predominant performance of the award will be accomplished, when not located in the United States. This is an optional data element, and used instead of the ZIP+4 Code for non-US addresses</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 400-000
Ex2: 10</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>50</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>This is an optional data element, and used instead of the ZIP+4 Code for non-US addresses.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">piidPrefix<a id="C348"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>34(A)(i)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The prefix of the prime award indicating the Activity Address Code which is the department/agency and office issuing the instrument.  Use the AAC assigned to the program/funding office providing  the predominance of funding for the contract action as the program/funding office code.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: GS551
Ex2: DOL345
Ex3: (blank)</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>6</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">piidAwardYear<a id="C349"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>34(A)(ii)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The last two digits of the fiscal year in which the procurement instrument  is issued or awarded. This is the date the action is signed, not the effective date if the effective date is different.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 14
Ex2: (blank)</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">piidAwardType<a id="C350"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>34(A)(iii)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The type of instrument by entering one upper case letter in position nine of the PIID. Departments and independent agencies may assign those letters identified for department use in accordance with their agency policy; however, any use must be applied to the entire department or agency.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: A
Ex2: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">piidAwardNumber<a id="C351"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>34(A)(iv)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The number assigned by the issuing agency in these positions. Agencies may choose a minimum of four characters up to a maximum of eight characters to be used, but the same number of characters must be used agency-wide. If a number less than the maximum is used, do not use leading or trailing zeroes to make it equal the maximum in any system or data transmission. A separate series of numbers may be used for any type of instrument listed in paragraph (a)(3) of this section. An agency may reserve blocks of numbers or alpha-numeric numbers for use by its various components.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1234
Ex1: OPE123
Ex2: OPE12345</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>8</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Valid entry from FPDS-NG</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">fainAwardNumber<a id="C352"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Award Identification (ID) Number

Data standard: The unique identifier of the specific award being reported, i.e. FAIN for financial assistance and PIID for procurement.
</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>34(B)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The Federal Award Identification Number (FAIN) is the unique ID within the Federal agency for each financial assistance award.  Once an agency assigns a FAIN and reports it to USAspending.gov, the Federal agency may not- with limited exceptions ­ modify the FAIN during the life of the award. Further, once a Federal agency assigns a FAIN, that Federal agency must ensure that the FAIN is clearly identified in all Federal award documents. As a term and condition of the award, Federal agencies must require that all recipients document the assigned FAIN on each subaward under the Federal award. </td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 123456798
Ex1: OPE123
Ex2: 071OPE12345</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>50</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>  </td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">LegalEntityAddressStreet1<a id="C353"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Legal Entity Address</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>5(A)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>First line of awardee or recipient’s legal business address.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 1234 Monroe St. S.</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>150</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Derived from DUNS. DUNS exists in SAM and FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">LegalEntityAddressStreet2<a id="C354"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Legal Entity Address</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>5(B)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Second line of awardee or recipient’s legal business address.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: P.O. Box 12345
Ex2: ATTN: Jane Doe</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>150</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Derived from DUNS. DUNS exists in SAM and FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">LegalEntitylCityName<a id="C355"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Legal Entity Address</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>5(C)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Name of the city in which the awardee or recipient’s legal business address is located.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: Minneapolis
Ex2: Mumbai</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>40</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Derived from DUNS. Based on International Committee for Information Technology Standards (INCITS) 38, “Codes for the Identification of the States and Equivalent Areas within the United States, Puerto Rice, and the Insular Areas.”  DUNS exists in SAM and FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">LegalEntityStateCode<a id="C356"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Legal Entity Address</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>5(D)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>United States Postal Service (USPS) two-letter abbreviation for the state or territory in which the awardee or recipient’s legal business address is located. Identify States, the District of Columbia, territories (i.e., American Samoa, Guam, Northern Mariana Islands, Puerto Rico, U.S. Virgin Islands) and associated states (i.e., Republic of the Marshall Islands, the Federated States of Micronesia, and Palau) by their USPS two-letter abbreviation for the purposes of reporting. Report legal business address located in the Puerto Rico, Northern Mariana Islands, American Samoa, Guam, and U.S. Virgin Islands using USPS assigned state codes.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: MN
Ex2: DC
Ex3: PR</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>2</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Derived from DUNS. DUNS exists in SAM and FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">LegalEntityZip<a id="C357"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Legal Entity Address</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>5(E)(i)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>USPS zoning code associated with the awardee or recipient’s legal business address. This is not a required data element for non-US addresses. (First five digits)</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 55401
Ex2: 1234</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>5</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Derived from DUNS. Not valid for non-US address. DUNS exists in SAM and FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">LegalEntityZip+4<a id="C358"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Legal Entity Address</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>5(E)(ii)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>USPS zoning code associated with the awardee or recipient’s legal business address. This is not a required data element for non-US addresses. (Last four digits)</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 5769
Ex2 765</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Integer</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>4</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Derived from DUNS. Not valid for non-US address. DUNS exists in SAM and FPDS-NG.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">LegalEntityPostalCode<a id="C359"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Legal Entity Address</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>5(F)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Postal service code for awardee or recipient not located in the United States. This is an optional data element, and used instead of the ZIP+4 Code for non-US addresses.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: 400-000
Ex2: 10</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>50</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(0..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>This is an optional data element, and used instead of the ZIP+4 Code for non-US addresses.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer1FirstName<a id="C360"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(A)(i)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The first name of an individual identified as one of the five most highly compensated "Executives." "Executive" means officers, managing partners, or any other employees in management positions.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: Jane
Ex2: Andrés</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>35</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer1MiddleInitial<a id="C361"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(A)(ii)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The middle initial of an individual identified as one of the five most highly compensated "Executives." "Executive" means officers, managing partners, or any other employees in management positions.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: A
Ex2: [blank]</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer1LastName<a id="C362"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(A)(iii)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>The last name of an individual identified as one of the five most highly compensated "Executives." "Executive" means officers, managing partners, or any other employees in management positions.</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Ex1: Doe
Ex2: Manuel López Obrador</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Alphanumeric</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>35</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>(1..1)</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer2FirstName<a id="C363"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(B)(i)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer2MiddleInitial<a id="C364"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(B)(ii)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer2LastName<a id="C365"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(B)(iii)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer3FirstName<a id="C366"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(C)(i)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer3MiddleInitial<a id="C367"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(C)(ii)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer3LastName<a id="C368"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(C)(iii)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer4FirstName<a id="C369"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(D)(i)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer4MiddleInitial<a id="C370"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(D)(ii)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer4LastName<a id="C371"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(D)(iii)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer5FirstName<a id="C372"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(E)(i)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>Same as 9(A)(i).</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer5MiddleInitial<a id="C373"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(E)(ii)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>Same as 9(A)(ii).</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel panel-body">
						<table class="table table-striped" style="width: 100%">
							<thead>
								<tr>
									<th style="width: 20%">DATA Act Field Name</th>
									<th style="width: 80%">HighCompOfficer5LastName<a id="C374"> </a></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<strong>Schema Reporting Structure</strong>
									</td>
									<td>Subaward Attributes</td>
								</tr>
								<tr>
									<td>
										<strong>DATA Act Element Name</strong>
									</td>
									<td>Highly Compensated Officer Name</td>
								</tr>
								<tr>
									<td>
										<strong>Reference Field Number</strong>
									</td>
									<td>9(E)(iii)</td>
								</tr>
								<tr>
									<td>
										<strong>Definition or Description</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Example(s)</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Data Type</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Field Length</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Cardinality</strong>
									</td>
									<td>Same as 9(A)(iii).</td>
								</tr>
								<tr>
									<td>
										<strong>Business Line(s)</strong>
									</td>
									<td>procurement, financial assistance</td>
								</tr>
								<tr>
									<td>
										<strong>Domain Values, Derivations or Validations</strong>
									</td>
									<td>Exists in SAM and FSRS.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</body></html>
