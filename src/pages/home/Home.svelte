<script>
	import Card from '@/component/Card.svelte';
	import Button from '@/component/Button.svelte';
	import Project from '@/component/Project.svelte';
	import data from '@/data/product.json';
	const isDataEmpty = Object.keys(data).length === 0;
</script>

<main class="container">
	<div class="title-wrapper">
		<h1 class="title">Welcome to Avesha’s Platform Documentation</h1>
		<p class="subtitle">
			Here you will find all the information you need about Avesha’s Platform and you can also ask
			for a
			<a href="https://kubeslice.io/contact-us" target="_blank"><span class="link">support</span></a
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
					This section provides a high-level introduction and understanding of Kubeslice. Something
					about Kubeslice Opensource.
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
