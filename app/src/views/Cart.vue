<template>
  <div class="cart">
    <h1>Your Cart</h1>
  </div>

  <CartItemCard 
    v-for="product in products"
    :key="product._id"
    :product="product"
  />

  <CartSummaryPaymentCard />

</template>

<script>
import CartItemCard from '../components/cart/CartItemCard.vue'
import CartSummaryPaymentCard from '../components/cart/CartSummaryPaymentCard.vue'

export default {
  components: {
    CartItemCard,
    CartSummaryPaymentCard
  },
  computed: {
    /* The getter from store called CartItems checks the state of cart. If there are products
       in the cart they become the products in the v-for */
    products() {
      return this.$store.getters.cartItems
    }
  }
}
</script>

<style>
.cart h1 {
  text-align: center;
}
</style>