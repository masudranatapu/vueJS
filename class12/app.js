const app = new Vue({
    el: "#app",
    data: {
        myname: "Masud Rana Tapu",
    },
    methods: {
        changeN() {
            app1.nameChange = "Upat Annr Dusam";
        }
    },
});

const app1 = new Vue({
    el : "#app1",
    data: {
        nameChange: "Masud Rana Tapu",
    },
    methods: {
        againName() {
            this.nameChange = "Masud Rana Tapu";
        },
    },
});
