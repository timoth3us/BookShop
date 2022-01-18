const app = Vue.createApp({
    data(){
        return{
            counts: [],
            order: [],
            siteLogo: './assets/images/bookshop-logo.png',
            cartLogo: './assets/images/shopping-cart.png',
            search: '',
            books: [
                {id: 1234, title: 'Python for Beginnners', author: 'Jay-Z', quantity: 0, image: './assets/images/python.jpeg', price: 49.99},
                {id: 4321, title: 'Kochen Lernen leicht gemacht', author: 'Angela Merkel', quantity: 0, image: './assets/images/kochen.jpeg', price: 23.99}
            ],
            showCart: false
        }
    },
    computed: {
        cart(){
            return this.books.filter(book => book.quantity > 0);
        },
        totalQuantity(){
            return this.books.reduce((total, product) => total + product.quantity,0);
        }
    },
    methods: {
        updateCart(book, updateType) {      
            for (let i = 0; i < this.books.length; i++) {
              if (this.books[i].id === book.id) {
                if (updateType === 'subtract') {
                  if (this.books[i].quantity !== 0) {
                    this.books[i].quantity--;
                  }
                } else {
                  this.books[i].quantity++;
                }
                break;
              }
            }
          }
    }
});
