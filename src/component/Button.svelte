<script>
	export let variant = 'primary';
	export let btnText = '';
	export let btnLink = '#';
</script>

<button class={variant === 'primary' ? 'btn-1' : 'btn-2'}
	><a href={btnLink}
		><span class={variant === 'primary' ? 'btn-text-1' : 'btn-text-2'}>{btnText}</span></a
	></button
>
