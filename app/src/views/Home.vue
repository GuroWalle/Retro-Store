<template>
  <div>
    <ProductDescriptionDrawer 
      :product = "product" 
      :active = "active.product_drawer" 
      v-on:close-product-drawer = "closeProductDrawer()"/>
  </div>

  <div>
    <ProductSummery 
      :product = "product"
      v-on:view-product = "viewProduct($event)" />
  </div>
</template>

<script>
  import ProductSummery from "../components/products/ProductSummery.vue";
import ProductDescriptionDrawer from "../components/products/ProductDescriptionDrawer.vue";

  export default {
    data() {
      return {
        product: null,
        active: {
          product_drawer: false
        }
      };
    },

    components: {
    ProductSummery,
    ProductDescriptionDrawer
},

    methods: {
      viewProduct(product) {
        this.product = product;
        this.active.product_drawer = true;
        console.log(this.product);
      },

      closeProductDrawer() {
        this.active.product_drawer = false;
      }
    },
  };
</script>


