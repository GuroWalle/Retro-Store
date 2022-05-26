<template>
	<header>
		<p class="header__link">Menu</p>
		<RouterLink to="/">
			<h1 class="header__logo">STORE</h1>
		</RouterLink>
		<RouterLink to="cart">
			<p class="header__link">Cart</p>
		</RouterLink>
	</header>
</template>

<style>
	header {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin: var(--sizing-medium) 0;
		background: pink;
	}

	header a {
		text-decoration: none;
		color: black;
	}

	.header__logo {
		font-size: var(--font-header-mobile);
		font-family: 'Wonder Pleasure';
		color: red;
	}

	.header__link {
		font-size: var(--font-small-mobile);
	}

	@media screen and (min-width: 968px) {
		.header__logo {
			font-size: var(--font-header-desktop);
			color: blue;
		}

		.header__link {
			font-size: var(--font-medium-desktop);
		}
	}
</style>