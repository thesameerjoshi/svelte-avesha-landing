<script>
	import Arrow from '../assets/arrow.svg';
	import Point from './Point.svelte';
	export let title;
	export let image;
	export let description;
	export let link;
	export let points;
	export let variant;
</script>

<div class="card-wrapper">
	<div class="card-head-wrapper">
		<div class="card-head">
			<div class="card-image">
				<div class="card-image-wrapper">
					<img src={image} alt="KubeSlice" />
				</div>
				<p class="card-title">{title}</p>
			</div>
			<p class="card-subtitle">
				{description}
			</p>
		</div>
		<div class="card-point-wrapper">
			{#each points as point}
				<Point {variant} text={point.point} link={point.link} />
			{/each}
		</div>
	</div>
	<div class="card-link">
		<a class="small-link" href={link} rel="noreferrer">Let’s get started </a>
		<img src={Arrow} alt="Arrow" />
	</div>
</div>

<style>
	@import './styles/Card.css';
</style>
