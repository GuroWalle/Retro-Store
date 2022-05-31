<template>
  <div class="product-summery">
    <div v-if="loading">Waiting for sanity</div>
    <div v-else>
      <div class="product-summery__products" v-for="product in result" :key="product._id">
        <div class="products__image-background">
          <img :src="product.cover.asset.url" alt="" />
        </div>

        <div class="products__text">
          <p>" {{ product.title }} "</p>
          <p>$ {{ product.price.toFixed(2) }}</p>
        </div>
        <!--  When clicked,'view-product' is emited. In Home.vue it gets picked up by a v-on, which then again runs a method (viewProduct)   -->
        <button class="product-summery__button" @click="$emit('view-product', product)">View product</button>
      </div>
    </div>
  </div>
</template>

<script>
import sanityClient from "@sanity/client";

const sanity = sanityClient({
  projectId: "zvo47lzc",
  dataset: "production",
  apiVersion: "2022-04-06", // opprettelses dato / sist oppdatert
  useCdn: false, // localhost = false -- netlify = true
});

export default {
  data() {
      return {
          loading: true,
          result: null,

          product: null,
          active: false
      };
  },
  async created() {
      const query = `
      *[_type == $type] | order(title asc) {
        title,
        price,
        description,
        _id,
        cover {
          asset->{url}
        },
      }`;
      const params = { type: "vinyls" };
      this.result = await sanity.fetch(query, params);
      this.loading = false;
  },
};
</script>

<style>
.product-summery {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: var(--font-medium-mobile);
}

.product-summery__products {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: var(--sizing-huge);
}

.products__image-background {
  width: 22rem;
  height: 21rem;
  background: var(--light-purple);
}

.products__image-background img {
  max-width: 20rem;
  width: 100%;
}

.products__text {
    margin: var(--sizing-medium);
}

.product-summery__button {
    height: 3.5rem;
    border: 0.4rem solid var(--dark-green);
    background: var(--light-green);
    border-radius: 1.5rem;
    color: black;
}

@media screen and (min-width: 968px) {
  .product-summery {
    font-size: var(--font-medium-desktop);
  }

  .products__image-background {
    width: 32rem;
    height: 31rem;
    background: var(--light-purple);
  }

  .products__image-background img {
    max-width: 30rem;
    width: 100%;
  }
}
</style>