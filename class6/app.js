let app = new Vue({
    el: "#app",
    data: {
        position: {
            x: 0,
            y: 0,
        },
    },
    methods: {
        cursorMouse(event) {
            this.position.x = event.offsetX;
            this.position.y = event.offsetY;
        },
    },
});