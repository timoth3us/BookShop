const app = Vue.createApp({
    data(){
        return{
            siteLogo: './assets/images/bookshop-logo.png',
            search: '',
            /*books: [
                {id: 1234, title: 'Python for Beginnners', author: 'Jay-Z', quantity: 0, image: './assets/images/python.jpeg', price: 49.99},
                {id: 4321, title: 'Kochen Lernen leicht gemacht', author: 'Angela Merkel', quantity: 0, image: './assets/images/kochen.jpeg', price: 23.99}
            ],*/
			books: [],
            showCart: false
        }
    },
    computed: {
        cart() {
            return this.books.filter(book => parseInt(book.quantity) > 0);
        },
        totalQuantity() {
            return this.books.reduce((total, book) => total + parseInt(book.quantity),0);
        },
        filteredList() {
            return this.books.filter(book => {
              	return book.title.toLowerCase().includes(this.search.toLowerCase())
            })
        },
        total() {
            return Math.round(this.books.reduce((total, book) => total + parseInt(book.quantity) * parseFloat(book.price), 0) * 100) / 100
        }
    },
    methods: {
        updateCart(book, updateType) {      
        	for (let i = 0; i < this.books.length; i++) {
            	if (this.books[i].id === book.id) {
              		if (updateType === 'subtract') {
                		if (this.books[i].quantity !== 0) {
                  			this.books[i].quantity--;
							this.books[i].stock++;
                		}
              		} else {
						if (this.books[i].stock > 0){
							this.books[i].quantity++;
							this.books[i].stock--;
						}else{
							return;
						}
              		}
              		break;
            	}
          	}
        },
        fetchData(){
          	fetch("data.json")
          	.then(response => response.json())
          	.then((data) => {
            	this.books = data.products;
          	})
       	}
    },
	mounted () {
		this.fetchData();
	}
});
