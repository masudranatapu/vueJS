let app = Vue.createApp({
    data() {
        return {
            names: [],
            addNmae: "",
        };
    },
    methods: {
        addNameHandel() {
            this.names.push(this.addNmae);
            this.addNmae = "";
        },
        removedItemName(index) {
            this.names.splice(index, 1);
        },
    }
});


app.mount("#app");