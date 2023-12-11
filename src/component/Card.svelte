<script>
	import Point from './Point.svelte';
	import Arrow from '/assets/arrow.svg';
	export let title = '';
	export let image = {
		url: '#',
		alt: ''
	};
	export let description = '';
	export let link = '#';
	export let points = [];
	export let variant = 'orange';
</script>

<div class="card-wrapper">
	<div class="card-head">
		<div class="card-image">
			<div class="card-image-wrapper">
				<img src={image.url} alt={image.alt} />
			</div>
			<p class="card-title">{title}</p>
		</div>
		<p class="card-subtitle">
			{description}
		</p>
	</div>
	<div class="card-link-wrapper">
		<div class="card-point-wrapper">
			{#each points as point}
				<Point {variant} text={point.point} link={point.link} />
			{/each}
		</div>

		<div class="card-link">
			<a class="small-link" target="_blank" href={link} rel="noreferrer">
				Let’s get started
				<img src={Arrow} alt="Arrow" />
			</a>
		</div>

	</div>
</div>

<style>
	@import './styles/Card.css';
</style>
