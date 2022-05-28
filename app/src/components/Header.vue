<template>
	<header>
		<RouterLink to="/">
			<h1 class="header__logo">RETRO STORE</h1>
		</RouterLink>
		<RouterLink to="cart">
			<img src="/images/shopping_cart.svg" alt="">
		</RouterLink>
	</header>
</template>

<style>
	header {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin: var(--sizing-big) 0;
	}

	header a {
		text-decoration: none;
		color: black;
	}

	.header__logo {
		font-size: var(--font-header-mobile);
		font-family: 'Wonder Pleasure';
		color: var(--dark-purple);
	}

	@media screen and (min-width: 968px) {
		.header__logo {
			font-size: var(--font-header-desktop);
		}
	}
</style>