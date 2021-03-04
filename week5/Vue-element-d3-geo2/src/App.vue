<template>
<div class='App'>
  <div class="header">
    <div class="legend">
      Legend Here
    </div>
  </div>
  <el-divider></el-divider>
  <div class="maps">
    <el-card>
      <svg :height="height" :width="width">
        <g class="paths" @mouseleave="onHover(null)">
          <path
            v-for="feature in map.features"
            :key="feature.properties.geounit"
            :d="geoPath(feature)"
            @mouseenter="onHover(feature.properties)"
          ></path>
        </g>
        <text id="hover" :x="50" :y="50"></text>
      </svg>
    </el-card>
    <el-card>
      <div id="mapbox-container"></div>
    </el-card>
  </div>
</div>
</template>

<script>
import * as d3 from "d3";
import mapboxgl from "mapbox-gl";
import map from './africa.geo.json'

export default {
  name: 'App',
  data() {
    return {
      map: {
        ...map,
        features: map.features.map(f => ({
          ...f,
          properties: {
            ...f.properties,
            centroid: d3.geoCentroid(f)
          }
        }))
      },
      width: 400,
      height: 500,
      mb: null
    }
  },
  mounted() {
    // https://dev.to/hmintoh/how-to-mapbox-with-vue-js-2a34
    mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_TOKEN;

    this.mb = new mapboxgl.Map({
      container: "mapbox-container",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [18, 4],
      zoom: 2,
      maxBounds: [
        [-18, -40],
        [53, 40],
      ],
    });

    this.mb.on('load', () => {
      this.mb.addSource("countryPaths", {
        type: "geojson",
        data: map
      });

      this.mb.addLayer({
        id: 'countries',
        type: 'fill',
        source: 'countryPaths',
        paint: {
          "fill-opacity": 0.5,
        }
      })
    })
  },
  computed: {
    projection() {
      return d3.geoEqualEarth()
        .center([18, 4])
        .scale(320)
        .translate([this.width/2, this.height/2]);
    },
    geoPath() {
      return d3.geoPath(this.projection);
    }
  },
  methods: {
    onHover(nextHover) {
      if (nextHover === null) {
        d3.select('#hover').text('')
        return;
      }
      const projectedCentroid = this.projection(nextHover.centroid)
      d3.select('#hover').text(nextHover.admin)
        .attr('x', projectedCentroid[0])
        .attr('y', projectedCentroid[1])
    }
  }
}
</script>

<style>
  body {
    padding: 0;
    margin: 0;
  }
  .App {
    display: flex;
    flex-direction: column;
  }
  .header {
    padding: 10px;
    display: flex;
  }
  .legend {
    margin: 10px;
  }
  .maps {
    display: flex;
    justify-content: space-around;
  }
  #mapbox-container {
    height: 500px;
    width: 400px;
  }
  text {
    transition: fill-opacity 0.5s;
    font-size: 12pt;
    text-anchor: middle;
    pointer-events: none;
  }
  path {
    fill-opacity: 0.2;
    stroke: black;
  }
  path:hover {
    fill-opacity: 0.5;
  }
</style>
