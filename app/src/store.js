/* Makes a key in localstorage called 'cart'. Cart is also an array */
function uptadeLocalStorage(cart) {
	localStorage.setItem('cart', JSON.stringify(cart))
}

export default {
	state: {
		cart: []
	},
	getters: {
		/* Used in ProductDescriptionDrawer.vue
			Calculates the quantity of only this product using _id */
		productQuantity: state => product => {
			const item = state.cart.find(index => index._id === product._id)

			if (item) { 
				return item.quantity 
			} else { 
				return null }
		},

		/* Used in Cart.vue
			Checks the the state of cart (if there are any products) */
		cartItems: state => {
			return state.cart
		},

		/* Used in CartSummaryPaymentCard.vue
		 	Calculates the price of all the products in the cart. Reduce: Ia a callback function 
			that multiplies one products price by multipling the quantity and price, does this 
			over and over until all the products have one total cost. Then adds all the prices
			together as one final total cost */
		cartTotal: state => {
			return state.cart.reduce((a, b) => a + (b.price * b.quantity), 0)
		}
	},

	mutations: {
		/* Used in ProductDescriptionDrawer.vue
		 	Finds the item that has the same _id as the product _id. If the item is found then 
			add to the quantity, else if the item already is in cart[], then make a copy of 
			it (...product), quantity: 1 because you only add one at a time. Then update local storage */
		addToCart(state, product) {
			let item = state.cart.find(item => item._id === product._id)

			if (item) {
				item.quantity++
			} else {
				state.cart.push({ ...product, quantity: 1 })
			}
			uptadeLocalStorage(state.cart)
		},

		/* Used in ProductDescriptionDrawer.vue
			Finds the item in the cart that has the same _id as the product _id. If item is found
			in cart, then (if the quantity is bigger then 1) subtract. Else if the quantity is 1 or
			less, filter all the items in the cart. The items that stays in the cart are only items
			with a different _id then the one we are removing. Then update local storage */
		removeFromCart(state, product) {
			let item = state.cart.find(item => item._id === product._id)

			if (item) {
				if (item.quantity > 1) {
					item.quantity--
				} else {
					state.cart = state.cart.filter(item => item._id != product._id)
				}
			}
			uptadeLocalStorage(state.cart)
		},

		/* Used in App.vue
			When opening the site or refreshing, it gets the key from local storage called 'cart'.
			(this only exists if there are products in the cart). If cart exists then parse the content */
		updateCartFromLocalStorage(state) {
			const cart = localStorage.getItem('cart')
			if (cart) {
				state.cart = JSON.parse(cart)
			}
		}
	},
	actions: {
	},
	modules: {
	}
};