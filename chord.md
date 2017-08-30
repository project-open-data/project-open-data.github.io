---
published: true
permalink: /data-lab/chord/
layout: act-ivity-front
filename: chord.md
title: Chord
---
<html lang="en">
<meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0">
<head>
  <script src="https://d3js.org/d3.v3.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="http://d3js.org/queue.v1.min.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" type="text/css">


<title>title</title>
<style>
*{
  font-family: 'Source Sans Pro', sans-serif;
  background-color: #F3F6FF;
}
img{
  top:10px;
  height:125px;
  width:450px;
  position: absolute;
}
#container{
  position:absolute;
  background-color: inherit;
  font-family: inherit;
  width:1300px;
  height:750px;
  overflow: visible;
}
#panel h1{
  font-size:3em;
  font-style:inherit;
  font-weight: lighter;
  margin: 0;
  padding: 0;
  color:#0071BC;
}
#panel h2{
  font-size:2.1em;
  font-style:inherit;
  font-weight: ultra-light;
  margin: 0;
  padding: 0;
  color:#666666;
}
#panel h3{
  font-size:1.4em;
  margin: 0;
  padding: 0;
  text-transform: capitalize;
  /*font-variant:small-caps;*/
  color:#555555;
}
#panel h4{
  font-size:1.5em;
  text-transform: capitalize;
  /*font-variant:small-caps;*/
  font-style:inherit;
  color:#555555;
}
#panel p{
  font-style:inherit;
  font-size:1.2em;
  /*margin-top: -3px;
  text-transform: capitalize;
  font-variant:small-caps;*/
  color:#555555;
}
#logo{
  position:absolute;
  margin-top: -25px;
  margin-left: 40px;
  /*z-index: 100;*/
  background-color: rgba(243,246,255,0);
}
#viz_container{
  left:75px;
  float:right;
  overflow: visible;
  position: relative;
  height: inherit;
  width:720px;
  margin-top: -585px;
  background-color: rgba(243,246,255,0);
}
#viz_container > svg{
  position: relative;
  background-color: rgba(243,246,255,0);
}
#circle circle {
  fill: none;
  pointer-events: all;
}
.group path {
  fill-opacity: .5;
}
path.chord {
  stroke: #000;
  stroke-width: .25px;
}
#circle:hover path.fade {
  display: none;
}
#panel {
  position: relative;
  float: left;
  text-align:left;
  top: 110px;
  margin-top: 15px;
  padding-right:20px;
  padding-left:40px;
  width: 550px;
  height: 600px;
  background-color: inherit;
}
.panel_desc{
  margin-top: 10px;
}
#tab{
  margin-top: -20px;
}
#tab_1, #tab_2{
  margin-top: 20px;
}
</style>
</head>

<body>
	<div id="container" class="container-fluid">
    <div id="logo">
      <a href="https://beta.usaspending.gov/#/">
        <img src="{{site.baseurl}}/assets/graphics/usaspending-logo_analytics_stacked.svg"/>
      </a>
    </div>
     <div id="panel"></div>
     <div id="viz_container"></div>
	</div>

	<script>

    var transactions = [{"transactions":[{"name":"The Judicial Branch","trans":[{"In":[{}],"Out":[{"name":"Department of Justice","value":249131577.1}]}]},{"name":"Executive Office of the President","trans":[{"In":[{"name":"Department of State","value":12415639.8}],"Out":[{"name":"Department of the Navy","value":22705895.21},{"name":"Department of State","value":624960232.8},{"name":"Department of the Army","value":34627441.06},{"name":"Department of the Air Force","value":9220944.39},{"name":"Department of Defense","value":4917928316}]}]},{"name":"Department of Agriculture","trans":[{"In":[{"name":"Appalachian Regional Commission","value":17392764.61}],"Out":[{"name":"Department of the Interior","value":65972.21},{"name":"Agency for International Development","value":252000740.8}]}]},{"name":"Department of the Interior","trans":[{"In":[{"name":"Department of Agriculture","value":65972.21},{"name":"Department of Transportation","value":35199812.52},{"name":"Department of Health and Human Services","value":47677784}],"Out":[{"name":"Environmental Protection Agency","value":147475.17},{"name":"Corps of Engineers - Civil Works","value":853447.35}]}]},{"name":"Department of State","trans":[{"In":[{"name":"Executive Office of the President","value":624960232.8},{"name":"Agency for International Development","value":618537901.3}],"Out":[{"name":"Executive Office of the President","value":12415639.8},{"name":"Agency for International Development","value":2667743596},{"name":"Department of Defense","value":22694947.95},{"name":"Millenium Challenge Corporation","value":3109513.29}]}]},{"name":"Department of Veterans Affairs","trans":[{"In":[{}],"Out":[{"name":"Department of Defense","value":16649148.84}]}]},{"name":"Department of the Air Force","trans":[{"In":[{"name":"Executive Office of the President","value":9220944.39}],"Out":[{"name":"Department of Transportation","value":10651255.68}]}]},{"name":"Department of Transportation","trans":[{"In":[{"name":"Department of the Air Force","value":10651255.68},{"name":"Appalachian Regional Commission","value":1703776}],"Out":[{"name":"Department of the Interior","value":35199812.52},{"name":"Department of the Navy","value":152327.09},{"name":"Department of the Army","value":244695.23},{"name":"Corps of Engineers - Civil Works","value":1768624.15}]}]},{"name":"Agency for International Development","trans":[{"In":[{"name":"Department of Agriculture","value":252000740.8},{"name":"Department of State","value":2667743596}],"Out":[{"name":"Department of State","value":618537901.3}]}]},{"name":"Department of Health and Human Services","trans":[{"In":[{}],"Out":[{"name":"Department of the Interior","value":47677784}]}]},{"name":"Department of Energy","trans":[{"In":[{}],"Out":[{"name":"Corps of Engineers - Civil Works","value":128875383.3}]}]},{"name":"Appalachian Regional Commission","trans":[{"In":[{}],"Out":[{"name":"Department of Agriculture","value":17392764.61},{"name":"Department of Commerce","value":355658},{"name":"Department of Transportation","value":1703776},{"name":"Department of Housing and Urban Development","value":1443000}]}]},{"name":"Department of Justice","trans":[{"In":[{"name":"The Judicial Branch","value":249131577.1}],"Out":[{}]}]},{"name":"Department of the Navy","trans":[{"In":[{"name":"Executive Office of the President","value":22705895.21},{"name":"Department of Transportation","value":152327.09}],"Out":[{}]}]},{"name":"Department of the Army","trans":[{"In":[{"name":"Executive Office of the President","value":34627441.06},{"name":"Department of Transportation","value":244695.23}],"Out":[{}]}]},{"name":"Department of Defense","trans":[{"In":[{"name":"Executive Office of the President","value":4917928316},{"name":"Department of State","value":22694947.95},{"name":"Department of Veterans Affairs","value":16649148.84}],"Out":[{}]}]},{"name":"Environmental Protection Agency","trans":[{"In":[{"name":"Department of the Interior","value":147475.17}],"Out":[{}]}]},{"name":"Corps of Engineers - Civil Works","trans":[{"In":[{"name":"Department of the Interior","value":853447.35},{"name":"Department of Transportation","value":1768624.15},{"name":"Department of Energy","value":128875383.3}],"Out":[{}]}]},{"name":"Millenium Challenge Corporation","trans":[{"In":[{"name":"Department of State","value":3109513.29}],"Out":[{}]}]},{"name":"Department of Commerce","trans":[{"In":[{"name":"Appalachian Regional Commission","value":355658}],"Out":[{}]}]},{"name":"Department of Housing and Urban Development","trans":[{"In":[{"name":"Appalachian Regional Commission","value":1443000}],"Out":[{}]}]}]}];
    var width = 720,
        height = 720,
        outerRadius = Math.min(width, height) / 2 - 10,
        innerRadius = outerRadius - 24;
    var formatPercent = d3.format("$,.0f");
    var arc = d3.svg.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);
    var layout = d3.layout.chord()
        .padding(0)
        .sortSubgroups(d3.descending)
        .sortChords(d3.ascending);
    var path = d3.svg.chord()
        .radius(innerRadius);
    var svg = d3.select("#viz_container").append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("id", "circle")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    svg.append("circle")
        .attr("r", outerRadius);
    queue()
        .defer(d3.json, "{{site.baseurl}}/data/agencies.json")
        .defer(d3.json, "{{site.baseurl}}/data/matrix.json")
        .await(ready);
    function ready(error, cities, matrix) {
      if (error) throw error;
      // Compute the chord layout.
      layout.matrix(matrix);
      // Add a group per neighborhood.
      var group = svg.selectAll(".group")
          .data(layout.groups)
        .enter().append("g")
          .attr("class", "group")
          .on("mouseover", mouseover)
          .on("mouseout", mouseout);
      // Add a mouseover title.
      group.append("title").text(function(d, i) {
        return cities[i].name + " is the origin of " + formatPercent(d.value) + " in transfers to other agencies";
      });
      // Add the group arc.
      var groupPath = group.append("path")
          .attr("id", function(d, i) { return "group" + i; })
          .attr("d", arc)
          .style("fill", function(d, i) { return cities[i].color; });
      // Add a text label.
      //var groupText = group.append("text")
          //.attr("x", 6)
          //.attr("dy", 15);
      //groupText.append("textPath")
          //.attr("xlink:href", function(d, i) { return "#group" + i; })
          //.text(function(d, i) { return cities[i].name; });
      // Remove the labels that don't fit. :(
      //groupText.filter(function(d, i) { return groupPath[0][i].getTotalLength() / 2 - 16 < this.getComputedTextLength(); })
          //.remove();
      // Add the chords.
      var chord = svg.selectAll(".chord")
          .data(layout.chords)
        .enter().append("path")
          .attr("class", "chord")
          .style("fill", function(d) { return cities[d.source.index].color; })
          .attr("d", path);

      var legend = d3.select("#panel")

      function mouseover(d, i) {
        chord.classed("fade", function(p) {
          return p.source.index != i
              && p.target.index != i;
        });
        /*console.log("mouseover: ",cities[i].name);*/
        for(var q=0; q < transactions[0].transactions.length; q++){
          if( cities[i].name=== transactions[0].transactions[q].name){

              legend.append("div")
                .attr("id","tab")
                .attr("height",200)
                .attr("width",500)
                .html("<h1 class='panel_title'>"+transactions[0].transactions[q].name+"</h1>"+
                "<p class='panel_desc'>"+"This shows the amount of funds transferred between agencies"+
                "<br />"+"Reimbursable agreements and invoiceable line items are generally not displayed"+"</p>");

            if(transactions[0].transactions[q].trans[0].In.length > 0 && transactions[0].transactions[q].trans[0].In[0].name){
              console.log("IN: ",transactions[0].transactions[q].trans[0].In[0].name);
              legend.append("div")
                .attr("id","tab_1")
                .attr("height",200)
                .attr("width",500)
                .html("<h3 class='panel_desc'>"+transactions[0].transactions[q].name+
                " recieves funds from "+"</h3>")
              for(var h=0; h < transactions[0].transactions[q].trans[0].In.length; h++){
              legend.append("div")
                .attr("id","tab_1_1")
                .attr("height",200)
                .attr("width",500)
                .style("margin","2px")
                .html("<table class ='icon'>"
                +"<tr>"+"<td class='val'>"+formatPercent(transactions[0].transactions[q].trans[0].In[h].value)+"</td>"+
                "<td class='name'>"+transactions[0].transactions[q].trans[0].In[h].name+"</td>"+"</tr>"+
                "</table>");
                /*legend.append("svg")
                  .attr("class","icon")
                  .attr("height",100)
                  .attr("width",100)
                  .style("margin","2px")
                  .style("background-color","#555555");*/
                }
              }

              if(transactions[0].transactions[q].trans[0].Out.length > 0 && transactions[0].transactions[q].trans[0].Out[0].name){
                console.log("OUT: ",transactions[0].transactions[q].trans[0].Out[0].name)
                legend.append("div")
                  .attr("id","tab_2")
                  .attr("height",200)
                  .attr("width",500)
                  .html("<h3 class='panel_desc'>"+transactions[0].transactions[q].name+
                  " transfers funds to "+"</h3>")
                for(var k=0; k < transactions[0].transactions[q].trans[0].Out.length; k++){
                legend.append("div")
                  .attr("id","tab_2_1")
                  .attr("height",200)
                  .attr("width",500)
                  .style("margin","2px")
                  .html("<table class ='icon'>"
                  +"<tr>"+"<td class='val'>"+formatPercent(transactions[0].transactions[q].trans[0].Out[k].value)+"</td>"+
                  "<td class='name'>"+transactions[0].transactions[q].trans[0].Out[k].name+"</td>"+"</tr>"+
                  "</table>");
                  /*legend.append("svg")
                    .attr("class","icon")
                    .attr("height",100)
                    .attr("width",100)
                    .style("margin","2px")
                    .style("background-color","#555555");*/
                  }
                }


                  legend.transition().duration(200).style("opacity","1");
          }
        }
      }


     function mouseout(d){
       legend.transition().duration(700).style("opacity","0");
       d3.selectAll(".icon").remove();
       d3.selectAll(".panel_title").remove();
       d3.selectAll(".panel_desc").remove();
     }

   }


	</script>
</body>
</html>
