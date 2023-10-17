<script>
	import Home from '@/pages/home/Home.svelte';
	import Navbar from '@/layout/navbar/navbar.svelte';
	import Footer from '@/layout/footer/footer.svelte';
</script>

<section class="main-container">
	<Navbar />
	<Home />
</section>
<Footer />

<style>
	@import './layout.css';
</style>
