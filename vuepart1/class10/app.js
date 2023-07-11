let app = new Vue({
    el : "#app",
    data : {
        cars: ["Yoyota", "Volbo", "Toyta"],
    
        infos: {
            name: "Masud",
            age: 20,
            address: "Mohakhli, Dhaka, Bangladesh",
        },
        names: "Masud Rana",
        x: 0,
        y: 0,
    },
    methods: {
        update() {
            setTimeout(()=>{
                this.names = "Masud Rana Tapu sucessfully update";
            }, 2000)
            // setTimeout(()=>{
            //     location.reload();
            // }, 3000);
        },
        updateName() {
            this.names = "My name is masud rana tapu and it is update now";
        },

        // getcoord : function(event) {
        //     this.x = event.clientX;
        //     this.y = event.clientY;
        // },

        getcoord(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },

        formSubmit(event) {
            event.preventDefault();
            console.log('form submit');
        }
    }
});
