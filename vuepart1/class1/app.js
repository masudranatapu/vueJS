let app = new Vue({
    el: "#app",
    data: {
        name: "Hi Welcome to vue world",
        age : '20',
    }
});

let app2 = new Vue({
    el: '#app-2',
    data : {
        message : 'You loaded this page on ' + new Date().toLocaleString(),
    },
});

let app3 = new Vue({
    el: '#app-3',
    data : {
        title: "now uou can see me ",
        seen : false,
    },
});

let app4 = new Vue({
    el: '#app-4',
    data : {
        title: "now uou can see me ",
        hide : true,
    },
});

let app5 = new Vue({
    el: "#app5",
    data : {
        users: [
            {user_name : "masud"},
            {user_name : "rana"},
            {user_name : "tapu"},
            {user_name : "safwan"},
            {user_name : "mostafijur"},
            {user_name : "rahaman"},
            {user_name : "pencil"},
        ],
    }
});

let app6 = new Vue({
    el : "#app6",
    data : {
        msg : "Click Me",
    },
    methods: {
        reverseMessage: function() {
            this.msg = this.msg.split('').reverse().join('');
        },
    },
});

let app7 = new Vue({
    el : "#app7",
    data : {
        msg2 : "Hell",
    },
});


let app8 = new Vue({
    el : "#app8",
    data: {
        fullname: "Masud Rana Tapu",
    },
    methods : {
        myage() {
            return 35;
        },
        myname() {
            return `${this.fullname}`;
            // return this.fullname;
        }
    },
});