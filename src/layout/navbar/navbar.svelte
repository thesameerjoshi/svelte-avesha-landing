<script>
	import AveshaLogo from '@/assets/logo/AveshaDoc.svg';
	import Button from '@/component/Button.svelte';
</script>

<header>
	<div class="brand-logo">
		<a href="https://kubeslice.io">
			<img src={AveshaLogo} alt="Avesha Logo" />
		</a>
	</div>
	<div class="nav-button-group">
		<Button variant="primary" btnText="Contact Us" btnLink="https://avesha.io/contact-us" />
		<Button variant="secondary" btnText="Free Trial" btnLink="https://community.aveshalabs.io/" />
	</div>
</header>

<style>
	@import './navbar.css';
</style>
