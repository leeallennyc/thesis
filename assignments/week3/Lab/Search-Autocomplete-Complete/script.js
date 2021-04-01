// load JSON file with list of US states
// Basic Vue.js Demo:
// attach Vue to <h1> Tag and insert text into HTML based on dataset
// const welcomeMsg = new Vue({
//     // the context element
//     el: 'h1',
//     // data to attach: variable stateCount
//     data: {
//         stateCount: states.length
//     }
// });

// Vue.js Form Autocomplete

const App = {
    data() {
        return {
            // this is the value of the search field. auto-updated by Vue
            search: '',
            // a list of states for the suggestions. By default: all states in dataset
            // states: [],
            filteredStates: this.states,
            // a toggle variable to show/hide suggestions
            statesVisible: false
        }
    },
    watch: {
        // whenever input changes, this function will run
        // see also  v-model="search"  in the HTML !
        search: function () {
            // update filteredStates variable
            // states.filter produces a new array based on var states.
            this.filteredStates = this.states.filter(state => {
                // .filter() iterates over all elements in array and tests them for a condition
                // in this case: does the current search term (this.search) match the first letter(s) of any respective state?
                // values that return true are added to filteredStates.
                return state.toLowerCase().slice(0, this.search.length) === this.search.toLocaleLowerCase();
            });
            
            // If the search term matches exactly one state, we don't need to display suggestions.
            if(this.filteredStates.length === 1 && this.filteredStates[0].toLowerCase() === this.search.toLocaleLowerCase()) {
                this.filteredStates = [];
            }
        }
    },
    
    // we can define additional functions that we can then use in the Vue.js HTML
    methods: {
        // show suggestions. See HTML for trigger!
        showStates: function() {
            this.statesVisible = true;
        },
        
        // hide suggestions. See HTML for trigger!
        hideStates: function() {
            let that = this;
            // we only hide suggestions after 250ms. This is to ensure the hide doesn't interfere with the click event
            // because setTimeout overwrites the this variable, we create a reference to Vue's this in a new variable named that.
            setTimeout(function() {
                that.statesVisible = false;
            }, 250);
        },
        
        // when we click a state button, we fill its value in the search field and empty the suggestions list
        complete: function(state) {
            this.search = state;
            this.filteredStates = [];
        }
    },
    mounted() {
        // see vue lifecyle diagram: https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
        fetch('states.json')
            .then(data => data.json())
            .then(states => {
                this.states = states;
                this.filteredStates = states;
            });
    }
}

Vue.createApp(App).mount('#app');