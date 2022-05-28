<template>
   <div class="product-description" :class="{show: active}" @click="$emit('close-product-drawer')">
      <div class="product-description__drawer" :class="{showa: active}">
         <button class="drawer-close" @click="$emit('close-product-drawer')">
            X
         </button>
         <div v-if="product" class="product-description__details">
            <img :src="product.cover.asset.url" alt="" />
            <h3 class="details__title">" {{product.title}} "</h3>
            <p class="details__description">{{product.description}}</p>
            <h3 class="details__price">$ {{product.price.toFixed(2)}}</h3>

            <div v-if="productTotal" class="details__total-cost">
               <h3>Products in cart</h3>
               <h4>{{productTotal}} </h4>
            </div>

            <div class="details__button-container">
               <button class="button-remove" @click="removeFromCart">Remove</button>
               <button class="button-add" @click="addToCart">Add</button>
            </div>
         </div>
      </div>
   </div>

</template>

<script>
   export default {
      props: ['product', 'active'],

      methods: {
         addToCart() {
            this.$store.commit('addToCart', this.product)
         },

         removeFromCart() {
            this.$store.commit('removeFromCart', this.product)
         }
      },

      computed: {
         productTotal() {
            return this.$store.getters.productQuantity(this.product)
         }
      }
   }
</script>


<style>

   .product-description {
      width: 100%;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      background: pink;
      z-index: 100;
      display: none;
   }

   .product-description__drawer {
       width: 100vw;
      height: 100vh;
      background: white;
      position: fixed;
      top: 0;
      left: -105vw;
      padding: 5rem;
      transition: left 0.5s;
      z-index: 101;
      overflow-y: scroll;
   }

   .show {
      display: block;
   }

   .showa {
      left: 0;
   }

   .drawer-close {
      font-size: var(--font-header-mobile);
      color: black;
   }

   .product-description__details {
      width: 20rem;
   }

   .details__title {
      font-size: var(--font-big-mobile);
   }

   .details__description {
      font-size: var(--font-small-mobile);
   }

   .details__price {
      font-size: var(--font-medium-mobile);
   }

   .details__total-cost {
      font-size: var(--font-medium-mobile);
   }

   .details__button-container {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      font-size: var(--font-medium-mobile);
   }

   .details__button-container button {
      color: black;
   }

   /*
   .product-description {
      width: 100%;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.400);
      z-index: 100;
      display: none;
      transition: 0.5s;
   }

   .show {
      display: block;
   }

   .product-description__drawer {
      width: 100vw;
      height: 100vh;
      background: white;
      position: fixed;
      top: 0;
      left: -105vw;
      padding: 5rem;
      transition: left 0.5s;
      z-index: 101;
      overflow-y: scroll;
   }

   .show {
      left: 0;
   }

   .drawer__close {
      font-size: var(--font-medium-mobile);
      padding: 2rem;
      border-radius: 5px;
      right: 10px;
      border: 2px solid red;
      color: yellow;
      width: 15px;
      float: right;
   }

   .drawer__close:hover {
      background: lightblue;
   }

   .product__details {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 30rem;
   }

   .drawer__product--description {
      padding: 1rem;
   }

   .button--container button {
      width: 10rem;
      padding: 10px;
      border-radius: 15px;
      margin: 0 5px 50px 5px;
   }
   */

</style>