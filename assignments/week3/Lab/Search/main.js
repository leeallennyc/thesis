/* global Vue, d3 */

const App = {
  data() {
    return {
      states: ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],
      search: '',
      filteredStates: this.states
    }
  },
  watch: {
    search: function () {
      this.filteredStates = this.states.filter(state =>{
        return state.toLowerCase().slice(0, this.search.length) === this.search.toLowerCase();
      })
      console.log(this.filteredStates);
    }
  },
  computed: {

  },
  methods: {

  }
}

Vue.createApp(App).mount('#app');
