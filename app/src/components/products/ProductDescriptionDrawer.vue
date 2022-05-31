<template>
   <div class="product-description__drawer" :class="{show: active}">
      <!--  When clicking the x-button 'close-product-drawer' gets emited. In Home.vue it gets picked up by a v-on, which then again runs a method (closeProductDrawer)   -->
      <button class="drawer-close" @click="$emit('close-product-drawer')">
         X
      </button>
      <div v-if="product" class="product-description__details">
         <img :src="product.cover.asset.url" alt="" />
         <div class="details__container">
            <h3 class="details__title">" {{product.title}} "</h3>
            <p class="details__description">{{product.description}}</p>
            <h3 class="details__price">$ {{product.price.toFixed(2)}}</h3>
            
            <div v-if="productTotal" class="details__total-cost">
               <h3>Products in cart:</h3>
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
.product-description__drawer {
   position: fixed;
   display: flex;
   flex-direction: column;
   align-items: center;
   top: 0;
   left: -105vw;
   width: 100vw;
   height: 100vh;
   background: var(--background);
   transition: left 0.5s;
   overflow-y: scroll;
}

.show {
   left: 0;
}

.drawer-close {
   margin: var(--sizing-small) 0;
   font-size: var(--font-header-mobile);
   color: black;
}

.product-description__details {
   width: 19rem;
}


.details__title {
   margin: var(--sizing-small) 0 0 0;
   font-size: var(--font-big-mobile);
}

.details__description {
   margin: 0 0 var(--sizing-small) 0;
   font-size: var(--font-small-mobile);
}

.details__price {
   margin: var(--sizing-medium) 0;
   font-size: var(--font-medium-mobile);
}

.details__total-cost {
   display: flex;
   flex-direction: column;
   align-items: center;
   font-size: var(--font-small-mobile);
}

.details__button-container {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   font-size: var(--font-medium-mobile);
}

.details__button-container button {
   color: black;
   width: 8.5rem;
   padding: 0.5rem;
   border: 0.4rem solid var(--dark-orange);
   border-radius: 1.5rem;
   background: var(--light-orange);
}

@media screen and (min-width: 968px) {
   .drawer-close {
      margin: var(--sizing-medium) 0;
      font-size: var(--font-header-desktop);
   }

   .product-description__details {
      height: 32rem;
      width: 80rem;
      display: flex;
      flex-direction: row;
   }

   .details__container {
      display: flex;
      flex-direction: column;
      padding: 5rem;
   }

   .details__title {
      margin: var(--sizing-small) 0;
      font-size: var(--font-big-desktop);
   }

   .details__description {
      margin: 0 0 var(--sizing-small) 0;
      font-size: var(--font-small-desktop);
   }

   .details__price {
      margin: var(--sizing-medium) 0;
      font-size: var(--font-medium-desktop);
   }

   .details__total-cost {
      margin: var(--sizing-medium) 0;
      font-size: var(--font-small-desktop);
   }

   .details__button-container {
      margin: var(--sizing-big) 0;
      font-size: var(--font-medium-desktop);
   }

   .details__button-container button {
      width: 15rem;
   }
}
</style>