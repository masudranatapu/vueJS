let app = new Vue({
    el : "#app",
    data: {
        newF: "Mausd Rana Tapu",
        oldF: "I want to tell something",
        formData: {
            nameValue: "",
            emailValue: "",
        },
        formData2: {
            nameValue1: "",
            emailValue2: "",
        },
        a: 0,
        b: 0,
        total: 20,
    },
    methods: {
        updateChnageThis(betst, event) {
            this.oldF = betst;
            console.log(event);
        },
        getFormSubitData() {
            this.formData2.nameValue1 = this.formData.nameValue;
            this.formData2.emailValue2 = this.formData.emailValue;
            console.log(this.formData);
        },
        // totalToA() {
        //     console.log("Add A");
        //     return this.total + this.a;
        // },
        // totalToB() {
        //     console.log("Add B");
        //     return this.total + this.b;
        // }
    },
    computed: {
        totalToA() {
            return this.total + this.a;
        },
        totalToB() {
            return this.total + this.b;
        }
    },
    
});
