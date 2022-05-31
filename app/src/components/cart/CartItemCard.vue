<template>
   <div class="cart-item__card">
      <div class="card__details">
         <h3>" {{product.title}} "</h3>
         <h4>In cart: {{product.quantity}}</h4>
         <h4>Total cost: {{itemCost.toFixed(2)}}</h4>
      </div>   
   </div>
</template>

<script>
export default {
   props: ['product'],
   computed: {
      itemCost() {
         return this.product.price * this.product.quantity
      }
   }
};
</script>

<style>
.cart-item__card {
   width: 90%;
   margin: 10% 5%;
   border: 0.4rem solid var(--dark-pink);
   border-radius: 1.5rem;
   background: var(--light-pink);
}

.card__details {
   padding: 1rem 1.5rem;
   font-size: var(--font-medium-mobile);
}

.card__details h4 {
   font-size: var(--font-small-mobile);
   margin: 0.5rem;
}

@media screen and (min-width: 968px) {
   .cart-item__card {
      margin: 5% 5%;
   }

   .card__details {
      font-size: var(--font-medium-desktop);
   }

   .card__details h4 {
      font-size: var(--font-small-desktop);
   }
}
</style>