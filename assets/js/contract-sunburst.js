for (let i = 0; i < 4; i++) {
  d3.select("#legend_scaleKey").append("circle")
    .attr('r', 25 + (i * 10))
    .attr('class', "legend_scaleKeyCircle")
    .attr('cx', 60)
    .attr('cy', 65);
}

var width = 550,
  height = 700,
  radius = (Math.max(width, height) / 2.5) - 30; //change 2 to a larger number to make burst smaller

var formatNumber = d3.format("$,f");

var x = d3.scale.linear()
  .range([0, 2 * Math.PI]);

var y = d3.scale.sqrt()
  .range([0, radius]);

var partition = d3.layout.partition().value(d => d.size);

var arc = d3.svg.arc()
  .startAngle(d => Math.max(0, Math.min(2 * Math.PI, x(d.x))))
  .endAngle(d => Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx))))
  .innerRadius(d => Math.max(0, y(d.y)))
  .outerRadius(d => Math.max(0, y(d.y + d.dy)));

var svg = d3.select("#sunburst").append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + (width / 2 - 20) + "," + (height / 2 - 100) + ")");

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

var target = document.getElementById("sunburst");

function createTableTitle(legend, d) {
  $("#sunburst-panel").empty();
  legend.append("div")
    .attr("id", "tab")
    .attr("height", 169)
    .attr("width", 422)
    .html("<h1 class='panel_title'>" + d.name + "</h1>" +
      "<h3 class='panel_desc'>" + formatNumber(d.value) +
      "<br />" + "</h3>");
}

function createFillTable(legend, d) {
  for (var k = 0; k < 10; k++) {
    createFillTableRow(legend, d.children, "value", k);
  }
}

function createFillTableRow(legend, child, amt, k) {
  legend.append("div")
    .attr("id", "tab_2")
    .attr("height", 169)
    .attr("width", 422)
    .style("margin-bottom", "2px")
    .html("<table class ='icon'>" +
      "<tr>" + "<td class='val'>" + formatNumber(child[k][amt]) + "</td>" +
      "<td class='name'>" + child[k].name + "</td>" + "</tr>" + "</table>");
}

// trigger loader
var spinner = new Spinner(opts).spin(target);

function createSunburst(newData, recip, details, other, colors) {
  spinner.stop();

  var root = {
      name: "FY17 Q2 Contract Awards",
      children: []
    },
    levels = ["Agency", "Subagency"];

  newData.forEach(function(d) {
    // Keep this as a reference to the current level
    var depthCursor = root.children;
    // Go down one level at a time
    levels.forEach(function(property, depth) {

      // Look to see if a branch has already been created
      var index;
      depthCursor.forEach(function(child, i) {
        if (d[property] == child.name) index = i;
      });
      // Add a branch if it isn't there
      if (isNaN(index)) {
        depthCursor.push({
          name: d[property],
          children: []
        });
        index = depthCursor.length - 1;
      }
      // Now reference the new child array as we go deeper into the tree
      depthCursor = depthCursor[index].children;
      // This is a leaf, so add the last element to the specified branch
      if (depth === levels.length - 1) depthCursor.push({
        name: d.Recipient,
        size: d.Obligation
      });
    });
  });

  svg.selectAll("path")
    .data(partition.nodes(root))
    .enter().append("path")
    .attr("d", arc)
    .on("mouseover", update_legend)
    .on("mouseout", remove_legend)
    .style("cursor", "pointer")
    .style("fill", function(d) {
      if (d.depth === 0) {
        return "#FFFFFF";
      } //Root
      else if (d.depth === 1) {
        for (i = 0; i < colors.length; i++) {
          if (d.name === colors[i].name) {
            return colors[i].color;
          }
        }
      } //Agency
      else if (d.depth === 2) {
        for (i = 0; i < colors.length; i++) {
          if (d.parent.name === colors[i].name) {
            return d3.rgb(colors[i].color).darker(-.75);
          }
        }
      } //Subagency
      else if (d.depth === 3) {
        for (i = 0; i < colors.length; i++) {
          if (d.parent.parent.name === colors[i].name) {
            return d3.rgb(colors[i].color).darker(-1.25);
          }
        }
      } //Contractors
    })
    .on("click", click)
    .append("title")
    .text(d => d.depth === 0 ? d.name + "\n" + formatNumber(d.value) : "Click to zoom");

  function click(d) {
    svg.transition()
      .duration(750)
      .tween("scale", function() {
        var xd = d3.interpolate(x.domain(), [d.x, d.x + d.dx]),
          yd = d3.interpolate(y.domain(), [d.y, 1]),
          yr = d3.interpolate(y.range(), [d.y ? 20 : 0, radius]);
        return function(t) {
          x.domain(xd(t));
          y.domain(yd(t)).range(yr(t));
        };
      })
      .selectAll("path")
      .attrTween("d", function(d) {
        return function() {
          return arc(d);
        };
      });
  }

  var legend = d3.select("#sunburst-panel");

  createTableTitle(legend, root);
  createFillTable(legend, root);

  function createAgencyTitle(legend, d, title) {
    $("#sunburst-panel").empty();
    legend.append("div")
      .attr("id", "tab")
      .attr("height", 169)
      .attr("width", 465)
      .html("<h2 class='title'>" + d.name + "</h2><h1>" + formatNumber(d.value) + "</h1>" + "<h4>" + title + "</h4>");
  }

  function update_legend(d) {
    // Create central node panel --- Top 10 Agencies
    if (d.depth === 0) {
      createTableTitle(legend, d);
      createFillTable(legend, d);
    } else if (d.depth === 3 && d.name != "Other") {
      // Contractors
      for (var i = 0; i < details.length; i++) {
        if (d.name === details[i].name) {
          $("#sunburst-panel").empty(); //new
          legend.append("div") //new
            .attr("id", "tab") //new
            .attr("height", 169) //new
            .attr("width", 422) //new
            .html("<h2 class='title'>" + d.name.toLowerCase() + "</h2>" +
              "<h1>" + formatNumber(d.value) + "</h1>" +
              "<p>" + details[i].city.toLowerCase() + ', ' + details[i].state.toLowerCase() + '</p>' +
              '<h3> has been awarded a net total of ' +
              formatNumber(details[i].size) + ' in contracts in Q2 2017</h3>');

          for (var q = 0; q < recip.length; q++) {
            if (d.parent.name === recip[q].Subagency && d.name === recip[q].Recipient) {

              var g = legend.append("div")
                .attr("id", "psc_panel")
                .attr("height", 155)
                .attr("width", 465)
                .style("margin", "[0,0,0,0]");

              g.append("img")
                .attr("src", function() {
                  return "/data-lab-data/Sunburst_Icons_SVGs/" + recip[q].icon;
                })
                .attr("class", "icon_svg");

              g.append("div")
                .attr("id", "psc")
                .attr("height", 10)
                .attr("width", 50)
                .html("<table class ='icon_x'>" +
                  "<tr>" + "<td class='name'>" + recip[q].PSC + "</td>" + "</tr>" + "</table>");

              g.append("div")
                .attr("id", "obligation")
                .attr("height", 10)
                .attr("width", 50)
                .html("<table class ='icon_x'>" +
                  "<tr>" + "<td class='val'>" + formatNumber(recip[q].Obligation) + "</td>" + "</tr>" + "</table>");
            }
          }
        }
      }

    } else if (d.depth === 3 && d.name == "Other") {
      $("#sunburst-panel").empty();
      //Contractors < $1,000,000
      legend.append("div")
        .attr("id", "tab")
        .attr("height", 169)
        .attr("width", 465)
        .html("<h3>Other Contractors Supporting the </h3><h3>" + d.parent.name + "</h3><h3>with Contract Values Less Than $1,000,000</h3>" +
          "<h4>These Contracts are Worth a Total Value of " + formatNumber(d.value) + "</h4>" +
          "<h4>Top Contactors</h4>");

      for (var l = 0; l < other.length; l++) {
        if (d.parent.name === other[l].sub) {
          createFillTableRow(legend, other, "size", l);
        }
      }

    } else if (d.depth === 1) {
      //Agencies
      createAgencyTitle(legend, d, "Agencies");

      var t = Math.min(d.children.length, 5);

      for (var k = 0; k < t; k++) {
        createFillTableRow(legend, d.children, "value", k); // 465 width
      }
      legend.transition().duration(500).style("opacity", "1");
    } else {
      //Subagencies
      createAgencyTitle(legend, d, "Contractors");

      var t = Math.min(d.children.length, 5);

      for (var k = 0; k < t; k++) {
        createFillTableRow(legend, d.children, "value", k); // 465 with
      }
      legend.transition().duration(500).style("opacity", "1");
    }
  }

  function remove_legend(d) {
    legend.transition().duration(1000).style("opacity", "1");
  }
}

d3.csv('/data-lab-data/awards_contracts.csv', function(error, newData) {
  d3.csv('/data-lab-data/PSC_by_Recip.csv', function(error, recip) {
    d3.csv('/data-lab-data/Recip_Details.csv', function(error, details) {
      d3.csv('/data-lab-data/others.csv', function(error, other) {
        d3.csv('/data-lab-data/colors.json', function(error, colors) {
          createSunburst(newData, recip, details, other, colors);
        });
      });
    });
  });
});

d3.select(self.frameElement).style("height", height + "px");
//new

