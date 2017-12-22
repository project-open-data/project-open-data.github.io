d3.select("#legend_scaleKey").append("circle")
  .attr('r', 25)
  .attr('class',"legend_scaleKeyCircle")
  .attr('cx', 60)
  .attr('cy', 65);
d3.select("#legend_scaleKey").append("circle")
  .attr('r', 35)
  .attr('class',"legend_scaleKeyCircle")
  .attr('cx', 60)
  .attr('cy', 65);
d3.select("#legend_scaleKey").append("circle")
  .attr('r', 45)
  .attr('class',"legend_scaleKeyCircle")
  .attr('cx', 60)
  .attr('cy', 65);
d3.select("#legend_scaleKey").append("circle")
  .attr('r', 55)
  .attr('class',"legend_scaleKeyCircle")
  .attr('cx', 60)
  .attr('cy', 65);


 var width = 550,
    height = 700,
    radius = (Math.max(width, height) / 2.5) - 30; //change 2 to a larger number to make burst smaller

  var formatNumber = d3.format("$,f");

  var x = d3.scale.linear()
    .range([0, 2 * Math.PI]);

  var y = d3.scale.sqrt()
    .range([0, radius]);

  var color = [{"name":"Department of Health and Human Services","color":"#702550"},{"name":"Department of Veterans Affairs","color":"#553A50"},{"name":"National Aeronautics and Space Administration","color":"#4E4861"},{"name":"Department of Energy","color":"#3F566E"},{"name":"Department of Homeland Security","color":"#2C6473"},{"name":"Department of Defense","color":"#1D7170"},{"name":"Department of Commerce","color":"#277D67"},{"name":"Department of State","color":"#438659"},{"name":"Agency for International Development","color":"#648D4A"},{"name":"Department of Justice","color":"#88923E"},{"name":"General Services Administration","color":"#AE933C"},{"name":"Department of the Treasury","color":"#D39248"},{"name":"Department of Transportation","color":"#D7924A"},{"name":"Department of Agriculture","color":"#DA914C"},{"name":"Department of Education","color":"#DE914E"},{"name":"Department of Housing and Urban Development","color":"#E19151"},{"name":"Department of the Interior","color":"#E49153"},{"name":"Environmental Protection Agency","color":"#E89056"},{"name":"Department of Labor","color":"#EB9058"},{"name":"Office of Personnel Management","color":"#EE905B"},{"name":"Social Security Administration","color":"#F1905E"},{"name":"National Science Foundation","color":"#F48F61"},{"name":"Securities and Exchange Commission","color":"#F78F64"},{"name":"Nuclear Regulatory Commission","color":"#F78F64"},{"name":"Executive Office of the President","color":"#F78F64"},{"name":"National Archives and Records Administration","color":"#F78F64"},{"name":"Broadcasting Board of Governors","color":"#F78F64"},{"name":"The Judicial Branch","color":"#F78F64"},{"name":"Federal Communications Commission","color":"#F78F64"},{"name":"Consumer Financial Protection Bureau","color":"#F78F64"},{"name":"Railroad Retirement Board","color":"#F78F64"},{"name":"Federal Trade Commission","color":"#F78F64"},{"name":"Small Business Administration","color":"#F78F64"},{"name":"Commodity Futures Trading Commission","color":"#F78F64"},{"name":"Export-Import Bank of the United States","color":"#F78F64"},{"name":"Consumer Product Safety Commission","color":"#F78F64"},{"name":"Government Accountability Office","color":"#F78F64"},{"name":"Court Services and Offender Supervision Agency","color":"#F78F64"},{"name":"Equal Employment Opportunity Commission","color":"#F78F64"},{"name":"Corporation for National and Community Service","color":"#F78F64"},{"name":"Federal Election Commission","color":"#F78F64"},{"name":"Armed Forces Retirement Home","color":"#F78F64"},{"name":"National Labor Relations Board","color":"#F78F64"},{"name":"International Trade Commission","color":"#F78F64"},{"name":"Federal Mediation and Conciliation Service","color":"#F78F64"},{"name":"Merit Systems Protection Board","color":"#F78F64"},{"name":"Federal Mine Safety and Health Review Commission","color":"#F78F64"},{"name":"U.S. Postal Service","color":"#F78F64"},{"name":"National Transportation Safety Board","color":"#F78F64"},{"name":"Defense Nuclear Facilities Safety Board","color":"#F78F64"},{"name":"Institute of Museum and Library Services","color":"#F78F64"},{"name":"National Endowment for the Arts","color":"#F78F64"},{"name":"Denali Commission","color":"#F78F64"},{"name":"Election Assistance Commission","color":"#F78F64"},{"name":"The Council of the Inspectors General on Integrity and Efficiency","color":"#F78F64"},{"name":"Gulf Coast Ecosystem Restoration Council","color":"#F78F64"},{"name":"Morris K. Udall and Stewart L. Udall Foundation","color":"#F78F64"},{"name":"Federal Labor Relations Authority","color":"#F78F64"},{"name":"Access Board","color":"#F78F64"},{"name":"United States Chemical Safety Board","color":"#F78F64"},{"name":"Office of Special Counsel","color":"#F78F64"},{"name":"Office of Government Ethics","color":"#F78F64"},{"name":"Federal Maritime Commission","color":"#F78F64"},{"name":"National Mediation Board","color":"#F78F64"},{"name":"Library of Congress","color":"#F78F64"},{"name":"Millennium Challenge Corporation","color":"#F78F64"},{"name":"The Legislative Branch","color":"#F78F64"}];
  var partition = d3.layout.partition()
    .value(function(d) { return d.size; });

  var arc = d3.svg.arc()
    .startAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x))); })
    .endAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx))); })
    .innerRadius(function(d) { return Math.max(0, y(d.y)); })
    .outerRadius(function(d) { return Math.max(0, y(d.y + d.dy)); });

  var svg = d3.select("#sunburst").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + (width / 2-20) + "," + (height / 2-100) + ")");

// new
var opts = {
  lines: 9, // The number of lines to draw
  length: 9, // The length of each line
  width: 5, // The line thickness
  radius: 14, // The radius of the inner circle
  color: '#EE3124', // #rgb or #rrggbb or array of colors
  speed: 1.9, // Rounds per second
  trail: 40, // Afterglow percentage
  className: 'spinner', // The CSS class to assign to the spinner
};
//

// new
var target = document.getElementById("sunburst");
//

// new
function init() {

    // trigger loader
    var spinner = new Spinner(opts).spin(target);
//

d3.csv('/data-lab-data/awards_contracts.csv',function(error,newData){
  d3.csv('/data-lab-data/PSC_by_Recip.csv',function(error,recip){
    d3.json('/data-lab-data/Recip_Details.json',function(error,details){
      d3.csv('/data-lab-data/others.csv',function(error,other){

        //new
        spinner.stop();
        //

        console.log("Hierarchy: ",newData);
        console.log("recip: ",recip);
        console.log("details: ",details);
        console.log("other: ",other);

        var root = { name :"FY17 Q2 Contract Awards", children : [] },
            levels = ["Agency","Subagency"];

        newData.forEach(function(d){
          // Keep this as a reference to the current level
          var depthCursor = root.children;
          // Go down one level at a time
          levels.forEach(function( property, depth ){

              // Look to see if a branch has already been created
              var index;
              depthCursor.forEach(function(child,i){
                  if ( d[property] == child.name ) index = i;
              });
              // Add a branch if it isn't there
              if ( isNaN(index) ) {
                  depthCursor.push({ name : d[property], children : []});
                  index = depthCursor.length - 1;
              }
              // Now reference the new child array as we go deeper into the tree
              depthCursor = depthCursor[index].children;
              // This is a leaf, so add the last element to the specified branch
              if ( depth === levels.length - 1 ) depthCursor.push({ name : d.Recipient, size : d.Obligation });
          });
        });

        console.log("root:",root);

        svg.selectAll("path")
          .data(partition.nodes(root))
        .enter().append("path")
          .attr("d", arc)
          .on("mouseover",update_legend)
          .on("mouseout",remove_legend)
          .style("cursor","pointer")
          .style("fill", function(d) {
            //console.log("d: ",d.name);
            if (d.depth === 0){return "#FFFFFF";}        //Root
            else if (d.depth === 1) {for(i=0; i<color.length; i++){if(d.name===color[i].name){return color[i].color;}}}  //Agency
            else if (d.depth === 2) {for(i=0; i<color.length; i++){if(d.parent.name===color[i].name){return d3.rgb(color[i].color).darker(-.75);}}} //Subagency
            else if (d.depth === 3) {for(i=0; i<color.length; i++){if(d.parent.parent.name===color[i].name){return d3.rgb(color[i].color).darker(-1.25);}}}    //Contractors
            })
          .on("click", click)
          .append("title")
            .text( function(d){if(d.depth===0){ return d.name + "\n" + formatNumber(d.value)}else{return "Click to zoom"}});

        //$('#panel').contents().filter(function(){
          //return this.nodeType === 3;
        //}).remove();

        function click(d) {
          svg.transition()
            .duration(750)
            .tween("scale", function() {
            var xd = d3.interpolate(x.domain(), [d.x, d.x + d.dx]),
                yd = d3.interpolate(y.domain(), [d.y, 1]),
                yr = d3.interpolate(y.range(), [d.y ? 20 : 0, radius]);
            return function(t) { x.domain(xd(t)); y.domain(yd(t)).range(yr(t)); };
            })
          .selectAll("path")
            .attrTween("d", function(d) { return function() { return arc(d); }; });
        }

        var legend = d3.select("#sunburst-panel");

        function intialize_legend(d){
          $("#sunburst-panel").empty();
              legend.append("div")
                .attr("id","tab")
                .attr("height",169)
                .attr("width",422)
                .html("<h1 class='panel_title'>"+d.name+"</h1>"+
                "<h3 class='panel_desc'>"+formatNumber(d.value)+
                "<br />"+"</h3>");

              for(var k=0; k < 10; k++){
                legend.append("div")
                  .attr("id","tab_2")
                  .attr("height",169)
                  .attr("width",422)
                  .style("margin-bottom","2px")
                  .html("<table class ='icon'>"
                  +"<tr>"+"<td class='val'>"+formatNumber(d.children[k].value)+"</td>"+
                  "<td class='name'>"+d.children[k].name+"</td>"+"</tr>"+"</table>");
                  }
        }

        intialize_legend(root);

        function update_legend(d)
          {
            // Create central node panel --- Top 10 Agencies
            if (d.depth === 0){
              $("#sunburst-panel").empty();
              legend.append("div")
                .attr("id","tab")
                .attr("height",169)
                .attr("width",422)
                .html("<h1 class='panel_title'>"+d.name+"</h1>"+
                "<h3 class='panel_desc'>"+formatNumber(d.value)+
                "<br />"+"</h3>");

              for(var k=0; k < 10; k++){
                legend.append("div")
                  .attr("id","tab_2")
                  .attr("height",169)
                  .attr("width",422)
                  .style("margin-bottom","2px")
                  .html("<table class ='icon'>"
                  +"<tr>"+"<td class='val'>"+formatNumber(d.children[k].value)+"</td>"+
                  "<td class='name'>"+d.children[k].name+"</td>"+"</tr>"+"</table>");
                  }


            }else if (d.depth === 3 && d.name != "Other"){
              // Contractors
              for(var i=0; i<details.length; i++){
                if(d.name === details[i].name){
                  $("#sunburst-panel").empty(); //new
                  legend.append("div") //new
                    .attr("id","tab") //new
                    .attr("height",169) //new
                    .attr("width",422) //new
                    .html("<h2 class='title'>"+d.name.toLowerCase()+"</h2>"+
                          "<h1>"+formatNumber(d.value)+"</h1>"+
                          "<p>"+details[i].city.toLowerCase() + ', ' + details[i].state.toLowerCase() +'</p>'+
                          '<h3> has been awarded a net total of '+
                          formatNumber(details[i].size)+' in contracts in Q2 2017</h3>');

                  for(var q=0; q<recip.length; q++){
                    if( d.parent.name=== recip[q].Subagency && d.name === recip[q].Recipient){

                        var g = legend.append("div")
                                      .attr("id","psc_panel")
                                      .attr("height",155)
                                      .attr("width",465)
                                      .style("margin","[0,0,0,0]");

                        g.append("img")
                            .attr("src",function(){return "/data-lab-data/Sunburst_Icons_SVGs/"+recip[q].icon;})
                            .attr("class","icon_svg");

                        g.append("div")
                            .attr("id","psc")
                            .attr("height",10)
                            .attr("width",50)
                            .html("<table class ='icon_x'>"
                            +"<tr>"+"<td class='name'>"+recip[q].PSC+"</td>"+"</tr>"+"</table>");

                        g.append("div")
                            .attr("id","obligation")
                            .attr("height",10)
                            .attr("width",50)
                            .html("<table class ='icon_x'>"
                            +"<tr>"+"<td class='val'>"+formatNumber(recip[q].Obligation)+"</td>"+"</tr>"+"</table>");
                      }}
                }}

            }else if(d.depth === 3 && d.name == "Other"){
              $("#sunburst-panel").empty();
              //Contractors < $1,000,000
              legend.append("div")
                .attr("id","tab")
                .attr("height",169)
                .attr("width",465)
                .html("<h3>Other Contractors Supporting the </h3><h3>"+d.parent.name+"</h3><h3>with Contract Values Less Than $1,000,000</h3>"+
                "<h4>These Contracts are Worth a Total Value of "+formatNumber(d.value)+"</h4>"+
                "<h4>Top Contactors</h4>");

              for(var l =0; l<other.length; l++){
                if(d.parent.name===other[l].sub){

                    legend.append("div")
                      .attr("id","tab_2")
                      .attr("height",169)
                      .attr("width",465)
                      .style("margin-bottom","2px")
                      .html("<table class ='icon'>"
                      +"<tr>"+"<td class='val'>"+formatNumber(other[l].size)+"</td>"+
                      "<td class='name'>"+other[l].name+"</td>"+"</tr>"+"</table>");
                }
              }

            }else if(d.depth === 1){
              //Agencies
                $("#sunburst-panel").empty();
                legend.append("div")
                  .attr("id","tab")
                  .attr("height",169)
                  .attr("width",465)
                  .html("<h2 class='title'>"+d.name+"</h2><h1>"+formatNumber(d.value)+"</h1>"+"<h4>"+"Agencies"+"</h4>");

                  if(d.children.length<=5){
                    var t=d.children.length;
                  }else{
                    var t=5;
                  }

                  for(var k=0; k < t; k++){
                    legend.append("div")
                      .attr("id","tab_2")
                      .attr("height",169)
                      .attr("width",465)
                      .style("margin-bottom","2px")
                      .html("<table class ='icon'>"
                      +"<tr>"+"<td class='val'>"+formatNumber(d.children[k].value)+"</td>"+
                      "<td class='name'>"+d.children[k].name+"</td>"+"</tr>"+"</table>");
                      }
                legend.transition().duration(500).style("opacity","1");
            }else{
              //Subagencies
                $("#sunburst-panel").empty();
                legend.append("div")
                  .attr("id","tab")
                  .attr("height",169)
                  .attr("width",465)
                  .html("<h2 class='title'>"+d.name+"</h2><h1>"+formatNumber(d.value)+"</h1>"+"<h4>"+"Contractors"+"</h4>");

                  if(d.children.length<=5){
                    var t=d.children.length;
                  }else{
                    var t=5;
                  }

                  for(var k=0; k < t; k++){
                    legend.append("div")
                      .attr("id","tab_2")
                      .attr("height",169)
                      .attr("width",465)
                      .style("margin-bottom","2px")
                      .html("<table class ='icon'>"
                      +"<tr>"+"<td class='val'>"+formatNumber(d.children[k].value)+"</td>"+
                      "<td class='name'>"+d.children[k].name+"</td>"+"</tr>"+"</table>");
                      }
                legend.transition().duration(500).style("opacity","1");
            }
        }

          function remove_legend(d){
             legend.transition().duration(1000).style("opacity","1");
           }

      });
    });
  });
});

  d3.select(self.frameElement).style("height", height + "px");
//new
}

init();
//
