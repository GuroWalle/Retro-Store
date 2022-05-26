<template>
   <div class="drawer__background" :class="{show: active}" @click="$emit('close-product-drawer')">
      <div class="drawer" :class="{show: active}">
         <button class="drawer--close" @click="$emit('close-product-drawer')">
            X
         </button>
         <div v-if="product" class="product__details">
            <h3 class="drawer__product--title">title: "{{product.title}}"</h3>
            <p class="drawer__product--description">description: {{product.description}}</p>
            <h3 class="drawer__product--price">price: {{product.price}} kr</h3>

            <div v-if="productTotal" class="drawer__total-cost">
               <h3>In cart</h3>
               <h4>{{productTotal}} kr</h4>
            </div>

            <div class="button--container">
               <button class="button-remove">Remove</button>
               <button class="button-add">Add</button>
            </div>
         </div>
      </div>
   </div>

</template>

<script>
   export default {
      props: ['product', 'active'],
      computed: {
         productTotal() {
            return 400
         }
      }
   }
</script>


<style>
   .drawer__background {
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

   .drawer {
      width: 95vw;
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

</style>