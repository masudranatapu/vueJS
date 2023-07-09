let app = Vue.createApp({
    data() {
        return{
            fullName: "Masud Rana Tapu",
        };
    },
    methods: {
        handelKeyup(e){
            console.log(e.target.value);
            console.log(e);
            this.fullName = e.target.value;
        }
    },
});


app.mount("#app");



const app2 = Vue.createApp({
    data(){
        return{

        };
    },
    methods: {
        handelCard(e){
            console.log(e);
            console.log("Card Click");
        },
        handelButton(e){
            console.log(e);
            console.log("Button Click");
        },
    },
});

app2.mount("#app2");