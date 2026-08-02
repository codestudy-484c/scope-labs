<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="min-h-screen p-4 md:p-8 flex flex-col max-w-4xl mx-auto">
    {@render children()}
</div>
