GenMap();
  GenPlaceholder();
  GenScatter();

  $(document).ready(function () {
      $("input[type='radio']").on('change', function () {
           var selectedValue = $("input[name='radio']:checked").val();

           if (selectedValue === 'Map') {
               d3.selectAll('#viz_container').remove();
               GenMap();

             }else if(selectedValue === 'Table'){
               d3.selectAll("#viz_container").remove();
               d3.selectAll("#legend").remove();
               d3.select("#edu-tooltip").remove();
               d3.select("svg").remove();
               GenTable();
               GenPlaceholder();

             }
       });
  });

  function GenPlaceholder(){
    var svg = d3.select('#container2').append('svg')
                .attr("width","950px")
                .attr("height","650")
                .style("background-color","rgba(0, 0, 0, 0.7)")
                .attr("x","50")
                .attr("y","20")
                .attr("rx","20")
                .attr("ry","20")
                .text("PLACEHOLDER")
                .style("fill","#FFF");

    svg.append("svg:image")
    .attr('x', 275)
    .attr('y', 150)
    .attr('width', 400)
    .attr('height', 450)
    .attr("xlink:href", "GRUMPYCAT.png")

  }

  function GenScatter(){
    var formatNumber = d3.format("$,");
    var formatNumberNew = d3.format("$,.2");

    var margin = { top: 50, right:0, bottom: 50, left: 120 },
        outerWidth = 700,
        outerHeight = 700,
        width = outerWidth - margin.left - margin.right,
        height = outerHeight - margin.top - margin.bottom;

    var x = d3.scale.linear()
        .range([0, width]).nice();

    var y = d3.scale.linear()
        .range([height, 0]).nice();

    var xCat = "No_Staff",
        yCat = "Amount",
        colorCat = "Bin";

    d3.csv("/data-lab-data/binned_V2.csv", function(data) {
      data.forEach(function(d) {
        d.Amount = +d.Amount;
        d.No_Staff = +d.No_Staff;
      });

      var xMax = d3.max(data, function(d) { return d[xCat]; }) * 1.08,
          xMin = d3.min(data, function(d) { return d[xCat]; }),
          xMin = xMin > 0 ? 0 : xMin,
          yMax = d3.max(data, function(d) { return d[yCat]; }) * 1.08,
          yMin = d3.min(data, function(d) { return d[yCat]; }),
          yMin = yMin > 0 ? 0 : yMin;

      x.domain([xMin, xMax]);
      y.domain([yMin, yMax]);

      var xAxis = d3.svg.axis()
          .scale(x)
          .orient("bottom")
          .tickSize(-height);

      var yAxis = d3.svg.axis()
          .scale(y)
          .orient("left")
          .tickFormat(d3.format("$,"))
          .tickSize(-width);

      var color = d3.scale.category20c();

      var tip = d3.tip()
          .attr("class", "d3-tip")
          .offset([-10, 0])
          .html(function(d) {
            var per = d[yCat]/d[xCat];
            return "<b>"+ d["Recipient"] + "</b>" + "<br>"
            + "2015 Project grants awarded: " + "<b>" +formatNumber(d[yCat]) + "</b>" +"<br>"
            + "Number of full-time Research staff: "+ "<b>" + d["Research_number"] + "</b>" +"<br>"
            + "Number of Instructional staff: "+ "<b>" +d["No_Staff"] + "</b>" + "<br>"
            + "Grant $s per Instructor: "+ "<b>" +formatNumber(Math.floor(d[yCat]/d[xCat])) + "</b>" +"<br>"
            + "<b>" + d["Type"] + "</b>";
          });

      var zoomBeh = d3.behavior.zoom()
          .x(x)
          .y(y)
          .scaleExtent([0, 500])
          .on("zoom", zoom);

      var svg = d3.select("#scatter")
        .append("svg")
          .attr("width", outerWidth)
          .attr("height", outerHeight)
        .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
          .call(zoomBeh);

      svg.call(tip);

      svg.append("rect")
          .attr("width", width)
          .attr("height", height);

      svg.append("g")
          .classed("x axis", true)
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis)
        .append("text")
          .classed("label", true)
          .attr("x", width/2)
          .attr("y", margin.bottom - 10)
          .style("text-anchor", "middle")
          .text("Number of Homeless");

      svg.append("g")
          .classed("y axis", true)
          .call(yAxis)
        .append("text")
          .classed("label", true)
          .attr("transform", "rotate(-90)")
          .attr("x",-100)
          .attr("y",-margin.left+10)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Homeless CFDA Program Funds $");

      var objects = svg.append("svg")
          .classed("objects", true)
          .attr("width", width)
          .attr("height", height);

      objects.append("svg:line")
          .classed("axisLine hAxisLine", true)
          .attr("x1", 0)
          .attr("y1", 0)
          .attr("x2", width)
          .attr("y2", 0)
          .attr("transform", "translate(0," + height + ")");

      objects.append("svg:line")
          .classed("axisLine vAxisLine", true)
          .attr("x1", 0)
          .attr("y1", 0)
          .attr("x2", 0)
          .attr("y2", height);

      objects.selectAll(".dot")
          .data(data)
        .enter().append("circle")
          .classed("dot", true)
          .attr("r", function (d) { return 7 * Math.sqrt(4 / Math.PI); })
          .attr("transform", transform)
          .style("fill", function(d) { return color(d[colorCat]); })
          .on("mouseover", tip.show)
          .on("mouseout", tip.hide);

      d3.select("input[type=button]").on("click", change);

      function change() {
        xCat = "No_Staff";
        xMax = d3.max(data, function(d) { return d[xCat]; });
        xMin = d3.min(data, function(d) { return d[xCat]; });
        yCat = "Amount"
        yMax = d3.max(data, function(d) { return d[yCat]; });
        yMin = d3.min(data, function(d) { return d[yCat]; });
        zoomBeh.x(x.domain([0, xMax*1.05])).y(y.domain([0, yMax*1.05]));

        var svg = d3.select("#scatter").transition();

        svg.select(".x.axis").duration(750).call(xAxis).select(".label").text("Number of Homeless");
        svg.select(".y.axis").duration(750).call(yAxis).select(".label").text("Homeless CFDA Program Funds $");

        objects.selectAll(".dot").transition().duration(1000).attr("transform", transform);
      }

      function zoom() {
        svg.select(".x.axis").call(xAxis);
        svg.select(".y.axis").call(yAxis);

        svg.selectAll(".dot")
            .attr("transform", transform);
      }

      function transform(d) {
        return "translate(" + x(d[xCat]) + "," + y(d[yCat]) + ")";
      }
    });
  }

  function GenTable(){

    var column_names = ["Title","Views","Created On","URL"];
    var clicks = {title: 0, views: 0, created_on: 0, url: 0};

    d3.select("#container").append('div').attr("id","viz_container");

    d3.select("#viz_container").append("h3")
      .attr("id", "title")
      .style("text-align","center")
      .text("Continuum of Care Funding")

    d3.select("#viz_container").append("div")
      .attr("class", "SearchBar")
      .append("p")
        .attr("class", "SearchBar")
        .text("Search By Zip Code:");

    d3.select(".SearchBar")
      .append("input")
        .attr("class", "SearchBar")
        .attr("id", "search")
        .attr("type", "text")
        .attr("placeholder", "Search...")
        .style("font-family","inherit")
        .style("font-size","16");

    var table = d3.select("#viz_container").append("table");
    table.append("thead").append("tr");

    var headers = table.select("tr").selectAll("th")
        .data(column_names)
      .enter()
        .append("th")
        .text(function(d) { return d; });

    var rows, row_entries, row_entries_no_anchor, row_entries_with_anchor;

    d3.json("/data-lab-data/data.json", function(data) { // loading data from server

      // draw table body with rows
      table.append("tbody")

      // data bind
      rows = table.select("tbody").selectAll("tr")
        .data(data, function(d){ return d.id; });

      // enter the rows
      rows.enter()
        .append("tr")

      // enter td's in each row
      row_entries = rows.selectAll("td")
          .data(function(d) {
            var arr = [];
            for (var k in d) {
              if (d.hasOwnProperty(k)) {
    		    arr.push(d[k]);
              }
            }
            return [arr[3],arr[1],arr[2],arr[0]];
          })
        .enter()
          .append("td")

      // draw row entries with no anchor
      row_entries_no_anchor = row_entries.filter(function(d) {
        return (/https?:\/\//.test(d) == false)
      })
      row_entries_no_anchor.text(function(d) { return d; })

      // draw row entries with anchor
      row_entries_with_anchor = row_entries.filter(function(d) {
        return (/https?:\/\//.test(d) == true)
      })
      row_entries_with_anchor
        .append("a")
        .attr("href", function(d) { return d; })
        .attr("target", "_blank")
      .text(function(d) { return d; })


      /**  search functionality **/
        d3.select("#search")
          .on("keyup", function() { // filter according to key pressed
            var searched_data = data,
                text = this.value.trim();

            var searchResults = searched_data.map(function(r) {
              var regex = new RegExp("^" + text + ".*", "i");
              if (regex.test(r.title)) { // if there are any results
                return regex.exec(r.title)[0]; // return them to searchResults
              }
            })

    	    // filter blank entries from searchResults
            searchResults = searchResults.filter(function(r){
              return r != undefined;
            })

            // filter dataset with searchResults
            searched_data = searchResults.map(function(r) {
               return data.filter(function(p) {
                return p.title.indexOf(r) != -1;
              })
            })

            // flatten array
    		searched_data = [].concat.apply([], searched_data)

            // data bind with new data
    		rows = table.select("tbody").selectAll("tr")
    		  .data(searched_data, function(d){ return d.id; })

            // enter the rows
            rows.enter()
             .append("tr");

            // enter td's in each row
            row_entries = rows.selectAll("td")
                .data(function(d) {
                  var arr = [];
                  for (var k in d) {
                    if (d.hasOwnProperty(k)) {
    		          arr.push(d[k]);
                    }
                  }
                  return [arr[3],arr[1],arr[2],arr[0]];
                })
              .enter()
                .append("td")

            // draw row entries with no anchor
            row_entries_no_anchor = row_entries.filter(function(d) {
              return (/https?:\/\//.test(d) == false)
            })
            row_entries_no_anchor.text(function(d) { return d; })

            // draw row entries with anchor
            row_entries_with_anchor = row_entries.filter(function(d) {
              return (/https?:\/\//.test(d) == true)
            })
            row_entries_with_anchor
              .append("a")
              .attr("href", function(d) { return d; })
              .attr("target", "_blank")
            .text(function(d) { return d; })

            // exit
            rows.exit().remove();
          })

      /**  sort functionality **/
      headers.on("click", function(d) {
          if (d == "Title") {
            clicks.title++;
            // even number of clicks
            if (clicks.title % 2 == 0) {
              // sort ascending: alphabetically
              rows.sort(function(a,b) {
                if (a.title.toUpperCase() < b.title.toUpperCase()) {
                  return -1;
                } else if (a.title.toUpperCase() > b.title.toUpperCase()) {
                  return 1;
                } else {
                  return 0;
                }
              });
            // odd number of clicks
            } else if (clicks.title % 2 != 0) {
              // sort descending: alphabetically
              rows.sort(function(a,b) {
                if (a.title.toUpperCase() < b.title.toUpperCase()) {
                  return 1;
                } else if (a.title.toUpperCase() > b.title.toUpperCase()) {
                  return -1;
                } else {
                  return 0;
                }
              });
            }
          }
          if (d == "Views") {
    	    clicks.views++;
            // even number of clicks
            if (clicks.views % 2 == 0) {
              // sort ascending: numerically
              rows.sort(function(a,b) {
                if (+a.views < +b.views) {
                  return -1;
                } else if (+a.views > +b.views) {
                  return 1;
                } else {
                  return 0;
                }
              });
            // odd number of clicks
            } else if (clicks.views % 2 != 0) {
              // sort descending: numerically
              rows.sort(function(a,b) {
                if (+a.views < +b.views) {
                  return 1;
                } else if (+a.views > +b.views) {
                  return -1;
                } else {
                  return 0;
                }
              });
            }
          }
          if (d == "Created On") {
            clicks.created_on++;
            if (clicks.created_on % 2 == 0) {
              // sort ascending: by date
              rows.sort(function(a,b) {
                // grep date and time, split them apart, make Date objects for comparing
    	        var date = /[\d]{4}-[\d]{2}-[\d]{2}/.exec(a.created_on);
    	        date = date[0].split("-");
    	        var time = /[\d]{2}:[\d]{2}:[\d]{2}/.exec(a.created_on);
    	        time = time[0].split(":");
    	        var a_date_obj = new Date(+date[0],(+date[1]-1),+date[2],+time[0],+time[1],+time[2]);

                date = /[\d]{4}-[\d]{2}-[\d]{2}/.exec(b.created_on);
    	        date = date[0].split("-");
    	        time = /[\d]{2}:[\d]{2}:[\d]{2}/.exec(b.created_on);
    	        time = time[0].split(":");
    	        var b_date_obj = new Date(+date[0],(+date[1]-1),+date[2],+time[0],+time[1],+time[2]);

                if (a_date_obj < b_date_obj) {
                  return -1;
                } else if (a_date_obj > b_date_obj) {
                  return 1;
                } else {
                  return 0;
                }
              });
            // odd number of clicks
            } else if (clicks.created_on % 2 != 0) {
              // sort descending: by date
              rows.sort(function(a,b) {
                // grep date and time, split them apart, make Date objects for comparing
    	        var date = /[\d]{4}-[\d]{2}-[\d]{2}/.exec(a.created_on);
    	        date = date[0].split("-");
    	        var time = /[\d]{2}:[\d]{2}:[\d]{2}/.exec(a.created_on);
    	        time = time[0].split(":");
    	        var a_date_obj = new Date(+date[0],(+date[1]-1),+date[2],+time[0],+time[1],+time[2]);

                date = /[\d]{4}-[\d]{2}-[\d]{2}/.exec(b.created_on);
    	        date = date[0].split("-");
    	        time = /[\d]{2}:[\d]{2}:[\d]{2}/.exec(b.created_on);
    	        time = time[0].split(":");
    	        var b_date_obj = new Date(+date[0],(+date[1]-1),+date[2],+time[0],+time[1],+time[2]);

                if (a_date_obj < b_date_obj) {
                  return 1;
                } else if (a_date_obj > b_date_obj) {
                  return -1;
                } else {
                  return 0;
                }
              });
            }
          }
          if (d == "URL") {
            clicks.url++;
    	    // even number of clicks
            if (clicks.url % 2 == 0) {
              // sort ascending: alphabetically
              rows.sort(function(a,b) {
                if (a.thumb_url_default.toUpperCase() < b.thumb_url_default.toUpperCase()) {
                  return -1;
                } else if (a.thumb_url_default.toUpperCase() > b.thumb_url_default.toUpperCase()) {
                  return 1;
                } else {
                  return 0;
                }
              });
            // odd number of clicks
            } else if (clicks.url % 2 != 0) {
              // sort descending: alphabetically
              rows.sort(function(a,b) {
                if (a.thumb_url_default.toUpperCase() < b.thumb_url_default.toUpperCase()) {
                  return 1;
                } else if (a.thumb_url_default.toUpperCase() > b.thumb_url_default.toUpperCase()) {
                  return -1;
                } else {
                  return 0;
                }
              });
            }
          }
        }) // end of click listeners
    });
    d3.select(self.frameElement).style("height", "700px").style("width", "1024px");

  }

  function GenMap(){

    var opts = {
      lines: 9, // The number of lines to draw
      length: 16, // The length of each line
      width: 6.5, // The line thickness
      radius: 14, // The radius of the inner circle
      color: '#EE3124', // #rgb or #rrggbb or array of colors
      speed: 1.9, // Rounds per second
      trail: 40, // Afterglow percentage
      className: 'spinner', // The CSS class to assign to the spinner
    };

    var target = document.getElementById("container");

    var spinner = new Spinner(opts).spin(target);


    d3.select("#container").append('div').attr("id","legend");
    d3.select("#container").append('div').attr("id","viz_container");
    d3.select("#container").append('div').attr("id","edu-tooltip");
    d3.select("#edu-tooltip").append('div').attr("id","edu-tooltipContainer");
    d3.select("#edu-tooltipContainer").append('div').attr("class","edu-department");
    d3.select("#edu-tooltipContainer").append('div').attr("class","edu-rule");
    d3.select("#edu-tooltipContainer").append('div').attr("class","edu-name");
    d3.select("#edu-tooltipContainer").append('div').attr("class","edu-discretion");
    d3.select("#edu-tooltipContainer").append('div').attr("class","edu-valuesContainer");
    d3.select(".edu-valuesContainer").append('span').attr("class","edu-value");
    d3.select("#edu-tooltipContainer").append('div').attr("class","edu-chart");
    d3.select("#edu-tooltipContainer").append('div').attr("class","edu-tail");

    var width = 1024,
        height = 700,
        centered = null;

    // D3 Projection
    var projection = d3.geo.albersUsa()
               .translate([width/2, height/2.5])    // translate to center of screen
               .scale([1200]);          // scale things down so see entire US ---1455

    // Define path generator
    var path = d3.geo.path()               // path generator that will convert GeoJSON to SVG paths
             .projection(projection);  // tell path generator to use albersUsa projection

    var svg = d3.select("#viz_container")
                .append("svg")
                .attr("width", width)
                .attr("height", height);

    var formatNumber = d3.format("$,f");

  d3.json("/data-lab-data/zips_us_topo.json",function(us){
    d3.json("/data-lab-data/us-states.json", function(json) {
      d3.csv("/data-lab-data/zips_2.csv",function(d){return{ zip: d.zip,value: +d.value }},function(data){
        d3.csv("/data-lab-data/State_crosswalk.csv",function(states){

          spinner.stop();

          console.log("US: ",us);
          console.log("JSON-States: ",json);
          console.log("States: ",states);
          console.log("Data: ",data);

          var legendWidth = "1024px";

          var legend = d3.select("#legend")
                         .append("svg")
                         .attr("width","1024px")
                         .attr("height","100px")
                         .attr("padding","50px 0 0 50px");

          var linearGradient = legend.append("linearGradient")
                       .attr("id", "linear-gradient")
                       .attr("transform", "translate(" + 0 + "," + 70 + ")");

              linearGradient.attr("x1", "0%")
                            .attr("y1", "0%")
                            .attr("x2", "100%")
                            .attr("y2", "0%");

                            //Set the color for the start (0%)
              linearGradient.append("stop")
                  .attr("offset", "0%")
                  .attr("stop-color", "#FFF600");

              //Set the color for the end (100%)
              linearGradient.append("stop")
                  .attr("offset", "100%")
                  .attr("stop-color", "#960018");

              legend.append("rect")
                    .attr("width", legendWidth)
              	    .attr("height", 20)
              	    .style("fill", "url(#linear-gradient)");

                    //Append title
              legend.append("text")
              	.attr("class", "legendTitle")
              	.attr("x", 512)
              	.attr("y", 60)
              	.style("text-anchor", "middle")
              	.text("Continuum of Care Funding");

                var min = d3.min(data, function(d) { return d.value; });
                var max = d3.max(data, function(d) { return d.value; });

              //Set scale for x-axis
              var xScale = d3.scale.linear()
              	 .range([0, 1024])
              	 .domain([min,max] );

              //Define x-axis
              var xAxis = d3.svg.axis()
              	  .orient("bottom")
              	  .ticks(4)
              	  .tickFormat(function(d) { return formatNumber(d); })
                  .tickSize([6,0])
              	  .scale(xScale);


            //Set up X axis
            legend.append("g")
            	.attr("class", "axis")
            	.attr("transform", "translate(0," + 22 + ")")
            	.call(xAxis);



            var color = d3.scale.linear()
                                .domain([min,max])
                                .range(["#FFF600","#960018"]);


            var g = svg.append("g")
                        .attr("class", "counties")
                        .selectAll("path")
                        .data(topojson.feature(us, us.objects.zip_codes_for_the_usa).features)
                        .enter().append("path")
                        .attr("class", "zip")
                        .attr("data-zip", function(d) {return d.properties.zip; })
                        .attr("data-state", function(d) {return d.properties.state; })
                        .attr("data-name", function(d) {return d.properties.name; })
                        .attr("d", path)
                        .on("click", clicked)
                        .style("fill",getColor)
                        .on("mouseover",function(d,i) {
                                var el = d3.select(this)
                                var xpos = Number(el.attr('cx'))
                                var ypos = (el.attr('cy') - d.radius - 10)
                                el.style("stroke","#000").style("stroke-width",.25);
                                d3.select("#edu-tooltip")
                                .style("left", (d3.event.pageX-5) + "px")
                                .style("top", (d3.event.pageY-20) + "px")
                                .style('display','block')
                                  .classed('edu-plus', (d.changeCategory > 0))
                                  .classed('edu-minus', (d.changeCategory < 0));
                                d3.select("#edu-tooltip .edu-name").html(d.properties.name)

                                d3.select("#edu-tooltip .edu-discretion").text("text goes here")
                                d3.select("#edu-tooltip .edu-department").text(getState(d))
                                d3.select("#edu-tooltip .edu-value").text(getValue(d))
                              })
                        .on("mouseout",function(d,i) {
                          d3.select(this)
                          .style("stroke-width",.15)
                          .style("stroke","#FFF")
                          d3.select("#edu-tooltip").style('display','none')});

            function clicked(d) {
                     var x, y, k;

                     for(var i=0; i<states.length; i++){
                       if(d.properties.state==states[i].Abbrv){
                         for(var h=0; h<json.features.length; h++){
                           if(states[i].State==json.features[h].properties.NAME){
                             var n = json.features[h];
                             //console.log("clicked n: ",n);
                             if (n && centered !== n) {
                               var centroid = path.centroid(n);
                                          x = centroid[0];
                                          y = centroid[1];

                               //console.log("d: ",d.properties.NAME);
                               if(n.properties.NAME === "Florida"){ k = 5.0}
                               else if(n.properties.NAME === "Michigan"){ k = 5.5}
                               else if(n.properties.NAME === "Idaho"){ k = 3.25}
                               else if(n.properties.NAME === "Alaska"){ k = 5.0}
                               else if(n.properties.NAME === "Hawaii"){ k = 7.0}
                               else if(n.properties.CENSUSAREA <= 15000){ k = 11.0 }
                               else if(n.properties.CENSUSAREA > 15000  &&  n.properties.CENSUSAREA <= 30000) { k = 9.0 }
                               else if(n.properties.CENSUSAREA > 30000 &&  n.properties.CENSUSAREA <= 50000) { k = 8.0 }
                               else if(n.properties.CENSUSAREA > 50000 &&  n.properties.CENSUSAREA <= 70000 ) { k = 6.5 }
                               else if(n.properties.CENSUSAREA > 70000 && n.properties.CENSUSAREA <= 90000) { k = 6.0 }
                               else if(n.properties.CENSUSAREA > 90000 && n.properties.CENSUSAREA <= 110000 ) { k = 5.0 }
                               else if(n.properties.CENSUSAREA > 110000 && n.properties.CENSUSAREA <= 130000) { k = 4.0 }
                               else if(n.properties.CENSUSAREA > 130000 && n.properties.CENSUSAREA <= 150000 ) { k = 3.5 }
                               else{ k = 2.75 };
                               centered = n;

                             } else {
                               x = width / 2;
                               y = height / 2;
                               k = 1;
                               centered = null;

                             }

                             g.selectAll("path")
                                 .classed("active", centered && function(d) { return d === centered; });

                             g.transition()
                                 .duration(750)
                                 .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
                                 .style("stroke-width", .15 / k + "px");
                             }
                           }
                         }
                       }
                     }

            function getColor(d){
              for(var i=0; i<data.length;i++){
                if(d.properties.zip===data[i].zip){
                  return color(data[i].value);
                }
              }
            }

            function getValue(d){
              for(var i=0; i<data.length;i++){
                if(d.properties.zip===data[i].zip){
                  return formatNumber(data[i].value);
                }
              }
            }

            function getState(d){
              for(var i=0; i<states.length;i++){
                if(d.properties.state===states[i].Abbrv){
                  return states[i].State;
                }
              }
            }


        });
      });
    });
  });
}
