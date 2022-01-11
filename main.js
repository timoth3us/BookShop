const app = Vue.createApp({
    data(){
        return{
            cart: [],
            siteLogo: './assets/images/bookshop-logo.png',
            cartLogo: './assets/images/shopping-cart.png',
            search: '',
            books: [
                {id: 1234, title: 'Python for Beginnners', author: 'Jay-Z', quantity: 20, image: './assets/images/python.jpeg', price: 49.99},
                {id: 4321, title: 'Kochen Lernen leicht gemacht', author: 'Angela Merkel', quantity: 4, image: './assets/images/kochen.jpeg', price: 23.99}
            ]
        }
    },
    methods: {
        addToCart(id){
            this.cart.push(id)
        },
        removeFromCart(id){
            const index = this.cart.indexOf(id)
                if (index > -1) {
                    this.cart.splice(index, 1)
                }
        }
    }
})
