var d3.tip=function(){function t(t){v=d(t),w=v.createSVGPoint(),document.body.appendChild(x)}function e(){return"n"}function n(){return[0,0]}function r(){return" "}function o(){var t=y();return{top:t.n.y-x.offsetHeight,left:t.n.x-x.offsetWidth/2}}function l(){var t=y();return{top:t.s.y,left:t.s.x-x.offsetWidth/2}}function s(){var t=y();return{top:t.e.y-x.offsetHeight/2,left:t.e.x}}function f(){var t=y();return{top:t.w.y-x.offsetHeight/2,left:t.w.x-x.offsetWidth}}function i(){var t=y();return{top:t.nw.y-x.offsetHeight,left:t.nw.x-x.offsetWidth}}function u(){var t=y();return{top:t.ne.y-x.offsetHeight,left:t.ne.x}}function a(){var t=y();return{top:t.sw.y,left:t.sw.x-x.offsetWidth}}function c(){var t=y();return{top:t.se.y,left:t.e.x}}function p(){var t=d3.select(document.createElement("div"));return t.style({position:"absolute",opacity:0,pointerEvents:"none",boxSizing:"border-box"}),t.node()}function d(t){return t=t.node(),"svg"==t.tagName.toLowerCase()?t:t.ownerSVGElement}function y(){var t=T||d3.event.target,e={},n=t.getScreenCTM(),r=t.getBBox(),o=r.width,l=r.height,s=r.x,f=r.y,i=document.documentElement.scrollTop||document.body.scrollTop,u=document.documentElement.scrollLeft||document.body.scrollLeft;return w.x=s+u,w.y=f+i,e.nw=w.matrixTransform(n),w.x+=o,e.ne=w.matrixTransform(n),w.y+=l,e.se=w.matrixTransform(n),w.x-=o,e.sw=w.matrixTransform(n),w.y-=l/2,e.w=w.matrixTransform(n),w.x+=o,e.e=w.matrixTransform(n),w.x-=o/2,w.y-=l/2,e.n=w.matrixTransform(n),w.y+=l,e.s=w.matrixTransform(n),e}var m=e,g=n,h=r,x=p(),v=null,w=null,T=null;t.show=function(){var e=Array.prototype.slice.call(arguments);e[e.length-1]instanceof SVGElement&&(T=e.pop());var n,r=h.apply(this,e),o=g.apply(this,e),l=m.apply(this,e),s=d3.select(x),f=0;for(s.html(r).style({opacity:1,"pointer-events":"all"});f--;)s.classed(E[f],!1);return n=b.get(l).apply(this),s.classed(l,!0).style({top:n.top+o[0]+"px",left:n.left+o[1]+"px"}),t},t.hide=function(){return nodel=d3.select(x),nodel.style({opacity:0,"pointer-events":"none"}),t},t.attr=function(e,n){if(arguments.length<2&&"string"==typeof e)return d3.select(x).attr(e);var r=Array.prototype.slice.call(arguments);return d3.selection.prototype.attr.apply(d3.select(x),r),t},t.style=function(e,n){if(arguments.length<2&&"string"==typeof e)return d3.select(x).style(e);var r=Array.prototype.slice.call(arguments);return d3.selection.prototype.style.apply(d3.select(x),r),t},t.direction=function(e){return arguments.length?(m=null==e?e:d3.functor(e),t):m},t.offset=function(e){return arguments.length?(g=null==e?e:d3.functor(e),t):g},t.html=function(e){return arguments.length?(h=null==e?e:d3.functor(e),t):h};var b=d3.map({n:o,s:l,e:s,w:f,nw:i,ne:u,sw:a,se:c}),E=b.keys();return t};
// https://github.com/topojson/topojson-client Version 1.8.0. Copyright 2016 Mike Bostock.
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(n.topojson=n.topojson||{})}(this,function(n){"use strict";function t(n){if(!n)return h;var t,r,e=n.scale[0],o=n.scale[1],i=n.translate[0],u=n.translate[1];return function(n,f){f||(t=r=0),n[0]=(t+=n[0])*e+i,n[1]=(r+=n[1])*o+u}}function r(n){if(!n)return h;var t,r,e=n.scale[0],o=n.scale[1],i=n.translate[0],u=n.translate[1];return function(n,f){f||(t=r=0);var c=Math.round((n[0]-i)/e),a=Math.round((n[1]-u)/o);n[0]=c-t,n[1]=a-r,t=c,r=a}}function e(n,t){for(var r,e=n.length,o=e-t;o<--e;)r=n[o],n[o++]=n[e],n[e]=r}function o(n,t){for(var r=0,e=n.length;r<e;){var o=r+e>>>1;n[o]<t?r=o+1:e=o}return r}function i(n,t){var r={type:"Feature",id:t.id,properties:t.properties||{},geometry:u(n,t)};return null==t.id&&delete r.id,r}function u(n,r){function o(n,t){t.length&&t.pop();for(var r,o=l[n<0?~n:n],i=0,u=o.length;i<u;++i)t.push(r=o[i].slice()),s(r,i);n<0&&e(t,u)}function i(n){return n=n.slice(),s(n,0),n}function u(n){for(var t=[],r=0,e=n.length;r<e;++r)o(n[r],t);return t.length<2&&t.push(t[0].slice()),t}function f(n){for(var t=u(n);t.length<4;)t.push(t[0].slice());return t}function c(n){return n.map(f)}function a(n){var t=n.type;return"GeometryCollection"===t?{type:t,geometries:n.geometries.map(a)}:t in h?{type:t,coordinates:h[t](n)}:null}var s=t(n.transform),l=n.arcs,h={Point:function(n){return i(n.coordinates)},MultiPoint:function(n){return n.coordinates.map(i)},LineString:function(n){return u(n.arcs)},MultiLineString:function(n){return n.arcs.map(u)},Polygon:function(n){return c(n.arcs)},MultiPolygon:function(n){return n.arcs.map(c)}};return a(r)}function f(n,t,r){function e(n){var t=n<0?~n:n;(a[t]||(a[t]=[])).push({i:n,g:c})}function o(n){n.forEach(e)}function i(n){n.forEach(o)}function u(n){"GeometryCollection"===n.type?n.geometries.forEach(u):n.type in s&&(c=n,s[n.type](n.arcs))}var f=[];if(arguments.length>1){var c,a=[],s={LineString:o,MultiLineString:i,Polygon:i,MultiPolygon:function(n){n.forEach(i)}};u(t),a.forEach(arguments.length<3?function(n){f.push(n[0].i)}:function(n){r(n[0].g,n[n.length-1].g)&&f.push(n[0].i)})}else for(var l=0,h=n.arcs.length;l<h;++l)f.push(l);return{type:"MultiLineString",arcs:v(n,f)}}function c(n){var t=n[0],r=n[1],e=n[2];return Math.abs((t[0]-e[0])*(r[1]-t[1])-(t[0]-r[0])*(e[1]-t[1]))}function a(n){for(var t,r=-1,e=n.length,o=n[e-1],i=0;++r<e;)t=o,o=n[r],i+=t[0]*o[1]-t[1]*o[0];return i/2}function s(n,t){function r(n){n.forEach(function(t){t.forEach(function(t){(o[t=t<0?~t:t]||(o[t]=[])).push(n)})}),i.push(n)}function e(t){return Math.abs(a(u(n,{type:"Polygon",arcs:[t]}).coordinates[0]))}var o={},i=[],f=[];return t.forEach(function(n){"Polygon"===n.type?r(n.arcs):"MultiPolygon"===n.type&&n.arcs.forEach(r)}),i.forEach(function(n){if(!n._){var t=[],r=[n];for(n._=1,f.push(t);n=r.pop();)t.push(n),n.forEach(function(n){n.forEach(function(n){o[n<0?~n:n].forEach(function(n){n._||(n._=1,r.push(n))})})})}}),i.forEach(function(n){delete n._}),{type:"MultiPolygon",arcs:f.map(function(t){var r,i=[];if(t.forEach(function(n){n.forEach(function(n){n.forEach(function(n){o[n<0?~n:n].length<2&&i.push(n)})})}),i=v(n,i),(r=i.length)>1)for(var u,f,c=1,a=e(i[0]);c<r;++c)(u=e(i[c]))>a&&(f=i[0],i[0]=i[c],i[c]=f,a=u);return i})}}function l(n,t){return n[1][2]-t[1][2]}var h=function(){},p=function(n,t){return"GeometryCollection"===t.type?{type:"FeatureCollection",features:t.geometries.map(function(t){return i(n,t)})}:i(n,t)},v=function(n,t){function r(t){var r,e=n.arcs[t<0?~t:t],o=e[0];return n.transform?(r=[0,0],e.forEach(function(n){r[0]+=n[0],r[1]+=n[1]})):r=e[e.length-1],t<0?[r,o]:[o,r]}function e(n,t){for(var r in n){var e=n[r];delete t[e.start],delete e.start,delete e.end,e.forEach(function(n){o[n<0?~n:n]=1}),f.push(e)}}var o={},i={},u={},f=[],c=-1;return t.forEach(function(r,e){var o,i=n.arcs[r<0?~r:r];i.length<3&&!i[1][0]&&!i[1][1]&&(o=t[++c],t[c]=r,t[e]=o)}),t.forEach(function(n){var t,e,o=r(n),f=o[0],c=o[1];if(t=u[f])if(delete u[t.end],t.push(n),t.end=c,e=i[c]){delete i[e.start];var a=e===t?t:t.concat(e);i[a.start=t.start]=u[a.end=e.end]=a}else i[t.start]=u[t.end]=t;else if(t=i[c])if(delete i[t.start],t.unshift(n),t.start=f,e=u[f]){delete u[e.end];var s=e===t?t:e.concat(t);i[s.start=e.start]=u[s.end=t.end]=s}else i[t.start]=u[t.end]=t;else t=[n],i[t.start=f]=u[t.end=c]=t}),e(u,i),e(i,u),t.forEach(function(n){o[n<0?~n:n]||f.push([n])}),f},g=function(n){return u(n,f.apply(this,arguments))},d=function(n){return u(n,s.apply(this,arguments))},y=function(n){function t(n,t){n.forEach(function(n){n<0&&(n=~n);var r=i[n];r?r.push(t):i[n]=[t]})}function r(n,r){n.forEach(function(n){t(n,r)})}function e(n,t){"GeometryCollection"===n.type?n.geometries.forEach(function(n){e(n,t)}):n.type in f&&f[n.type](n.arcs,t)}var i={},u=n.map(function(){return[]}),f={LineString:t,MultiLineString:r,Polygon:r,MultiPolygon:function(n,t){n.forEach(function(n){r(n,t)})}};n.forEach(e);for(var c in i)for(var a=i[c],s=a.length,l=0;l<s;++l)for(var h=l+1;h<s;++h){var p,v=a[l],g=a[h];(p=u[v])[c=o(p,g)]!==g&&p.splice(c,0,g),(p=u[g])[c=o(p,v)]!==v&&p.splice(c,0,v)}return u},m=function(){function n(n,t){for(;t>0;){var r=(t+1>>1)-1,o=e[r];if(l(n,o)>=0)break;e[o._=t]=o,e[n._=t=r]=n}}function t(n,t){for(;;){var r=t+1<<1,i=r-1,u=t,f=e[u];if(i<o&&l(e[i],f)<0&&(f=e[u=i]),r<o&&l(e[r],f)<0&&(f=e[u=r]),u===t)break;e[f._=t]=f,e[n._=t=u]=n}}var r={},e=[],o=0;return r.push=function(t){return n(e[t._=o]=t,o++),o},r.pop=function(){if(!(o<=0)){var n,r=e[0];return--o>0&&(n=e[o],t(e[n._=0]=n,0)),r}},r.remove=function(r){var i,u=r._;if(e[u]===r)return u!==--o&&(i=e[o],(l(i,r)<0?n:t)(e[i._=u]=i,u)),u},r},E=function(n,e){function o(n){f.remove(n),n[1][2]=e(n),f.push(n)}var i=t(n.transform),u=r(n.transform),f=m();return null==e&&(e=c),n.arcs.forEach(function(n){var t,r,c,a,s=[],l=0;for(r=0,c=n.length;r<c;++r)a=n[r],i(n[r]=[a[0],a[1],1/0],r);for(r=1,c=n.length-1;r<c;++r)t=n.slice(r-1,r+2),t[1][2]=e(t),s.push(t),f.push(t);for(r=0,c=s.length;r<c;++r)t=s[r],t.previous=s[r-1],t.next=s[r+1];for(;t=f.pop();){var h=t.previous,p=t.next;t[1][2]<l?t[1][2]=l:l=t[1][2],h&&(h.next=p,h[2]=t[2],o(h)),p&&(p.previous=h,p[0]=t[0],o(p))}n.forEach(u)}),n};n.mesh=g,n.meshArcs=f,n.merge=d,n.mergeArcs=s,n.feature=p,n.neighbors=y,n.presimplify=E,Object.defineProperty(n,"__esModule",{value:!0})});

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
    var formatNumber = d3.format("$,");

    var xAxis = d3.svg.axis()
        .orient("top")
        .ticks(0);

    var yAxis = d3.svg.axis()
        .orient("left")
        .ticks(0);

    var tip = d3.tip()
        .attr("class", "d3-tip")
        .offset([-10, 0])
        .html(function(d) {
          return "<b>"+ "@@ CFDA Title Here @@" + "</b>" + "<br>"
          + "2106 Grant award: " + "<b>" +formatNumber(100000) + "</b>" +"<br>"
          + "Number of full-time staff: "+ "<b>" + 1234 + "</b>" +"<br>"
          + "Number of part-time staff: "+ "<b>" + 867 + "</b>" + "<br>"
          + "Grant $s per individual: "+ "<b>" +formatNumber(9999) + "</b>" +"<br>"
          + "<b>" + "CFDA description here... "+ "</b>";
        });

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

    var svg = d3.select("#panel_matrix").append("svg")
        .attr("width", matrix_width + margin.left + margin.right)
        .attr("height", matrix_height + margin.top + margin.bottom)
        .style("margin-left", -margin.left/2.5 + "px")
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var projection = d3.geo.albersUsa()
               .translate([map_width/1.5, map_height/1.1])    // translate to center of screen
               .scale([500]);          // scale things down so see entire US ---1455

    // Define path generator
    var path = d3.geo.path()               // path generator that will convert GeoJSON to SVG paths
             .projection(projection);  // tell path generator to use albersUsa projection

    svg.append("g")
        .classed("x axis", true)
        .attr("transform", "translate(0,0)")
        .call(xAxis)
      .append("text")
        .classed("label", true)
        .attr("x", matrix_width/2)
        .attr("y", -80)
        .style("text-anchor", "middle")
        .text("Homeless Population Categories");

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
        .text("CFDA Programs");

    var svg_1 = d3.select("#panel_map")
        .append("svg")
        .attr("width", map_width + margin.left + margin.right)
        .attr("height", map_height + margin.top + margin.bottom);

    var svg_2 = d3.select("#panel_info")
        .append("svg")
        .attr("width", info_width + margin.left + margin.right)
        .attr("height", info_height + margin.top + margin.bottom);

    svg.append("rect")
        .attr("class", "background")
        .attr("width", matrix_width)
        .attr("height", matrix_height)
        .style("stroke","#FFF")
        .style("stroke-width","1px");

    var numrows = 15;
    var numcols = 10;

  //Dummy Data *****************************
    var matrix = new Array(numrows);
    for (var i = 0; i < numrows; i++) {
      matrix[i] = new Array(numcols);
      for (var j = 0; j < numcols; j++) {
        matrix[i][j] = Math.random()*2 - 1;
      }
    }
  //****************************************

    var x = d3.scale.ordinal()
        .domain(d3.range(numcols))
        .rangeBands([0, matrix_width]);

    var y = d3.scale.ordinal()
        .domain(d3.range(numrows))
        .rangeBands([0, matrix_height]);

    var rowLabels = new Array(numrows);
    for (var i = 0; i < numrows; i++) {
      rowLabels[i] = "Row "+(i+1);
    }

    var columnLabels = new Array(numcols);
    for (var i = 0; i < numcols; i++) {
      columnLabels[i] = "Column "+(i+1);
    }

  console.log("x: ",x.rangeBand());
  console.log("y: ",y.rangeBand());
  console.log("rowLabels: ",rowLabels);
  console.log("columnLabels: ",columnLabels);

    var colorMap = d3.scale.linear()
        .domain([-1, 0, 1])
        .range(["red", "white", "blue"]);

    svg.call(tip);

    var row = svg.selectAll(".row")
        .data(matrix)
      .enter().append("g")
        .attr("class", "row")
        .attr("transform", function(d, i) { return "translate(0," + y(i) + ")"; });

    row.selectAll(".cell")
        .data(function(d) { return d; })
      .enter().append("rect")
        .attr("class", "cell")
        .attr("x", function(d, i) { return x(i); })
        .attr("width", x.rangeBand())
        .attr("height", y.rangeBand())
        .attr("rx",20)
        .on("mouseover", tip.show)
        .on("mouseout", tip.hide);;

  /*  row.append("line")
        .attr("x2", matrix);*/

    row.append("text")
        .attr("x", -10)
        .attr("y", y.rangeBand() / 2)
        .attr("dy", ".32em")
        .attr("text-anchor", "end")
        .text(function(d, i) { return rowLabels[i]; });

    var column = svg.selectAll(".column")
        .data(columnLabels)
      .enter().append("g")
        .attr("class", "column")
        .attr("transform", function(d, i) { return "translate(" + (x(i)-15) + ")rotate(-45)"; });

    column.append("text")
        .attr("x", 30)
        .attr("y", y.rangeBand() / 2)
        .attr("dy", ".32em")
        .attr("text-anchor", "start")
        .text(function(d, i) { return d; });

    row.selectAll(".cell")
        .data(function(d, i) { return matrix[i]; })
        .style("fill","#FFF")
        .style("stroke-width","1px")
        .style("stroke","#006599");


    d3.json("/data-lab-data/us-states.json", function(json) {

      var g = svg_1.append("g");

      g.selectAll("path")
        .data(json.features)
        .enter()
        .append("path")
        .attr("d", path)
        .style("stroke", "#fff")
        .style("stroke-width", "1")
        .style("fill","#414b57");

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
                                .style("left", (d3.event.pageX) + "px")
                                .style("top", (d3.event.pageY) + "px")
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
