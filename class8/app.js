let app = new Vue({
    el : "#app",
    data : {
        name_na : "Click",
    },
    methods :{
        name() {
            console.log(this.name_na);
        },
    }
});