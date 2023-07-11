let app = Vue.createApp({
    data() {
        return {
            divShow: true,
            divShowNew: true,
        }
    },
    methods: {
        showHide() {
            this.divShow = !this.divShow;
        },
        showHideNew() {
            this.divShowNew = !this.divShowNew;
        },
    },
});

app.mount("#app");