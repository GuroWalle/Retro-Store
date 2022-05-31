<template>
   <div class="cart-item__card">
      <h3>Cart total: ${{cartTotal.toFixed(2)}}</h3>
      <button class="view-product">Pay by credit card</button>
   </div>
</template>

<script>
export default {
    computed: {
      cartTotal() {
         return this.$store.getters.cartTotal
      }
   }
}
</script>