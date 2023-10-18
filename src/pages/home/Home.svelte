<script>
	import Card from '@/component/Card.svelte';
	import { cards } from '@/pages/home/constant.js';
	import Button from '@/component/Button.svelte';
	import Project from '@/component/Project.svelte';
</script>

<main class="container">
	<div class="title-wrapper">
		<h1 class="title">Welcome to Avesha’s Platform Documentation</h1>
		<p class="subtitle">
			Here you will find all the information you need about Avesaha’s Platform and you can also ask
			for a
			<a href="https://kubeslice.io/contact-us" target="_blank"><span class="link">support</span></a
			>.
		</p>
	</div>
	<div class="card-main-wrapper">
		{#each cards as card}
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
	<div class="project-wrapper">
		<div class="project-heading">
			<div class="project-typography">
				<p class="project-title">OpenSource Projects</p>
				<p class="subtitle">
					This section provides a high-level introduction and understanding of Kubeslice,This
					section prion and understanding of Kubeslice,
				</p>
			</div>
			<div class="button-group">
				<Button
					target="_blank"
					variant="primary"
					btnText="START CONTRIBUTING"
					btnLink="https://github.com/kubeslice/docs"
				/>
				<Button
					target="_blank"
					variant="secondary"
					btnText="JOIN COMMUNITY"
					btnLink="https://docs.kubeslice.io"
				/>
			</div>
			<Project />
		</div>
	</div>
</main>
