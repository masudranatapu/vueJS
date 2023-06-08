let app = new Vue({
    el : "#app",
    data : {
        name : "Masud Rana Tapu",
        age : 23,
    },
});


let app2 = new Vue({
    el : "#app2",
    data : {
        users : [
            { f_name : "Masud" },
            { f_name : "Limon" },
            { f_name : "Ahsan" },
            { f_name : "Musa" },
            { f_name : "Hridoy" },
            { f_name : "Juboraj" },
            { f_name : "Picchi Hriody" },
            { f_name : "Ontor masud" },
            { f_name : "Pabel" },
            { f_name : "Rakibul" },
            { f_name : "Rakib" },
            { f_name : "Shuvo" },
            { f_name : "Halima" },
            { f_name : "Mahfuja" },
            { f_name : "Mim" },
        ]
    }
})


let app3 = new Vue({
    el : "#app3",
    data : {
        d_name : "Tumi ami",
    }
});



let app4 = new Vue({
    el : "#app4",
    data : {
        view_hide : false,
    }
});

let app5 = new Vue({
    el : "#app5",
    data : {
        view_show : true,
    }
});

let app6 = new Vue({
    el: "#app6",
    data : {
        y_name : "Hill",
    },
    methods : {
        y_age() {
            return 30;
        },
        y_this() {
            return `${this.y_name}`;
        }
    }
});


let app8 = new Vue({
    el : "#app8",
    data : {
        j_name : "Welcome to vue js world",
        n_name : "this is number of ",
    },
    methods : {
        w_note() {
            return `${this.j_name}`;
        },
        n_note () {
            return "This is good for us";
        },
        next_number(my_number) {
            return `${this.n_name} ${my_number}`;
        },
    },
});



let app9 = new Vue({
    el      : "#app9",
    data    : {
        possiton_value : "PHP Laravel Developer",
        company : "Software Engeneer",
    },
    methods : {
        possiton_key() {
            return "Software Engeneer";
        },
        company_name() {
            return `${this.possiton_value} for ${this.company}`;
        },
        company_age(value) {
            return `This company establish in ${value} years ago. `;
        }
    }
});