<script>
	import Card from '@/component/Card.svelte';
	import Button from '@/component/Button.svelte';
	import Project from '@/component/Project.svelte';
	import data from '@/data/product.json';
	const isDataEmpty = Object.keys(data).length === 0;
</script>

<main class="container">
	<div class="title-wrapper">
		<h1 class="title">Welcome to Avesha Documentation</h1>
		<p class="subtitle">
			Explore our guides for more insights on Avesha products. You can also contact our
			<a href="https://kubeslice.io/contact-us" target="_blank"><span class="link">Support</span></a
			>.
		</p>
	</div>
	{#if !isDataEmpty}
		<div class="card-main-wrapper">
			{#each data.cardData as card}
				<Card
					title={card.title}
					image={card.image}
					description={card.description}
					link={card.link}
					points={card.points}
					variant={card.variant}
				/>
			{/each}
		</div>
	{/if}
	<div class="project-wrapper">
		<div class="project-heading">
			<div class="project-typography">
				<p class="project-title">OpenSource Projects</p>
				<p class="subtitle">
					Avesha has an opensource edition of KubeSlice, which can be used to run multi-cluster
					applications.
				</p>
			</div>
			<div class="button-group">
				<Button
					target="_blank"
					variant="primary"
					btnText="Start Contributing"
					btnLink="https://github.com/kubeslice"
				/>
				<Button
					target="_blank"
					variant="secondary"
					btnText="Join Community"
					btnLink="https://communityinviter.com/apps/kubernetes/community"
				/>
			</div>
			<Project />
		</div>
	</div>
</main>
