<script>
	import Card from '../../component/Card.svelte';
	import { cards } from './constant.js';
	import Button from '../../component/Button.svelte';
	import Project from '../../component/Project.svelte';
</script>

<div class="title-wrapper">
	<h1 class="title">Welcome to Avesha’s Platform Documentation</h1>
	<p class="subtitle">
		Here you will find all the information you need about <a href="https://kubeslice.io"
			><span class="link">kubeslice</span></a
		>
		and you can also ask for a
		<a href="https://kubeslice.io/support"><span class="link">support</span></a>.
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
				This section provides a high-level introduction and understanding of Kubeslice,This section
				prion and understanding of Kubeslice,
			</p>
		</div>
		<div class="button-group">
			<Button variant="primary" btnText="START CONTRIBUTING" btnLink="https://docs.kubeslice.io" />
			<Button variant="secondary" btnText="JOIN COMMUNITY" btnLink="https://docs.kubeslice.io" />
		</div>
		<Project />
	</div>
</div>
