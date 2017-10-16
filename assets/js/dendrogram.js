/*Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
this list of conditions and the following disclaimer in the documentation
and/or other materials provided with the distribution.

* The name Rob Schmuecker may not be used to endorse or promote products
derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL MICHAEL BOSTOCK BE LIABLE FOR ANY DIRECT,
INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.*/



// Get csv data

d3.csv('/data-lab-data/accounts_obligations_revised_v7.csv',function(error,newData){

console.log("Hierarchy: ",newData);

var root = { name :"Federal Accounts", children : [] },
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
  if ( depth === levels.length - 1 ) depthCursor.push({ name : d.Title, size : d.Obligation, id : d.accountID });
});
});

console.log("root:",root);
  // Calculate total nodes, max label length
  var totalNodes = 0;
  var maxLabelLength = 0;
  // variables for drag/drop
  var selectedNode = null;
  var draggingNode = null;
  // panning variables
  var panSpeed = 200;
  var panBoundary = 20; // Within 20px from edges will pan when dragging.
  // Misc. variables
  var i = 0;
  var duration = 750;
  var root;

  // size of the diagram
  var viewerWidth = $(document).width();
  var viewerHeight = $(document).height();

  var tree = d3.layout.tree()
      .size([viewerHeight, viewerWidth]);
  //console.log(treeData);
  // define a d3 diagonal projection for use by the node paths later on.
  var diagonal = d3.svg.diagonal()
      .projection(function(d) {
          return [d.y, d.x];
      });
    
  /*function blowUp(d) {
   //console.log("blowUp-->d: ",d);
   if (d.children) {
      d.children.forEach(blowUp);
      d = toggleChildren(d);
   }else if(d._children){
      d._children.forEach(blowUp);
      d = toggleChildren(d);
    }
  };*/  
    
  function toggleAll(d) {
    if (d.children) {
      d.children.forEach(toggleAll);
      toggle(d);
    }
  };
    
  // Toggle children.
  function toggle(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
};

/*d3.select("#zoom_in").on("click", zoomButtonUp);
d3.select("#zoom_out").on("click", zoomButtonDn);*/
d3.select("#button1 > p > input").on("click", change);
//d3.select("#button2 > p > input").on("click", explode);
 
/*function zoomButtonUp(){
  console.log("translate: ",zoomListener.translate());
  var scale = zoomListener.scale() + .1,
      translate = zoomListener.translate();
  d3.select('g').transition()
          .duration(duration)
          .attr("transform", "scale(" + scale + ")");
  console.log("translate-new: ",zoomListener.translate());
  zoomListener.scale(scale);
  zoomListener.translate(translate);
};
  
function zoomButtonDn(){
  var scale = zoomListener.scale() - .1,
      translate = zoomListener.translate();
  d3.select('g').transition()
          .duration(duration)
          .attr("transform", "scale(" + scale + ")");
  zoomListener.scale(scale);
  zoomListener.translate(translate);
};*/
  
function change() {
  zoomListener.scale(1);
  toggleAll(root);
  toggle(root);
  update(root);
  centerRootNode(root);
  zoomListener.scale(1);
  console.log("root after reset: ",root);
};
    
/*function explode(){
  zoomListener.scale(0.7);
  blowUp(root);
  toggle(root);  
  update(root);
  centerExplode(root);
  zoomListener.scale(0.7);
  console.log("root after explode: ",root);
};*/

  // A recursive helper function for performing some setup by walking through all nodes

  function visit(parent, visitFn, childrenFn) {
      if (!parent) return;

      visitFn(parent);

      var children = childrenFn(parent);
      if (children) {
          var count = children.length;
          for (var i = 0; i < count; i++) {
              visit(children[i], visitFn, childrenFn);
          }
      }
  }

  // Call visit function to establish maxLabelLength
  visit(root, function(d) {
      totalNodes++;
      maxLabelLength = Math.max(d.name.length, maxLabelLength);

  }, function(d) {
      return d.children && d.children.length > 0 ? d.children : null;
  });


  // sort the tree according to the node names & numerically for obligation amounts

  function sortTree() {
      tree.sort(function(a, b) {
        if(a.depth===3 & b.depth===3){
            return b.size - a.size;
        }else if(a.depth<3 & b.depth<3){
          return b.name.toLowerCase() < a.name.toLowerCase() ? 1 : -1;
        }
      });
  }
 
  // Sort the tree initially incase the JSON isn't in a sorted order.
  sortTree();

/*
  function pan(domNode, direction) {
      var speed = panSpeed;
      if (panTimer) {
          clearTimeout(panTimer);
          translateCoords = d3.transform(svgGroup.attr("transform"));
          if (direction == 'left' || direction == 'right') {
              translateX = direction == 'left' ? translateCoords.translate[0] + speed : translateCoords.translate[0] - speed;
              translateY = translateCoords.translate[1];
          } else if (direction == 'up' || direction == 'down') {
              translateX = translateCoords.translate[0];
              translateY = direction == 'up' ? translateCoords.translate[1] + speed : translateCoords.translate[1] - speed;
          }
          scaleX = translateCoords.scale[0];
          scaleY = translateCoords.scale[1];
          scale = zoomListener.scale();
          svgGroup.transition().attr("transform", "translate(" + translateX + "," + translateY + ")scale(" + scale + ")");
          d3.select(domNode).select('g.node').attr("transform", "translate(" + translateX + "," + translateY + ")");
          zoomListener.scale(zoomListener.scale());
          zoomListener.translate([translateX, translateY]);
          panTimer = setTimeout(function() {
              pan(domNode, speed, direction);
          }, 50);
      }
  }
*/
  // Define the zoom function for the zoomable tree

  function zoom() {
      svgGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
  }
  
  /*function zoomed() {
      svgGroup.attr("transform", "translate(" + d3.event.translate + ")");
  }*/

  // define the zoomListener which calls the zoom function on the "zoom" event constrained within the scaleExtents
  var zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);
  //var zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]);

  // define the baseSvg, attaching a class for styling and the zoomListener
  var baseSvg = d3.select("#tree-container").append("svg")
      .attr("width", viewerWidth)
      .attr("height", viewerHeight)
      .attr("class", "overlay")
      .call(zoomListener);

  // Helper functions for collapsing and expanding nodes.

  function collapse(d) {
      if (d.children) {
          d._children = d.children;
          d._children.forEach(collapse);
          d.children = null;
      }
  }

  function expand(d) {
      if (d._children) {
          d.children = d._children;
          d.children.forEach(expand);
          d._children = null;
      }
  }

  var overCircle = function(d) {
      selectedNode = d;
      updateTempConnector();
  };
  var outCircle = function(d) {
      selectedNode = null;
      updateTempConnector();
  };

  // Function to update the temporary connector indicating dragging affiliation
  var updateTempConnector = function() {
      var data = [];
      if (draggingNode !== null && selectedNode !== null) {
          // have to flip the source coordinates since we did this for the existing connectors on the original tree
          data = [{
              source: {
                  x: selectedNode.y0,
                  y: selectedNode.x0
              },
              target: {
                  x: draggingNode.y0,
                  y: draggingNode.x0
              }
          }];
      }
      var link = svgGroup.selectAll(".templink").data(data);

      link.enter().append("path")
          .attr("class", "templink")
          .attr("d", d3.svg.diagonal())
          .attr('pointer-events', 'none');

      link.attr("d", d3.svg.diagonal());

      link.exit().remove();
  };

  // Function to center node when clicked/dropped so node doesn't get lost when collapsing/moving with large amount of children.

function centerNode(source) {
      if(source.depth===2){
          scale = zoomListener.scale();
          x = -source.y0;
          y = -source.x0;
          x = x * scale + viewerWidth / 4.2;
          y = y * scale + viewerHeight / 2;
          d3.select('g').transition()
              .duration(duration)
              .attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
          zoomListener.scale(scale);
          zoomListener.translate([x, y]);
    }else{
          scale = zoomListener.scale();
          x = -source.y0;
          y = -source.x0;
          x = x * scale + viewerWidth / 3;
          y = y * scale + viewerHeight / 2;
          d3.select('g').transition()
              .duration(duration)
              .attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
          zoomListener.scale(scale);
          zoomListener.translate([x, y]);
    }
  }
    
    function centerRootNode(source) {
      scale = zoomListener.scale();
      x = -source.y0;
      y = -source.x0;
      x = x * scale + viewerWidth / 4;
      y = y * scale + viewerHeight / 2;
      d3.select('g').transition()
          .duration(duration)
          .attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
      zoomListener.scale(scale);
      zoomListener.translate([x, y]);
  }
 
    function centerExplode(source) {
      scale = zoomListener.scale();
      x = -source.y0;
      y = -source.x0;
      x = x * scale + viewerWidth / 19;
      y = y * scale + viewerHeight / 2;
      d3.select('g').transition()
          .duration(duration)
          .attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
      zoomListener.scale(scale);
      zoomListener.translate([x, y]);
  }

  // Toggle children function

  function toggleChildren(d) {
    //console.log("In toggleChildren(d): ",d);
      if (d.children) {
          d._children = d.children;
          d.children = null;
      } else if (d._children) {
          d.children = d._children;
          d._children = null;
      }
      return d;
  }

  // Toggle children on click.
  function click(d) {
    if(d.depth===1 & d._children === null){
      d = toggleChildren(d);
      update(d);
      centerNode(d);
    }else if(d.depth===3 ){
      update(d);
      getLink(d);
    }else if(d.depth===2 ){
      d = toggleChildren(d);
      update(d);
      centerNode(d);
    }else if(d.depth===1 & d._children !== null & d._children.length===1 ){
      d._children.forEach(expand);
      d = toggleChildren(d);
      update(d);
      centerNode(d.children[0]);
    }else{
      d = toggleChildren(d);
      update(d);
      centerNode(d);
    }
  }

  function getLink(d){
    var base_url = ("https://beta.usaspending.gov/#/federal_account/");
    var acct_num = (d.id);
    window.open(base_url+acct_num);
    console.log("in getLink");
  }

  function update(source) {
      // Compute the new height, function counts total children of root node and sets tree height accordingly.
      // This prevents the layout looking squashed when new nodes are made visible or looking sparse when nodes are removed
      // This makes the layout more consistent.
      var levelWidth = [1];
      var childCount = function(level, n) {

          if (n.children && n.children.length > 0) {
              if (levelWidth.length <= level + 1) levelWidth.push(0);

              levelWidth[level + 1] += n.children.length;
              n.children.forEach(function(d) {
                  childCount(level + 1, d);
              });
          }
      };
      childCount(0, root);
      var newHeight = d3.max(levelWidth) * 26; // 25 pixels per line
      tree = tree.size([newHeight, viewerWidth]);

      // Compute the new tree layout.
      var nodes = tree.nodes(root).reverse(),
          links = tree.links(nodes);

      // Set widths between levels based on maxLabelLength.
    nodes.forEach(function(d) {
         d.y = (d.depth * (maxLabelLength * 2.5)); //maxLabelLength * 10px
          // alternatively to keep a fixed scale one can set a fixed depth per level
          // Normalize for fixed-depth by commenting out below line
          //d.y = (d.depth * 500); //500px per level.
      });

      // Update the nodes
      node = svgGroup.selectAll("g.node")
          .data(nodes, function(d) {
              return d.id || (d.id = ++i);
          });

      
      // Enter any new nodes at the parent's previous position.
      var nodeEnter = node.enter().append("g")
          //.call(dragListener)
          .attr("class", "node")
          .attr("transform", function(d) {
              return "translate(" + source.y0 + "," + source.x0 + ")";
          })
          .on('click', click)
          .on("mouseover", createHover)
          .on("mouseout", removeHover);
     console.log("nodeEnter: ",nodeEnter);

      function createHover(d) {
        d3.select(this).append("text")
            .attr("class", "hover")
            .attr('transform', function(d){ 
                if(d.depth===3){ return 'translate(-145, -10)';}
                else if (d.depth === 2 | d.depth===1){ return 'translate(10, -10)';}
        })
        .text(function(d){
            if(d.depth===3){ return "Visit Federal Account Page";}
            else if (d.depth === 2){ return "View Federal Accounts";}
            else if (d.depth===1){ return "View Agencies";}
        });
      }
      
      function removeHover() {
        d3.select(this).select("text.hover").remove();
      }

      nodeEnter.append("circle")
          .attr('class', 'nodeCircle')
          .attr("r", 0)
          .style("fill", function(d) {
              return d._children ? "lightsteelblue" : "#fff";
          });

      nodeEnter.append("text")
          .attr("x", function(d) {
              return d.children || d._children ? -10 : 10;
          })
          .attr("dy", ".35em")
          .attr('class', 'nodeText')
          .attr("text-anchor","start")
          //function(d) {
            //  return d.children || d._children ? "start" : "start";
          //})
          .text(function(d) {
              return d.name;
          })
          .style("fill-opacity", 0);

      var formatNumber = d3.format("$,.0f");

      // Update the text to reflect whether node has children or not.
      node.select('text')
          .attr("x", function(d) {
              return d.children || d._children ? -10 : 10;
          })
          .attr("text-anchor", function(d) {
              return d.children || d._children ? "end" : "start";
          })
          .attr("alignment-baseline",function(d) {
              return d.children || d._children ? "baseline" : "baseline";
          })
          .style("font-weight","900")
          .text(function(d) {
              return d.children || d._children ? d.name : d.name+"  "+formatNumber(d.size);
              //(d.name+"  "+formatNumber(d.size));
          });

      // Change the circle fill depending on whether it has children and is collapsed
      node.select("circle.nodeCircle")
          .attr("r", 4.5)
          .style("fill", function(d) {
              return d._children ? "lightsteelblue" : "#fff";
          });

      // Transition nodes to their new position.
      var nodeUpdate = node.transition()
          .duration(duration)
          .attr("transform", function(d) {
              return "translate(" + d.y + "," + d.x + ")";
          });

      // Fade the text in
      nodeUpdate.select("text")
          .style("fill-opacity", 1);

      // Transition exiting nodes to the parent's new position.
      var nodeExit = node.exit().transition()
          .duration(duration)
          .attr("transform", function(d) {
              return "translate(" + source.y + "," + source.x + ")";
          })
          .remove();

      nodeExit.select("circle")
          .attr("r", 0);

      nodeExit.select("text")
          .style("fill-opacity", 0);

      // Update the links¦
      var link = svgGroup.selectAll("path.link")
          .data(links, function(d) {
              return d.target.id;
          });

      // Enter any new links at the parent's previous position.
      link.enter().insert("path", "g")
          .attr("class", "link")
          .attr("d", function(d) {
              var o = {
                  x: source.x0,
                  y: source.y0
              };
              return diagonal({
                  source: o,
                  target: o
              });
          });

      // Transition links to their new position.
      link.transition()
          .duration(duration)
          .attr("d", diagonal);

      // Transition exiting nodes to the parent's new position.
      link.exit().transition()
          .duration(duration)
          .attr("d", function(d) {
              var o = {
                  x: source.x,
                  y: source.y
              };
              return diagonal({
                  source: o,
                  target: o
              });
          })
          .remove();

      // Stash the old positions for transition.
      nodes.forEach(function(d) {
          d.x0 = d.x;
          d.y0 = d.y;
      });
  }

  // Append a group which holds all nodes and which the zoom Listener can act upon.
  var svgGroup = baseSvg.append("g");

  // Define the root
  root = root;

  root.x0 = viewerHeight / 2;
  root.y0 = 0;

  // Layout the tree initially and center on the root node.
  toggleAll(root);
  toggle(root);
  update(root);
  centerRootNode(root);
  console.log("root after initialization: ",root);
});
