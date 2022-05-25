import Home from "./views/Home.vue";
import Cart from "./components/Cart.vue";
import Product from "./components/Product.vue";

export default [
	{ name: "home", path: "/", component: Home },
	{ name: "cart", path: "/cart", component: Cart },
	{ name: "product", path: "/product", component: Product }

];
