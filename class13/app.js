let app = new Vue({
    data : {
        myname: "Masud Rana Tapu",
    },
    template: `<h2>My name is {{ myname }}</h2>`
});

setTimeout(()=>{
    app.$mount('#app');
}, 1000);


let app1 = new Vue({
    data: {
        loadtime: "after 2s letter",
    },
    template: `<h2> This is load time is {{ loadtime }}</h2>`
});

setTimeout(()=> {
    app1.$mount('#app1');
}, 200);

let loadTemp = `<h1>{{ mytemp }}</h1>`;

let html = new Vue({
    data : {
        mytemp: "Hurra ! my template is loading successfully loaded",
    },
    template: loadTemp
});

setTimeout(() => {
    html.$mount('#app2');
}, 3000);