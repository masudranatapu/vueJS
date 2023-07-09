let app = Vue.createApp({
    data() {
        return {
            myactiveClass: "red",
        };
    },
    methods: {
        getColorChange(myclass){
            this.myactiveClass = myclass;
        },
    }
});

app.mount("#app");