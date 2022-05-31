<!-- Gotten help from:  https://www.youtube.com/watch?v=oWt4jYThJCo&list=PLgiAmmJALlgzvpogJwhFytLmh6tI-TQSN&index=12  -->

<template>
  <div>
    <!--  (is active when loading) when 'view more' button is clicked the ProductDescriptionDrawer component opens/ active = true  -->
    <ProductSummery 
      :product = "product"
      v-on:view-product = "viewProduct($event)" />
  </div>

  <div>
    <!--  (not active when loading) becomes active when 'view more' button is clicked   -->
    <ProductDescriptionDrawer 
      :product = "product" 
      :active = "active.product_drawer" 
      v-on:close-product-drawer = "closeProductDrawer()"/>
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
    /*  opens the ProductDescriptionDrawer component active = true  */
    viewProduct(product) {
      this.product = product;
      this.active.product_drawer = true;
      console.log(this.product);
    },
    /*  closes the ProductDescriptionDrawer component active = false  */
    closeProductDrawer() {
      this.active.product_drawer = false;
    }
  },
};
</script>


