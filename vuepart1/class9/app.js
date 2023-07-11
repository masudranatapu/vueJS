let app = new Vue({
    el : "#app",
    data : {
        f_name : "Masud Rana Tapu",
        name: false,
        f_age : "20 years",
        age : false,
    },
    methods: {
        myname() {
            this.name = !this.name;
        },
        myage() {
            this.age = !this.age;
        }
    },
});



let app2 = new Vue({
    el: "#app2",
    data : {
        names : ["masud", "rana", "tapu"],
        // furtes : []
    }
});



let app3 = new Vue({
    el: "#app3",
    data: {
        showInfo: true,
        users : [
            {name:"Masud", age:20 , department: "Science"},
            {name:"Rana", age:21 , department: "Art"},
            {name:"Tapu", age:22 , department: "Commerse"},
            {name:"Shuvo", age:23 , department: "Math"},
            {name:"Ahsan", age:24 , department: "Bangla"},
            {name:"Limon", age:25 , department: "Socility"},
            {name:"Musa", age:26, department: "Science"},
            {name:"Hridoy", age:27 , department: "Science"},
        ]
    },
    // methods: {
    //     showHide() {
    //         this.showInfo = !this.showInfo;
    //     },
    // }
});