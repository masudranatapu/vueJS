let app = Vue.createApp({
    data() {
        return {
            textColor: "red",
            bgColor: "green",
            h: "200px",
            w: "200px",
        };
    },
});

app.mount("#app");