let app = Vue.createApp({
    data(){
        return{
            msg:"Masud",
            age:20,
            work:"PHP Laravel Developr",
            total: 0,
            newTotal: 10,
        };
    },
    methods: {
        nowTime() {
            return Date();
        },
        nowTimeOne() {
            return Date();
        },
        changeNmae(events) {
            this.msg = "Masud Rana Tapu";
            console.log(events);
        },
        totalPlus(events){
            this.total ++ ;
            // this.total = this.total +1 ;
            console.log(events);
        },
        totalMinus(events){
            // this.total = this.total - 1 ;
            this.total -- ;
            console.log(events);
        },
    }
});

app.mount("#app");