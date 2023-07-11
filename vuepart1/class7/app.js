let app  = new Vue({
    el : "#app",
    data : {
        full_name : "Masud Rana",
        full_address : "Dhaka, Bangladesh",
    },
    methods: {
        changeName(event) {
            this.full_name = event.target.value;
            console.log(event.target.value);
            // alert("2");
        },
        changeAddress(e){
            this.full_address = e.target.value;
        } 
    },
});

let app2 = new Vue({
    el: "#app2",
    data: {
        email : "masudranatapu@gmail.com",
        s_password : "Password",
    },
    methods : {
        d_email(e){
            this.email = e.target.value;
        },
        d_password(e) {
            this.s_password = e.target.value;
        },
    },
});