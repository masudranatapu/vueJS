let app = Vue.createApp({
    data(){
        return {
            g_value: "",
            d_value: "",
            s_value: ""
        };
    },
    methods: {
        // inputValue(e) {
        //     console.log(e.target.value);
        //     this.g_value = e.target.value;
        // },
        doubbleHendel(){
            this.d_value = this.g_value*2;
        },
        squireHendel(){
            this.s_value = this.g_value * this.g_value;
        },
        resetHendel(){
            this.d_value = "";
            this.s_value = "";
            this.g_value = "";
        },
    }
});


app.mount("#app");