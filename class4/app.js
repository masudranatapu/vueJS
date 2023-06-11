let app = new Vue({
    el : "#app",
    data : {
        sallary : 20,
    },
});


let app2 = new Vue({
    el : "#app2",
    data: {
        gdp : 2000,
    },
    methods : {
        gdpgrowthplus() {
            this.gdp += 50;
        },
        gdpgrowthminus() {
            this.gdp -= 50;
        },
    },
});

let app3 = new Vue({
    el: "#app3",
    data : {
        earn_doller: 300,
    },
    methods : {
        total_earn_doller(newTotal) {
            this.earn_doller += newTotal;
        }
    }
});