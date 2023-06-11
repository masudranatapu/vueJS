let app = new Vue({
    el: "#app",
    data : {
        log : {
            x: 0,
            y: 0,
        }
    },
    methods: {
        clickMe(event) {
            console.log(event);
        },
        move(event) {
            this.log.x = event.offsetX;
            this.log.y = event.offsetY;
        }
    }
});

let app2 = new Vue({
    el: "#app2",
    data: {
        new_X : 0,
        new_Y : 0,
    },
    methods : {
        move_tow(event) {
            this.new_Y = event.offsetY;
            this.new_X = event.offsetX;
        },
    },
});