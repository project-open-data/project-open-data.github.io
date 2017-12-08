// GenMap starts on line 766
// GenTable starts on line 352
// GenPanelTwo starts on line 27
// GenScatter starts on line 179
// *****************************
  GenMap();
  GenPanelTwo();
  GenScatter();

  $(document).ready(function () {
    $("input[type='radio']").on('change', function () {
           var selectedValue = $("input[name='radio']:checked").val();

           if(selectedValue === 'Map') {
               d3.selectAll('#viz_container').remove()
               d3.selectAll("svg").remove()
               d3.select("svg_1").remove()
               d3.select("svg_2").remove()
               GenMap()
               GenPanelTwo()
               GenScatter();

             }else if(selectedValue === 'Table'){
               d3.selectAll("#viz_container").remove()
               d3.selectAll("#legend").remove()
               d3.selectAll("svg").remove()
               d3.select("svg_1").remove()
               d3.select("svg_2").remove()
               GenTable()
               GenPanelTwo()
               GenScatter()
             }
    })
  })

  function GenPanelTwo(){
    var formatNumber = d3.format("$,");

    var abs_width = 1024,
        abs_height = 550,
        margin = { top: 100, right:50, bottom: 15, left: 100 },
        panel_2_width = abs_width - margin.left - margin.right,
        panel_2_height = abs_height - margin.top - margin.bottom,
        matrix_width = abs_width/1.85 - margin.left - margin.right,
        matrix_height = abs_height - margin.top - margin.bottom,
        map_width = panel_2_width-matrix_width - margin.left - margin.right,
        map_height = panel_2_height/3,
        info_width = panel_2_width-matrix_width - margin.left - margin.right,
        info_height = panel_2_height/3;

    var svg_1 = d3.select("#panel_map")
        .append("svg")
        .attr("width", map_width + margin.left + margin.right)
        .attr("height", map_height + margin.top + margin.bottom);

    var svg_2 = d3.select("#panel_info")
        .append("svg")
        .attr("width", info_width + margin.left + margin.right)
        .attr("height", info_height + margin.top + margin.bottom);

    var svg = d3.select("#panel_matrix").append("svg")
        .attr("width", matrix_width + margin.left + margin.right)
        .attr("height", matrix_height + margin.top + margin.bottom)
        .style("margin-left", -margin.left/2.5 + "px")
        .attr("transform", "translate(" + 40 + ","+ 10 +")");


  console.log("svg: ", svg);
  console.log("width: ",svg[0][0].attributes[0].nodeValue);

  d3.csv("/data-lab-data/test_v2.csv",function(bar_chrt){

        bar_chrt.forEach(function(d) {
          d.amount = +d.amount;
        });

        bar_chrt = bar_chrt.sort(function(x, y){
           return d3.descending(x.amount, y.amount);
        });

        var initial_bar =  bar_chrt.slice(0,20);

        var formatNumber = d3.format("$,");

        var axisMargin = 5,
                x_width = 470,
                barHeight = 18,
                barPadding = 5,
                bar, scale, xAxis, labelWidth = 0;

        console.log("x_width: ",x_width);

        max = d3.max(initial_bar, function(d) { return d.amount; });

        bar = svg.selectAll("g")
                .data(initial_bar)
                .enter()
                .append("g");

        bar.attr("class", "bar")
           .attr("cx",0)
           .style("fill",function(d){
             if(d.category == 1){return "#3D3A4F"}
             else if(d.category == 2){return "#1D545C"}
             else if(d.category == 3){return "#29684D"}
             else if(d.category == 4){return "#657532"}
             else if(d.category == 5){return "#A97538"}
           })
           .attr("transform", function(d, i) {
                    return "translate(0," + (i * (barHeight + barPadding)) + ")";
                });

        bar.append("text")
                .attr("class", "label")
                .attr("x",0)
                .attr("y", barHeight / 2)
                .attr("dy", ".35em") //vertical align middle
                .text(function(d){
                    return d.cfda;
                }).each(function() {
            labelWidth = Math.ceil(Math.max(labelWidth, this.getBBox().width))+2;
        });

        scale = d3.scale.linear()
                .domain([0, max])
                .range([0, x_width - labelWidth]);

        xAxis = d3.svg.axis()
                //.orient("bottom")
                .scale(scale)
                .tickSize(-svg[0][0].attributes[1].nodeValue  + axisMargin)
                .tickFormat(function(d) { return formatNumber(d); });

        bar.append("rect")
                .attr("transform", "translate("+(labelWidth)+", 0)")
                .attr("margin-left",5)
                //.attr("rx","30")
                .attr("height", barHeight)
                .attr("width", function(d){
                    return scale(d.amount);
                });

        svg.insert("g",":first-child")
            .attr("class", "axisHorizontal")
            .attr("transform", "translate(" +labelWidth+ ","+ 475 +")")
            .call(xAxis)
          .selectAll("text")
            .attr("y", 10)
            .attr("x", 0)
            .attr("dy", ".35em")
            .attr("transform", "rotate(-35)")
            .style("text-anchor", "end");

    });

//MAP
    var projection = d3.geo.albersUsa()
               .translate([map_width/1.35, map_height/1.1])    // translate to center of screen
               .scale([500]);          // scale things down so see entire US ---1455

    // Define path generator
    var path = d3.geo.path()               // path generator that will convert GeoJSON to SVG paths
             .projection(projection);  // tell path generator to use albersUsa projection

    d3.json("/data-lab-data/2017_CoC_Grantee_Areas_2.json",function(us){

      var g = svg_1.append("g");

      g.selectAll("path")
        .data(us.features)
        .enter().append("path")
        .attr("d", path)
        .attr("class","counties");

    });
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

    var xCat = "total_homeless",
        yCat = "value",
        colorCat = "Bin";

    d3.csv("/data-lab-data/pop-award.csv", function(data) {
      data.forEach(function(d) {
        d.total_homeless = +d.total_homeless;
        d.value = +d.value;
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

            return d["coc_number"] + "<br>"
            /*+ "Continuum of Care Number: "+  d["coc_number"] +"<br>"*/
            + "2017 CFDA Program Funds Related to Homelessness Awarded: " + formatNumber(d[yCat]) + "<br>"
            + "Total Homeless: "+ d["total_homeless"] +"<br>"
          /*  + "Number of Instructional staff: "+ "<b>" +d["No_Staff"] + "</b>" + "<br>"
            + "Grant $s per Instructor: "+ "<b>" +formatNumber(Math.floor(d[yCat]/d[xCat])) + "</b>" +"<br>"*/
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
          .attr("class","scatter")
          .attr("width", width)
          .attr("height", height)
          .style("fill","#ddd");

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
        xCat = "total_homeless";
        xMax = d3.max(data, function(d) { return d[xCat]; });
        xMin = d3.min(data, function(d) { return d[xCat]; });
        yCat = "value"
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

    var column_names = ["CoC Number","CoC Name","Total Homeless", "Sheltered Homeless", "Unsheltered Homeless", "Chronically Homeless","Homeless Veterans", "Homeless People in Families", "Homeless Unaccompanied Youth (Under 25)"];
    var clicks = {coc_number: 0, coc_name: 0, total_homeless: 0, chronically_homeless: 0, sheltered_homeless: 0, unsheltered_homeless: 0, homeless_veterans: 0, homeless_people_in_families: 0, homeless_unaccompanied_youth: 0};

    d3.select("#container")
      .attr("height","700px")
      .attr("width","1024px");

    d3.select("#container").append('div')
      .attr("id","viz_container")
      .attr("height","700px")
      .attr("width","1000px");

    d3.select("#viz_container").append("h3")
      .attr("id", "title")
      .style("text-align","center")
      .text("Continuum of Care 2016 Homeless Population")

    d3.select("#viz_container").append("div")
      .attr("class", "SearchBar")
      .append("p")
        .attr("class", "SearchBar")
        .text("Search By CoC Name:");

    d3.select(".SearchBar")
      .append("input")
        .attr("class", "SearchBar")
        .attr("id", "search")
        .attr("type", "text")
        .attr("placeholder", "Search...")
        .style("font-family","inherit")
        .style("font-size","16");

    d3.select("#viz_container").append("div")
      .attr("id","table_container")
      .attr("width", '950px')
      .attr("height", '575px');

    var table = d3.select("#table_container").append("table");
    table.append("thead").append("tr");

    var headers = table.select("tr").selectAll("th")
        .data(column_names)
      .enter()
        .append("th")
        .text(function(d) { return d; });

    var rows, row_entries, row_entries_no_anchor, row_entries_with_anchor;

    d3.json("/data-lab-data/coc-pop-type.json", /*function(d){return{ coc_number: d.coc_number, total_homeless: +d.total_homeless, sheltered_homeless: +d.sheltered_homeless, unsheltered_homeless: +d.unsheltered_homeless, chronically_homeless: +d.chronically_homeless, homeless_people_in_families: +d.homeless_people_in_families, homeless_veterans: +d.homeless_veterans, homeless_unaccompanied_youth: +d.homeless_unaccompanied_youth}},*/ function(data) { // loading data from server
      console.log("pop_type: ",data);
      // draw table body with rows
      table.append("tbody")

      // data bind
      rows = table.select("tbody").selectAll("tr")
        .data(data, function(d){ return d.coc_number; });

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
            return [arr[0],arr[1],arr[2],arr[4],arr[5],arr[3], arr[6],arr[7],arr[8]];
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
    		  .data(searched_data, function(d){ return d.coc_number; })
          .attr("class","panel_1_table");

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
                  return [arr[0],arr[1],arr[2],arr[4],arr[5],arr[3], arr[6],arr[7],arr[8]];
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
      /**  sort functionality **/
      headers.on("click", function(d) {
          if (d == "CoC Number") {
            clicks.coc_number++;
            // even number of clicks
            if (clicks.coc_number % 2 == 0) {
              // sort ascending: alphabetically
              rows.sort(function(a,b) {
                if (a.coc_number.toUpperCase() < b.coc_number.toUpperCase()) {
                  return -1;
                } else if (a.coc_number.toUpperCase() > b.coc_number.toUpperCase()) {
                  return 1;
                } else {
                  return 0;
                }
              });
            // odd number of clicks
          } else if (clicks.coc_number % 2 != 0) {
              // sort descending: alphabetically
              rows.sort(function(a,b) {
                if (a.coc_number.toUpperCase() < b.coc_number.toUpperCase()) {
                  return 1;
                } else if (a.coc_number.toUpperCase() > b.coc_number.toUpperCase()) {
                  return -1;
                } else {
                  return 0;
                }
              });
            }
          }
          if (d == "CoC Name") {
    	    clicks.coc_name++;
            // even number of clicks
            if (clicks.coc_name % 2 == 0) {
              // sort ascending: numerically
              rows.sort(function(a,b) {
                if (+a.coc_name < +b.coc_name) {
                  return -1;
                } else if (+a.coc_name > +b.coc_name) {
                  return 1;
                } else {
                  return 0;
                }
              });
            // odd number of clicks
            } else if (clicks.views % 2 != 0) {
              // sort descending: numerically
              rows.sort(function(a,b) {
                if (+a.coc_name < +b.coc_name) {
                  return 1;
                } else if (+a.coc_name > +b.coc_name) {
                  return -1;
                } else {
                  return 0;
                }
              });
            }
          }
          if (d == "Total Homeless") {
            clicks.total_homeless++;
              // even number of clicks
              if (clicks.total_homeless % 2 == 0) {
                // sort ascending: numerically
                rows.sort(function(a,b) {
                  if (+a.total_homeless < +b.total_homeless) {
                    return -1;
                  } else if (+a.total_homeless > +b.total_homeless) {
                    return 1;
                  } else {
                    return 0;
                  }
                });
              // odd number of clicks
            } else if (clicks.total_homeless % 2 != 0) {
                // sort descending: numerically
                rows.sort(function(a,b) {
                  if (+a.total_homeless < +b.total_homeless) {
                    return 1;
                  } else if (+a.total_homeless > +b.total_homeless) {
                    return -1;
                  } else {
                    return 0;
                  }
                });
              }
            }
          if (d == "Chronically Homeless") {
            clicks.chronically_homeless++;
    	    // even number of clicks
            if (clicks.chronically_homeless % 2 == 0) {
              // sort ascending: alphabetically
              rows.sort(function(a,b) {
                if (a.chronically_homeless.toUpperCase() < b.chronically_homeless.toUpperCase()) {
                  return -1;
                } else if (a.chronically_homeless.toUpperCase() > b.chronically_homeless.toUpperCase()) {
                  return 1;
                } else {
                  return 0;
                }
              });
            // odd number of clicks
            } else if (clicks.chronically_homeless % 2 != 0) {
              // sort descending: alphabetically
              rows.sort(function(a,b) {
                if (a.chronically_homeless.toUpperCase() < b.chronically_homeless.toUpperCase()) {
                  return 1;
                } else if (a.chronically_homeless.toUpperCase() > b.chronically_homeless.toUpperCase()) {
                  return -1;
                } else {
                  return 0;
                }
              });
            }
          }
          if (d == "Sheltered Homeless") {
            clicks.sheltered_homeless++;
              // even number of clicks
              if (clicks.sheltered_homeless % 2 == 0) {
                // sort ascending: numerically
                rows.sort(function(a,b) {
                  if (+a.sheltered_homeless < +b.sheltered_homeless) {
                    return -1;
                  } else if (+a.sheltered_homeless > +b.sheltered_homeless) {
                    return 1;
                  } else {
                    return 0;
                  }
                });
              // odd number of clicks
              } else if (clicks.sheltered_homeless % 2 != 0) {
                // sort descending: numerically
                rows.sort(function(a,b) {
                  if (+a.sheltered_homeless < +b.sheltered_homeless) {
                    return 1;
                  } else if (+a.sheltered_homeless > +b.sheltered_homeless) {
                    return -1;
                  } else {
                    return 0;
                  }
                });
              }
            }
            if (d == "Unsheltered Homeless") {
              clicks.unsheltered_homeless++;
                // even number of clicks
                if (clicks.unsheltered_homeless % 2 == 0) {
                  // sort ascending: numerically
                  rows.sort(function(a,b) {
                    if (+a.unsheltered_homeless < +b.unsheltered_homeless) {
                      return -1;
                    } else if (+a.unsheltered_homeless > +b.unsheltered_homeless) {
                      return 1;
                    } else {
                      return 0;
                    }
                  });
                // odd number of clicks
                } else if (clicks.unsheltered_homeless % 2 != 0) {
                  // sort descending: numerically
                  rows.sort(function(a,b) {
                    if (+a.unsheltered_homeless < +b.unsheltered_homeless) {
                      return 1;
                    } else if (+a.unsheltered_homeless > +b.unsheltered_homeless) {
                      return -1;
                    } else {
                      return 0;
                    }
                  });
                }
              }
              if (d == "Homeless Veterans") {
                clicks.homeless_veterans++;
                  // even number of clicks
                  if (clicks.homeless_veterans % 2 == 0) {
                    // sort ascending: numerically
                    rows.sort(function(a,b) {
                      if (+a.homeless_veterans < +b.homeless_veterans) {
                        return -1;
                      } else if (+a.homeless_veterans > +b.homeless_veterans) {
                        return 1;
                      } else {
                        return 0;
                      }
                    });
                  // odd number of clicks
                  } else if (clicks.homeless_veterans % 2 != 0) {
                    // sort descending: numerically
                    rows.sort(function(a,b) {
                      if (+a.homeless_veterans < +b.homeless_veterans) {
                        return 1;
                      } else if (+a.homeless_veterans > +b.homeless_veterans) {
                        return -1;
                      } else {
                        return 0;
                      }
                    });
                  }
                }
                if (d == "Homeless People in Families") {
                  clicks.homeless_people_in_families++;
                    // even number of clicks
                    if (clicks.homeless_people_in_families % 2 == 0) {
                      // sort ascending: numerically
                      rows.sort(function(a,b) {
                        if (+a.homeless_people_in_families < +b.homeless_people_in_families) {
                          return -1;
                        } else if (+a.homeless_people_in_families > +b.homeless_people_in_families) {
                          return 1;
                        } else {
                          return 0;
                        }
                      });
                    // odd number of clicks
                    } else if (clicks.homeless_people_in_families % 2 != 0) {
                      // sort descending: numerically
                      rows.sort(function(a,b) {
                        if (+a.homeless_people_in_families < +b.homeless_people_in_families) {
                          return 1;
                        } else if (+a.homeless_people_in_families > +b.homeless_people_in_families) {
                          return -1;
                        } else {
                          return 0;
                        }
                      });
                    }
                  }
                  if (d == "Homeless Unacompanied Youth (Under 25)") {
                    clicks.homeless_unaccompanied_youth++;
                      // even number of clicks
                      if (clicks.homeless_unaccompanied_youth % 2 == 0) {
                        // sort ascending: numerically
                        rows.sort(function(a,b) {
                          if (+a.homeless_unaccompanied_youth < +b.homeless_unaccompanied_youth) {
                            return -1;
                          } else if (+a.homeless_unaccompanied_youth > +b.homeless_unaccompanied_youth) {
                            return 1;
                          } else {
                            return 0;
                          }
                        });
                      // odd number of clicks
                      } else if (clicks.homeless_unaccompanied_youth % 2 != 0) {
                        // sort descending: numerically
                        rows.sort(function(a,b) {
                          if (+a.homeless_unaccompanied_youth < +b.homeless_unaccompanied_youth) {
                            return 1;
                          } else if (+a.homeless_unaccompanied_youth > +b.homeless_unaccompanied_youth) {
                            return -1;
                          } else {
                            return 0;
                          }
                        });
                      }
                    }
        }) // end of click listeners
    });

  }

  function GenMap(){
    var formatNumber2 = d3.format(",");

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


    d3.select("#container").append('div').attr("id","legend").attr("width","1024px");
    d3.select("#container").append('div').attr("id","viz_container");

    var width = 1000,
        height = 600,
        centered = null;

    // D3 Projection
    var projection = d3.geo.albersUsa()
               .translate([width/2, height/2])    // translate to center of screen
               .scale([1200]);          // scale things down so see entire US ---1455

    // Define path generator
    var path = d3.geo.path()               // path generator that will convert GeoJSON to SVG paths
             .projection(projection);  // tell path generator to use albersUsa projection

    var div = d3.select("#viz_container")
               .append("div")
               .attr("id","map_container")
               .attr("width", width)
               .attr("height", height);

    var svg = d3.select("#map_container")
                .append("svg")
                .attr("id","svg")
                .attr("width", '950px')
                .attr("height", '575px');

    var formatNumber = d3.format("$,f");

  d3.json("/data-lab-data/2017_CoC_Grantee_Areas_2.json",function(us){
    d3.json("/data-lab-data/us-states.json", function(json) {
      d3.csv("/data-lab-data/coc-pop.csv",function(d){return{ coc_number: d.coc_number,pop: +d.pop }},function(data){
        d3.csv("/data-lab-data/State_crosswalk.csv",function(states){

          spinner.stop();

          console.log("US: ",us);
          console.log("JSON-States: ",json);
          console.log("States: ",states);
          console.log("Data: ",data);

          var legendWidth = "950px";

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
              	.text("Continuum of Care Homeless Population");

                var min = d3.min(data, function(d) { return d.pop; });
                var max = d3.max(data, function(d) { return d.pop; });

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
                      .data(us.features)
                      .enter().append("path")
                      .attr("class", "coc")
                      .attr("data-coc", function(d) {return d.properties.coc_number; })
                      .attr("data-state", function(d) {return d.properties.state; })
                      .attr("data-name", function(d) {return d.properties.name; })
                      .attr("d", path)
                      .on("click", clicked)
                      .style("fill",getColor);


            function clicked(d) {
                     var x, y, k;

                     for(var i=0; i<states.length; i++) {
                       if(d.properties.STUSAB==states[i].Abbrv ){
                         for(var h=0; h<json.features.length; h++) {
                           if(states[i].State==json.features[h].properties.NAME) {
                             var n = json.features[h]
                             //console.log("clicked n: ",n);
                             if (n && centered !== n) {
                               var centroid = path.centroid(n)
                                          x = centroid[0]
                                          y = centroid[1]

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
                                 .style("stroke-width", .25 / k + "px");




                             }
                           }
                         }
                       }
                     }

            /*function getColor(d){
              for(var i=0; i<data.length;i++){
                if(d.properties.coc_number===data[i].coc_number){
                  return color(data[i].pop);
                }
              }
            }*/
          function getColor(d){
                for(var i=0; i< data.length; i++){
                  if(d.properties.coc_number===data[i].coc_number){
                    if(data[i].pop<=100){return ("#ffffe5");}
                    else if(data[i].pop<=200){return ("#ffffb2");}
                    else if(data[i].pop<=300){return ("#ffff7f");}
                    else if(data[i].pop<=500){return ("#FFfa00");}
                    else if(data[i].pop<=700){return ("#FFe600");}
                    else if(data[i].pop<=1000){return ("#FFd200");}
                    else if(data[i].pop<=1500){return ("FFbe00");}
                    else if(data[i].pop<=2000){return ("#FFaa00");}
                    else if(data[i].pop<=2500){return ("#FF9600");}
                    else if(data[i].pop<=3000){return ("#FF5a00");}
                    else if(data[i].pop<=3500){return ("#FF3c00");}
                    else if(data[i].pop<=4000){return ("#FF1e00");}
                    else if(data[i].pop<=5000){return ("#FF0000");}
                    else if(data[i].pop<=6000){return ("#eb0000");}
                    else if(data[i].pop<=7000){return ("#b90000");}
                    else if(data[i].pop<=8000){return ("#550000");}
                    else if(data[i].pop<=12000){return ("#bf0000");}
                    else{return ("#800000")}
                  }
                }
              }

            function getValue(d){
              for(var i=0; i<data.length;i++){
                if(d.properties.coc_number===data[i].coc_number){
                  return formatNumber2(data[i].pop);
                }
              }
            }

            function getState(d){
              for(var i=0; i<states.length;i++){
                if(d.properties.stusab===states[i].Abbrv){
                  return states[i].State;
                }
              }
            }


        });
      });
    });
  });
}
