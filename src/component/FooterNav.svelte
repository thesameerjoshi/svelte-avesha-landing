<script>
	export let navData;
</script>

<div class="footer-links-card">
	<p class="footer-card-head">{navData.title}</p>
	<div class="footer-card-link">
		{#each navData.items as link}
			<a href={link.link} target="_blank">
				<p class="footer-card-link-text">{link.title}</p>
			</a>
		{/each}
	</div>
</div>
