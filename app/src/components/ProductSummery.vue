<template>
  <div class="body">
    <div v-if="loading">Waiting for sanity</div>
    <div v-else>
      <div class="body__products" v-for="product in result" :key="product._id">
        <img :src="product.cover.asset.url" alt="" />
        <div class="products__text">
          <p>" {{ product.title }} "</p>
          <p>{{ product.price }} Kr</p>

        </div>
        <button class="body__button" @click="seeMore">See more</button>
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
      };
    },

    async created() {
      const query = `
        *[_type == $type] | order(title asc) [0..5] {
          title,
          price,
          _id,
          cover {
            asset->{path,url}
          },
        }`;

      const params = { type: "vinyls" };

      this.result = await sanity.fetch(query, params);
      this.loading = false;
    },

  };
</script>

<style>
  .body {
    background: rgb(178, 235, 178);
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: var(--font-medium-mobile);
  }

  .body__products {
    width: 20rem;
    margin-bottom: var(--sizing-big);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .products__text {
     margin: var(--sizing-medium);
  }

  .body__button {
     height: 3.5rem;
     border: 0.3rem solid black;
     border-radius: 1.5rem;
  }

  @media screen and (min-width: 968px) {
   .body {
      font-size: var(--font-medium-desktop);
   }

   .body__products {
      width: 30rem;
   }

   .body__button {
     height: 4rem;
     border: 0.4rem solid black;
   }
  }
</style>