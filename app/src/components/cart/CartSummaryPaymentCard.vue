<template>
   <div class="cart-item__card">
      <div class="card__details">
         <h3>Cart total: ${{cartTotal.toFixed(2)}}</h3>
         <button class="details__button" @click="thankYou">Pay by credit card</button>
      </div>
   </div>
</template>

<script>
export default {
   computed: {
      cartTotal() {
         return this.$store.getters.cartTotal
      }
   },
   methods: {
      thankYou() {
         alert('Thank you for ordering <3');
      }
   }
};
</script>

<style>
.card__total-price {
   font-size: var(--font-medium-mobile);
}

.card__pay-button {
   font-size: var(--font-small-mobile);
   color: black;
}

.details__button {
   padding: 0.9rem;
   border: 0.3rem solid var(--dark-aqua);
   border-radius: 1.5rem;
   margin: var(--sizing-medium) 0 0 0;
   font-size: var(--font-small-mobile);
   color: black;
   background: var(--light-aqua);
}

@media screen and (min-width: 968px) {
   .card__total-price {
      font-size: var(--font-medium-desktop);
   }

   .card__pay-button {
      font-size: var(--font-small-desktop);
   }

   .details__button {
      padding: 0.9rem 4rem;
      font-size: var(--font-small-desktop);
   }
}
</style>