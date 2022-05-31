<template>
   <footer>
      <h2>RETRO</h2>
      <h2>STORE</h2>
   </footer>
</template>

<style>
footer {
   width: 100%;
   height: 20rem;
   padding: 3rem 2rem;
   background: var(--light-purple);
   font-family: 'Wonder Pleasure';
   font-size: var(--font-header-mobile);
}

footer h2:nth-child(2) {
   padding: 0 var(--sizing-big);
}

@media screen and (min-width: 968px) {
   footer {
      font-size: var(--font-header-desktop);
   }
}

</style>
