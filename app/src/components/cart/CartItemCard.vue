<template>
   <div class="cart-item__card">
      <div class="card__header">
         <h3>" {{product.title}} "</h3>
         <h4>In cart {{product.quantity}}</h4>
         <h4>Total cost {{item_cost.toFixed(2)}}</h4>
      </div>
   </div>
</template>

<script>
export default {
   props: ['product'],
   computed: {
      item_cost() {
         return this.product.price * this.product.quantity
      }
   }
}
</script>