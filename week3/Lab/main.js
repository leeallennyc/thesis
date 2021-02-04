/* global Vue, d3 */



const App = {
  data() {
    return {
      bars: [
          { x: 0, y: 3 },
          { x: 1, y: 4 },
          { x: 2, y: 5 }
        ],
      inputNumber: 0,
      width: 200,
      height: 500,
    }
  },
  methods: {
      addBar() {
          const value = +this.inputNumber;
          this.bars.push({ x: this.bars.length, y: value })
      }
  },
  computed: {
      xScale() {
          return d3.scaleBand()
            .paddingInner(0.4)
            .domain(this.bars.map(d => d.x))
            .range([0, this.width])
      },
      addxAxis() {
          return d3.axisBottom()
            .xScale()
      },
      yScale() {
          return d3.scaleLinear()
            .domain([0, d3.max(this.bars, d => d.y)])
            .range([0, this.height])
      },
      addyAxis() {
          return d3.axisLeft()
            .domain([0, d3.max(this.bars, d=> d.y)])
            .range([0, this.height])
      }
  }
}

Vue.createApp(App).mount('#app');
