<template>
  <GeoJSON />
</template>

<script>
import * as d3 from "d3"
import GeoJSON from './components/GeoJSON.vue';

export default {
  name: 'App',
  created() {
    d3.json('./africa.geo.json')
      .then(data => {
        // console.log(data);
        let svg = d3.select("svg")

        var projection = d3.geoEqualEarth() // https://github.com/d3/d3-geo/blob/master/README.md#geoEqualEarth
        // Lab try different projections

        svg.append("text")
          .attr('id', 'hover');

        svg.selectAll("path")
          .data(data.features)
          .enter()
              .append("path") // Lab: create component for feature path instead
              .attr("d", d3.geoPath(projection))
              .attr("stroke", "black")
              .attr("fill", "lightgray")
              .attr("fill-opacity", 0.5)
              .on('mouseover', function() {
                  // Lab: refactor with arrow
                  d3.select(this).attr("fill", "lightgreen");
                  d3.select('#hover').attr("fill-opacity", 1);
                  // Lab: label path with population in Mio.
              })
              .on('mouseout', function() {
                  d3.select(this).attr("fill", "lightgray");
                  d3.select('#hover').attr("fill-opacity", 0);
              })
              .on('mousemove', function(event) {
                  d3.select("#hover")
                    .attr('x', function() { return d3.pointer(event)[0] + 20; })
                    .attr('y', function() { return d3.pointer(event)[1] + 10; });
              });

      });
  },
  components: {
    GeoJSON
  },
  data() {
    return {
    }
  }
}
</script>

<style>
  body {
    padding: 0;
    margin: 0;
  }
  svg {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  text {
      transition: fill-opacity 0.5s;
      font-size: 12pt;
  }
</style>
