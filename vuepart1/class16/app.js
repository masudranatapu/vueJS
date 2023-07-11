Vue.component('mytag', {
    data(){
        return {
            emotion: "I love you prio",
        }
    },
    template: `<h1>Hi I am masud. and I wnat to say somthing that {{emotion}}</h1>`,
});

let myapp = new Vue();

setTimeout(()=>{
    myapp.$mount('#app');
}, 2000);