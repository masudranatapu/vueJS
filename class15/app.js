Vue.component('myname', {
    data() {
        return {
            name : "Masud Rana Tapu",
        }
    },
    template: `<h1>{{name}}</h1>`
});
Vue.component('workplase', {
    data() {
        return {
            work: "Jr Laravel Developer at Arobil Ltd",
        }
    },
    template: `<h3>{{work}}</h3>`
});



new Vue({
    el : "#app",
});

