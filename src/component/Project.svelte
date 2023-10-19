<script>
	import Kubeie from '/assets/Kubie.svg';
	import OpenSource from '/assets/OpenSource.svg';
	import Arrow from '/assets/arrow.svg';
	import Point from './Point.svelte';
	import data from '@/data/product.json';
	const isDataEmpty = Object.keys(data).length === 0;
</script>

<div class="project-points-wrapper">
	<div class="opensource">
		<div class="project-image">
			<div class="project-image-wrapper">
				<img src={Kubeie} alt="Kubie" />
			</div>
			<div class="project-image-typography">
				<img src={OpenSource} alt="OpenSource" />
				<p class="kubeslice">KubeSlice</p>
			</div>
		</div>
		<p class="card-subtitle">
			This section provides a high-level introduction and understanding of Kubeslice,
		</p>
		<div class="card-link">
			<a class="small-link" href="https://kubeslice.io" rel="noreferrer"
				>Let’s get started <img src={Arrow} alt="Arrow" /></a
			>
		</div>
	</div>
	{#if !isDataEmpty}
		<div class="project-point">
			<div class="project-card-point-wrapper">
				{#each data.points as point}
					<Point text={point.point} link={point.link} />
				{/each}
			</div>
			<div class="project-card-point-wrapper">
				{#each data.points as point}
					<Point text={point.point} link={point.link} />
				{/each}
			</div>
		</div>
	{/if}
</div>
