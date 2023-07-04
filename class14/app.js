let app = new Vue({
	data: {
		n_company: "Arobil It Ltd",
	},
	template : `<h1>Our company name is {{ n_company }}</h1>`
});


setTimeout(()=>{
	app.$mount('#app');
}, 2000);



let apptop = new Vue({
	data : {
		amitumi : "Ki vai",
	},
});

apptop.$mount('#apptop');