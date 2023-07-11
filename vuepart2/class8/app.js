let app = Vue.createApp({
	data() {
		return {
			users 	: ['Arif', 'Mokaddes'],
			addUser : '',
			products: [],
			newProduct: '',
		};
	},
	methods: {
		addMoreUser() {
			if(this.addUser) {
				this.users.push(this.addUser);
				this.addUser = "";
			}else {
				alert('Please add new user name');
			}
		},
		removedUser(index) {
			this.users.splice(index, 1);
		},
		addProduct(events) {
			events.preventDefault();
			if(this.newProduct) {
				this.products.push(this.newProduct);
				this.newProduct = '';
			}else {
				alert('Please add new product name');
			}
		},
		removedProduct(i) {
			this.products.splice(i, 1);
		}
	},
});


app.mount('#app');